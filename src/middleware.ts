import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getData } from "./actions";
import { profile } from "console";
import { adminRoutes } from "./constants/routes";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const profileRequest = await getData("/user/profile");
  const authRoutes = ["/wishlist"];

  if (
    profileRequest.statusCode === 200 &&
    request.nextUrl.pathname.startsWith("/auth")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (
    request.nextUrl.pathname.startsWith("/user/store") ||
    request.nextUrl.pathname.startsWith(adminRoutes.home)
  ) {
    if (
      profileRequest.statusCode !== 200 ||
      (profileRequest.statusCode === 200 &&
        profileRequest.data.role !== "admin")
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  if (
    profileRequest.statusCode !== 200 &&
    authRoutes.indexOf(request.nextUrl.pathname) >= 0
  ) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
