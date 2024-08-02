export type User = {
    name: string;
    email: string;
    password: string;
    age: number;
    role: "common" | "school" | "driver" | "admin";
    createdAt: string;
    avatar?: string;
  };

  // Default User values for initialization
  export const defaultUser: User = {
    name: "",
    email: "",
    password: "",
    age: 0,
    role: "common",
    createdAt: "",
  };

  // acima foi criado DTOs para controle dos nossos usuários, com isso podemos criar um contexto para manipular os dados do usuário