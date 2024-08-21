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
import { registerDriver } from "@libs/firebase/db/driver/registerDriver";

const alunos = ["Davi", "Giovanni", "Matheus", "Peter Grifin"]
const email = "email@irado.com"
const senha = "rabiola"
const idMotorista = "68"
const idSchool = "2"


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
        onPress={() => console.log("Teste")}
        // registerDriver(alunos, email, idMotorista, idSchool, senha)
      />
    </Container>
  )
}
