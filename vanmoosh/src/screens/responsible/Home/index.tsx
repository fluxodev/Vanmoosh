import { FlatList } from "react-native";
import { useState } from "react";

import { Container, Body, Agregate, NumberAgregate, Line } from "./styles";

import { HeaderLogo } from "@components/HeaderLogo";
import { ButtonIconTitleAndLine } from "@components/ButtonIconTitleAndLine";


export function Home_Responsible (){
    const [groups, setGroups] = useState<string[]>(['Olá']);

    return(
        <Container>
            <HeaderLogo name="Nome da Instituição" type="Agregados"/>
        
            
            <Agregate>Agregado</Agregate>
            <NumberAgregate>{groups.length}</NumberAgregate>
            <Line/>

            <Body>
                <FlatList
                data={groups}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <ButtonIconTitleAndLine
                        title={item}
                        icon="person"
                        type="secondary"
                    />
                )}
            />
            </Body>
        </Container>
    );
}