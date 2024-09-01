import { getFirestore, doc, setDoc, DocumentReference, Timestamp } from "firebase/firestore";
import firebaseInstance from "../../config"
import { StringSchema } from "yup";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const db = getFirestore(firebaseInstance);
const auth = getAuth(firebaseInstance);


export const addDriver = async (adress : string, birthdayDate : Date, cep : string, email : string, modeloVan : string, name : string, placaVeicular : string, senha : string, telefone : string) => {
    try{
        
        const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
        const user = userCredential.user;
        const idDriver = user.uid;

        const motoristaDocRef = doc(db, 'drivers', idDriver);
        const updatedDriver = {
            idDriver: idDriver,
            adress: adress,
            birthdayDate: Timestamp.fromDate(birthdayDate),
            cep: cep,
            email: email,
            modeloVan: modeloVan,
            name: name,
            placaVeicular: placaVeicular,
            telefone: telefone
        }

        const motoristaUserDocRef = doc(db, 'users', idDriver);
        const updatedMotoUser = {
            idDriver: idDriver,
            name: name,
            email: email,
            senha: senha,
            telefone: telefone,
            birthdayDate: birthdayDate,
            adress: adress,
            cep: cep,
            role: "Driver"

        }

        await setDoc(motoristaDocRef, updatedDriver, { merge: true });
        await setDoc(motoristaUserDocRef, updatedMotoUser, { merge: true });
        console.log("Motorista adicionado com sucesso!");
    } catch (error) {
        console.error("Erro ao criar o motorista: ", error);
    }
}

