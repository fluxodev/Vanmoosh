import { Header } from "@components/Header";
import { Container, Content, Icon} from "./style";
import { Highlight } from "@components/Highlight";
import { ButtonAdd } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";


export default function NewGroup() {

    const [group, setGroup] = useState('') // [1

    const navigation = useNavigation();

    function handleNew() {
        navigation.navigate('Students', { group });
    }

    return (
        <Container>
            <Header showBackButton/>
            
            <Content>
                <Icon />
                <Highlight
                title="Crie uma turma"
                subTitle="Crie uma nova turma para adicionar alunos."
                />
                
                <Input 
                placeholder="Adicione uma nova classe"
                onChangeText={setGroup}/>

                <ButtonAdd 
                style={{marginTop: 24}}
                title="Criar"
                onPress={handleNew}
                />
                
                

            </Content>

            
        </Container>
    );
}