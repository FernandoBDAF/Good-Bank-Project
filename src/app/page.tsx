import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUser, createUser } from "@/utils/requests/users";

export default async function Home() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const dbUser = await getUser(user.id);

  if (!dbUser.user || dbUser.user.length === 0) {
    const newUser = await createUser(user);
    console.log("Novo usuario criado", newUser);
  }

  redirect("/home");
}
