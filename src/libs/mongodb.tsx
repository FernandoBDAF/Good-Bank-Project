import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI || "");
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
