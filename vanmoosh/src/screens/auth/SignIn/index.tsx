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
import { StatusBar, Pressable } from 'react-native'
import React from 'react'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { AuthNavigatorRoutesProps } from '@routes/Auth/app.routes'





import { ButtonAdd } from '@components/Button'

import LogoImg from '@assets/white_vanmoosh.png'
import background from '@assets/background.png'



export function SignIn() {
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleLogin(){
    navigation.navigate('Main')
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
            <Input 
            placeholder='E-mail' 
            returnKeyType='done'
            autoCapitalize='none'
            />
            <MarginBetweenInputs />
            <Input 
            placeholder='Senha' 
            returnKeyType='done'
            secureTextEntry={true}
            
            />

            
            <MarginBetweenInputs />
            <ButtonAdd 
            title='Entrar'
            onPress={() => handleLogin()}
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