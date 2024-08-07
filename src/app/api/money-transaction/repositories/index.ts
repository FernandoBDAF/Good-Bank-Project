import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongodb";
import { IMoneyTransaction, MoneyTransaction } from "@/models/moneyTransaction";

type createTransactionReq = {
  clerkId: string;
  type: string;
  value: number;
};

export async function repoCreateTransaction(req: createTransactionReq) {
  await connectMongoDB();
  try {
    const transaction : IMoneyTransaction = await MoneyTransaction.create(req);
    return transaction;
  } catch (error) {
    return error;
  }
}

export async function repoGetTransaction(id: string) {
  await connectMongoDB();
  try {
    const transaction : IMoneyTransaction | null = await MoneyTransaction.findById(id);
    // if (!transaction) {
    //   const error = new Error("Transaction not found");
    //   throw error;
    // }
    return transaction;
  } catch (error) {
    return error;
  }
}

export async function repoGetTransactions(clerkId: string) {
  await connectMongoDB();
  try {
    const transactions: IMoneyTransaction[] = await MoneyTransaction.find({
      clerkId,
    }).sort({ createdAt: -1 });
    return transactions;
  } catch (error) {
    return error;
  }
}
