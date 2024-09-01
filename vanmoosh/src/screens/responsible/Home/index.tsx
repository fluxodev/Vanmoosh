import { FlatList } from "react-native";
import { useState } from "react";

import { Container, Body } from "./styles";

import { HeaderLogo } from "@components/HeaderLogo";
import { ButtonIconTitleAndLine } from "@components/ButtonIconTitleAndLine";


export function Home_Responsible (){
    const [groups, setGroups] = useState<string[]>(['Olá', 'ooooooooooooooooo']);

    return(
        <Container>
            <HeaderLogo />
        <Body>
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ButtonIconTitleAndLine
                title={item}
                icon="people"
                type="secondary"
            />
          )}
          />
            


            </Body>
        </Container>
    );
}