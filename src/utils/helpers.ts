import {
  IMoneyTransaction,
  TransactionEntity,
} from "@/models/moneyTransaction";
import { getMoneyTransactions } from "./requests/moneyTransaction";

export const getBalance = async (origin: TransactionEntity, userId: string) => {
  const transactions: IMoneyTransaction[] = await getMoneyTransactions(userId);
  const originTransactions = transactions.filter(
    (transaction) => transaction.origin === origin
  );
  const balance = originTransactions.reduce((acc, transaction) => {
    return transaction.type === "credit"
      ? acc + transaction.value
      : acc - transaction.value;
  }, 0);
  return balance;
};
