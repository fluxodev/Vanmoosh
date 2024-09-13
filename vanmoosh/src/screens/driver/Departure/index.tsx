import { Container } from "./style"
import HeaderDeparture from "@components/HeaderDeparture"
import PlacaInput from "@components/PlacaInput"
import { ButtonAdd } from "@components/Button"
import { useEffect, useState } from "react"
import { DriverNavigatorRoutesProps } from "@routes/Routes_Driver/app.routes"
import { useNavigation } from "@react-navigation/native"
import { Alert } from "react-native"
import { createHistoricLog } from "@libs/firebase/db/Driver/historic"
import { useRoute } from "@react-navigation/native"
import { useForegroundPermissions, watchPositionAsync, LocationAccuracy, LocationSubscription, LocationObjectCoords, requestBackgroundPermissionsAsync } from 'expo-location'

import { getReverseGeolocation } from "@utils/getAdressLocation"
import { Loading } from "@components/Loading"
import { InfoLocation } from "@components/LocationInfo"
import { Van } from "phosphor-react-native"

import { ViewMap } from "@components/MapView"
import { startLocTask } from "src/tasks/backgroundLocationTask"

type RouteParamsProps = {
  id: string
}

export function Departure() {

  const route = useRoute()
  const { id } = route.params as RouteParamsProps;

  const [isLoadingLoc, setIsLoadingLoc] = useState(true)
  const [isRegistered, setIsRegistered] = useState(false)
  const [addressCurrent, setAddressCurrent] = useState<string | null>(null)
  const [coordsCurrent, setCoordsCurrent] = useState<LocationObjectCoords | null>(null)

  const [ locationForegrounPermission, requestLocationForegrounPermission ] = useForegroundPermissions()



  const navigation = useNavigation<DriverNavigatorRoutesProps>()

  async function handleDeparture(){
    try {
      
      setIsRegistered(true)
      

      const backgrounPermissions = await requestBackgroundPermissionsAsync()
      console.log(backgrounPermissions);
      
      if(!backgrounPermissions.granted){
        setIsRegistered(false)
        return Alert.alert('Localização', 'É necessário permitir a localização em segundo plano.')
      }

      if(!coordsCurrent?.latitude && !coordsCurrent?.longitude){
        return Alert.alert('Localização', 'Não foi possível obter a localização atual. Tente novamente!')
      }

      const log = await createHistoricLog();
      console.log(`Histórico de ID ${id} alterado para o status: ${log.status}`);
      await startLocTask();

      
      navigation.goBack()
      
    } catch (error) {
      console.log("Erro: > ", error);
      Alert.alert("Erro", 'Não foi possivel registrar o início da viagem.')
      setIsRegistered(false)
      return
    }
  }

  useEffect(() => {
    requestLocationForegrounPermission()
  }, []);

  useEffect(() => {

    if(!locationForegrounPermission?.granted) {
      return;
    }

    let sub: LocationSubscription

    watchPositionAsync({
      accuracy: LocationAccuracy.High,
      timeInterval: 10
    }, (location) => {
      setCoordsCurrent(location.coords)
      const lat = location.coords.latitude.toString()
      const longi = location.coords.longitude.toString()
      getReverseGeolocation(lat, longi)
      .then((address) => {
        if (address && address.address && address.address.road) {
          setAddressCurrent(address.address.road)
        } else {
          console.log('Rua não encontrada');
        }
      })
      .finally(() => setIsLoadingLoc(false))
      
    }).then((response) => sub = response);
    

    return () => {
      if(sub){
        sub.remove()
      }
    };


  }, [locationForegrounPermission])

  if(!locationForegrounPermission?.granted) {
    return (
      <Container>
        <HeaderDeparture title="Sem permissão" />
      </Container>
    )
  }

  if(isLoadingLoc){
    return (
      <Loading />
    )
  }

  return (


    
    <Container>
        <HeaderDeparture title="Início">
        </HeaderDeparture>


        {coordsCurrent && 
        <ViewMap
        coords={[
          coordsCurrent
        ]}
        />
        }
        { addressCurrent &&
        <InfoLocation icon={Van} label="Localização Atual" description={addressCurrent} />
        }
        
        <ButtonAdd title="Registrar Início" onPress={handleDeparture}/>
    </Container>

  )
}

