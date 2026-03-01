import axios from 'axios';

// Base URL can be replaced with an environment variable when moving
// to other environments (VITE_API_URL for example).
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

const axiosClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  // include cookies if using sessions
  withCredentials: true,
});

// request interceptor example
axiosClient.interceptors.request.use(
  (config) => {
    // attach auth token if present
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// response interceptor example
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // you can handle common error logic here
    return Promise.reject(error);
  }
);

export default axiosClient;
