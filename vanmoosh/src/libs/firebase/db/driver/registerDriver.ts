import { getFirestore, doc, setDoc, DocumentReference } from "firebase/firestore";
import firebaseInstance from "../../config"

const db = getFirestore(firebaseInstance);



export const registerDriver = async (alunos: string[], email: string, idMotorista : string, idSchool: string, senha: string) => {

    const motoristaDocRef = doc(db, 'motorista', idMotorista);
    const updatedDriver = {
        alunos: alunos,
        email: email,
        idMotorista: idMotorista,
        idSchool: idSchool,
        senha: senha
    }
    await setDoc(motoristaDocRef, updatedDriver, { merge: true });
}

