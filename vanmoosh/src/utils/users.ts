export type User = {
    name: string;
    email: string;
    password: string;
    age: number;
    role: "common" | "school" | "driver" | "admin";
    createdAt: string;
  };

  // Default User values for initialization
  export const defaultUser: User = {
    name: "",
    email: "",
    password: "",
    age: 0,
    role: "school",
    createdAt: "",
  };