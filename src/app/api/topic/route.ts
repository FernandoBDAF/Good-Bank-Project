import { NextResponse } from "next/server";
import { Topic } from "../../../models/topic";
import { connectMongoDB } from "../../../libs/mongodb";

export async function POST(req: any, res: any) {
  const { title, content } = await req.json();
  await connectMongoDB();
  const topic = await Topic.create({
    title,
    content,
  });
  return NextResponse.json(
    { message: "Topic created", topic },
    { status: 201 }
  );
}

export async function GET(req: any, res: any) {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(req: any, res: any) {
  const { id } = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  const topic = await Topic.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Topic deleted", topic },
    { status: 200 }
  );
}
