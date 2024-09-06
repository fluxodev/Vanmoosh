import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Container } from './style'

import { AddChild } from '../AddChild'

import { OptionsCard } from '@components/OptionsCard'
import { HeaderSettings } from '@components/SettingsHeaderSchool'
import { ResponsibleNavigatorRoutesProps } from '@routes/Routes_Responsible/app.routes'


export function Account_Responsible() {

  const navigation = useNavigation<ResponsibleNavigatorRoutesProps>()

  function handleOnAddChild() {

    navigation.navigate('addChild')

  }

  return (
    <Container>
        <HeaderSettings />

      <OptionsCard title='Configuração' />
      <OptionsCard title='Editar Informações'/>
      <OptionsCard title='Adicionar filho(a)' onPress={handleOnAddChild} />
    </Container>
  )
}