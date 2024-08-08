"use server";

import { currentUser } from "@clerk/nextjs/server";
import { createMoneyTransaction } from "@/utils/requests/moneyTransaction";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function submit(formData: FormData) {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const value = parseInt(formData.get("value") as string);

  const data = await createMoneyTransaction({
    clerkId: user!.id,
    origin: "USD",
    type: "credit",
    value,
  });

  const transaction = data.transaction;

  revalidatePath("/deposit");

  return transaction;
}
