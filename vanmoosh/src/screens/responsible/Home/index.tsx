import { Container } from './styles'
import { Highlight } from '@components/Highlight'
import { ButtonTitleAndIcon } from '@components/ButtonTitleAndIcon'
import { MarginBetweenButtons, ViewButton } from '@screens/school/Home/styles'
import { HeaderLogo } from '@components/HeaderLogo'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'
import { DriverNavigatorRoutesProps } from '@routes/Routes_Driver/app.routes'
import { ResponsibleNavigatorRoutesProps } from '@routes/Routes_Responsible/app.routes'

export function Home_Responsible() {

    const navigation = useNavigation<ResponsibleNavigatorRoutesProps>()


      function HandleOnDeparture(){
        navigation.navigate('addChild')
      }
      

  return (
    <Container>

      <HeaderLogo />
      <Highlight title='Início' subTitle='Gerencie seus filhos.'  />
        
      <ViewButton>
        <MarginBetweenButtons />
        <ButtonTitleAndIcon icon='groups' title='Adicionar Filho' onPress={HandleOnDeparture} />
      </ViewButton>

      <ViewButton>
      </ViewButton>

    </Container>
  )
}

