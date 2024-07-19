import { Container, MarginBetweenButtons, LogoImage } from './styles'
import { Image } from 'react-native'
import React from 'react'
import { ButtonAdd } from '@components/Button'

import LogoImg from '@assets/Vanmoosh.png'

export function MainScreen() {
  return (
    <Container>

        <LogoImage source={LogoImg}/>

          <ButtonAdd title='Entrar ' type='primary'/>
            <MarginBetweenButtons/>
          <ButtonAdd title='Primeiro Acesso' type='primary'/>
    </Container>
  )
}