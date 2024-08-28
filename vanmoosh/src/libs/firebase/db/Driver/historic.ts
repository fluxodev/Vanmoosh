import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc, collection, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import app from '@libs/firebase/config'

const db = getFirestore(app);
const auth = getAuth(app);

const TEST_MODE = true;
const TEST_USER_ID = "vWsHkFp9qvV10T6yCnMr";

export async function createHistoricLog() {
    const user = TEST_USER_ID;
  
    if (!TEST_MODE) {
      throw new Error('Usuário não está logado');
    }
  
    const userId = TEST_USER_ID;
    const randomId = Math.floor(Math.random() * 1000000).toString();
    const userDocRef = doc(db, 'driver', userId);
    const userDoc = await getDoc(userDocRef);
  
    if (!userDoc.exists()) {
      throw new Error('Usuário não encontrado');
    }
  
    const plate = userDoc.data()?.plate;
  
    const newLog = {
      idHistoric: randomId,
      userId: userId,
      plate: plate,
      status: 'departure',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  
    const logDocRef = doc(collection(db, 'historic'), randomId);
    await setDoc(logDocRef, newLog);
  
    return newLog;
  }

  export async function updateHistoricLog() {
    const user = auth.currentUser;
  
    if (!user) {
      throw new Error('Usuário não está logado');
    }
  
    const userId = user.uid;
    const userDocRef = doc(db, 'driver', userId);
    const userDoc = await getDoc(userDocRef);
  
    if (!userDoc.exists()) {
      throw new Error('Usuário não encontrado');
    }
  
    const updatedLog = {
      status: 'arrival',
      updatedAt: new Date(),
    };
  
    await updateDoc(userDocRef, updatedLog);
  
    return updatedLog;
  }