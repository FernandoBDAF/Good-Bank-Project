"use server";

import { IAppUser } from "@/models/appUser";

export const getUser = async (clerkId: string) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/user?clerkId=${clerkId}`
    );
    if (!res.ok) {
      throw new Error("User not found");
    }

    const dbUser = await res.json();
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
        loanUnlocked: false,
        loanAvailable: 100000 + 50000 * Math.floor(Math.random() * 8),
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
  }
};
