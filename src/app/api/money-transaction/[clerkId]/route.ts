import { connectMongoDB } from "@/libs/mongodb";
import { MoneyTransaction } from "@/models/moneyTransaction";
import { NextResponse } from "next/server";

export async function GET(req: any, { params }: { params: { clerkId: string } }) {
    const clerkId = params.clerkId;
    console.log("clerkId in get", clerkId);
    await connectMongoDB();
    const transactions = await MoneyTransaction.find({
      clerkId,
    });
    return NextResponse.json({ transactions });
  }