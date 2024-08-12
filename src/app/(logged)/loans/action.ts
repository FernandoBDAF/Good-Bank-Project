"use server";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { repoCreateTransaction } from "@/app/api/money-transaction/repositories";

export async function submit(formData: FormData) {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  const value = parseInt(formData.get("value") as string);
  const loanTerm = parseInt(formData.get("loanTerm") as string);
  const interest = value * (1.02 ** loanTerm - 1);

  const dataLoan = await repoCreateTransaction({
    clerkId: user!.id,
    origin: "Loans",
    interest,
    type: "debit",
    value,
  });

  const dataUsd = await repoCreateTransaction({
    clerkId: user!.id,
    origin: "USD",
    type: "credit",
    value: value,
  });

  revalidatePath("/loans");

  return (dataLoan && dataUsd) ? true : false;
}
