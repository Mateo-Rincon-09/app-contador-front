import React, { createContext, useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { TransactionInterface } from '../interface/transaction.interface';
import { getTransactionsPagination } from '../api/transaction/transactionApi';
import { LocalStoreKeys } from "../enums/localStoreKeys.enum";
import { getStoredData, setStoredData } from "../services/localStorage.service";
import { showServiceError } from "../services/errorHandler.service";

export interface ITransactionState {
    isFetchDone?: boolean;
    transactions?: TransactionInterface[];
};

const initStateBase: ITransactionState = {
    transactions: [],
};

interface IContextProps {
    transactionState: ITransactionState;
    setTransactionState: (value: ITransactionState) => void;
    transactionActions: ITransactionActions;
    transactionRequestSuccess: boolean;
    transactionRequestIsLoading: boolean;
};

export interface ITransactionActions {
    requestTransactions: () => void;
    setTransactions: (value: TransactionInterface[]) => void;
    addTransaction: (movimiento: TransactionInterface) => void;
};

const initState = getStoredData<ITransactionState>(initStateBase, LocalStoreKeys.transactions);

const TransactionsContext = createContext({} as IContextProps);

const TransactionsContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [transactionState, setTransactionState] = useState<ITransactionState>(initState);

    const transactionMutation = useMutation({
        mutationFn: () => getTransactionsPagination({ currentPage: 1, pageSize: 20 }),
        onSuccess: (data) => {
            setTransactionState({ ...transactionState, transactions: data.items, isFetchDone: true });
        },
        onError: (error: unknown) => {
            showServiceError(error, "Error al obtener movimientos");
            setTransactionState({ ...transactionState, transactions: [], isFetchDone: true });
        },
    });

    const requestTransactions = () => {
        setTransactionState({ ...transactionState });
        transactionMutation.mutate();
    };

    const addTransaction = (transaction: TransactionInterface) => {
        setTransactionState((prev) => {
            const newTransaction = prev.transactions ? [...prev.transactions, transaction] : [transaction];
            const newState: ITransactionState = {
                ...prev,
                transactions: newTransaction
            };
            setStoredData(LocalStoreKeys.transactions, newState);
            return newState;
        });
    };

   
    return (
        <TransactionsContext.Provider
            value={{
                transactionState,
                setTransactionState,
                transactionActions: {
                    requestTransactions,
                    setTransactions: (value) => setTransactionState({ ...transactionState, transactions: value }),
                    addTransaction,
                },
                transactionRequestSuccess: transactionMutation.isPending,
                transactionRequestIsLoading: transactionMutation.isSuccess,
            }}
        >
            {children}
        </TransactionsContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTransactionContext = () => {
    return useContext(TransactionsContext);
};

export default TransactionsContextProvider;
