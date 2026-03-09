import { UserType } from "../enums/userType.enum";

export interface User {
  id: string;
  nombre: string;
  email: string;
  password?: string;
  type?: UserType;
  createdAt?: string;
}
