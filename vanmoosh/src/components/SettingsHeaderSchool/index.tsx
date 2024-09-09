import { Container, Title, DivFlexRow } from "./style";
import { UserPhoto } from "@components/UserPhoto";
import logoImg from '@assets/logo.png';
import {  SignOut  } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native';
import { Highlight } from "@components/Highlight";

import { fetchNameUser } from "@libs/firebase/db/fetchNameUser";
import { useEffect, useState } from "react";



export function HeaderSettings(){

    const [name, setName] = useState('')

    const navigation = useNavigation();

    function handleGoBack(){
        navigation.goBack();
    }

    async function fetchName(){
        try {
            const result = await fetchNameUser()
            setName(result)
        } catch (error) {
            console.error(error);
            
        }
    }

    useEffect(() => {
        fetchName()
    }, [])

    return (
        <Container>
            <DivFlexRow>
                <Title>{name}</Title>
            </DivFlexRow>
            
            <UserPhoto source={logoImg} defaultSource={logoImg}/>
            
            
        </Container>
    )
}