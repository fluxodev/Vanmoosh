import { getDocs, collection, query, where } from "firebase/firestore";
import app from '@libs/firebase/config'
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore(app)
const auth = getAuth(app)


export async function getAllGroups() {
    try {
        const user = auth.currentUser;
        if (!user) {
            throw new Error('Usuário não está autenticado');
        }

        const q = query(collection(db, 'groups'), where('idSchool', '==', user.uid));
        const querySnapshot = await getDocs(q);
        
        const groups = querySnapshot.docs.map(doc => doc.data().name);

        return groups;
    } catch (error) {
        console.error('Erro ao buscar grupos: ', error);
        throw error;
    }
}