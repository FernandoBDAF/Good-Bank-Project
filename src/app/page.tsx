import { currentUser } from "@clerk/nextjs/server";
import { repoGetUser } from "./api/users";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
    return (
      <>
        <h1>Welcome to Good Bank</h1>
        <p>You are being redirecting you to sign-in.</p>
      </>
    );
  }

  await repoGetUser(user.id, user.emailAddresses[0].emailAddress);

  return (
    <div className="flex flex-col self-center place-self-center justify-self-center justify-between items-center w-full my-4 gap-4 md:flex-row md:gap-16 md:justify-center">
      <div>
        <img src={"./bank.png"} className="max-w-80"></img>
      </div>
      <div className="flex flex-col max-w-80 items-center text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to Good Bank</h1>
        <p className="text-xs font-light mb-2">
          You can make deposits and withdraw, payments, online money transfers,
          pay bills or trade crypto.
        </p>
        <p className="text-xs font-light">
          If you need help you can get a loan with us.
        </p>
      </div>
    </div>
  );
}
