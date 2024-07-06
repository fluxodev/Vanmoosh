import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";
import { STUDENT_COLLECTION } from "@storage/groups/storageConfig";
import { StudentStorageDTO } from "./StudentStorageDTO";
import { StudentGetByGroup } from "./studentsGetByGroup";

export async function StudentAddByGroup(newStudent: StudentStorageDTO, group: string) {

    try {
        const storedStudents = await StudentGetByGroup(group);

        const studentsAlreadyExists = storedStudents.filter(student => student.name === newStudent.name);
    // a lógica é a mesma do playerAdd, mas com a adição de um novo campo
        
        if(studentsAlreadyExists.length > 0) {
            throw new AppError('Aluno já cadastrado.')
        }

        const storage = JSON.stringify([...storedStudents, newStudent]);
        
        await AsyncStorage.setItem(`${STUDENT_COLLECTION}-${group}`, storage);

    } catch (error) {
        throw (error)
    } 

}