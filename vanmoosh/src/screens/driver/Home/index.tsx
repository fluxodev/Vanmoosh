import { Container } from './style'
import { Highlight } from '@components/Highlight'
import { ButtonTitleAndIcon } from '@components/ButtonTitleAndIcon'
import { MarginBetweenButtons, ViewButton } from '@screens/school/Home/styles'
import { HeaderLogo } from '@components/HeaderLogo'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'
import { DriverNavigatorRoutesProps } from '@routes/Routes_Driver/app.routes'

export function Home_Driver() {

    const navigation = useNavigation<DriverNavigatorRoutesProps>()

    function HandleOnMotoristas() {
        console.log('Botão Van')
        Alert.alert('Prezados Motoristas', 'Em breve você poderá gerenciar sua van escolar.')
      }
      
      function HandleOnDeparture(){
        console.log('Botão Alunos')
        Alert.alert('Prezados Motoristas', 'Em breve você poderá gerenciar os Alunos da sua van.')
      }
      
      function HandleOnRotas() {
        console.log('Botão Rotas')
        navigation.navigate('Departure')
      }
        

  return (
    <Container>
        <HeaderLogo />
      <Highlight title='Início' subTitle='Gerencie sua van escolar.'  />
      <ViewButton>
      <ButtonTitleAndIcon icon='directions-bus-filled' title='Sobre a van' onPress={HandleOnMotoristas}/>
      <MarginBetweenButtons />
      <ButtonTitleAndIcon icon='groups' title='Alunos' onPress={HandleOnDeparture} />
      </ViewButton>
      <ViewButton>
      <ButtonTitleAndIcon icon='route' title='Rotas' onPress={HandleOnRotas}/>
      </ViewButton>

    </Container>
  )
}

