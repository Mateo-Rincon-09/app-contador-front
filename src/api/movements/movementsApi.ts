import { MovimientoInterface } from "../../interface/movimiento-interface";
import { movimientoEndpoint } from "../endpoints";
import fetchApi from "../fetchApi";


export interface MovementRequest {
    montoIngreso: number;
    montoGasto: number;
    categoria: string;
    descripcion: string;
    fecha: Date;
}

export interface MovementResponse {
    movement: MovimientoInterface;
}

export interface MovementsListResponse {
    movements: MovimientoInterface[];
}

export const movements = (request: MovementRequest ): Promise <MovementResponse> => {
    return fetchApi.post(movimientoEndpoint.post.create, request).then((res) => res.data)
}

export const getMovements = (): Promise<MovimientoInterface[]> => {
    return fetchApi.get(movimientoEndpoint.getAll).then((res) => res.data.movements || []);
}