import { Container, MarginButton, MarginCardButton } from './style'
import { ButtonAdd } from '@components/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getAuth } from 'firebase/auth'
import app from '@libs/firebase/config'
import { signOut } from 'firebase/auth'
import { HeaderSettings } from '@components/SettingsHeaderSchool'
import { ButtonTitleAndIcon } from '@components/ButtonTitleAndIcon'
import { useNavigation } from '@react-navigation/native'
import { DriverNavigatorRoutesProps } from '@routes/Routes_Driver/app.routes'
import { getFirestore } from 'firebase/firestore'

export function Account_Driver() {

  const db = getFirestore(app)

  const auth = getAuth(app)

  const navigation = useNavigation<DriverNavigatorRoutesProps>()

  async function handleOnClickSignout() {

   
    try {
      await signOut(auth)
      await AsyncStorage.removeItem('@user_storage')
    } catch (error) {
      console.error(error);
      
    }

  }
  return (

    <Container>
        <HeaderSettings title='Nome e Sobrenome'/>
        <MarginCardButton>
          <ButtonTitleAndIcon title='Editar perfil' icon='edit'/>
        </MarginCardButton>
        <MarginButton>
          <ButtonAdd title='Sair' onPress={handleOnClickSignout} />
        </MarginButton>
    </Container>
  )
}

