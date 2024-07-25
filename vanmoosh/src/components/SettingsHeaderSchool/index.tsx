import { Container, Title, DivFlexRow } from "./style";
import { UserPhoto } from "@components/UserPhoto";
import logoImg from '@assets/logo.png';
import {  SignOut  } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native';
import { Highlight } from "@components/Highlight";



export function HeaderSettingsSchools(){

    const navigation = useNavigation();

    function handleGoBack(){
        navigation.goBack();
    }

    return (
        <Container>
            <DivFlexRow>
                <Title>Colégio Politécnico Bento Quirino</Title>
            </DivFlexRow>
            
            <UserPhoto source={logoImg} defaultSource={logoImg}/>
            
            
        </Container>
    )
}