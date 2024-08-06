import { connectMongoDB } from "@/libs/mongodb";
import { Topic } from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(req:any, { params } : { params: { id: string } }) {
  const { id } = params;
  const { title, content } = await req.json();
  await connectMongoDB();
  const topic = await Topic.findByIdAndUpdate(id, {
    title,
    content,
  });
  return NextResponse.json(
    { message: "Topic updated", topic },
    { status: 200 }
  );
}
