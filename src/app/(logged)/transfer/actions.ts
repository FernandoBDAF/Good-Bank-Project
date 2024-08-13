"use server";

import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { repoAddRemittee } from "@/app/api/users";
import { repoCreateTransaction } from "@/app/api/money-transactions";

export async function onRegister(formData: FormData) {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  const email = formData.get("newEmail") as string;

  const newUser = await repoAddRemittee(user.id, email);

  revalidatePath("/transfer");

  return newUser ? true : false;
}

export async function onSubmit(formData: FormData) {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  const value = parseInt(formData.get("value") as string);
  const email = formData.get("email") as string;

  const dataTransfer = await repoCreateTransaction({
    clerkId: user!.id,
    origin: "Transfers",
    details: email,
    type: "credit",
    value,
  });

  const dataUsd = await repoCreateTransaction({
    clerkId: user!.id,
    origin: "USD",
    type: "debit",
    value: value,
  });

  revalidatePath("/transfer");

  return dataTransfer && dataUsd ? true : false;
}
