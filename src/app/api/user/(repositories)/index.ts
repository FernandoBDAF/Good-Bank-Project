import { connectMongoDB } from "@/libs/mongodb";
import { AppUser } from "@/models/appUser";

type UserReq = {
  clerkId: string;
  email: string;
  remitteeEmails: string[];
  loanAvailable: number;
};

export async function repoGetUser(clerkId: string) {
  try {
    await connectMongoDB();
    const user = await AppUser.findOne({
      clerkId,
    });
    return user;
  } catch (error) {
    console.error(error);
  }
}

export async function repoCreateUser(user: UserReq) {
  try {
    await connectMongoDB();
    const data = await AppUser.create(user);
    return data;
  } catch (error) {
    console.error(error);
  }
}
