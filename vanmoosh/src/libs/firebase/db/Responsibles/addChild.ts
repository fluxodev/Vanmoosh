import { getFirestore, doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseInstance from "../../config";
import { initializeApp } from "firebase/app";
import { Password } from "phosphor-react-native";

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
        console.log(uidResponsible)

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

        console.log("Agregado adicionado com sucesso!");
        return true;
    } catch (error) {
        console.error("Erro ao registrar agregado: ", error);
        return false;
    }
};