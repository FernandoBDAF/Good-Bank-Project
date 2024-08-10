"use server";

import {
  repoAddRemittee,
  repoCreateUser,
  repoGetUser,
} from "@/app/api/user/(repositories)";
import { IAppUser } from "@/models/appUser";

export const getUser = async (user: any) => {
  try {
    const dbUser = await repoGetUser(user.id);

    if (!dbUser) {
      const dbUser = await createUser(user);
      return dbUser;
    }
    return dbUser;
  } catch (error) {
    console.error(error);
  }
};

export const createUser = async (user: any) => {
  const userReq = {
    clerkId: user.id,
    email: user.emailAddresses[0].emailAddress,
    remitteeEmails: [],
    loanAvailable: 200000,
  };

  try {
    const dbUser: IAppUser = await repoCreateUser(userReq);
    return dbUser;
  } catch (error) {
    console.error(error);
  }
};

export const addRemittee = async (clerkId: string, email: string) => {
  try {
    const data = await repoAddRemittee(clerkId, email);
  } catch (error) {
    console.error(error);
  }
};
