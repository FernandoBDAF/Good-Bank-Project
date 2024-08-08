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
  const code = formData.get("code") as string;
  const details = formData.get("details") as string;

  const dataPayment = await createMoneyTransaction({
    clerkId: user!.id,
    origin: "Payments",
    details: `${code} - ${details}`,
    type: "credit",
    value,
  });

  const dataUsd = await createMoneyTransaction({
    clerkId: user!.id,
    origin: "USD",
    type: "debit",
    value: value,
  });

  revalidatePath("/payments");

  return dataPayment && dataUsd;
}
