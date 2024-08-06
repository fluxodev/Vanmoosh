import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "users";
import { USER_STORAGE } from "@storage/storageConfig";


export async function saveUser(user: User) {
  try {
    await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
}

export async function getUser() {
  const storage = await AsyncStorage.getItem(USER_STORAGE);

  const user: User = storage ? JSON.parse(storage) : {};

  return user;
}

