import { currentUser } from "@clerk/nextjs/server";
import WithdrawForm from "./WithdrawForm";
import { submit } from "./action";
import { redirect } from "next/navigation";
import { getBalance } from "@/app/utils/helpers";

export default async function Page() {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }
  const balance = await getBalance("USD", user.id);
  return <WithdrawForm balance={balance} onSubmit={submit} />;
}
