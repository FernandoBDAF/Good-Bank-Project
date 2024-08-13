import { TransactionEntity } from "@/models/moneyTransaction";
import { repoGetTransactions } from "../api/money-transactions";

export const getBalance = async (origin: TransactionEntity, userId: string) => {
  const transactions = await repoGetTransactions(userId);
  console.log(origin);
  if (!transactions) {
    throw new Error("Error fetching transactions");
  }

  const originTransactions = transactions?.filter(
    (transaction) => transaction.origin === origin
  );

  const balance = originTransactions?.reduce((acc, transaction) => {
    return transaction.type === "credit"
      ? acc + transaction.value
      : acc - transaction.value;
  }, 0);

  return balance;
};
