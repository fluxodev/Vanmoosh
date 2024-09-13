import { Highlight } from "@components/Highlight";
import { Container, Body, Scroll } from "./style";
import { TypesOfDataToBeFilledIn } from "@components/TypesOfDataToBeFilledin";
import { Input } from "@components/Input";
import { ButtonAdd } from "@components/Button";
import { Header } from "@components/Header";
import { addDriver } from "@libs/firebase/db/drivers/addDriver";
import { useState } from "react";
import { getAuth } from "firebase/auth";

import app from '@libs/firebase/config'

const auth = getAuth(app)

export function RegisterNewDriver() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [address, setAddress] = useState('')
    const [placaVeicular, setPlacaVeicular] = useState('')
    const [modeloVan, setModeloVan] = useState('')
    const [cpf, setCpf] = useState('')


    async function handleOnButton() {
        try {
            //email, senha, telefone, adress, modeloVan, placaVeicular, name
            await addDriver({email, password, telefone, address, modeloVan, placaVeicular, name, cpf})
        } catch (error) {
          console.error('ERRO: > ' + error);
            
        }
    }

    return (
        <Container>
            <Header showBackButton />
            <Body>
                <Scroll>
                    <TypesOfDataToBeFilledIn title="Dados" />
                    <Input 
                    placeholder="E-mail"
                    onChangeText={setEmail} 
                    />
                    <Input 
                    placeholder="Crie uma senha"
                    onChangeText={setPassword} 
                    />

                    <TypesOfDataToBeFilledIn title="Infomações Pessoais" />
                    <Input placeholder="Nome" onChangeText={setNome}  />
                    <Input placeholder="CPF" onChangeText={setCpf}  />
                    <Input placeholder="Telefone" onChangeText={setTelefone}/>

                    <TypesOfDataToBeFilledIn title="Endereço" />
                    <Input placeholder="Endereço" onChangeText={setAddress} />

                    <TypesOfDataToBeFilledIn title="Van" />
                    <Input placeholder="Placa do Veículo" onChangeText={setPlacaVeicular}/>
                    <Input placeholder="Modelo do Veículo"  onChangeText={setModeloVan}/>

                </Scroll>
            </Body>

            <ButtonAdd title="Cadastrar Motorista" onPress={handleOnButton} />


        </Container>
    );
}