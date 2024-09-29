import { getAllGroups } from "./getAllGroups";
import { setDoc, doc, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import app from '@libs/firebase/config'

const db = getFirestore(app)
const auth = getAuth(app)

function generateRandomCode() {
    return Math.floor(100000 + Math.random() * 900000);
}

export async function createGroup(newGroup: string) {
    try {
        const idSchool = auth.currentUser?.uid;

        const storedGroups = await getAllGroups();

        const groupAlreadyExists = storedGroups.includes(newGroup);

        if (groupAlreadyExists) {
            throw new Error('Essa turma já existe.');
        }

        const codigo = generateRandomCode();

        // Adiciona o novo grupo na coleção 'groups' com o nome do documento igual ao campo 'codigo'
        await setDoc(doc(db, 'groups', codigo.toString()), {
            idSchool: idSchool,
            name: newGroup,
            createdAt: new Date(),
            codigo: codigo, 
            alunos: [] 
        });

    } catch (error) {
        console.error('Erro ao adicionar grupo: ', error);
        throw error;
    }
}
