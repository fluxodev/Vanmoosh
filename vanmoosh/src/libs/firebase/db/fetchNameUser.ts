import { getAuth } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import app from '@libs/firebase/config'
export async function fetchNameUser(){
    const auth = getAuth(app)
    const db = getFirestore(app)
    const user = auth.currentUser;

    try {
        
        if( !user){
            throw new Error 
        }

        const userUid = user.uid

        const userDocRef = doc(db, 'users', userUid);
        const userDocSnapshot = await getDoc(userDocRef)

        if(!userDocSnapshot.exists()){
            console.log('Usuário Não Encontrado');
        }

        const userData: any = userDocSnapshot.data()

        const username = userData.name
        
        return username

    } catch (error) {
        console.error(error)
    }
}