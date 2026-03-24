import { getUniqueId } from "../../utils/utils";
import { CloudFile, CloudItemKind } from "./itemCloud";

export type PaymentMethod =
    | "invalid"
    | "cash"
    | "transfer"
    | "creditCard"
    | "debitCard"
    | "giftCard"
    | "deposit"
    | "online"
    | "orderReturn";

export const PAYMENT_METHOD_LIST: PaymentMethod[] = ["cash", "transfer", "creditCard", "debitCard", "giftCard", "deposit", "online"];

export const paymentMethodCashList: PaymentMethod[] = ["cash"];
export const paymentMethodBankList: PaymentMethod[] = ["debitCard", "creditCard", "transfer", "deposit", "online"];

export interface IUniqueAttribute {
    id: string;
    value: string;
}

export interface ItemFile {
    id: string; //GENERATE IN THE UI
    url: string;
    type?: CloudItemKind;
    dateCreated?: Date;
    index: number;
    name: string;
    imageAnalysisAsString?: string;
    fileTagsAsString?: string;
    fileTags?: string[];
}

export class ItemFileFromCloud implements ItemFile {
    id: string;
    url: string;
    type?: CloudItemKind;
    dateCreated?: Date | undefined;
    index: number;
    name: string = "";
    fileTagsAsString?: string;
    fileTags?: string[];
    imageAnalysisAsString?: string;

    constructor(value: CloudFile) {
        this.id = getUniqueId();
        this.url = value.url ?? "";
        this.name = value.name;
        this.index = 0;
        this.type = value.type;
    }
}

export class ItemFileImpl implements ItemFile {
    id: string;
    url: string;
    type?: CloudItemKind;
    dateCreated?: Date | undefined;
    index: number;
    name: string = "";
    fileTagsAsString?: string;
    imageAnalysisAsString?: string;
    fileTags?: string[];

    constructor(url: string, type?: CloudItemKind) {
        this.id = getUniqueId();
        this.url = url;
        this.type = type;
        this.index = 0;
    }
}

export interface SelectBaseOption {
    id: string;
    label: string;
    value: string;
}

export interface SelectOptionObject<T> {
    label: string;
    value: string | number;
    object: T;
}

export interface SelectBaseOptionColor extends SelectBaseOption {
    color: string;
    colorName?: string;
}

export interface IPaginationRequest {
    currentPage: number;
    pageSize: number;
}

export interface IPageRequestAccount extends IPaginationRequest {
    accountId: string;
    valueId: string;
}
export class PageRequestAccount implements IPageRequestAccount {
    accountId: string;
    valueId: string;
    currentPage: number = 1;
    pageSize: number = 20;

    constructor(accountId?: string, valueId?: string, currentPage?: number, pageSize?: number) {
        this.accountId = accountId ? accountId : "";
        this.valueId = valueId ? valueId : "";
        this.currentPage = currentPage ? currentPage : 1;
        this.pageSize = pageSize ? pageSize : 20;
    }
}
export interface IPaginationList extends IPaginationRequest {
    totalPages: number;
    totalItems: number;
}
export class PaginationRequest implements IPaginationRequest {
    currentPage: number = 1;
    pageSize: number = 20;
}

export interface IPaginationResponse<T> extends IPaginationList {
    items: T[];
}

export class PaginationResponse<T> implements IPaginationResponse<T> {
    items: T[] = [];
    currentPage: number = 1;
    pageSize: number = 20;
    totalPages: number = 0;
    totalItems: number = 0;
    constructor(pagSize?: number) {
        if (pagSize) {
            this.pageSize = pagSize;
        }
    }
}

export class UniqueAttribute implements IUniqueAttribute {
    id: string;
    value: string;
    constructor(id: string, value: string) {
        this.id = id;
        this.value = value;
    }
}

export interface IBusinessException {
    status: number;
    code: string;
    message: string;
    type: string;
}

export interface IGenericState<T> {
    items: T[];
    error: unknown;
    isFetching: boolean;
    isError: boolean;
}

export class BusinessException implements IBusinessException {
    code: string = "";
    message: string = "";
    type: string = "";
    status: number;

    constructor(code: string = "", message: string = "", type: string = "", status?: number) {
        this.code = code;
        this.message = message;
        this.type = type;
        this.status = status ? status : 0;
    }
}


