import { NextRequest, NextResponse } from "next/server";
import { _config } from "./lib/_config";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const access_token = req.cookies.get("_linklite_access")?.value;
  const refresh_token = req.cookies.get("_linklite_refresh")?.value;

  if (!access_token && refresh_token) {
    try {
      const res = await fetch(
        `${_config.backend_url}/api/v1/users/refresh-access-token`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            _linklite_refresh: refresh_token,
          }),
        }
      );

      const {
        access_token: accessToken,
        refresh_token: refreshToken,
        access_expiry,
        refresh_expiry,
      } = await res.json();

      const response = NextResponse.next();

      // Update access token
      response.cookies.set("_linklite_access", accessToken, {
        httpOnly: true,
        sameSite: "strict",
        secure: true,
        expires: new Date(access_expiry),
      });

      // Update refresh token
      response.cookies.set("_linklite_refresh", refreshToken, {
        httpOnly: true,
        sameSite: "strict",
        secure: true,
        expires: new Date(refresh_expiry),
      });

      return response;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
      return NextResponse.next();
    }
  }

  if (access_token && pathname === "/") {
    return NextResponse.redirect(new URL(`${_config.app_url!}`, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
    "/reset-password/:path*",
  ],
};
