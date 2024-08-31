import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const TEST_MODE = true;
const TEST_USER_ID = "vWsHkFp9qvV10T6yCnMr";

export async function checkOpenTrip() {
  const db = getFirestore();
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    throw new Error("Usuário não está logado");
  }

 const userId = user.uid;
  const historicRef = collection(db, "historic");
  const q = query(historicRef, where("userId", "==", userId), where("status", "==", "departure"));

  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    // Retorna o primeiro documento encontrado
    return querySnapshot.docs[0].data();
  } else {
    return false;
  }
}