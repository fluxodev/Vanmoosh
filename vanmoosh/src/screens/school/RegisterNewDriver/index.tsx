import { Highlight } from "@components/Highlight";
import { Container, Body, Scroll, Title } from "./style";
import { TypesOfDataToBeFilledIn } from "@components/TypesOfDataToBeFilledin";
import { Input } from "@components/Input";
import { ButtonAdd } from "@components/Button";

export function RegisterNewDriver() {

    return (
        <Container>
            <Title>
                <Highlight title="Adicionar motorisa" />
            </Title>
            <Body>
                <Scroll>
                    <TypesOfDataToBeFilledIn title="Dados" />
                    <Input placeholder="E-mail" />
                    <Input placeholder="Crie uma senha" />

                    <TypesOfDataToBeFilledIn title="Infomações Pessoais" />
                    <Input placeholder="Nome" />
                    <Input placeholder="CPF" />
                    <Input placeholder="Data de Nascimento" />

                    <TypesOfDataToBeFilledIn title="Endereço" />
                    <Input placeholder="Endereço" />

                    <TypesOfDataToBeFilledIn title="Van" />
                    <Input placeholder="Placa do Veículo" />
                    <Input placeholder="Modelo do Veículo" />

                </Scroll>
            </Body>

            <ButtonAdd title="Cadastrar Motorista" />


        </Container>
    );
}