import { getFirestore, getDoc, doc } from "firebase/firestore";

import app from '@libs/firebase/config'

const db = getFirestore(app)

export async function getStudentsByGroup(groupName: string) {
    try {
        console.log(`Buscando alunos do grupo: ${groupName}`);
        const groupRef = doc(db, 'groups', groupName);
        const groupDoc = await getDoc(groupRef);

        if (groupDoc.exists()) {
            const groupData = groupDoc.data();
            console.log(`Dados do grupo: ${JSON.stringify(groupData)}`);
            return groupData.students || [];
        } else {
            console.log('Grupo não encontrado.');
            return [];
        }
    } catch (error) {
        console.error('Erro ao buscar alunos do grupo: ', error);
        throw error;
    }
}