import { SavingType } from "../enums/savingType.enum";

export interface SavingInterface {
    id: string,
    amount: number,
    dateCreated: Date,
    dateStart: Date,
    dateEnd: Date,
    status?: SavingType,
    dateUpdated?: Date,
    amountProgress?: number,
}

