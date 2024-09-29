import { Container, MarginBetweenButtons } from "./style"
import HeaderDeparture from "@components/HeaderDeparture"
import { ButtonAdd } from "@components/Button"
import { useCallback, useEffect, useState } from "react"
import { DriverNavigatorRoutesProps } from "@routes/Routes_Driver/app.routes"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { Alert } from "react-native"
import { ButtonIcon } from "@components/ButtonIcon"
import { Highlight } from "@components/Highlight"
import { useRoute } from "@react-navigation/native"
import { updateHistoricLog } from "@libs/firebase/db/Driver/historic"
import { stopLocTask } from "src/tasks/backgroundLocationTask"
import { getStorageLocations } from "@storage/Location/StorageLocation"
import { LatLng } from "react-native-maps"
import { ViewMap } from "@components/MapView"
import { updateTripCoord } from "@libs/firebase/db/Driver/updateTripCoords"
import { getHistoricDocument } from "@libs/firebase/db/Driver/checkTrip"
import { getReverseGeolocation } from "@utils/getAdressLocation"
import { Locations } from "@components/Locations"

type RouteParamsProps = {
  id: string
}

export function Arrival() {
  const [coords, setCoords] = useState<LatLng[]>([]);
  const [departureAddressCurrent, setDepartureAddressCurrent] = useState('')
  const [arrivalAddressCurrent, setArrivalAddressCurrent] = useState('')
  const [arrival, setArrival] = useState(false)
  const route = useRoute()
  const { id } = route.params as RouteParamsProps;
  
  const [isRegistered, setIsRegistered] = useState(false)

  const navigation = useNavigation<DriverNavigatorRoutesProps>()


  function handleRemoveVehicleUsage() {
    Alert.alert(
      'Cancelar',
      'Cancelar Atualização da Viagem?',
      [
        {
          text: 'Não', style: 'cancel'
        },
        {
          text: 'Sim', onPress: () => removeVehicleUsage() 
        }
      ]
    )
  }

  function removeVehicleUsage() {
    navigation.goBack()
  }

  async function getLocationsInfo() {
    try {
      const log = await getStorageLocations()
      const data = await getHistoricDocument(id);

      const status = data.status
      if(status === 'departure'){
      setCoords(log)
      } else {
        setCoords(data?.coords ?? [])
        const lat = JSON.stringify(data.coords[data.coords.length - 1].latitude).toString()
        const long = JSON.stringify(data.coords[data.coords.length - 1].longitude).toString()   
        

        getReverseGeolocation(lat, long).then((address) => {
          if (address && address.address && address.address.road) {
            setArrivalAddressCurrent(address.address.road)
          }
        })
      }

      if(data.coords) {

        const lat = JSON.stringify(data.coords[0].latitude).toString()
        const long = JSON.stringify(data.coords[0].longitude).toString()


        getReverseGeolocation(lat, long).then((address) => {
          if (address && address.address && address.address.road) {
            setDepartureAddressCurrent(address.address.road)
          }
        })

      }
      
    } catch (error) {
      console.error(error);
    }
  }

  async function handleArrival(){
    try {

      setIsRegistered(true)

      const result = await updateHistoricLog(id)

      navigation.goBack()
      
      const coordenates = await getStorageLocations()

      
      await updateTripCoord({coordenates, id})

      await stopLocTask()
      
    } catch (error) {
      console.error("Erro: > ", error);
      Alert.alert("Erro", 'Não foi possivel registrar o fim da viagem.')
      setIsRegistered(false)
    }
  }
  async function fetchHistoricData() {
    try {
      const data = await getHistoricDocument(id);

      const status = data.status

      setArrival(status === 'arrival');
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível carregar os dados do histórico.");
    }
  }


  useFocusEffect(
    useCallback(() => {
      getLocationsInfo()
      fetchHistoricData();
    }, [id])
  );
  return (


    
    <Container>
        <HeaderDeparture title={arrival ? 'Detalhes' : 'Chegada'}>
        </HeaderDeparture>
        
        {coords.length > 0 && 
        <ViewMap coords={coords}/>
        }

        {arrival ?
        <Locations 
        departure={{label: 'Saída em', description: departureAddressCurrent}}
        arrival={{label: 'Chegada em', description: arrivalAddressCurrent}}
        
        /> : <></>
        }

        {!arrival && (
        <>
        
          <ButtonAdd title="Registrar Chegada" onPress={handleArrival} />
          <MarginBetweenButtons />
          <Highlight title="Deseja retornar?" subTitle="Aperte o botão abaixo e retorne sem cancelar sua viagem." />
          <ButtonIcon icon="not-interested" type="primary" onPress={handleRemoveVehicleUsage} />
        </>
      )}
    </Container>

  )
}

