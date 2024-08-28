import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const TEST_MODE = true;
const TEST_USER_ID = "vWsHkFp9qvV10T6yCnMr";

export async function checkOpenTrip() {
  const db = getFirestore();
  const auth = getAuth();
  const user = TEST_USER_ID;

  if (!user) {
    throw new Error("Usuário não está logado");
  }

  const userId = TEST_USER_ID;
  const historicRef = collection(db, "historic");
  const q = query(historicRef, where("userId", "==", userId), where("status", "==", "departure"));

  const querySnapshot = await getDocs(q);

  return !querySnapshot.empty;
}
