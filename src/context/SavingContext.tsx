import React, { createContext, useContext, useState } from "react";
import { SavingInterface } from "../interface/saving.interface";
import { getStoredData, setStoredData } from "../services/localStorage.service";
import { LocalStoreKeys } from '../enums/localStoreKeys.enum';
import { useMutation } from "@tanstack/react-query";
import { getSavings } from "../api/savings/savingsApi";
import { getServiceMessageError } from "../services/errorHandler.service";


export interface ISavingState {
    isFetchDone?: boolean;
    savings?: SavingInterface[];
}

const initStateBase: ISavingState = {
    savings: [],
}

interface IContextProps {
    savingState: ISavingState;
    setSavingState: (value: ISavingState) => void;
    savingActions: ISavingActions;
    savingRequestSucces: boolean;
    savingRequestIsLoading: boolean;
}

export interface ISavingActions {
    requestSavings: () => void;
    setSavings: (value: SavingInterface[]) => void;
    addSaving: (saving: SavingInterface) => void;
}

const initState = getStoredData<ISavingState>(initStateBase, LocalStoreKeys.savings);

const SavingsContext = createContext({} as IContextProps);

const SavingsContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [savingState, setSavingState] = useState<ISavingState>(initState)

    const savingMutation = useMutation({
        mutationFn: () => getSavings(),
        onSuccess: (data) => {
            setSavingState({ ...savingState, savings: data, isFetchDone: true })
        },
        onError: (error: unknown) => {
            console.log(getServiceMessageError(error));
            setSavingState({ ...savingState, savings: [], isFetchDone: true })
        }
    })

    const requestSavings = () => {
        setSavingState({ ...savingState });
        savingMutation.mutate();
    }

    const addSaving = (saving: SavingInterface) => {
        setSavingState((prev) => {
            const newSaving = prev.savings ? [...prev.savings, saving] : [saving];
            const newState: ISavingState = {
                ...prev,
                savings: newSaving
            }
            setStoredData(LocalStoreKeys.savings, newState)
            return newState
        })
    }

    return (
        <SavingsContext.Provider
            value={{
                savingState,
                setSavingState,
                savingActions: {
                    requestSavings,
                    setSavings: (value) => setSavingState({...savingState, savings: value}),
                    addSaving
                },
                savingRequestIsLoading: savingMutation.isPending,
                savingRequestSucces: savingMutation.isSuccess,
            }}
        >
            {children}
        </SavingsContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useSavingsContext = () => {
    return useContext(SavingsContext);
}

export default SavingsContextProvider;