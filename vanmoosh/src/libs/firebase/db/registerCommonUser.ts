import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseInstance from "../config";
import { User } from "@utils/users";

const db = getFirestore(firebaseInstance);

type newDataProps = {
    cpf: string;
    telefone: string;
    birthdayDate: string;
    cep: string;
    address: string;
}

const auth = getAuth(firebaseInstance);




export async function registerCommomUser(newData: newDataProps) {
    return new Promise<void>((resolve, reject) => {
        onAuthStateChanged(auth, async (user) => {
          if (user) {
            const userDocRef = doc(db, "users", user.uid);
    
            try {
              await updateDoc(userDocRef, {
                ...newData,
                role: "common",
                updatedAt: new Date().toISOString(),
              });
              console.log('Dados do usuário atualizados com sucesso!');
              resolve();
            } catch (error) {
              console.error('Erro ao atualizar dados do usuário:', error);
              reject(error);
            }
          } else {
            console.error('Nenhum usuário logado');
            reject(new Error('Nenhum usuário logado'));
          }
        });
      });
    }


      