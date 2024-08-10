"use server";

import { IAppUser } from "@/models/appUser";

export const getUser = async (user: any) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/user?clerkId=${user.id}`
    );
    if (!res.ok) {
      throw new Error("User not found");
    }

    const dbUser = await res.json();

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
  try {
    const res = await fetch(`http://localhost:3000/api/user`, {
      method: "POST",
      body: JSON.stringify({
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        remitteeEmails: [],
        loanAvailable: 200000,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("User not created");
    }

    const dbUser: IAppUser = await res.json();
    return dbUser;
  } catch (error) {
    console.error(error);
    return null
  }
};

export const addRemittee = async (clerkId: string, email: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/user/${email}`, {
      method: "PUT",
      body: JSON.stringify({
        clerkId,
        email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Remittee not added");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null
  }
};
