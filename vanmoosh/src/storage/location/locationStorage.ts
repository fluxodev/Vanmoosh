import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = '@vanmoosh:location'

type LocationProps = {
    latitude: number;
    longitude: number;
    timestamp: number;
  }

export async function getStorageLocation(){
    try {
        const storage = await AsyncStorage.getItem(STORAGE_KEY)

        const response = storage ? JSON.parse(storage) : []

        return response
    } catch (error) {
        
    }
}

export async function saveStorageLocation(newLocation: LocationProps) {
    const storage = await getStorageLocation()
  
    storage.push(newLocation)
  
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(storage))
}

export async function removeStorageLocations() {
    await AsyncStorage.removeItem(STORAGE_KEY)
  }