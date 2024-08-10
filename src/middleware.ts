import { authMiddleware } from "@clerk/nextjs/server";
 
export default authMiddleware({
    publicRoutes: ['/', '/deposit', '/withdraw', '/loans', '/payments', '/transfer', '/crypto', '/alldata'],
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};