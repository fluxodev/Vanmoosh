declare module 'users' {
    // User type
    export type User = {
      name: string;
      email: string;
      age: number;
      role: "common" | "client" | "driver" | "admin";
      additionalInfo: Record<string, any>; // Melhor prática: Record<string, any>
      createdAt: string;
    };
  
    // Default User values for initialization
    export const defaultUser: User = {
      name: "",
      email: "",
      age: 0,
      role: "common",
      additionalInfo: {},
      createdAt: "",
    };
  }
  