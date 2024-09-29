import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import app from '@libs/firebase/config'

export async function getHistoricByUser(){
    try {
        
        const auth = getAuth(app)
        const db = getFirestore(app)

        const user = auth.currentUser?.uid

        if(!user) {
            throw new Error('Usuario não autenticado')
        }

        const historicRef = collection(db, 'historic')
        const q = query(historicRef, where('idSchool', '==', user))
        const querySnapshot = await getDocs(q)

        if(querySnapshot.empty){
            return []
        }

        const historics: any[] = []
        querySnapshot.forEach(doc => {
            historics.push(doc.data())
        });

        return historics


    } catch (error) {
        console.error(error);
        
    }
}