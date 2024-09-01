import { Container, Margin } from "./styles";
import { FlatList } from "react-native";
import { GroupCard } from "@components/GroupCard";

import HeaderDeparture from "@components/HeaderDeparture";
import { Highlight } from "@components/Highlight";
import { ButtonAdd } from "@components/Button";
import { ListEmpty } from "@components/ListEmpty";

import { useState } from "react";

import { Text } from 'react-native'
import React from 'react'
import { addDriver } from "@libs/firebase/db/drivers/addDriver";

// essas 3 constantes aqui vão receber os dados de data de nascimento do usuário, eu coloquei desse jeito improvisado
// até existir uma tela de cadastro do motorista
const birthYear = "2006"
const birhtMonth = "10"
const birthDay = "21"

// essas constantes também irão receber dados do usuário, estão assim provisóriamente
const idDriver = "01234"
const adress = "Rua dos sequelados 72"
const birthdayDate = new Date(`${birthYear}-${birhtMonth}-${birthDay}`)
const cep = "12345678"
const email = "serjao@gmail.com"
const modeloVan = "Dragster Ford Transit Supervan 3"
const name = "Serjao Berranteiro Matador de Onça"
const placaVeicular = "abc1234"
const telefone = "19999999998"
const senha = "rabiola123"


export function ManageDriver() {
    const [drivers, setDrivers] = useState<string[]>(['Teste']);

    function handleOpenDriver() {
        console.log('Abrir motorista');  
    }


  return (
    <Container>
        <HeaderDeparture title="Motoristas" ></HeaderDeparture>
        <Margin /> 
      <Highlight title="Motoristas" subTitle="Aqui você pode gerenciar os motoristas do seu colégio." ></Highlight>
      
      <FlatList
          data={drivers}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard
              title={item}
              onPress={() => handleOpenDriver()}
            />
          )}
          contentContainerStyle={drivers.length === 0 && { flex: 1 }}
          ListEmptyComponent={
            () => <ListEmpty message="Nenhum Motorista cadastrado!" />
          }
        />
      <ButtonAdd
        title="Adicionar Motorista"
        type='primary'
        onPress={() => addDriver(adress, birthdayDate, cep, email, modeloVan, name, placaVeicular, senha, telefone)}
        // addDriver(..., ..., ...)
        // teste irado
      />

    </Container>
  )
}
