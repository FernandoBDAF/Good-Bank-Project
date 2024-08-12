"use server";

import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { repoCreateTransaction } from "@/app/api/money-transaction/repositories";
import getCurrencyInfo from "@/app/api/cryptos";

export async function buyCrypto(formData: FormData) {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  const value = parseInt(formData.get("value") as string);
  const crypto = formData.get("crypto") as string;
  const { bid } = await getCurrencyInfo(crypto);
  const rate = bid;
  const amount = value / rate;

  const dataCrypto = await repoCreateTransaction({
    clerkId: user!.id,
    origin: crypto.toUpperCase(),
    details: `${crypto}-${rate}`,
    type: "credit",
    value: amount,
  });

  const dataUsd = await repoCreateTransaction({
    clerkId: user!.id,
    origin: "USD",
    type: "debit",
    value,
  });

  revalidatePath("/crypto");

  return dataCrypto && dataUsd ? true : false;
}

export async function sellCrypto(formData: FormData) {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  const value = parseInt(formData.get("value") as string);
  const crypto = formData.get("crypto") as string;
  const { bid } = await getCurrencyInfo(crypto);
  const rate = bid;
  const amount = value / rate;

  const dataCrypto = await repoCreateTransaction({
    clerkId: user!.id,
    origin: crypto.toUpperCase(),
    details: `${crypto}-${rate}`,
    type: "debit",
    value: amount,
  });

  const dataUsd = await repoCreateTransaction({
    clerkId: user!.id,
    origin: "USD",
    type: "credit",
    value,
  });

  revalidatePath("/crypto");

  return dataCrypto && dataUsd ? true : false;
}
