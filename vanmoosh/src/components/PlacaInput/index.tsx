import { Container, TextSup, Placa } from './styles'
import { useState } from 'react'
import { TextInputProps } from 'react-native'

type Props = TextInputProps & {

}



export default function PlacaInput({...rest}: Props) {

  const [placa, setPlaca] = useState('')



  return (
    <Container>
        <TextSup> 
            Placa Veicular:
        </TextSup>

        <Placa
        autoCapitalize="characters"
        maxLength={7}
        {...rest}
        >
            ISA2C13
        </Placa>
    </Container>
  )
}