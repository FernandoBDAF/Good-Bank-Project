import "server-only";
import { connectMongoDB } from "@/libs/mongodb";
import { AppUser, IAppUser } from "@/models/appUser";

export async function repoGetUser(clerkId: string, email: string) {
  try {
    await connectMongoDB();
    const user: IAppUser | null = await AppUser.findOne({
      clerkId,
    });

    if (!user) {
      const createUser = {
        clerkId,
        email,
        remitteeEmails: [],
        loanAvailable: 200000 + 100000 * Math.floor(Math.random() * 8),
      };
      const newUser = await repoCreateUser(createUser);

      if (!newUser) {
        throw new Error("Failed to create user");
      }

      return newUser;
    }

    return user;
  } catch (error) {
    console.error(error);
  }
}

type ReqCreateUser = {
  clerkId: string;
  email: string;
  remitteeEmails: string[];
  loanAvailable: number;
};

export async function repoCreateUser(user: ReqCreateUser) {
  try {
    await connectMongoDB();

    const newUser: IAppUser = await AppUser.create(user);

    return newUser;
  } catch (error) {
    console.error(error);
  }
}

export async function repoAddRemittee(clerkId: string, email: string) {
  try {
    await connectMongoDB();
    const updatedUser = await AppUser.findOneAndUpdate(
      { clerkId },
      { $push: { remitteeEmails: email } },
      { new: true }
    );

    if (!updatedUser) {
      throw new Error("Error adding remittee");
    }

    return updatedUser;
  } catch (error) {
    console.error(error);
  }
}
