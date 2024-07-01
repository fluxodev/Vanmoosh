import { Container, Logo, BackButton } from "./styles";
import logoImg from '@assets/logo.png';
import {  CaretLeft  } from 'phosphor-react-native'

type Props = {
    showBackButton?: boolean;
}


export function Header({showBackButton = false}: Props){
    return (
        <Container>
            {showBackButton && <BackButton>
            <CaretLeft size={30} color="#000" />
            </BackButton>
            }
            <Logo source={logoImg} />
        </Container>
    )
}