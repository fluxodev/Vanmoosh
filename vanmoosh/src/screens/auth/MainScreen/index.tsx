import { Container, MarginBetweenButtons, Text1, Text2, Text3, Header, BackgroundImage, Footer, MarginBetweenParagraphs, LogoImage } from './styles'
import { Image,  } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ButtonMain } from '@components/ButtonMain'

import backgroundImg from '@assets/background_main.png'
import LogoImg from '@assets/logo.png'

import { AuthNavigatorRoutesProps } from '@routes/Auth/app.routes'

export function MainScreen() {

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  return (
    <Container>

        <BackgroundImage 
        source={backgroundImg} 
        defaultSource={backgroundImg}
        alt='Imagem de fundo com vans estacionadas.'
        >
          <MarginBetweenParagraphs/>
          <Header>
          <LogoImage source={LogoImg} alt='Logo da empresa Vanmoosh' />
          <Text1>Uma parceria pela</Text1>
          <Text2>segurança dos</Text2>
          <Text3>seus filhos.</Text3>
          </Header>
          <Footer>
          <ButtonMain 
            title='Entrar' 
            type='secondary'
            onPress={() => navigation.navigate('SignIn')}
            />
            <MarginBetweenButtons/>
          <ButtonMain title='Primeiro Acesso' type='secondary'
          onPress={() => navigation.navigate('SignUp')}
          />
          </Footer>
        </BackgroundImage>

    </Container>
  )
}