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
  console.log("user in post", user);
  await connectMongoDB();
  const data = await AppUser.create(user);
  console.log("data", data);
  return NextResponse.json({ message: "User created", data }, { status: 201 });
}

export async function GET(req: any, res: any) {
  const clerkId = req.nextUrl.searchParams.get("clerkId");
  console.log("clerkId in get", clerkId);
  await connectMongoDB();
  const user = await AppUser.findOne({
    clerkId,
  });
  return NextResponse.json({ user });
}
