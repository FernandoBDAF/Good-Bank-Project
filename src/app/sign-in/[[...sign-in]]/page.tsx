import { SignIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default function SignInPage() {
  const user = currentUser();
  console.log(user);
  return (
    <div className="flex justify-center py-24">
      <SignIn/>
    </div>
  );
}