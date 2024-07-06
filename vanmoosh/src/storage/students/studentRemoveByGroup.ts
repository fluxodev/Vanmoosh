import AsyncStorage from "@react-native-async-storage/async-storage";

import { STUDENT_COLLECTION } from "@storage/groups/storageConfig";
import { StudentGetByGroup } from "./studentsGetByGroup";

export async function studentRemoveByGroup(studentName: string, group: string) {
    try {
        
        const storage = await StudentGetByGroup(group);

        const filtered = storage.filter(student => student.name !== studentName);

        const students = JSON.stringify(filtered);

        await AsyncStorage.setItem(`${STUDENT_COLLECTION}-${group}`, students);

    } catch (error) {
        throw error;
    }

}