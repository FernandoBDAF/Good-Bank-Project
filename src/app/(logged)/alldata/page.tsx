import { currentUser } from "@clerk/nextjs/server";
import { getMoneyTransactions } from "@/utils/requests/moneyTransaction";
import { redirect } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { IMoneyTransaction } from "@/models/moneyTransaction";

export default async function Page() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const transactions: IMoneyTransaction[] = await getMoneyTransactions(user.id);

  return (
    <div className="container mx-auto mt-5 max-h-[60vh] overflow-auto">
      <table className="min-w-full bg-gray-800 text-white sm:text-xs">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-700 text-left text-xs">
              Timestamp
            </th>
            <th className="py-2 px-4 border-b border-gray-700 text-left text-xs">
              Origin
            </th>
            <th className="py-2 px-4 border-b border-gray-700 text-left text-xs">
              Type
            </th>
            <th className="py-2 px-4 border-b border-gray-700 text-left text-xs">
              Amount
            </th>
            <th className="py-2 px-4 border-b border-gray-700 text-left text-xs">
              Details
            </th>
            <th className="py-2 px-4 border-b border-gray-700 text-left text-xs">
              Rate
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr
              key={transaction._id}
              className={twMerge(
                "hover:bg-gray-700 text-xs",
                transaction.type === "credit" ? "bg-green-300" : "bg-red-300"
              )}
            >
              <td className="py-2 px-4 border-b border-gray-700 text-xs">
                <div>
                  {new Date(transaction.createdAt || "").toLocaleString()}
                </div>
              </td>
              <td className="py-2 px-4 border-b border-gray-700">
                <div>{transaction.origin || "-"}</div>
              </td>
              <td className="py-2 px-4 border-b border-gray-700">
                <div>{transaction.type}</div>
              </td>
              <td className="py-2 px-4 border-b border-gray-700">
                <div>${transaction.value}</div>
              </td>
              <td className="py-2 px-4 border-b border-gray-700">
                <div>{transaction.details ? transaction.details : ""}</div>
              </td>
              <td className="py-2 px-4 border-b border-gray-700">
                <div>
                  {transaction.interest
                    ? `$${transaction.interest.toFixed(2)}`
                    : ""}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
