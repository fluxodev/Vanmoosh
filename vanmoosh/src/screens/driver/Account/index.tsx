import { Container } from './style'
import { Text } from 'react-native'
import { ButtonAdd } from '@components/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getAuth } from 'firebase/auth'
import app from '@libs/firebase/config'
import { signOut } from 'firebase/auth'

export function Account_Driver() {
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
        <ButtonAdd title='Sair' onPress={handleOnClickSignout} />
    </Container>
  )
}

