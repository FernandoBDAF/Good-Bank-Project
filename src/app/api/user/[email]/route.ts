import { connectMongoDB } from "@/libs/mongodb";
import { AppUser } from "@/models/appUser";
import { NextResponse } from "next/server";

export async function PUT(req: any, res: any) {
  const { clerkId, email } = await req.json();
  try {
    await connectMongoDB();

    const updatedUser = await AppUser.findOneAndUpdate(
      { clerkId },
      { $push: { remitteeEmails: email } },
      { new: true }
    );

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error(error);
  }
}
