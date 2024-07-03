import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "./storageConfig";

export async function getAllGroups() {
    try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION);

    const groups: string[] = storage ? JSON.parse(storage) : []; // se storage tem conteudo, vai virar objeto, caso contrario devolvera um array vazio

    return groups;
    } catch (error) {
        throw error;
    }
}