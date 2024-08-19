import { User } from "@utils/users";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  AuthError,
  UserCredential,
} from "firebase/auth";

import { getFirestore, doc, setDoc, DocumentReference } from "firebase/firestore";
import firebaseInstance from "../config";

import { saveUser } from "@storage/auth/storageUser";

// Interfaces para tipagem de retorno
interface RegisterUserSuccess {
  userDocRef: DocumentReference<User>;
  userCredential: UserCredential;
}

interface RegisterUserError {
  error: {
    message: string;
  };
}

// Tipo para o retorno da função registerUser
export type RegisterUserResponse = RegisterUserSuccess | RegisterUserError;

const auth = getAuth(firebaseInstance);
const db = getFirestore(firebaseInstance);

// Função para registrar um novo usuário
export const registerUser = async (user: User, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, user.email, password);

    const t = userCredential.user.uid;

    

    const userDocRef = await doc(db, "users", t);
    const updatedUser: User = {...user, createdAt: new Date().toISOString()};
    await setDoc(doc(db, "users", t), updatedUser);
    
     return { userDocRef, userCredential };
      ;
    
  } catch (error) {
    const authError = error as AuthError; 

    switch (authError.code) {
      case "auth/email-already-in-use":
        return { error: { message: "Email já cadastrado" } };
      case "auth/invalid-email":
        return { error: { message: "Email inválido" } };
      case "auth/weak-password":
        return { error: { message: "Senha fraca" } };
      case "auth/network-request-failed":
        return { error: { message: "Sem conexão com a internet" } };
      default:
        return { error: { message: "Erro desconhecido" } };
    }
  }
};

// Função para autenticar um usuário existente
export const signInWithEmail = async (email: string, password: string): Promise<AuthError | null> => {
  try {
    await signInWithEmailAndPassword(auth, email, password);

    return null;
  } catch (error) {
    // Tipagem explícita do erro como AuthError
    return error as AuthError; 
  }
};
