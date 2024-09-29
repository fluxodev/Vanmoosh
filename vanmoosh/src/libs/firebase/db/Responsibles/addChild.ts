import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import firebaseInstance from "../../config";
const db = getFirestore(firebaseInstance)
const auth = getAuth(firebaseInstance)

type AddChild = {
    name: string,
    birthdayDate: string,
    adress: string,
    cpf: string,
    anoEscolar: string,
}

export const addChild = async ({name, birthdayDate, adress, cpf, anoEscolar}: AddChild): Promise<boolean> => {
    try {
        
        const currentUser = auth.currentUser;
        const idStudent = Math.floor(Math.random() * 1000000).toString();
        const uidResponsible = currentUser?.uid;
        if (currentUser) {
            await auth.updateCurrentUser(currentUser);
        }

        const childDocRef = doc(db, 'alunos', idStudent);
        const updatedChild = {
            idStudent: idStudent,
            name: name,
            birthdayDate: birthdayDate,
            uidResponsible: uidResponsible,
            adress: adress,
            cpf: cpf,
            anoEscolar: anoEscolar,
        };


        await setDoc(childDocRef, updatedChild, { merge: true });

        return true;
    } catch (error) {
        console.error("Erro ao registrar agregado: ", error);
        return false;
    }
};