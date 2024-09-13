import { createContext, ReactNode, useState, useEffect } from "react";
import { User, defaultUser } from "@utils/users";
import { signInWithEmail } from "@libs/firebase/auth";
import { saveUser, getUser } from "@storage/auth/storageUser";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc } from '@firebase/firestore'
import { getDoc, getFirestore } from "firebase/firestore";
import app from "@libs/firebase/config"

const auth = getAuth()
export const currentUser = auth.currentUser

export type AuthContextDataProps = {
  user: User;
  signIn: (email: string, password: string) => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const authContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    async function loadUser() {
      const storedUser = await getUser();
      
      if (storedUser) {
        
        setUser(storedUser);
      }
    }

    loadUser();
  }, []);

  async function signIn(email: string, password: string) {
    try {
      const auth = getAuth(app)
      const response = await signInWithEmail(email, password)
      console.log(response)
      
      if(response) {
        console.log(response.message)
        return
      }

      const currentUser : any = auth.currentUser

      const db = getFirestore(app);
      const userDoc = await getDoc(doc(db, 'users', currentUser.uid));

      const userData : any = userDoc.data();
      const role = userData.role;
      console.log(role)
      
      // if (userDoc.exists()) {
      const loggedInUser = {
        ...user,
        email,
        password,
        role,
      };
      console.log(loggedInUser)
      setUser({ ...loggedInUser});
      await saveUser();
    // }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <authContext.Provider
      value={{
        user,
        signIn,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
