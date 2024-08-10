import HorizontalBalanceCard from "@/app/(logged)/components/BalanceCard";
import { currentUser } from "@clerk/nextjs/server";
import { createUser, getUser } from "@/app/utils/requests/users";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const user = await currentUser();

  // if (!user) {
  //   return;
  // }
  // else {
  //   const dbUser = await getUser(user);

  //   if (!dbUser) {
  //     const newUser = await createUser(user); // this function will be called inside of the get with clerkId
  //   }
  // }
  return (
    <div className="flex flex-col w-full">
      <HorizontalBalanceCard />
      {children}
    </div>
  );
}
