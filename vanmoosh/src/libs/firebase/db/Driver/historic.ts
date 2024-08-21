import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import app from '@libs/firebase/config'

const db = getFirestore(app);
const auth = getAuth(app);

export async function createHistoricLog() {
    const user = auth.currentUser;
  
    if (!user) {
      throw new Error('Usuário não está logado');
    }
  
    const userId = user.uid;
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
export async function endRouteLog() {
    const user = auth.currentUser;
  
    if (!user) {
      throw new Error('Usuário não está logado');
    }
  
    const userId = user.uid;
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
      status: 'finished',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  
    const logDocRef = doc(collection(db, 'historic'), randomId);
    await setDoc(logDocRef, newLog);
  
    return newLog;
  }