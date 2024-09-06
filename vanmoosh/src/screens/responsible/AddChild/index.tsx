import { Input } from "@components/Input";
import { Container, Box } from "./style";

import HeaderDeparture from "@components/HeaderDeparture";
import { Highlight } from "@components/Highlight";
import { ButtonAdd } from "@components/Button";
import { Alert } from "react-native";
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
            if (!result) {
                console.log("Erro: usuário não cadastrado")
                return
            }
            await addStudentToGroup(groupCode)
        } catch (error) {
            console.error("Erro ao registrar: ", error)
        }

        
    }

    return (
        <Container>
            <HeaderDeparture
                title="Adicionar filho(a)"
                
            />
                <Highlight
                    title="Filiação"
                    subTitle="Preencha o seguinte formulário com os dados de seu agregado "
                />

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

                <Input  
                    placeholder="Ano Escolar"
                    returnKeyType="done"
                    autoCorrect= {false}
                    value={anoEscolar}
                    onChangeText={setAnoEscolar}
                />

                <Input  
                    placeholder="Código da Sala"
                    returnKeyType="done"
                    autoCorrect= {false}
                    value={groupCode}
                    onChangeText={setGroupCode}

                />
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
           
        </Container>

    );
}