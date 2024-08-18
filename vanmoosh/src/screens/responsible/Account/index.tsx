import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Container } from './style'


import { OptionsCard } from '@components/OptionsCard'
import { SchoolNavigatorRoutesProps } from '@routes/Routes_School/app.routes'
import { HeaderAccount } from '@components/HeaderAccount'
import { UserPhoto } from '@components/UserPhoto'

export default function Account_Responsible() {

  return (
    <Container>
        <HeaderAccount
            title='Nome e Sobrenome'
            
        />

      <OptionsCard title='Configuração' />
      <OptionsCard title='Editar Informações'/>
      <OptionsCard title='Adicionar filho(a)' />
    </Container>
  )
}