import { Container, Title, DivFlexRow } from "./style";
import { UserPhoto } from "@components/UserPhoto";
import logoImg from '@assets/logo.png';
import {  SignOut  } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native';
import { Highlight } from "@components/Highlight";

type Props = {
    title: string;
}

export function HeaderSettings({title}: Props){

    const navigation = useNavigation();

    function handleGoBack(){
        navigation.goBack();
    }

    return (
        <Container>
            <DivFlexRow>
                <Title>{title}</Title>
            </DivFlexRow>
            
            <UserPhoto source={logoImg} defaultSource={logoImg}/>
            
            
        </Container>
    )
}