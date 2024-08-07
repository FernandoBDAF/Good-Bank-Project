import { currentUser } from "@clerk/nextjs/server";
import { createMoneyTransaction } from "@/utils/requests/moneyTransaction";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function submit(formData: FormData) {
  "use server";

  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const value = parseInt(formData.get("value") as string);

  const data = await createMoneyTransaction({
    clerkId: user!.id,
    origin: "USD",
    type: "debit",
    value,
  });

  const transaction = data.transaction;

  revalidatePath("/withdraw");
  
  return transaction;
}

export async function checkBalance() {
  "use server";
}


