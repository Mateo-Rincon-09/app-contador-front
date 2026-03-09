import axios from 'axios';

const fetchApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
    },
});

export const setDefaultToken = (token: string) => {
    fetchApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const clearToken = () => {
    delete fetchApi.defaults.headers.common["Authorization"];
};

export const getFetchError = (e: unknown) => {
    if (!(e instanceof Error) && typeof e !== "object") return { status: 500, message: "Unknown error" };
    const err = e as { response?: { status: number }; error?: string };
    if (err.response) {
        if (err.response.status === 401) {
            window.location.assign("/");
        }
        return err.response;
    }
    return {
        status: 500,
        message: err.error,
    };
};

export default fetchApi;