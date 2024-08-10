import { SignIn } from "@clerk/nextjs";

export default async function SignInPage() {
  return (
    <div className="flex justify-center py-24">
      <SignIn />
    </div>
  );
}
