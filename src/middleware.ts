import { NextRequest, NextResponse } from "next/server";
import axiosInstance from "./axios/axios";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isPublicPath = [
    "/",
    "/login",
    "/signup",
    "/api/auth/login",
    "/api/auth/signup",
    "/api/auth/google",
  ].includes(pathname);

  const access_token = req.cookies.get("_linklite_access")?.value;
  const refresh_token = req.cookies.get("_linklite_refresh")?.value;

  let response = NextResponse.next();

  if (!access_token && refresh_token) {
    try {
      const res = await axiosInstance.post(
        "/api/v1/users/refresh-access-token",
        {
          _linklite_refresh: refresh_token,
        }
      );

      const { accessToken, refreshToken } = res.data;

      // Update access token
      response.cookies.set("_linklite_access", accessToken, {
        httpOnly: true,
        sameSite: "strict",
        secure: true,
        expires: new Date(Date.now() + 1000 * 60 * 60),
      });

      // Update refresh token
      response.cookies.set("_linklite_refresh", refreshToken, {
        httpOnly: true,
        sameSite: "strict",
        secure: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
      });

      return response;
    } catch (error) {
      console.log(error);
      if (!isPublicPath) {
        return NextResponse.redirect(new URL("/login", req.url));
      }
    }
  }

  // Check again if access token is missing after attempted refresh
  const hasAccessToken =
    access_token || response.cookies.get("_linklite_access")?.value;

  // ❌ If no access token and trying to access protected route → redirect
  if (!hasAccessToken && !isPublicPath) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // ✅ If access token and trying to access public route → redirect
  if (hasAccessToken && isPublicPath) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return response;
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
