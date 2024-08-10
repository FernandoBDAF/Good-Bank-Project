import { NextResponse } from "next/server";
import { repoCreateTransaction } from "./repositories";

export async function POST(req: any, res: any) {
  try {
    const transaction = await req.json();
    const data = await repoCreateTransaction(transaction);
    return NextResponse.json({ transaction: data }, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}
