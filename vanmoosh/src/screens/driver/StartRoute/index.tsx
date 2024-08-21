import { VanStatus } from "@components/VanStatus"
import { Header } from "@components/Header"
import { Container, Margin, HeaderMargin } from "./style"
import { useNavigation } from "@react-navigation/native"
import { DriverNavigatorRoutesProps } from "@routes/Routes_Driver/app.routes"
import { useState } from "react"
import { useEffect } from "react"
import { getDriverPlate } from "@libs/firebase/db/Driver/getPlate"

export function StartRoute() {

  const [plate, setPlate] = useState<string | null>(null)

  const navigation = useNavigation<DriverNavigatorRoutesProps>()

  function handleRegisterDepartureOrArrival() {
    navigation.navigate('Departure')
  }
  useEffect(() => {
    const fetchPlate = async () => {
      try {
        const plate = await getDriverPlate();
        setPlate(plate);
        
      } catch (error) {
        console.error("Erro ao obter a placa do motorista:", error);
      }
    };

    fetchPlate();
  }, []);

  return (
    <Container>
      <HeaderMargin>
      <Header showBackButton />
      </HeaderMargin>
        
        <Margin>
          <VanStatus placa={plate} onPress={handleRegisterDepartureOrArrival}/>
        </Margin>
          
       
        
    </Container>
  )
}