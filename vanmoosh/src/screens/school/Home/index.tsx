import { Container, MarginBetweenButtons, ViewButton } from './styles'
import { Alert } from 'react-native'
import React from 'react'
import { HeaderLogo } from '@components/HeaderLogo'
import { useNavigation } from '@react-navigation/native'
import { SchoolNavigatorRoutesProps } from '@routes/Routes_School/app.routes'
import { ButtonTitleAndIcon } from '@components/ButtonTitleAndIcon'
import { Highlight } from '@components/Highlight'




export default function Home_School() {
  const navigation = useNavigation<SchoolNavigatorRoutesProps>()
  
function HandleOnMotoristas() {
  navigation.navigate('ManageDriver')
}

function HandleOnTurmas(){
  navigation.navigate('Groups')
}

  return (
    <Container>
      <HeaderLogo />
      <Highlight title='Início' subTitle='Gerencie sua escola da maneira que precisar.'  />
      <ViewButton>
      <ButtonTitleAndIcon icon='directions-car-filled' title='Motoristas' onPress={HandleOnMotoristas}/>
      <MarginBetweenButtons />
      <ButtonTitleAndIcon icon='groups' title='Turmas' onPress={HandleOnTurmas} />
      </ViewButton>
    </Container>
  )
}