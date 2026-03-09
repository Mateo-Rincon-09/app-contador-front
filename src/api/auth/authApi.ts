import { User } from "../../interface/user.interface";
import { authEndpoint } from "../endpoints";
import fetchApi from "../fetchApi";

export interface AuthResponse {
    user: User;
    token: string;
}

export const loginAuth = (id: string): Promise<User> => {
    return fetchApi.post(authEndpoint.login, id ).then((res) => res.data);
};

export const registerAuth = (request: AuthRegisterRequest): Promise<AuthResponse> => {
    return fetchApi.post(authEndpoint.register, request).then((res) => res.data);
};

export interface AuthRegisterRequest {
    name: string;
    email: string;
    password: string;
}