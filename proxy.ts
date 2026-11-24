import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: ["/resources.html", "/resources-login/:path*", "/resources-sign-up/:path*"],
};
