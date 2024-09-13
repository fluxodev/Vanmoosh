import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc, collection, updateDoc, query, where, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import app from '@libs/firebase/config'

const db = getFirestore(app);
const auth = getAuth(app);

const TEST_MODE = true;
const TEST_USER_ID = "vWsHkFp9qvV10T6yCnMr";

export async function createHistoricLog() {
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

  const plate = userDoc.data()?.placaVeicular;
  const idSchool = userDoc.data()?.idSchool;

  // Verificar se já existe um registro de histórico para o mesmo usuário com status "departure"
  const historicQuery = query(collection(db, 'historic'), where('userId', '==', userId), where('status', '==', 'departure'));
  const historicSnapshot = await getDocs(historicQuery);

  if (!historicSnapshot.empty) {
    throw new Error('Já existe um registro de histórico com status "departure" para este usuário');
  }

  const randomId = Math.floor(Math.random() * 1000000).toString();
  const newLog = {
    idHistoric: randomId,
    userId: userId,
    plate: plate,
    status: 'departure',
    createdAt: new Date(),
    updatedAt: new Date(),
    idSchool: idSchool,
  };

  const logDocRef = doc(collection(db, 'historic'), randomId);
  await setDoc(logDocRef, newLog);

  return newLog;
}


export async function updateHistoricLog(idHistoric: string) {
  const user = auth.currentUser;

  if (!user) {
    throw new Error('Usuário não está logado');
  }

  const historicDocRef = doc(db, 'historic', idHistoric);
  const historicDoc = await getDoc(historicDocRef);

  if (!historicDoc.exists()) {
    throw new Error('Histórico não encontrado');
  }

  const updatedLog = {
    status: 'arrival',
    updatedAt: new Date(),
  };

  await updateDoc(historicDocRef, updatedLog);

  return updatedLog;
}
