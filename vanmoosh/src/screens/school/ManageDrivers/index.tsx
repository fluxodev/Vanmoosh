import { Container, Margin } from "./styles";
import { Alert, FlatList } from "react-native";
import { GroupCard } from "@components/GroupCard";

import HeaderDeparture from "@components/HeaderDeparture";
import { Highlight } from "@components/Highlight";
import { ButtonAdd } from "@components/Button";
import { ListEmpty } from "@components/ListEmpty";

import { useState, useEffect } from "react";
import { Text } from 'react-native';
import React from 'react';
import { addDriver } from "@libs/firebase/db/drivers/addDriver";
import { useNavigation } from "@react-navigation/native";
import { SchoolNavigatorRoutesProps } from "@routes/Routes_School/app.routes";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "@libs/firebase/config";

interface Driver {
  id: string;
  name: string;
}


export function ManageDriver() {

  const db = getFirestore(app)

    const navigation = useNavigation<SchoolNavigatorRoutesProps>();
    const [drivers, setDrivers] = useState<Driver[]>([]);

    const fetchDrivers = async () => {
      try {
          const querySnapshot = await getDocs(collection(db, "driver"));
          const driversList: Driver[] = querySnapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
          })) as Driver[];
          setDrivers(driversList);
      } catch (error) {
          console.error("Erro ao buscar motoristas: ", error);
      }
  };
  

    useEffect(() => {
        fetchDrivers();
    }, []);

    function handleOpenDriver() {
        Alert.alert(`Motorista`, 'Função será implementada na próxima atualização!')
    }
    function handleOnButton() {
        navigation.navigate('RegisterNewDriver')
    }

    return (
        <Container>
            <HeaderDeparture title="Motoristas" />
            <Margin />
            <Highlight title="Motoristas" subTitle="Aqui você pode gerenciar os motoristas do seu colégio." />
            <FlatList
                data={drivers}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <GroupCard
                        title={item.name}
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
                onPress={handleOnButton}
            />
        </Container>
    );
}
