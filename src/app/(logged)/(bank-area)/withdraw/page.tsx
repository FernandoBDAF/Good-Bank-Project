import { currentUser } from "@clerk/nextjs/server";
import WithdrawForm from "./WithdrawForm";
import { submit } from "./action";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }
  return <WithdrawForm userId={user?.id} onSubmit={submit} />;
}
