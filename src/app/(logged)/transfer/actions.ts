"use server";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createMoneyTransaction } from "@/app/utils/requests/moneyTransaction";
import { repoAddRemittee } from "@/app/api/user/(repositories)";

export async function onRegister(formData: FormData) {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const email = formData.get("newEmail") as string;

  const newUser = await repoAddRemittee(user.id, email);

  revalidatePath("/transfer");

  return newUser;
}

export async function onSubmit(formData: FormData) {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const value = parseInt(formData.get("value") as string);
  const email = formData.get("email") as string;

  const dataTransfer = await createMoneyTransaction({
    clerkId: user!.id,
    origin: "Transfers",
    details: email,
    type: "credit",
    value,
  });

  const dataUsd = await createMoneyTransaction({
    clerkId: user!.id,
    origin: "USD",
    type: "debit",
    value: value,
  });

  revalidatePath("/transfer");

  return dataTransfer && dataUsd;
}
