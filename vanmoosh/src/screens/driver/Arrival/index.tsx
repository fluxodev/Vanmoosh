import { Container, MarginBetweenButtons } from "./style"
import HeaderDeparture from "@components/HeaderDeparture"
import PlacaInput from "@components/PlacaInput"
import { ButtonAdd } from "@components/Button"
import { useState } from "react"
import { DriverNavigatorRoutesProps } from "@routes/Routes_Driver/app.routes"
import { useNavigation } from "@react-navigation/native"
import { Alert } from "react-native"
import { createHistoricLog } from "@libs/firebase/db/Driver/historic"
import { ButtonIcon } from "@components/ButtonIcon"
import { Highlight } from "@components/Highlight"

export function Arrival() {

  const [isRegistered, setIsRegistered] = useState(false)

  const navigation = useNavigation<DriverNavigatorRoutesProps>()

  async function handleArrival(){
    try {

      setIsRegistered(true)

      const log = await createHistoricLog();
      console.log('Novo log criado:', log);
      
    } catch (error) {
      console.log("Erro: > ", error);
      Alert.alert("Erro", 'Não foi possivel registrar o fim da viagem.')
      setIsRegistered(false)
    }
  }

  return (


    
    <Container>
        <HeaderDeparture title="Chegada">
        </HeaderDeparture>
        
        <PlacaInput
        editable={false}
        />
       
        <ButtonAdd title="Registrar Chegada" onPress={handleArrival}/>
        <MarginBetweenButtons></MarginBetweenButtons>
        <Highlight title="Deseja retornar?" subTitle="Aperte o botão abaixo e retorne sem cancelar sua viagem."/>
        <ButtonIcon icon="not-interested" type="primary" />
    </Container>

  )
}

