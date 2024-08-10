import { NextResponse } from "next/server";
import { repoCreateUser, repoGetUser } from "./(repositories)";

type UserReq = {
  clerkId: string;
  email: string;
  remitteeEmails: string[];
  loanAvailable: number;
};

export async function POST(req: any, res: any) {
  const user: UserReq = await req.json();
  try {
    const data = await repoCreateUser(user);
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
  }
}

export async function GET(req: any, res: any) {
  const clerkId = req.nextUrl.searchParams.get("clerkId");

  try {
    const user = await repoGetUser(clerkId);
    return NextResponse.json(user);
  } catch (error) {
    console.error(error);
  }
}
