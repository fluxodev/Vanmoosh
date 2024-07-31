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
  console.log('Botão Motoristas')
  Alert.alert('Motoristas', 'Em breve você poderá gerenciar os motoristas da sua escola.')
}

function HandleOnTurmas(){
  navigation.navigate('Groups')
}

function HandleOnRotas() {
  console.log('Botão Rotas')
  Alert.alert('Rotas', 'Em breve você poderá gerenciar as rotas dos motoristas.')
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
      <ViewButton>
      <ButtonTitleAndIcon icon='route' title='Rotas' onPress={HandleOnRotas}/>
      </ViewButton>
      
      
      
      
      
      

    </Container>
  )
}