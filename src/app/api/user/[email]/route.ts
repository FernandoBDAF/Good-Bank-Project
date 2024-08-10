import { NextResponse } from "next/server";
import { repoAddRemittee } from "../(repositories)";

export async function PUT(req: any, res: any) {
  const { clerkId, email } = await req.json();
  try {
    const updatedUser = await repoAddRemittee(clerkId, email);

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error(error);
  }
}
