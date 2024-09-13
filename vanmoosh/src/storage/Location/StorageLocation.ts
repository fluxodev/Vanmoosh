import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@vanmoosh:location";

export async function getStorageLocations() {
  try {
    const storage = await AsyncStorage.getItem(STORAGE_KEY);
    const response = storage ? JSON.parse(storage) : [];

    return response;
  } catch (error) {
    console.error(error);
  }
}

type locationProps = {
    latitude: number,
    longitude: number,
    timestamp: number
}

export async function saveStorageLocation(n: locationProps) {
    const storage = await getStorageLocations();
    storage.push(n)

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(storage))
}

export async function removeLocationsStorage(){
    await AsyncStorage.removeItem(STORAGE_KEY);
}