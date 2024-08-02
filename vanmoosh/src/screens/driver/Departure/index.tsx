import { Container } from "./style"
import HeaderDeparture from "@components/HeaderDeparture"
import PlacaInput from "@components/PlacaInput"
import { ButtonAdd } from "@components/Button"
import { useState } from "react"

export function Departure() {

  const [placa, setPlaca] = useState('')

  return (


    
    <Container>
        <HeaderDeparture title="Chegada">
        </HeaderDeparture>
        
        <PlacaInput
        editable={false}
        />
        <ButtonAdd title="Registrar Início" />
    </Container>

  )
}

