import { getDocs, collection, getFirestore, deleteDoc, doc, query, where } from "firebase/firestore";

import app from '@libs/firebase/config'

const db = getFirestore(app)

export async function groupRemoveByName(groupDeleted: string) {
    try {
        // Buscar todos os grupos
        const querySnapshot = await getDocs(collection(db, 'groups'));
        const storedGroups = querySnapshot.docs.map(doc => ({ id: doc.id, name: doc.data().name }));

        // Filtrar grupos para remover o grupo especificado
        const groups = storedGroups.filter(group => group.name !== groupDeleted);

        // Atualizar a coleção 'groups' removendo o grupo especificado
        const groupToDelete = storedGroups.find(group => group.name === groupDeleted);
        if (groupToDelete) {
            await deleteDoc(doc(db, 'groups', groupToDelete.id));
        }

        // Remover documentos relacionados na coleção 'students'
        const studentsQuery = query(collection(db, 'students'), where('group', '==', groupDeleted));
        const studentsSnapshot = await getDocs(studentsQuery);
        studentsSnapshot.forEach(async (studentDoc) => {
            await deleteDoc(doc(db, 'students', studentDoc.id));
        });

        console.log('Grupo e dados associados removidos com sucesso!');
    } catch (error) {
        console.error('Erro ao remover grupo: ', error);
        throw error;
    }
}