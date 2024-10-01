import { Input } from "@components/Input";
import { Container, Box, Body, Title, Scroll, Line } from "./style";

import HeaderDeparture from "@components/HeaderDeparture";
import { Highlight } from "@components/Highlight";
import { ButtonAdd } from "@components/Button";
import { Alert, FlatList, ScrollView } from "react-native";
import { addStudentToGroup } from "@libs/firebase/db/students/includeStudentInTheGroup";

import { addChild } from "@libs/firebase/db/Responsibles/addChild";
import { useState } from "react";

export function AddChild(){
    const [name, setName] = useState('');
    const [birthdayDate, setBirthdayDate] = useState('');
    const [adress, setAdress] = useState('');
    const [cpf, setCpf] = useState('');
    const [anoEscolar, setAnoEscolar] = useState('');
    const [groupCode, setGroupCode] = useState('');


    async function handleOnButton() {
        try {
            const result = await addChild({name, birthdayDate, adress, cpf, anoEscolar})
            console.log(result);
            
            if (result !== true) {
                console.log("Erro: usuário não cadastrado")
                return
            }

            console.log('Cheguei aqui');
            

            await addStudentToGroup(groupCode, name)
        } catch (error) {
            console.error("Erro ao registrar: ", error)
        }
    }

    return (
        <Container>
            <HeaderDeparture
                title="Adicionar filho(a)"
            />

            <Body>
                <Highlight
                    subTitle="Preencha o seguinte formulário com os dados de seu agregado "
                />

                <Scroll>
                <Title>Dados Pessoais</Title>
                <Line/>
                    <Input 
                        placeholder="Nome Completo"
                        returnKeyType="done" //Muda o "Retorno" para "Concluido".
                        autoCorrect= {false}
                        value={name}
                        onChangeText={setName}
                    />

                    <Input 
                        placeholder="CPF"
                        returnKeyType="done"
                        value={cpf}
                        onChangeText={setCpf}
                    />
                    
                    <Input 
                        placeholder="Data de Nascimento"
                        returnKeyType="done"
                        value={birthdayDate}
                        onChangeText={setBirthdayDate}
                    />
                    
                    <Title>Informações Básicas</Title>
                    <Line/>
                    <Input  
                        placeholder="E-mail do responsável"
                        returnKeyType="done"
                        autoCorrect= {false}
                        value={anoEscolar}
                        onChangeText={setAnoEscolar}
                    />
                    <Input  
                        placeholder="Número do responsável"
                        returnKeyType="done"
                        autoCorrect= {false}
                        value={anoEscolar}
                        onChangeText={setAnoEscolar}
                    />
                    <Input  
                        placeholder="Número de emergencia"
                        returnKeyType="done"
                        autoCorrect= {false}
                        value={anoEscolar}
                        onChangeText={setAnoEscolar}
                    />

                    <Title>Informação Escolar</Title>
                    <Line/>
                    <Input  
                        placeholder="Código da Sala"
                        returnKeyType="done"
                        autoCorrect= {false}
                        value={groupCode}
                        onChangeText={setGroupCode}

                    />
                </Scroll>
                <Box />

            <ButtonAdd 
            title="Registrar"
            onPress={() => Alert.alert(
            'Adicionar um filho',
            'Deseja adicionar um filho(a)?',
            [
            {text:'Não'},
            {text: 'Sim', onPress: () => handleOnButton() }
            ]

            )}
            />
           </Body>
        </Container>

    );
}