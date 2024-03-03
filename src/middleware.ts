import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const authPaths = ["/auth/login", "/auth/register"];
  if (authPaths.indexOf(request.nextUrl.pathname) !== -1) {
    console.log("We should get a log here");
    const token = cookies().get("access_token")?.value;

    // check if token is undefined
    if (!token) {
      console.log("Token not found");
    }

    // make api request and check if a user is returned
    const authRequest = await fetch(`${process.env.BE_API_URL}/user/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    });
    const res = await authRequest.json();

    console.log(res);
    console.log(request.url);
    // redirect to the homepage if the user is logged in already
    if (res.statusCode === 200) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    //if the user isn't logged in already. allow the user to this page
  }
}
