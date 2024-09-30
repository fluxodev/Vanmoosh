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
import { ButtonAdd } from '@components/Button'
import { ButtonIcon } from '@components/ButtonIcon'
import { ButtonMain } from '@components/ButtonMain'
import { ButtonTitleAndIcon } from '@components/ButtonTitleAndIcon'
import { ButtonIconTitleAndLine } from '@components/ButtonIconTitleAndLine'

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
      console.log("Usuário deslogado com sucesso e dados limpos do AsyncStorage!");
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <Container>
        <HeaderSettings />

        <ButtonIconTitleAndLine
          icon='settings'
          title='Configuração'
        />

        <ButtonIconTitleAndLine
          icon='edit'
          title='Editar Perfil'
        />

        <ButtonIconTitleAndLine 
          icon='person' 
          title='Adicionar um filho(a)' 
          onPress={handleOnAddChild}
        />

        <ButtonIconTitleAndLine
          title='Sair'
          icon='exit-to-app'
          onPress={handleOnClickSignout}
        />

    </Container>
  )
}