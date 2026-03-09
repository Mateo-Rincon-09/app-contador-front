import { User } from "../../interface/user.interface";
import { authEndpoint } from "../endpoints";
import fetchApi from "../fetchApi";


export const loginAuth = (id: string): Promise<User> => {
    return fetchApi.post(authEndpoint.login, { id }).then((res) => res.data);
};

export const registerAuth = (nombre: string, email: string, password: string): Promise<User> => {
    return fetchApi.post(authEndpoint.register, { nombre, email, password }).then((res) => res.data);
};