import { VanStatus } from "@components/VanStatus"
import { Header } from "@components/Header"
import { Container, Margin, HeaderMargin } from "./style"
import { useNavigation } from "@react-navigation/native"
import { DriverNavigatorRoutesProps } from "@routes/Routes_Driver/app.routes"

export function StartRoute() {

  const navigation = useNavigation<DriverNavigatorRoutesProps>()

  const placa = 'ISA2E13'

  function handleRegisterDepartureOrArrival() {
    navigation.navigate('Departure')
  }

  return (
    <Container>
      <HeaderMargin>
      <Header showBackButton />
      </HeaderMargin>
        
        <Margin>
          <VanStatus placa={placa} onPress={handleRegisterDepartureOrArrival}/>
        </Margin>
          
       
        
    </Container>
  )
}