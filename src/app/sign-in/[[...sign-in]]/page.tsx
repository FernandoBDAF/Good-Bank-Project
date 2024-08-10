import { SignIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function SignInPage() {
  const user = await currentUser();
  return (
    <div className="flex justify-center py-24">
      <SignIn />
    </div>
  );
}
