import { Container, ContainerButton, TitleButton, MarginBetweenButtons } from './styles'
import { Alert } from 'react-native'
import React from 'react'
import { HeaderLogo } from '@components/HeaderLogo'
import { useNavigation } from '@react-navigation/native'
import { SchoolNavigatorRoutesProps } from '@routes/Routes_School/app.routes'



export default function Home_School() {
  const navigation = useNavigation<SchoolNavigatorRoutesProps>()
  
function HandleOnUnidades() {
  console.log('Reavaliando a ideia sobre filiais')
  Alert.alert('Reavaliando a ideia sobre filiais')
}

function HandleOnTurmas(){
  navigation.navigate('Groups')
}

  return (
    <Container>
      <HeaderLogo />
      <ContainerButton>
          <TitleButton>
              Motoristas Cadastrados
          </TitleButton>
      </ContainerButton>
      <MarginBetweenButtons />
      
      <ContainerButton onPress={HandleOnUnidades}>
          <TitleButton>
              Unidades
          </TitleButton>
      </ContainerButton>
      <MarginBetweenButtons />
      <ContainerButton onPress={HandleOnTurmas}>
          <TitleButton>
              Turmas
          </TitleButton>
      </ContainerButton>

    </Container>
  )
}