import { UserType } from "../enums/userType.enum";

export interface User {
  id: string;
  name: string;
  lastName?: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  type?: UserType;
  createdAt?: string;
}
