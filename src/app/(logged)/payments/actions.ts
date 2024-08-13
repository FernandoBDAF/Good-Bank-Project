"use server";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { repoCreateTransaction } from "@/app/api/money-transactions";

export async function submit(formData: FormData) {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const value = parseInt(formData.get("value") as string);
  const code = formData.get("code") as string;
  const details = formData.get("details") as string;

  const dataPayment = await repoCreateTransaction({
    clerkId: user!.id,
    origin: "Payments",
    details: `${code} - ${details}`,
    type: "credit",
    value,
  });

  const dataUsd = await repoCreateTransaction({
    clerkId: user!.id,
    origin: "USD",
    type: "debit",
    value: value,
  });

  revalidatePath("/payments");

  return dataPayment && dataUsd ? true : false;
}
