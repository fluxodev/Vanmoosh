import { 
  Container, 
  BackgroundImage, 
  LogoImage, 
  ViewInputs, 
  MarginBetweenInputs,
  MarginBetweenTexts,
  MarginBottom,
  styles,
  TextError,
} from './styles'
import { Text } from 'react-native'
import { StatusBar, Pressable } from 'react-native'
import React from 'react'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
 




import { ButtonAdd } from '@components/Button'

import LogoImg from '@assets/white_vanmoosh.png'
import background from '@assets/background.png'

type FormDataProps = {
  name: string
  email: string
  password: string
}



export function SignUp() {

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>() 
  //control serve para controlar o formulário

  const navigation = useNavigation()

  function handleSignUp(data: FormDataProps) {
    console.log(data)
    
    
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

          <Controller 
          control={control}
          name="name"
          rules={{
            required: 'Nome é obrigatório'
          }}
          render={({field: { onChange, value }}) => ( //field é um objeto que contem o onChange, que serve para alterar o valor do input que vem de um componente controlado pelo react-hook-form
            <Input 
            placeholder='Nome Completo' 
            returnKeyType='done'
            onChangeText={ onChange }
            value={value}
            />
          )}
          />

          {errors.name && <TextError>{errors.name.message}</TextError>}
        
          
            <MarginBetweenInputs />
            <Controller 
          control={control}
          name="email"
          rules={{
            required: 'E-mail é obrigatório',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'E-mail inválido'
            }
          }}
          render={({field: { onChange, value }}) => ( //field é um objeto que contem o onChange, que serve para alterar o valor do input que vem de um componente controlado pelo react-hook-form
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
          rules={{
            required: 'Senha é obrigatório'
          }}
          render={({field: { onChange, value }}) => ( //field é um objeto que contem o onChange, que serve para alterar o valor do input que vem de um componente controlado pelo react-hook-form
            <Input 
            placeholder='Senha' 
            returnKeyType='send'
            secureTextEntry={true}
            onChangeText={onChange}
            value={value}
            onSubmitEditing={handleSubmit(handleSignUp)}
            />
          )}
          />

          {errors.password && <TextError>{errors.password.message}</TextError>}
            
            <MarginBetweenInputs />
            <ButtonAdd 
            title='Entrar'
            onPress={handleSubmit(handleSignUp)}
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