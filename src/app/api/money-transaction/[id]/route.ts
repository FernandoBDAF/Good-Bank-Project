import { MoneyTransaction } from "@/models/moneyTransaction";
import { NextResponse } from "next/server";
import { repoGetTransaction } from "../repositories";

export async function GET(req: any, { params }: { params: { id: string } }) {
  const transaction = await repoGetTransaction(params.id);
  if (!transaction) {
    return Error("Transaction not found");
  }
  return NextResponse.json({ transaction });
}
