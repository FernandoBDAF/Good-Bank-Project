import { getUser } from "@/utils/requests/users";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { IAppUser } from "@/models/appUser";
import { submit } from "./action";
import LoanForm from "./LoanForm";
import { getBalance } from "@/utils/helpers";

export default async function Page() {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }
  const dbUser: IAppUser = await getUser(user.id);
  const loanBalance = await getBalance("Loans", user.id);
  return <LoanForm loanBalance={-loanBalance} loanAvailable={dbUser.loanAvailable} onSubmit={submit} />;
}
