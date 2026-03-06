import { getFetchError } from "../api/fetchApi";

type ErrorItem = { message?: string };
type ErrorResponse = { data?: string | ErrorItem[] | { message?: string }; response?: unknown };

export const getServiceMessageError = (error: unknown): string => {
    if (!error) return "Hubo un error desconocido";

    let err = error as ErrorResponse;

    if (err.response) {
        err = getFetchError(error) as ErrorResponse;
    }

    const data = err.data;

    if (data && typeof data === "object" && !Array.isArray(data) && (data as { message?: string }).message) {
        return (data as { message: string }).message;
    }

    const list = Array.isArray(data) ? (data as ErrorItem[]) : null;

    try {
        if (list && list.length > 0 && typeof list[0] === "string") {
            return (list as unknown as string[]).join(", ");
        }

        if (list && list.length > 0) {
            return list.map((item) => item.message ?? "Error Desconocido").join(", ");
        }

        if (typeof data === "string") {
            return data;
        }
    } catch (e) {
        console.log(e);
    }
    return "Hubo un error desconocido";
};
