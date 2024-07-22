import { Container, Logo, BackButton } from "./style";
import logoImg from '@assets/logo.png';
import {  SignOut  } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native';
import { Highlight } from "@components/Highlight";

type Props = {
    showBackButton?: boolean;
}


export function HeaderSettingsSchools({showBackButton = false}: Props){

    const navigation = useNavigation();

    function handleGoBack(){
        navigation.goBack();
    }

    return (
        <Container>
            <Logo source={logoImg} />
            {showBackButton && <BackButton onPress={handleGoBack}>
            <SignOut size={30} color="#000" />
            </BackButton>
            }
            
        </Container>
    )
}