import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Container } from './style'

import { AddChild } from '../AddChild'

import { OptionsCard } from '@components/OptionsCard'
import { HeaderSettings } from '@components/SettingsHeaderSchool'


export function Account_Responsible() {

  const navigation = useNavigation()

  function handleOnAddChild() {

    

  }

  return (
    <Container>
        <HeaderSettings />

      <OptionsCard title='Configuração' />
      <OptionsCard title='Editar Informações'/>
      <OptionsCard title='Adicionar filho(a)' onPress={() => {}} />
    </Container>
  )
}