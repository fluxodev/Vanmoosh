import { getFirestore, getDoc, doc, updateDoc, arrayRemove } from "firebase/firestore";
import app from '@libs/firebase/config'

const db = getFirestore(app)

interface Student {
    name: string;
    [key: string]: any; 
}


export async function studentRemoveByGroup(studentName: string, group: string) {
    try {
        const groupRef = doc(db, 'groups', group);
        const groupDoc = await getDoc(groupRef);

        if (!groupDoc.exists()) {
            return;
        }

        const groupData = groupDoc.data();
        const students: Student[] = groupData.students || [];

        const studentToRemove = students.find(student => student.name === studentName);

        if (studentToRemove) {
            await updateDoc(groupRef, {
                students: arrayRemove(studentToRemove)
            });

        } else {

        }
    } catch (error) {
        console.error('Erro ao remover estudante: ', error);
        throw error;
    }
}