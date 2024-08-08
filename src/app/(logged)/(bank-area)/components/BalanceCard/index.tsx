import { getMoneyTransactions } from "@/utils/requests/moneyTransaction";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  IMoneyTransaction,
  TransactionEntity,
} from "@/models/moneyTransaction";
import { type } from "os";

type Balance = {
  [key in TransactionEntity]: number;
};

// const keys = ["USD", "Loans", "BTC", "ETH", "USDC"] as const;
// type keys = (typeof keys)[number];
// const fields: {
//   [key in keys]: string;
// } = {
//   USD: "./dolar.webp",
//   Loans: "./percent-symbol.png",
//   BTC: "./bitcoin.png",
//   ETH: "./ethereum.png",
//   USDC: "./usdc.png",
// };
const balance = 1000;
const loanDebit = 10;
const balanceBTC = 20;
const balanceETH = 10;
const balanceUSDC = 1000;

//add this to mongo
const calculateBalance = function (transactions: IMoneyTransaction[]) {
  let balances = {} as Balance;
  transactions.map((transaction) => {
    const baseValue = transaction.value;
    const extraValue = transaction.interest || 0;
    const totalValue = baseValue + extraValue;
    if (transaction.type === "credit") {
      balances[transaction.origin]
        ? (balances[transaction.origin] += totalValue)
        : (balances[transaction.origin] = totalValue);
    } else {
      balances[transaction.origin]
        ? (balances[transaction.origin] -= totalValue)
        : (balances[transaction.origin] = -totalValue);
    }
  });
  return balances;
};

export default async function HorizontalBalanceCard() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const transactions: IMoneyTransaction[] = await getMoneyTransactions(user.id);
  const balances = calculateBalance(transactions);

  return (
    <div className="flex justify-center mt-2 px-6 py-3 w-full bg-gray-500 max-w-3xl self-center rounded-xl overflow-auto">
      <div className="flex gap-6 justify-center">
        {/* {Object.entries(fields).map(([field, logo]) => (
          <div
            key={field}
            className="flex flex-col justify-center items-center gap-1"
          >
            <div className="flex justify-center items-center gap-1">
              <img
                src={logo}
                alt={`${field} Logo`}
                className="currency-logo"
                style={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: "white",
                  borderRadius: "35%",
                }}
              />
              <p>{field}</p>
            </div>
            <p>
              $
              {Math.abs(
                parseFloat(balances[field as TransactionEntity]?.toFixed(2))
              ) || 0}
            </p>
          </div>
        ))} */}
      </div>
    </div>
  );
}
