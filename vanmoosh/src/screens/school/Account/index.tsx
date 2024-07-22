import { View, Text } from 'react-native'
import { Container } from './styles'
import { HeaderSettingsSchools } from '@components/SettingsHeaderSchool'
import React from 'react'

export default function Account_School() {
  return (
    <Container>
      <HeaderSettingsSchools showBackButton />
      <Text>Account_School</Text>
    </Container>
  )
}