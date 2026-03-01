import { fetchApi } from './fetchApi';

// Tipos/Interfaces
export interface ISignRequest {
  email: string;
  password: string;
}

export interface IAuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

// Endpoints
const authEndpoints = {
  login: '/auth/login',
  register: '/auth/register',
  logout: '/auth/logout',
  refresh: '/auth/refresh',
};

// Funciones de API
export const loginApi = (data: ISignRequest): Promise<IAuthResponse> => {
  return fetchApi.post(authEndpoints.login, data).then((res: any) => res.data);
};

export const registerApi = (data: ISignRequest): Promise<IAuthResponse> => {
  return fetchApi.post(authEndpoints.register, data).then((res: any) => res.data);
};

export const logoutApi = (): Promise<void> => {
  return fetchApi.post(authEndpoints.logout).then((res: any) => res.data);
};

export const refreshTokenApi = (): Promise<IAuthResponse> => {
  return fetchApi.post(authEndpoints.refresh).then((res: any) => res.data);
};
