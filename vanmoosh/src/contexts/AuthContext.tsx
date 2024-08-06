import { createContext, ReactNode, useState } from "react";
import { User, defaultUser } from "@utils/users";
import { signInWithEmail } from "@libs/firebase/auth";
import { saveUser } from "@storage/auth/storageUser";

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

  async function signIn(email: string, password: string) {
    try {
      const response = await signInWithEmail(email, password);
      console.log(response);
      


      
      if (response) {
        console.log(response.message);
        return;
      }

      setUser({
        ...user,
        email,
        password,
      })
      

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
