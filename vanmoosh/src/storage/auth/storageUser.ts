import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "users";

import app from '@libs/firebase/config'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app)

const USER_STORAGE = '@user_storage';

// Função para salvar o usuário no AsyncStorage
export async function saveUser() {
  try {
    const currentUser = auth.currentUser;
    if (currentUser) {
      await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(currentUser));

      console.log('> Usuário salvo: ', currentUser);
      
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getUser() {
  try {
    const storage = await AsyncStorage.getItem(USER_STORAGE);
    const user = storage ? JSON.parse(storage) : null;

    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
}