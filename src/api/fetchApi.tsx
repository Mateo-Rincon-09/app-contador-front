import axios from "axios";

const fetchApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
});

fetchApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const getFetchError = (e: unknown) => {
  if (!(e instanceof Error) && typeof e !== "object")
    return { status: 500, message: "Unknown error" };

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