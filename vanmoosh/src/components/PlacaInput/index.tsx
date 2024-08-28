import { Container, TextSup, Placa } from './styles'
import { useState, useEffect } from 'react'
import { getDriverPlate } from '@libs/firebase/db/Driver/getPlate'
import { TextInputProps } from 'react-native'



type Props = TextInputProps & {

}



export default function PlacaInput({...rest}: Props) {

  const [plate, setPlate] = useState<string | null>(null);

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
        <TextSup> 
            Placa Veicular:
        </TextSup>

        <Placa
        autoCapitalize="characters"
        maxLength={7}
        {...rest}
        >
            {plate}
        </Placa>
    </Container>
  )
}