import { createContext, ReactNode, useState, useEffect } from "react";
import { User, defaultUser } from "@utils/users";
import { signInWithEmail } from "@libs/firebase/auth";
import { saveUser, getUser } from "@storage/auth/storageUser";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth()

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
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user;
      
      if(!userCredential) {
        console.log("User credentials null or undefined")
        return
      }

      const loggedInUser = {
        ...user,
        email,
        password,
      };

      setUser({ ...loggedInUser, uid: user.uid});
      await saveUser();

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
