import "server-only";


import {
  IMoneyTransaction,
  transactionEntity,
} from "@/models/moneyTransaction";
import { auth } from "@clerk/nextjs/server";

export const createMoneyTransaction = async (
  transaction: IMoneyTransaction
) => {
  const token = await auth().getToken();
  if (!Object.values(transactionEntity).includes(transaction.origin)) {
    throw new Error(
      "Invalid origin value - not USD | Loans | Payments | Transfers | BTC | ETH | USDC"
    );
  }
  try {
    const res = await fetch(`${process.env.NEXT_PULIC_API_URL}/api/money-transaction`, {
      method: "POST",
      body: JSON.stringify(transaction),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Error registering the transaction");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getMoneyTransactions = async (clerkId: string) => {
  const token = await auth().getToken();
  try {
    const res = await fetch(
      `${process.env.NEXT_PULIC_API_URL}/api/money-transaction/all/${clerkId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Error fetching transactions");
    }

    const { transactions } = await res.json();

    return transactions;
  } catch (error) {
    console.error(error);
  }
};

export const getMoneyTransaction = async (id: string) => {
  const token = await auth().getToken();
  try {
    const res = await fetch(
      `${process.env.NEXT_PULIC_API_URL}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Error fetching transaction");
    }

    const { transaction } = await res.json();
    return transaction;
  } catch (error) {
    console.error(error);
  }
};
