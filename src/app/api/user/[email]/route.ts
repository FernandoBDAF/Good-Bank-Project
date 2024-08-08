import { connectMongoDB } from "@/libs/mongodb";
import { AppUser } from "@/models/appUser";
import { NextResponse } from "next/server";

export async function PUT(req: any, res: any) {
  try {
    const { clerkId, email } = await req.json();
    await connectMongoDB();

    const updatedUser = await AppUser.findOneAndUpdate(
      { clerkId },
      { $push: { remitteeEmails: email } },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Remittee added", data: updatedUser });
  } catch (error) {
    console.error('Error adding remittee:', error);
    return NextResponse.json({ message: "Error adding remittee" }, { status: 500 });
  }
}
