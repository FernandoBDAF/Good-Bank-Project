import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/home",
  "/api/topic(.*)",
  "/api/topic/(.*)",
  "/api/user(.*)",
  "/api/user/(.*)",
  "/api/money-transaction(.*)",
  "/api/money-transaction/(.*)",
]);

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect();
  }
});
