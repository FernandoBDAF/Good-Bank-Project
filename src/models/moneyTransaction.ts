import mongoose, { Schema } from "mongoose";

export const transactionEntity = [
  "USD",
  "Loans",
  "Payments",
  "Transfers",
  "BTC",
  "ETH",
  "USDC",
] as const;
export type TransactionEntity = (typeof transactionEntity)[number];

export const moneyTransactionTypes = ["credit", "debit"] as const;
export type MoneyTransactionType = (typeof moneyTransactionTypes)[number];
export interface IMoneyTransaction {
  _id?: string;
  clerkId: string;
  origin: TransactionEntity;
  type: MoneyTransactionType;
  value: number;
  interest?: number;
  details?: string;
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
    interest: {
      type: Number,
      required: false,
    },
    details: {
      type: String,
      required: false,
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
