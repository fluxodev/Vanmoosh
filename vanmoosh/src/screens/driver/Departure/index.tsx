import { Container } from "./style"
import HeaderDeparture from "@components/HeaderDeparture"
import PlacaInput from "@components/PlacaInput"
import { ButtonAdd } from "@components/Button"
import { useState } from "react"
import { DriverNavigatorRoutesProps } from "@routes/Routes_Driver/app.routes"
import { useNavigation } from "@react-navigation/native"

export function Departure() {

  const navigation = useNavigation<DriverNavigatorRoutesProps>()

  return (


    
    <Container>
        <HeaderDeparture title="Chegada">
        </HeaderDeparture>
        
        <PlacaInput
        editable={false}
        />
        <ButtonAdd title="Registrar Início" onPress={() => navigation.navigate('StartRoute')}/>
    </Container>

  )
}

