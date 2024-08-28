import { getFirestore, updateDoc, doc, getDoc, arrayUnion } from "firebase/firestore";
import { AppError } from "@utils/AppError";

import app from '@libs/firebase/config'

import { StudentStorageDTO } from "@utils/StudentStorageDTO";

const db = getFirestore(app)

interface Student {
    name: string;
    [key: string]: any; 
}

export async function StudentAddByGroup(newStudent: StudentStorageDTO, group: string) {
    try {
        const groupRef = doc(db, 'groups', group);
        const groupDoc = await getDoc(groupRef);

        if (!groupDoc.exists()) {
            throw new AppError('Grupo não encontrado.');
        }

        const groupData = groupDoc.data();
        const students: Student[] = groupData.students || [];

        const studentAlreadyExists = students.some(student => student.name === newStudent.name);

        if (studentAlreadyExists) {
            throw new AppError('Aluno já cadastrado.');
        }

        await updateDoc(groupRef, {
            students: arrayUnion(newStudent)
        });

        console.log('Estudante adicionado com sucesso!');
    } catch (error) {
        console.error('Erro ao adicionar estudante: ', error);
        throw error;
    }
}