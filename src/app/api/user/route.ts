import { NextResponse } from "next/server";
import { AppUser } from "@/models/appUser";
import { connectMongoDB } from "@/libs/mongodb";

type UserReq = {
  clerkId: string;
  email: string;
  remitteeEmails: string[];
  loanAvailable: number;
};

export async function POST(req: any, res: any) {
  const user: UserReq = await req.json();
  try {
    await connectMongoDB();
    const data = await AppUser.create(user);
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function GET(req: any, res: any) {
  const clerkId = req.nextUrl.searchParams.get("clerkId");
  try {
    await connectMongoDB();
    const user = await AppUser.findOne({
      clerkId,
    });
    return NextResponse.json(user);
  } catch (error) {
    console.error(error);
    return null;
  }
}
