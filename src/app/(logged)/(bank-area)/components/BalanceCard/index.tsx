import { getMoneyTransactions } from "@/utils/requests/moneyTransaction";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  IMoneyTransaction,
  TransactionEntity,
} from "@/models/moneyTransaction";

type Balance = {
  [key in TransactionEntity]: number;
};

const fields: {
  [key in TransactionEntity]: {
    logo: string;
  };
} = {
  USD: {
    logo: "./dolar.webp",
  },
  Loans: {
    logo: "./percent-symbol.png",
  },
  BTC: {
    logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
  },
  ETH: {
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
  },
  USDC: {
    logo: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
  },
};
const balance = 1000;
const loanDebit = 10;
const balanceBTC = 20;
const balanceETH = 10;
const balanceUSDC = 1000;

const calculateBalance = function (transactions: IMoneyTransaction[]) {
  let balances = {} as Balance;
  transactions.map((transaction) => {
    if (transaction.type === "credit") {
      balances[transaction.origin]
        ? (balances[transaction.origin] += transaction.value)
        : (balances[transaction.origin] = transaction.value);
    } else {
      balances[transaction.origin]
        ? (balances[transaction.origin] -= transaction.value)
        : (balances[transaction.origin] = -transaction.value);
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
        {Object.entries(fields).map(([field, { logo }]) => (
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
            <p>${balances[field as TransactionEntity]?.toFixed(2) || 0}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
