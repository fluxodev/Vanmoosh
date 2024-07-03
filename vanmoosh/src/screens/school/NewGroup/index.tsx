import { Header } from "@components/Header";
import { Container, Content, Icon } from "./style";
import { Highlight } from "@components/Highlight";
import { ButtonAdd } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { createGroup } from "@storage/groups/groupCreate";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

export default function NewGroup() {

    const [group, setGroup] = useState('') // [1

    const navigation = useNavigation();

    async function handleNew() {
        try {

            if(group.trim.length === 0) {
                return Alert.alert('Erro', 'O nome da turma não pode ser vazio.');
            }


            await createGroup(group);

            navigation.navigate('Students', { group });

        } catch (error) {
            if(error instanceof AppError) {
                Alert.alert('Erro', error.message);

            } else{
                Alert.alert('Erro', 'Não foi possível criar a turma. Tente novamente.');
                console.log(error);
                
            }
        }
    }

    return (
        <Container>
            <Header showBackButton />

            <Content>
                <Icon />
                <Highlight
                    title="Crie uma turma"
                    subTitle="Crie uma nova turma para adicionar alunos."
                />

                <Input
                    placeholder="Adicione uma nova classe"
                    onChangeText={setGroup} />

                <ButtonAdd
                    style={{ marginTop: 24 }}
                    title="Criar"
                    onPress={handleNew}
                />



            </Content>


        </Container>
    );
}