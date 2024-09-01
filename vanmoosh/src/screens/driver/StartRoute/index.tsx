import { VanStatus } from "@components/VanStatus"
import { Header } from "@components/Header"
import { Container, Margin, HeaderMargin } from "./style"
import { useNavigation } from "@react-navigation/native"
import { DriverNavigatorRoutesProps } from "@routes/Routes_Driver/app.routes"
import { useState } from "react"
import { useEffect } from "react"
import { getDriverPlate } from "@libs/firebase/db/Driver/getPlate"
import { createHistoricLog } from "@libs/firebase/db/Driver/historic"
import { Alert } from "react-native"
import { checkOpenTrip } from "@libs/firebase/db/Driver/checkTrip"

export function StartRoute() {

  const [isRegistered, setIsRegistered] = useState(false)
  const [hasOpenTrip, setHasOpenTrip] = useState<boolean>(false);
  const [plate, setPlate] = useState<string | null>(null)

  const navigation = useNavigation<DriverNavigatorRoutesProps>()

  async function handleRegisterDepartureOrArrival() {
    try {
      const result = await checkOpenTrip();
      console.log(result);
  
      if (result && result.idHistoric) {
        // Se já houver um registro aberto, navegue para a tela de chegada com o ID do registro existente
        const logId = result.idHistoric;
        navigation.navigate("Arrival", { id: logId });
      } else {
        // Se não houver um registro aberto, crie um novo registro
        const log = await createHistoricLog();
        setHasOpenTrip(true);
        console.log("Novo log criado:", log);
        setIsRegistered(true);
        navigation.navigate("Departure");
      }
    } catch (error) {
      console.log("Erro: > ", error);
      Alert.alert("Erro", "Não foi possivel registrar o início da viagem.");
      setIsRegistered(false);
      setHasOpenTrip(false);
    }
  }
  
  useEffect(() => {
    const fetchPlate = async () => {
      try {
        const plate = await getDriverPlate();
        console.log("Placa do motorista:", plate);
        setPlate(plate);
      } catch (error) {
        console.error("Erro ao obter a placa do motorista:", error);
      }
    };
  
    const fetchTripStatus = async () => {
      try {
        const result = await checkOpenTrip();
        console.log("Status da viagem:", result);
        setHasOpenTrip(result && result.idHistoric ? true : false);
      } catch (error) {
        console.error("Erro ao verificar o status da viagem:", error);
      }
    };
  
    fetchPlate();
    fetchTripStatus();
  }, []);
  return (
    <Container>
      <HeaderMargin>
      <Header showBackButton />
      </HeaderMargin>
        
        <Margin>
          <VanStatus inTrip={hasOpenTrip} placa={plate} onPress={handleRegisterDepartureOrArrival}/>
        </Margin>
          
       
        
    </Container>
  )
}