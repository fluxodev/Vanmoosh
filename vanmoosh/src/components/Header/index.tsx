import { Container, Logo, BackButton } from "./styles";
import logoImg from '@assets/logo.png';
import {  CaretLeft  } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native';

type Props = {
    showBackButton?: boolean;
}


export function Header({showBackButton = false}: Props){

    const navigation = useNavigation();

    function handleGoBack(){
        navigation.goBack();
    }
    
    return (
        <Container>
            {showBackButton && <BackButton onPress={handleGoBack}>
            <CaretLeft size={30} color="#000" />
            </BackButton>
            }
            <Logo source={logoImg} />
        </Container>
    )
}