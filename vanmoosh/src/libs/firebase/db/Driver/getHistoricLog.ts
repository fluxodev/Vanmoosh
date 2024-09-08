import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import app from '@libs/firebase/config';

const db = getFirestore(app);

export async function getHistoricLogs(userId: string | undefined): Promise<any[]> {
  try {
    const logs: any[] = [];
    const q = query(collection(db, 'historic'), where('userId', '==', userId));
    const snapshot = await getDocs(q);
    snapshot.forEach(doc => {
      logs.push({ id: doc.id, ...doc.data() });
    });
    return logs;
  } catch (error) {
    console.error("Erro ao buscar os logs históricos:", error);
    throw error;
  }
}
