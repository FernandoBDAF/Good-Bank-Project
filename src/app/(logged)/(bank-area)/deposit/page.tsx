import { currentUser } from "@clerk/nextjs/server";
import Card from "../components/OperationCard";
import { redirect } from "next/navigation";
import { moneyTransaction } from "@/utils/moneyTransaction";

export default async function Page() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  async function makeDeposit(formData: FormData, e: Event) {
    "use server";
    try {
      const deposit = parseInt(formData.get("deposit") as string);
      console.log("deposit", typeof deposit);
      if (!deposit || typeof deposit !== "number") {
        throw new Error("Deposit amount is required");
      }
      
      moneyTransaction(user!.id, "deposit", deposit);
      redirect("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full mt-5">
      <Card
        header="DEPOSIT"
        description="Deposit money into your account"
      >
        <form action={makeDeposit}>
          <div className="mb-3">
            <input
              type="number"
              name="deposit"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="deposit"
              placeholder="Enter deposit amount"
            />
          </div>
          <button
            type="submit"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Deposit
          </button>
        </form>
      </Card>
    </div>
  );
}
