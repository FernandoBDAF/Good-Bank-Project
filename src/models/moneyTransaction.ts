import mongoose, { Schema } from "mongoose";
import {z} from "zod";

export const transactionEntity = [
  "USD",
  "Loans",
  "BTC",
  "ETH",
  "USDC",
] as const;
export type TransactionEntity = (typeof transactionEntity)[number];

export const moneyTransactionTypes = ["credit", "debit"] as const;
export type MoneyTransactionType = (typeof moneyTransactionTypes)[number];
export interface IMoneyTransaction {
  clerkId: string;
  origin: TransactionEntity;
  type: MoneyTransactionType;
  value: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const moneyTransactionSchema = new Schema(
  {
    clerkId: {
      type: String,
      required: true,
    },
    origin: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const MoneyTransaction =
  mongoose.models.MoneyTransaction ||
  mongoose.model("MoneyTransaction", moneyTransactionSchema);

export { MoneyTransaction };
