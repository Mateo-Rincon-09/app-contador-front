import axios from 'axios';

// En Vite se usa import.meta.env en lugar de process.env
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

const fetchApi = axios.create({
    baseURL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
    }
});

// Request interceptor para agregar token automáticamente
fetchApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor para manejar errores
fetchApi.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            window.location.assign('/');
        }
        return Promise.reject(error);
    }
);

export const setDefaultToken = (token: string) => {
    fetchApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem('token', token);
};

export const initializeFetchApi = (token: string) => {
    if (token) {
        fetchApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
};

export const getFetchError = (e: any) => {
    if (e.response) {
        if (e.response.status === 401) {
            window.location.assign("/");
        }
        return e.response;
    }
    return {
        status: 500,
        message: e.error,
    };
};

export default fetchApi;