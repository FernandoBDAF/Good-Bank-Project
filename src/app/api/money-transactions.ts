"use server"

import { connectMongoDB } from "@/libs/mongodb";
import { IMoneyTransaction, MoneyTransaction } from "@/models/moneyTransaction";

type createTransactionReq = {
  clerkId: string;
  type: string;
  value: number;
  origin: string;
  interest?: number;
  details?: string;
};

export async function repoCreateTransaction(req: createTransactionReq) {
  try {
    await connectMongoDB();
    const transaction: IMoneyTransaction = await MoneyTransaction.create(req);
    if (!transaction) {
      throw new Error("Error creating the transaction");
    }
    return transaction;
  } catch (error) {
    console.log(error);
  }
}

export async function repoGetTransaction(id: string) {
  await connectMongoDB();
  try {
    const transaction: IMoneyTransaction | null =
      await MoneyTransaction.findById(id);
    return transaction;
  } catch (error) {
    console.log(error);
  }
}

export async function repoGetTransactions(clerkId: string) {
  try {
    await connectMongoDB();
    const transactions: IMoneyTransaction[] = await MoneyTransaction.find({
      clerkId,
    }).sort({ createdAt: -1 });

    if (!transactions) {
      throw new Error("Error fetching transactions");
    }

    return transactions;
  } catch (error) {
    console.log(error);
  }
}
