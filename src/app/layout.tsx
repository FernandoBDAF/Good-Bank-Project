import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Good Bank",
  description: "Taking care of your money",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider signInForceRedirectUrl={"/"} signUpForceRedirectUrl={"/"} afterSignOutUrl="/sign-in">
      <html lang="en">
        <body>
          <main
            className={twMerge(
              inter.className,
              "bg-blue-400 flex flex-col flex-grow overflow-auto min-h-screen"
            )}
          >
            <NavBar />
            <div className="min-h-[83vh] w-full flex justify-center items-start">
              {children}
            </div>
            <Footer />
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
