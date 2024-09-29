import { getFirestore, getDoc, doc } from "firebase/firestore";

import app from '@libs/firebase/config'

const db = getFirestore(app)

export async function getStudentsByGroup(groupName: string) {
    try {
        const groupRef = doc(db, 'groups', groupName);
        const groupDoc = await getDoc(groupRef);

        if (groupDoc.exists()) {
            const groupData = groupDoc.data();
            return groupData.students || [];
        } else {
            return [];
        }
    } catch (error) {
        console.error('Erro ao buscar alunos do grupo: ', error);
        throw error;
    }
}