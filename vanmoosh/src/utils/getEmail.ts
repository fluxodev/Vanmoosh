import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import app from '@libs/firebase/config'

/**
 * Função para buscar o email do usuário no Firestore
 * @returns O email do usuário atual ou null caso não encontrado
 */
export const getUserEmail = async (): Promise<string | null> => {
  try {
    // Obtém o UID do usuário atual
    const auth = getAuth(app);
    const user = auth.currentUser;

    if (!user) {
      throw new Error("Usuário não autenticado.");
    }

    const uid = user.uid;

    // Referência ao Firestore
    const db = getFirestore();

    // Referência ao documento do usuário na coleção "users"
    const userDocRef = doc(db, "users", uid);

    // Obtém o documento do Firestore
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      throw new Error("Documento do usuário não encontrado.");
    }

    // Obtém o campo email do documento
    const userData = userDoc.data();
    const email = userData?.email;

    if (!email) {
      throw new Error("Email não encontrado no documento do usuário.");
    }

    return email;
  } catch (error) {
    console.error("Erro ao buscar o email do usuário:", error);
    return null;
  }
};