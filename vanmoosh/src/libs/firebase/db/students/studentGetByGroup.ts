import { getFirestore, doc, getDoc } from "firebase/firestore";
import { AppError } from "@utils/AppError";

import app from '@libs/firebase/config'

import { StudentStorageDTO } from "@utils/StudentStorageDTO";

const db = getFirestore(app)



interface Student {
    name: string;
    [key: string]: any; // Outros campos opcionais
}

export async function StudentGetByGroup(group: string): Promise<Student[]> {
    try {
        const groupRef = doc(db, 'groups', group);
        const groupDoc = await getDoc(groupRef);

        if (!groupDoc.exists()) {
            console.log('Grupo não encontrado.');
            return [];
        }

        const groupData = groupDoc.data();
        return groupData.students || [];
    } catch (error) {
        console.error('Erro ao buscar estudantes: ', error);
        throw error;
    }
}