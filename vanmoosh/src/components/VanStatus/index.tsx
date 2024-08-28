import { Container, Highlight, TextBox, IconBox } from "./style"
import { Van, WarningDiamond } from "phosphor-react-native"
import theme from "@theme/index"
import { TouchableOpacityProps } from "react-native"

type Props = TouchableOpacityProps & {
    placa?: string | null;
    inTrip?: boolean;
}

export function VanStatus({placa = null, inTrip , ...rest}: Props) {
    const status = inTrip ? 'chegada' : 'saída'
    const Icone = inTrip ? WarningDiamond : Van
    const mensagem = inTrip ? `Van de placa ${placa} em uso! ` : `Van de placa ${placa} fora de uso `
    

    const { COLORS } = theme

  return (


    <Container {...rest} >
        
        <IconBox>
            <Icone 
            size={24} 
            color={COLORS.BRAND_LIGHT} 
            />
        </IconBox>

        <TextBox>
            {mensagem} 

            <Highlight>
               Clique aqui para registrar {status}
            </Highlight>
        </TextBox>    

    </Container>
  )
}