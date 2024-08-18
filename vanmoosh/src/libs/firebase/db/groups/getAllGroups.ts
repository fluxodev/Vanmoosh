import { getDocs, collection } from "firebase/firestore";
import app from '@libs/firebase/config'
import { getFirestore } from "firebase/firestore";

const db = getFirestore(app)


export async function getAllGroups() {
    try {
        const querySnapshot = await getDocs(collection(db, 'groups'));
        
        const groups = querySnapshot.docs.map(doc => doc.data().name);

        return groups;
    } catch (error) {
        console.error('Erro ao buscar grupos: ', error);
        throw error;
    }
}