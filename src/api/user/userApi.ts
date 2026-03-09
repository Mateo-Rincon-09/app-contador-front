import fetchApi from "../fetchApi";
import { userEndpoint } from "../endpoints";
import { User } from "../../interface/user.interface";

export const getUserById = (id: string): Promise<User> => {
    return fetchApi.get(userEndpoint.getById(id)).then((res) => res.data);
};

export const refreshUserToken = (refreshToken: string): Promise<{ token: string; refreshToken: string }> => {
    return fetchApi.put(userEndpoint.put.refreshToken(refreshToken)).then((res) => res.data);
};
