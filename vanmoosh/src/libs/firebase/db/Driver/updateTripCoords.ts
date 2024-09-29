import { getAuth } from "firebase/auth";
import {
  getFirestore,
  doc,
  updateDoc,
  DocumentReference,
} from "firebase/firestore";
import app from "@libs/firebase/config";

interface Coord {
    latitude: number;
    longitude: number;
    timestamp: number;
  }
  

type Props = {
coordenates: Coord[],
  id: string,
};

export async function updateTripCoord({ coordenates, id }: Props) {
  try {
    const auth = getAuth(app);
    const db = getFirestore(app);

    const user = auth.currentUser;

    if (!user) {
      console.error("Nenhum usuário logado");
    }

    const tripRef: DocumentReference = doc(db, "historic", id);

    await updateDoc(tripRef, {
      coords: coordenates,
    });

  } catch (error) {
    console.error(error);
  }
}
