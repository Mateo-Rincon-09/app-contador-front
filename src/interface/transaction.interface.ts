import { TransactionType } from "../enums/transactionType.enum";

export interface TransactionInterface {
  id: string;
  amount: number;
  description: string;
  dateCreated: Date;
  type: TransactionType;
  dateUpdated?: Date;
};

export class TransactionModelImpl implements TransactionInterface {
  id: string;
  amount: number;
  description: string;
  dateCreated: Date;
  type: TransactionType;
  dateUpdated?: Date; 

  constructor(type:TransactionType) {
    this.id = '';
    this.amount = 0;
    this.description = '';
    this.dateCreated = new Date();
    this.type = type;
    this.dateUpdated = undefined;
  } 
}