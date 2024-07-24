import { View, Text } from 'react-native'
import { Container } from './styles'
import { HeaderSettingsSchools } from '@components/SettingsHeaderSchool'
import { OptionsCard } from '@components/OptionsCard'
import React from 'react'
import { SchoolNavigatorRoutesProps } from '@routes/Routes_School/app.routes'
import { useNavigation } from '@react-navigation/native'

export default function Account_School() {

  const navigation = useNavigation<SchoolNavigatorRoutesProps>()

  function handleOnClickEditProfile() {
    navigation.navigate('EditAccount_School')
  }

  return (
    <Container>
      <HeaderSettingsSchools />
      <OptionsCard title='Pagamento' />
      <OptionsCard title='Editar Perfil' onPress={handleOnClickEditProfile}/>
      <OptionsCard title='Endereços' />
    </Container>
  )
}