import TransferForms from "./TransferForms";
import { currentUser } from "@clerk/nextjs/server";
import { getBalance } from "@/app/utils/helpers";
import { redirect } from "next/navigation";
import { onSubmit, onRegister } from "./actions";
import { repoGetUser } from "@/app/api/users";

export default async function Page() {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }
  const dbUser = await repoGetUser(
    user.id,
    user.emailAddresses[0].emailAddress
  );

  if (!dbUser) {
    throw new Error("User not found");
  }

  const balance = await getBalance("USD", user.id);

  return (
    <TransferForms
      onRegister={onRegister}
      onSubmit={onSubmit}
      remitteeEmails={dbUser.remitteeEmails}
      balance={balance}
    />
  );
}
