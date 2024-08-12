"use server";

import { currentUser } from "@clerk/nextjs/server";

import { revalidatePath } from "next/cache";
import { repoCreateTransaction } from "@/app/api/money-transaction/repositories";

export async function submit(formData: FormData) {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  const value = parseInt(formData.get("value") as string);

  const transaction = await repoCreateTransaction({
    clerkId: user!.id,
    origin: "USD",
    type: "credit",
    value,
  });

  revalidatePath("/deposit");

  return transaction ? true : false;
}
