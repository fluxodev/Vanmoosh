import { createContext, ReactNode } from "react";
import { User } from "@utils/users";

export type AuthContextDataProps = {
    user: User;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const authContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({children}: AuthContextProviderProps) {
    return (
        <authContext.Provider
          value={{
            user: {
              name: "Colégio Politécnico Bento Quirino",
              email: "bentoquirino@gmail.com",
              password: "string",
              age: 0,
              role: "school",
              createdAt: "2024-08-01T21:46:55.713Z",
              avatar:
                "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
            },
          }}
        >
          {children}
        </authContext.Provider>
    )
}