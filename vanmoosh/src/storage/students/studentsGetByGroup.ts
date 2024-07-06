import AsyncStorage from "@react-native-async-storage/async-storage";

import { STUDENT_COLLECTION } from "@storage/groups/storageConfig";
import { StudentStorageDTO } from "./StudentStorageDTO";

export async function StudentGetByGroup(group: string) {

    try {

       const storage = await AsyncStorage.getItem(`${STUDENT_COLLECTION}-${group}`);

       const students: StudentStorageDTO[] = storage ? JSON.parse(storage) : [];

       return students;

    } catch (error) {
        throw (error)
    } 

}