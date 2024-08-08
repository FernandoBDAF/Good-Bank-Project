import TransferForms from './TransferForms';
import { currentUser } from "@clerk/nextjs/server";
import { getBalance } from "@/utils/helpers";
import { redirect } from "next/navigation";
import { onSubmit, onRegister } from './actions';
import { getUser } from '@/utils/requests/users';

export default async function Page() {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }
  const balance = await getBalance("USD", user.id);
  const dbUser = await getUser(user.id);
  return (
    <TransferForms onRegister={onRegister} onSubmit={onSubmit} remitteeEmails={dbUser.user.remitteeEmails} balance={balance}/>
  );
}
