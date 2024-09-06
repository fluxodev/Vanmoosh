import { View, Text } from 'react-native'
import { Container } from './styles'
import { HeaderSettings } from '@components/SettingsHeaderSchool'
import { OptionsCard } from '@components/OptionsCard'
import React from 'react'
import { SchoolNavigatorRoutesProps } from '@routes/Routes_School/app.routes'
import { useNavigation } from '@react-navigation/native'
import { getAuth, signOut } from 'firebase/auth'
import app from '@libs/firebase/config'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Account_School() {

  const navigation = useNavigation<SchoolNavigatorRoutesProps>()

  function handleOnClickEditProfile() {
    navigation.navigate('EditAccount_School')
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
      <OptionsCard title='Pagamento' />
      <OptionsCard title='Editar Perfil' onPress={handleOnClickEditProfile}/>
      <OptionsCard title='Endereços' />
      <OptionsCard title='Sair' onPress={handleOnClickSignout} />
    </Container>
  )
}