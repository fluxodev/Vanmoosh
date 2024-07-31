import { Container, TextSup, Placa } from './styles'



export default function PlacaInput() {
  return (
    <Container>
        <TextSup> 
            Placa Veicular:
        </TextSup>

        <Placa
        autoCapitalize="characters"
        editable={false}
        >
            ISA2C13
        </Placa>
    </Container>
  )
}