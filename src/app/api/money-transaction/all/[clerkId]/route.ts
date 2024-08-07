import { NextResponse } from "next/server";
import { repoGetTransactions } from "../../repositories";

export async function GET(
  req: any,
  { params }: { params: { clerkId: string } }
) {
  const transactions = await repoGetTransactions(params.clerkId);
  return NextResponse.json({ transactions });
}
