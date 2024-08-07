import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getData } from "./actions";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const profileRequest = await getData("/user/myprofile");

  if (
    profileRequest.statusCode === 200 &&
    request.nextUrl.pathname.startsWith("/auth")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (
    profileRequest.statusCode !== 200 &&
    request.nextUrl.pathname.startsWith("/vendor")
  ) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
