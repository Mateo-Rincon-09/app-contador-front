import React, { createContext, useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { MovimientoInterface } from '../interface/movimiento.interface';
import { getMovementsPagination } from "../api/movements/movementsApi";
import { LocalStoreKeys } from "../enums/localStoreKeys.enum";
import { getStoredData, setStoredData } from "../services/localStorage.service";
import { showServiceError } from "../services/errorHandler.service";

export interface IMovimientoState {
    isFetchDone?: boolean;
    movimientos?: MovimientoInterface[];
};

const initStateBase: IMovimientoState = {
    movimientos: [],
};

interface IContextProps {
    movimientoState: IMovimientoState;
    setMovimientoState: (value: IMovimientoState) => void;
    movimientoActions: IMovimientoActions;
    movimientoRequestSuccess: boolean;
    movimientoRequestIsLoading: boolean;
};

export interface IMovimientoActions {
    requestMovimientos: () => void;
    setMovimientos: (value: MovimientoInterface[]) => void;
    addMovimiento: (movimiento: MovimientoInterface) => void;
};

const initState = getStoredData<IMovimientoState>(initStateBase, LocalStoreKeys.movimientos);

const MovimientosContext = createContext({} as IContextProps);

const MovimientosContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [movimientoState, setMovimientoState] = useState<IMovimientoState>(initState);

    const movimientoMutation = useMutation({
        mutationFn: () => getMovementsPagination({ currentPage: 1, pageSize: 20 }),
        onSuccess: (data) => {
            setMovimientoState({ ...movimientoState, movimientos: data.items, isFetchDone: true });
        },
        onError: (error: unknown) => {
            showServiceError(error, "Error al obtener movimientos");
            setMovimientoState({ ...movimientoState, movimientos: [], isFetchDone: true });
        },
    });

    const requestMovimientos = () => {
        setMovimientoState({ ...movimientoState });
        movimientoMutation.mutate();
    };

    const addMovimiento = (movimiento: MovimientoInterface) => {
        setMovimientoState((prev) => {
            const newMovimientos = prev.movimientos ? [...prev.movimientos, movimiento] : [movimiento];
            const newState: IMovimientoState = {
                ...prev,
                movimientos: newMovimientos
            };
            setStoredData(LocalStoreKeys.movimientos, newState);
            return newState;
        });
    };

   
    return (
        <MovimientosContext.Provider
            value={{
                movimientoState,
                setMovimientoState,
                movimientoActions: {
                    requestMovimientos,
                    setMovimientos: (value) => setMovimientoState({ ...movimientoState, movimientos: value }),
                    addMovimiento,
                },
                movimientoRequestIsLoading: movimientoMutation.isPending,
                movimientoRequestSuccess: movimientoMutation.isSuccess,
            }}
        >
            {children}
        </MovimientosContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMovimientosContext = () => {
    return useContext(MovimientosContext);
};

export default MovimientosContextProvider;
