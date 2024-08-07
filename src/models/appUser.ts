import mongoose, { Schema } from "mongoose";

export interface IAppUser {
  clerkId: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const appUserSchema = new Schema(
  {
    clerkId: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const AppUser =
  mongoose.models.AppUser || mongoose.model("AppUser", appUserSchema);

export { AppUser };
