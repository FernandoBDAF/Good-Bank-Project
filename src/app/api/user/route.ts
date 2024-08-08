import { NextResponse } from "next/server";
import { AppUser } from "@/models/appUser";
import { connectMongoDB } from "@/libs/mongodb";

type UserReq = {
  clerkId: string;
  email: string;
  loanUnlocked: boolean;
  loanAvailable: number;
};

export async function POST(req: any, res: any) {
  const user: UserReq = await req.json();
  await connectMongoDB();
  const data = await AppUser.create(user);
  console.log("new user created", data);
  return NextResponse.json(data);
}

export async function GET(req: any, res: any) {
  const clerkId = req.nextUrl.searchParams.get("clerkId");
  console.log("clerkId in get", clerkId);
  await connectMongoDB();
  const user = await AppUser.findOne({
    clerkId,
  });
  return NextResponse.json(user);
}
