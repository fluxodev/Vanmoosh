import { VanStatus } from "@components/VanStatus";
import { Header } from "@components/Header";
import { Container, Margin, HeaderMargin, FlatlistView } from "./style";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { DriverNavigatorRoutesProps } from "@routes/Routes_Driver/app.routes";
import { useCallback, useState } from "react";
import { getDriverPlate } from "@libs/firebase/db/Driver/getPlate";
import { Alert } from "react-native";
import { checkOpenTrip } from "@libs/firebase/db/Driver/checkTrip";
import { getHistoricLogs } from "@libs/firebase/db/Driver/getHistoricLog";
import { FlatList } from "react-native";
import { HistoricCard, HistoricCardProps } from "@components/HistoricCard";
import { getAuth } from "firebase/auth";
import app from "@libs/firebase/config";

const auth = getAuth(app);

export function StartRoute() {
  const [hasOpenTrip, setHasOpenTrip] = useState<boolean>(false);
  const [plate, setPlate] = useState<string | null>(null);
  const [historicLogs, setHistoricLogs] = useState<HistoricCardProps[]>([]); // Estado para armazenar os logs históricos

  const navigation = useNavigation<DriverNavigatorRoutesProps>();

  async function handleRegisterDepartureOrArrival() {
    try {
      const result = await checkOpenTrip();

      if (result && result.idHistoric) {
        const logId = result.idHistoric;
        navigation.navigate("Arrival", { id: logId });
      } else {
        const { idHistoric }: any = result
        setHasOpenTrip(true);
        navigation.navigate("Departure", { id: idHistoric });
      }
    } catch (error) {
      console.error("Erro: > ", error);
      Alert.alert("Erro", "Não foi possivel registrar o início da viagem.");;
      setHasOpenTrip(false);
    }
  }

  const fetchPlate = async () => {
    try {
      const plate = await getDriverPlate();
      setPlate(plate);
    } catch (error) {
      console.error("Erro ao obter a placa do motorista:", error);
    }
  };

  const fetchTripStatus = async () => {
    try {
      const result = await checkOpenTrip();
      if(result){
        setHasOpenTrip(true)
      } else {
        setHasOpenTrip(false)
      }
    } catch (error) {
      console.error("Erro ao verificar o status da viagem:", error);
    }
  };

  const fetchHistoric = async () => {
    try {
      const userId = auth.currentUser?.uid; // Substitua pelo ID do usuário atual
      const logs = await getHistoricLogs(userId);
      
      // Mapeando os dados recebidos para o formato esperado pelo HistoricCard
      const formattedLogs = logs.map((log) => ({
        id: log.id,
        placaVeicular: log.plate,
        isSync: true,
      }));

      setHistoricLogs(formattedLogs);
    } catch (error) {
      console.error("Erro ao buscar os logs históricos:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchPlate();
      fetchTripStatus();
      fetchHistoric();
    }, [])
  );

  function handleOnButtonHistoricLog(id: string){
    navigation.navigate('Arrival', {id})
  }

  return (
    <Container>
      <HeaderMargin>
        <Header showBackButton />
      </HeaderMargin>

      <Margin>
        <VanStatus
          inTrip={hasOpenTrip}
          placa={plate}
          onPress={handleRegisterDepartureOrArrival}
        />
      
      </Margin>

      <FlatlistView>
      <FlatList
          data={historicLogs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <HistoricCard
              data={{
                id: item.id,
                placaVeicular: item.placaVeicular,
                isSync: item.isSync,
              }}
              onPress={() => handleOnButtonHistoricLog(item.id)}
            />
          )}
          
        /> 
      </FlatlistView>


    </Container>
    
  );
}
