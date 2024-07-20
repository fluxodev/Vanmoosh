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
import { registerUser } from '@libs/firebase/auth'





import { ButtonAdd } from '@components/Button'

import LogoImg from '@assets/white_vanmoosh.png'
import background from '@assets/background.png'



export function SignUp() {

  

  const navigation = useNavigation()

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
            
            />
            <MarginBetweenInputs />
            
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
            onPress={() => navigation.navigate('NewGroup')}
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