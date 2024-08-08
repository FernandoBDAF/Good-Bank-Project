import { currentUser } from "@clerk/nextjs/server";
import { submit } from "./actions";
import PaymentForm from "./PaymentForm";
import { redirect } from "next/navigation";
import { getBalance } from "@/utils/helpers";

export default async function Page() {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }
  const balance = await getBalance("USD", user.id);
  return <PaymentForm onSubmit={submit} balance={balance}/>;
}
