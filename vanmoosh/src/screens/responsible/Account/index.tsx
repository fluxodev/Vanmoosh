import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Container } from './style'
import { OptionsCard } from '@components/OptionsCard'
import { HeaderSettings } from '@components/SettingsHeaderSchool'
import { ResponsibleNavigatorRoutesProps } from '@routes/Routes_Responsible/app.routes'
import { getAuth, signOut } from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import app from '@libs/firebase/config'

export function Account_Responsible() {

  const navigation = useNavigation<ResponsibleNavigatorRoutesProps>()

  function handleOnAddChild() {

    navigation.navigate('addChild')

  }

  async function handleOnClickSignout() {

    const auth = getAuth(app)

    try {
      await signOut(auth)
      await AsyncStorage.removeItem('@user_storage')
    } catch (error) {
      console.error(error);
      
    }
  }

  return (
    <Container>
        <HeaderSettings />

      <OptionsCard title='Configuração' />
      <OptionsCard title='Editar Informações'/>
      <OptionsCard title='Adicionar filho(a)' onPress={handleOnAddChild} />
      <OptionsCard title='Sair' onPress={handleOnClickSignout} />
      
    </Container>
  )
}