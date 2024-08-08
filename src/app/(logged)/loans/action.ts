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
  const loanTerm = parseInt(formData.get("loanTerm") as string);
  const interest = value * ((1.02 ** loanTerm) - 1);

  console.log("value", value);
  console.log("loanTerm", interest);

  const dataLoan = await createMoneyTransaction({
    clerkId: user!.id,
    origin: "Loans",
    interest,
    type: "debit",
    value,
  });

  const dataUsd = await createMoneyTransaction({
    clerkId: user!.id,
    origin: "USD",
    type: "credit",
    value: value,
  });

  revalidatePath("/loans");

  return dataLoan && dataUsd;
}
