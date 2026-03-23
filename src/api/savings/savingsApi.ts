import { SavingInterface } from "../../interface/saving.interface";
import { savingEndpoint } from "../endpoints";
import fetchApi from "../fetchApi";

export interface SavingRequest {
    montoMeta: number;
    progreso?: number;
}

export interface SavingResponse {
    saving: SavingInterface;
}

export const savings = (request: SavingRequest): Promise <SavingResponse> => {
    return fetchApi.post(savingEndpoint.post.create, request).then((res) => res.data);
}

export const getSavings = (): Promise<SavingInterface[]> => {
    return fetchApi.get(savingEndpoint.getAll).then((res) => res.data.savings || []);
}