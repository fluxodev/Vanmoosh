export type User = {
    name: string;
    email: string;
    password: string;
    cpf?: string;
    telefone: string;
    birthdayDate?: string;
    cep: string;
    address: string;
    aggregate?: string;
    role: "common" | "school" | "driver" | "admin";
    createdAt: string;
    avatar?: string;
  };

  // Default User values for initialization
  export const defaultUser: User = {
    name: "",
    email: "",
    password: "",
    cpf: "",
    telefone: "",
    birthdayDate: "",
    cep: "",
    address: "",
    aggregate: "",
    role: "common",
    createdAt: "",
  };

  // acima foi criado DTOs para controle dos nossos usuários, com isso podemos criar um contexto para manipular os dados do usuário