import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Container } from './style'

import { AddChild } from '../AddChild'

import { OptionsCard } from '@components/OptionsCard'
import { HeaderSettings } from '@components/SettingsHeaderSchool'
import { ResponsibleNavigatorRoutesProps } from '@routes/Routes_Responsible/app.routes'
import { getAuth, signOut } from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import app from '@libs/firebase/config'

export function Account_Responsible() {

  const navigation = useNavigation<ResponsibleNavigatorRoutesProps>()

  function navigateToAccount() {
    navigation.navigate('EditAccountResponsible')
  }


  async function handleOnClickSignout() {

    const auth = getAuth(app)

    try {
      await signOut(auth)
      await AsyncStorage.removeItem('@user_storage')
      console.log("Usuário deslogado com sucesso e dados limpos do AsyncStorage!");
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <Container>
        <HeaderSettings />

      <OptionsCard title='Verificar Conta' onPress={navigateToAccount} />
      <OptionsCard title='Sair' onPress={handleOnClickSignout} />
      
    </Container>
  )
}