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





import { ButtonAdd } from '@components/Button'

import LogoImg from '@assets/white_vanmoosh.png'
import background from '@assets/background.png'



export function SignUp() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  

  const navigation = useNavigation()

  function handleSignUp(){
    console.log(`Email: ${email} - Senha: ${password} - Nome: ${name}`);
    
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
          <Highlight title='Cadastrar' subTitle='Crie sua conta. ' />
        
          <Input 
            placeholder='Nome Completo' 
            returnKeyType='done'
            onChangeText={setName}
            />
            <MarginBetweenInputs />
            
            <Input 
            placeholder='E-mail' 
            returnKeyType='done'
            autoCapitalize='none'
            onChangeText={setEmail}
            />
            <MarginBetweenInputs />
            <Input 
            placeholder='Senha' 
            returnKeyType='done'
            secureTextEntry={true}
            onChangeText={setPassword}
            
            />

            
            <MarginBetweenInputs />
            <ButtonAdd 
            title='Entrar'
            onPress={() => handleSignUp()}
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