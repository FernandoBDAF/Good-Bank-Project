import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongodb";
import { MoneyTransaction } from "@/models/moneyTransaction";

export async function POST(req: any, res: any) {
  const { clerkId, type, value } = await req.json();
  await connectMongoDB();
  const transaction = await MoneyTransaction.create({
    clerkId,
    type,
    value,
  });
  return NextResponse.json(
    { message: "Transaction registered", transaction },
    { status: 201 }
  );
}


