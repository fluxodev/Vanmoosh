import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from '@libs/firebase/config'

// Inicialize o Firebase
const firestore = getFirestore(app);
const auth = getAuth(app);

const TEST_MODE = true;
const TEST_USER_ID = "vWsHkFp9qvV10T6yCnMr";

export async function getDriverPlate(): Promise<string | null> {
  return new Promise<string | null>((resolve, reject) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const driverDocRef = doc(firestore, "driver", user.uid);
          const driverDoc = await getDoc(driverDocRef);


          if (driverDoc.exists()) {
            const plate = driverDoc.data().placaVeicular;
            resolve(plate);
          } else {
            // console.log("Documento do motorista não encontrado.");
            resolve(null);
          }
        } catch (error) {
          console.error("Erro ao acessar o documento do motorista:", error);
          reject(error);
        }
      } else {
        // console.log("Nenhum usuário logado.");
        resolve(null);
      }
    });
  });
}