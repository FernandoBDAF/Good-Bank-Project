import { NextResponse } from "next/server";
import { AppUser } from "@/models/appUser";
import { connectMongoDB } from "@/libs/mongodb";

export async function POST(req: any, res: any) {
  const { clerkId, email } = await req.json();
  await connectMongoDB();
  const user = await AppUser.create({
    clerkId,
    email,
  });
  return NextResponse.json({ message: "User created", user }, { status: 201 });
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
