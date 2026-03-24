import { MovimientoInterface } from "../../interface/movimiento.interface";
import { movimientoEndpoint } from "../endpoints";
import fetchApi from "../fetchApi";
import { IPaginationRequest, IPaginationResponse } from "../models";


export interface MovementRequest extends IPaginationRequest {
    montoIngreso: number;
    montoGasto: number;
    categoria: string;
    descripcion: string;
    fecha: Date;
}

export interface MovementResponse {
    movement: MovimientoInterface;
}

export const movements = (request: MovementRequest ): Promise <MovementResponse> => {
    return fetchApi.post(movimientoEndpoint.post.create, request).then((res) => res.data)
}

export const getMovements = (): Promise<MovimientoInterface[]> => {
    return fetchApi.get(movimientoEndpoint.getAll).then((res) => res.data.movements || []);
}


//TODO: EJEMPLO DE USO DE PAGINACION, SI ES NECESARIO
export const getMovementsPagination = (data: MovementRequest): Promise<IPaginationResponse<MovimientoInterface>> => {
    return fetchApi.post(movimientoEndpoint.getAll, data).then((res) => res.data);
};