import { TransactionType } from "../enums/transactionType.enum";

export interface TransactionInterface {
  id: string;
  type: TransactionType;
  amount: number;
  description: string;
  dateCreated: Date;
  dateUpdated?: Date;
};

export class TransactionModelImpl implements TransactionInterface {
  id: string;
  type: TransactionType;
  amount: number;
  description: string;
  dateCreated: Date;
  dateUpdated?: Date; 

  constructor(type:TransactionType) {
    this.type = type;
    this.id = '';
    this.amount = 0;
    this.description = '';
    this.dateCreated = new Date();
    this.dateUpdated = undefined;
  } 
}