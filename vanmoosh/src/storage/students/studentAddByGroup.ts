import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";
import { STUDENT_COLLECTION } from "@storage/groups/storageConfig";
import { StudentStorageDTO } from "./StudentStorageDTO";

export async function playerAddByGroup(newPlayer: StudentStorageDTO, group: string) {

    try {

    // a lógica é a mesma do playerAdd, mas com a adição de um novo campo
        
        await AsyncStorage.setItem(`${STUDENT_COLLECTION}-${group}`, '');

    } catch (error) {
        throw (error)
    } 

}