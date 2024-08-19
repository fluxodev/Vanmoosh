import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Container } from './style'

import { AddChild } from '../AddChild'

import { OptionsCard } from '@components/OptionsCard'
import { HeaderAccount } from '@components/HeaderAccount'

export default function Account_Responsible() {

  return (
    <Container>
        <HeaderAccount
            title='Nome e Sobrenome'
            
        />

      <OptionsCard title='Configuração' />
      <OptionsCard title='Editar Informações'/>
      <OptionsCard title='Adicionar filho(a)' onPress={() => {}} />
    </Container>
  )
}