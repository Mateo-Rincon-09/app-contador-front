import { User } from "../../interface/user.interface";
import { authEndpoint } from "../endpoints";
import fetchApi from "../fetchApi";

export interface AuthResponse {
    user: User;
    token: string;
}

export interface AuthRegisterRequest {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface AuthLoginRequest {
    email: string;
    password: string;
}

export const loginAuth = (request: AuthLoginRequest): Promise<AuthResponse> => {
    return fetchApi.post(authEndpoint.login, request ).then((res) => res.data);
};

export const registerAuth = (request: AuthRegisterRequest): Promise<AuthResponse> => {
    return fetchApi.post(authEndpoint.register, request).then((res) => res.data);
};
