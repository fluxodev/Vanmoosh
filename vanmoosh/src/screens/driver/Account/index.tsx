import { Container, MarginButton, MarginCardButton } from './style'
import { ButtonAdd } from '@components/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getAuth } from 'firebase/auth'
import app from '@libs/firebase/config'
import { signOut } from 'firebase/auth'
import { HeaderSettings } from '@components/SettingsHeaderSchool'
import { OptionsCard } from '@components/OptionsCard'
import { ButtonTitleAndIcon } from '@components/ButtonTitleAndIcon'
import { useNavigation } from '@react-navigation/native'
import { DriverNavigatorRoutesProps } from '@routes/Routes_Driver/app.routes'
import { doc, getFirestore } from 'firebase/firestore'

export function Account_Driver() {

  const db = getFirestore(app)

  const auth = getAuth(app)

  const navigation = useNavigation<DriverNavigatorRoutesProps>()

  function handleOnButton() {
    try {

      navigation.navigate('EditAccountDriver')

    } catch (error) {
      console.error(error);
    }

  }

  async function handleOnClickSignout() {

   
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
        <HeaderSettings/>
        <MarginCardButton>
          <ButtonTitleAndIcon title='Verificar perfil' icon='edit' onPress={handleOnButton}/>
        </MarginCardButton>
        <MarginButton>
          <ButtonAdd title='Sair' onPress={handleOnClickSignout} />
        </MarginButton>
    </Container>
  )
}

