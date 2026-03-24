import { IPaginationRequest } from ".";
import { getUniqueId } from "../../utils/utils";

export type CloudItemKind = "IMAGE" | "TEXT" | "VIDEO" | "AUDIO" | "OTHER" | "VIDEO_LINK";
export type SortCodeCloud = "default" | "date" | "name" | "size";

export const sortCodeCloudList: SortCodeCloud[] = ["date", "name", "size"];

export const SORT_CODE_CLOUD_LIST: { [key: string]: ISearchCloudSort } = {
    dateDesc: { sort: "date", sortDesc: true },
    dateAsc: { sort: "date", sortDesc: false },
    nameDesc: { sort: "name", sortDesc: true },
    nameAsc: { sort: "name", sortDesc: false },
    sizeDesc: { sort: "size", sortDesc: true },
    sizeAsc: { sort: "size", sortDesc: false },
};

export const CloudItemTypeList: CloudItemKind[] = [
    "IMAGE",
    "TEXT",
    "VIDEO",
    "AUDIO",
    "OTHER",
    "VIDEO_LINK",
];

export interface CloudFile {
    file: File;
    id?: string;
    name: string;
    userCreatorId: string;
    type?: CloudItemKind;
    url?: string;
    fileExtension: string;
    size: number;
    createdAt?: Date;
    index: number;
    pawnRequestId?: string;
    productId?: string;
    paymentId?: string;
    pickupOrderId?: string;
    shippingOrderId?: string;
};

export class CloudFileImpl implements CloudFile {
    file: File = new File([], "");
    id: string = "";
    name: string = "";
    userCreatorId: string = "";
    type?: CloudItemKind;
    fileExtension: string = "";
    size: number = 0;
    index: number = 0;
    pawnRequestId: string = "";
    productId: string = "";
    paymentId: string = "";
    url?: string | undefined;

    constructor(userCreatorId: string, name: string, size: number, fileExtension: string, index: number, type: CloudItemKind, file: File) {
        this.id = getUniqueId();
        this.userCreatorId = userCreatorId;
        this.name = name;
        this.size = size;
        this.fileExtension = fileExtension;
        this.index = index;
        this.type = type;
        this.file = file;
    };
};

export interface ISearchCloudSort {
    sortDesc: boolean;
    sort: SortCodeCloud;
};

export interface CloudSearchModel extends IPaginationRequest, ISearchCloudSort {
    accountId: string;
    organizationId: string;
    accountUserId?: string;
    type?: CloudItemKind;
    searchValue: string;
    sort: SortCodeCloud;
    sortDesc: boolean;
};

export interface CloudSummaryResponse {
    accountId: string;
    totalSize: number;
    sizeType: string;
};

export interface AppFile {
    id: string; //GENERATE IN THE UI
    url: string;
    type?: CloudItemKind;
    dateCreated?: Date;
    index: number;
    name: string;
    imageAnalysisAsString?: string;
    fileTagsAsString?: string;
    fileTags?: string[];
};

export interface CloudFileUploadRequest {
    userId: string;
    fileId?: string;
    file: File;
    type: CloudItemKind;
    url?: string;
    folderName: string;
    name:string;
    userImageId?: string;
    pawnRequestId?: string;
    productImageId?: string;
    productFileId?: string;
    paymentId?: string;
    userIdDocumentFrontImage?: string;
    userIdDocumentBackImage?: string;
    userIdBankCertificationImage?: string;
}

export class AppFileImpl implements AppFile {
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