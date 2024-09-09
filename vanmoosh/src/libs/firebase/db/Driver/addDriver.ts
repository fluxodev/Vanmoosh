import { getFirestore, doc, setDoc } from "firebase/firestore";
import firebaseInstance from "../../config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const db = getFirestore(firebaseInstance);
const auth = getAuth(firebaseInstance);

type AddDriver = {
    address: string, 
    email: string, 
    modeloVan: string, 
    name: string, 
    placaVeicular: string, 
    password: string, 
    telefone: string,
    cpf: string,
}

export const addDriver = async ({email, password, telefone, address, modeloVan, placaVeicular, name, cpf}: AddDriver) => {
    try {
        // Salva o usuário "school" atual
        const currentUser = auth.currentUser;

        // Cria o usuário motorista no Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const idDriver = user.uid;

        // Restaura o usuário "school" atual
        if (currentUser) {
            await auth.updateCurrentUser(currentUser);
        }

        // Documento na coleção 'driver'
        const motoristaDocRef = doc(db, 'driver', idDriver);
        const updatedDriver = {
            idSchool: currentUser?.uid,
            idDriver: idDriver,
            address: address,
            email: email,
            modeloVan: modeloVan,
            name: name,
            placaVeicular: placaVeicular,
            telefone: telefone,
            cpf: cpf
        };

        // Documento na coleção 'users'
        const motoristaUserDocRef = doc(db, 'users', idDriver);
        const updatedMotoUser = {
            idDriver: idDriver,
            name: name,
            cpf: cpf,
            email: email,
            senha: password,
            telefone: telefone,
            address: address,
            role: "driver"
        };

        await setDoc(motoristaDocRef, updatedDriver, { merge: true });
        await setDoc(motoristaUserDocRef, updatedMotoUser, { merge: true });

        console.log("Motorista adicionado com sucesso!");
    } catch (error) {
        console.error("Erro ao criar o motorista: ", error);
    }
};
