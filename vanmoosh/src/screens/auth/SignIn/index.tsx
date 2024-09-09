import { 
  Container, 
  BackgroundImage, 
  LogoImage, 
  ViewInputs, 
  MarginBetweenInputs,
  MarginBetweenTexts,
  MarginBottom,
  styles
} from './styles'
import { Text } from 'react-native'
import { TextError } from '../SignUp/styles'
import { StatusBar, Pressable } from 'react-native'
import React from 'react'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { AuthNavigatorRoutesProps } from '@routes/Auth/app.routes'
import { SchoolNavigatorRoutesProps } from '@routes/Routes_School/app.routes'


import { useAuth } from '@hooks/useAuth'
import { User } from 'firebase/auth';


import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { signInWithEmail } from '@libs/firebase/auth'

type FormDataProps = {
  email: string;
  password: string;
};


const signInSchema = yup.object({
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: yup.string().required("Senha é obrigatório").min(6, "Mínimo de 6 caracteres"),
});


import { ButtonAdd } from '@components/Button'

import LogoImg from '@assets/white_vanmoosh.png'
import background from '@assets/background.png'
import { AppError } from '@utils/AppError'
import { Alert } from 'react-native'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
import { AuthContextProvider } from '@contexts/AuthContext'

//  nome das roles, função sign in pode estar dando problema com "user", routes estão dando b.o. (nested navigator 💀)

export function SignIn() {

  const { signIn } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema),
  });

  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation<SchoolNavigatorRoutesProps>()

  async function handleLogin(data: FormDataProps) {
    const { email, password } = data;
    
    try {
      const user = await signIn(email, password);
      const userUID = user.uid;

      const db = getFirestore();
      const userRef = doc(db, 'users', userUID)
      const userDoc = await getDoc(userRef);
      
      
      if (!userDoc.exists()) {
        const userData = userDoc.data();
        const role = userData.role;

        // redirect
        switch (role) {
          case 'driver':
            navigation.navigate('DriverRoutes')
            break;
          case 'school':
            navigation.navigate('SchoolRoutes')
            break;
          case 'responsible':
            navigation.navigate('ResponsibleRoutes')
            break;
          case 'common':
            console.log("common")
            break;
          default:
            break;
        }
      } else {
        console.log('Role não encontrada nesse usuário.')
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Usuário ou senha inválidos')
      
    }

    // navigation.navigate('Home_School')
    
  }

  return ( 
    
    <Container>
      {/* <StatusBar barStyle='light-content' /> */}

        <BackgroundImage 
        source={background} 
        defaultSource={background}
        resizeMode='contain' 

        >   

          
          <LogoImage source={LogoImg} alt='Logo da empresa Vanmoosh' resizeMode='contain' />

          <ViewInputs>
            <Highlight title='Bem-vindo de volta!' subTitle='Faça login para continuar.' />

            <Controller
            control={control}
            name="email"
            render={(
              { field: { onChange, value } } //field é um objeto que contem o onChange, que serve para alterar o valor do input que vem de um componente controlado pelo react-hook-form
            ) => (
              <Input 
                placeholder='E-mail' 
                returnKeyType='done'
                autoCapitalize='none'
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          {errors.email && <TextError>{errors.email.message}</TextError>}

            <MarginBetweenInputs />
            <Controller
            control={control}
            name="password"
            render={(
              { field: { onChange, value } } //field é um objeto que contem o onChange, que serve para alterar o valor do input que vem de um componente controlado pelo react-hook-form
            ) => (
              <Input 
              placeholder='Senha' 
              returnKeyType='done'
              secureTextEntry={true}
                onChangeText={onChange}
                value={value}
              />
            )}
          />

            {errors.password && <TextError>{errors.password.message}</TextError>}

            
            <MarginBetweenInputs />
            <ButtonAdd 
            title='Entrar'
            onPress={handleSubmit(handleLogin)}
            />

            <Pressable
            onPress={() => navigation.goBack()}
            >


            <MarginBetweenTexts />

              <Text style={styles.forgot}>Esqueci minha senha</Text>
            </Pressable>
            
            <MarginBetweenTexts />
            <Text style={styles.notHaveAccount}>Ainda não possui uma conta?</Text>
            <Pressable
            onPress={() => navigation.goBack()}
            >
              <Text style={styles.forgot}>Registre-se</Text>
            </Pressable>
            <MarginBottom />

          </ViewInputs>
          
        </BackgroundImage>
        
    </Container>
    
      
  )
}