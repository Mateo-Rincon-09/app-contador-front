import { TransactionType } from "../../enums/transactionType.enum";
import { TransactionInterface } from "../../interface/transaction.interface";
import { transactionEndpoint } from "../endpoints";
import fetchApi from "../fetchApi";
import { IPaginationRequest, IPaginationResponse } from "../models";


export interface TransactionRequest extends IPaginationRequest {
    type: TransactionType;
    amount: number;
    description: string;
    dateCreated: Date;
    dateUpdated?: Date;
}

export interface TransactionResponse {
    transaction: TransactionInterface;
}

export const transactions = (request: TransactionRequest): Promise<TransactionResponse> => {
    return fetchApi.post(transactionEndpoint.post.create, request).then((res) => res.data);
}

export const getTransactionsPagination = (data: IPaginationRequest): Promise<IPaginationResponse<TransactionInterface>> => {
    return fetchApi.post(transactionEndpoint.post.listTransaction, data).then((res) => res.data);
};