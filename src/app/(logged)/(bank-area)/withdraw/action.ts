"use server";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { repoCreateTransaction } from "@/app/api/money-transaction/repositories";

export async function submit(formData: FormData) {

  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const value = parseInt(formData.get("value") as string);

  const transaction = await repoCreateTransaction({
    clerkId: user!.id,
    origin: "USD",
    type: "debit",
    value,
  });

  console.log(transaction);

  revalidatePath("/withdraw");
  
  return { success: true, transaction }
}

export async function checkBalance() {
}


