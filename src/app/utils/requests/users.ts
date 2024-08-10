"use server";

import { repoCreateUser, repoGetUser } from "@/app/api/user/(repositories)";
import { IAppUser } from "@/models/appUser";
// import { auth } from "@clerk/nextjs/server";

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
    return null;
  }
};

// export const addRemittee = async (clerkId: string, email: string) => {
//   const token = await auth().getToken();
//   try {
//     const res = await fetch(`http://localhost:3000/api/user/${email}`, {
//       method: "PUT",
//       body: JSON.stringify({
//         clerkId,
//         email,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     if (!res.ok) {
//       throw new Error("Remittee not added");
//     }

//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };
