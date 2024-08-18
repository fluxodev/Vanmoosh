import { getAllGroups } from "./getAllGroups";
import { addDoc, collection, getFirestore } from "firebase/firestore";

import app from '@libs/firebase/config'

const db = getFirestore(app)

export async function createGroup(newGroup: string) {
    try {
        const storedGroups = await getAllGroups();

        const groupAlreadyExists = storedGroups.includes(newGroup);

        if (groupAlreadyExists) {
            throw new Error('Essa turma já existe.');
        }

        // Adiciona o novo grupo na coleção 'groups'
        await addDoc(collection(db, 'groups'), {
            name: newGroup,
            createdAt: new Date()
        });

        console.log('Grupo adicionado com sucesso!');
    } catch (error) {
        console.error('Erro ao adicionar grupo: ', error);
        throw error;
    }
}