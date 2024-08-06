import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUser, createUser } from "@/utils/users";

export default async function Home() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const dbUser = await getUser(user.id);
console.log("########################")
  console.log("dbUser", dbUser.user);

  if (!dbUser.user || dbUser.user.length === 0) {
    const newUser = await createUser(user);
    console.log("#################")
    console.log("newUser", newUser);
  }

  redirect("/home");
}
