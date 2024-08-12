import { currentUser } from "@clerk/nextjs/server";
import { submit } from "./action";
import LoanForm from "./LoanForm";
import { getBalance } from "@/app/utils/helpers";
import { repoGetUser } from "@/app/api/users";

export default async function Page() {
  const user = await currentUser();
  if (!user) {
    throw new Error("User not found");
  }

  const dbUser = await repoGetUser(
    user.id,
    user.emailAddresses[0].emailAddress
  );

  if (!dbUser) {
    throw new Error("User not found");
  }

  const loanBalance = await getBalance("Loans", user.id);

  return (
    <LoanForm
      loanBalance={-loanBalance}
      loanAvailable={dbUser?.loanAvailable}
      onSubmit={submit}
    />
  );
}
