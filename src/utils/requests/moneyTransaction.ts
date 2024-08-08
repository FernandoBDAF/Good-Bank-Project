import "server-only";

import {
  IMoneyTransaction,
  transactionEntity,
} from "@/models/moneyTransaction";

export const createMoneyTransaction = async (
  transaction: IMoneyTransaction
) => {
  if (!Object.values(transactionEntity).includes(transaction.origin)) {
    throw new Error(
      "Invalid origin value - not USD | Loans | BTC | ETH | USDC"
    );
  }
  try {
    const res = await fetch(`http://localhost:3000/api/money-transaction`, {
      method: "POST",
      body: JSON.stringify(transaction),
      headers: {
        "Content-Type": "application/json",
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
  try {
    const res = await fetch(
      `http://localhost:3000/api/money-transaction/all/${clerkId}`
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
  try {
    const res = await fetch(
      `http://localhost:3000/api/money-transaction/${id}`
    );

    if (!res.ok) {
      throw new Error("Error fetching transaction");
    }

    const { transaction } = await res.json();
    console.log("transaction", transaction);
    return transaction;
  } catch (error) {
    console.error(error);
  }
};
