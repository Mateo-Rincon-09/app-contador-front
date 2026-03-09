import axios from "axios";

type ErrorItem = {
  message?: string;
  error?: string;
};

type ErrorData =
  | string
  | ErrorItem
  | ErrorItem[]
  | { message?: string; error?: string; errors?: ErrorItem[] };

export const getServiceMessageError = (error: unknown): string => {

  if (!error) {
    return "Hubo un error desconocido";
  }

  // Manejo de errores de Axios
  if (axios.isAxiosError(error)) {

    const data: ErrorData | undefined = error.response?.data;

    if (!data) {
      return error.message || "Hubo un error desconocido";
    }

    // Caso: string
    if (typeof data === "string") {
      return data;
    }

    // Caso: objeto
    if (typeof data === "object" && !Array.isArray(data)) {

      if (data.message) {
        return data.message;
      }

      if (data.error) {
        return data.error;
      }

     
    }

    // Caso: lista
    if (Array.isArray(data)) {
      return data
        .map((e) => {
          if (typeof e === "string") return e;
          return e.message ?? e.error ?? "Error desconocido";
        })
        .join(", ");
    }

    return error.message || "Hubo un error desconocido";
  }

  // Error normal de JS
  if (error instanceof Error) {
    return error.message;
  }

  return "Hubo un error desconocido";
};