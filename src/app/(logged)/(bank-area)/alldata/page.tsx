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

  const transactions : IMoneyTransaction[] = await getMoneyTransactions(user.id);

  return (
    <div>
      <div className="container mx-auto mt-5 max-h-[60vh] overflow-auto">
        <table className="min-w-full bg-gray-800 text-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-700 text-left">
                Timestamp
              </th>
              <th className="py-2 px-4 border-b border-gray-700 text-left">
                Origin
              </th>
              <th className="py-2 px-4 border-b border-gray-700 text-left">
                Type
              </th>
              <th className="py-2 px-4 border-b border-gray-700 text-left">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction._id} className={twMerge("hover:bg-gray-700", transaction.type === "credit" ? "bg-green-300" : "bg-red-300")}>
                <td className="py-2 px-4 border-b border-gray-700">
                  <div>{new Date(transaction.createdAt || "").toLocaleString()}</div>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
