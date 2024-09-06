import { Input } from "@components/Input";
import { Container, Box } from "./style";

import HeaderDeparture from "@components/HeaderDeparture";
import { Highlight } from "@components/Highlight";
import { ButtonAdd } from "@components/Button";
import { Alert } from "react-native";
import { addStudentToGroup } from "@libs/firebase/db/students/includeStudentInTheGroup";

export function AddChild(){

    async function handleOnButton() {

        const groupCode = '645180'
        await addStudentToGroup(groupCode)
        
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
                />
                <Input 
                    placeholder="CPF"
                    returnKeyType="done"  
                />
                <Input 
                    placeholder="Data de Nascimento"
                    returnKeyType="done"  
                />

                <Input  
                    placeholder="Ano Escolar"
                    returnKeyType="done"
                    autoCorrect= {false}
                />

                <Input  
                    placeholder="Código da Sala"
                    returnKeyType="done"
                    autoCorrect= {false}
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