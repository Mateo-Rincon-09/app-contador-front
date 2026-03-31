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

export const movements = (request: MovementRequest): Promise<MovementResponse> => {
    return fetchApi.post(movimientoEndpoint.post.create, request).then((res) => res.data);
}

export const getMovementsPagination = (data: IPaginationRequest): Promise<IPaginationResponse<MovimientoInterface>> => {
    return fetchApi.post(movimientoEndpoint.post.listMovements, data).then((res) => res.data);
};