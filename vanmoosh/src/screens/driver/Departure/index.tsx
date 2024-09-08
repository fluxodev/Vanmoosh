import { Container } from "./style"
import HeaderDeparture from "@components/HeaderDeparture"
import PlacaInput from "@components/PlacaInput"
import { ButtonAdd } from "@components/Button"
import { useState } from "react"
import { DriverNavigatorRoutesProps } from "@routes/Routes_Driver/app.routes"
import { useNavigation } from "@react-navigation/native"
import { Alert } from "react-native"
import { createHistoricLog } from "@libs/firebase/db/Driver/historic"
import { useRoute } from "@react-navigation/native"

type RouteParamsProps = {
  id: string
}

export function Departure() {

  const route = useRoute()
  const { id } = route.params as RouteParamsProps;

  const [isRegistered, setIsRegistered] = useState(false)

  const navigation = useNavigation<DriverNavigatorRoutesProps>()

  async function handleDeparture(){
    try {
      
      setIsRegistered(true)
      const log = await createHistoricLog();
      console.log(`Histórico de ID ${id} alterado para o status: ${log.status}`);
      
      navigation.goBack()
      
    } catch (error) {
      console.log("Erro: > ", error);
      Alert.alert("Erro", 'Não foi possivel registrar o início da viagem.')
      setIsRegistered(false)
    }
  }

  return (


    
    <Container>
        <HeaderDeparture title="Início">
        </HeaderDeparture>
        
        <PlacaInput
        editable={false}
        />
        <ButtonAdd title="Registrar Início" onPress={handleDeparture}/>
    </Container>

  )
}

