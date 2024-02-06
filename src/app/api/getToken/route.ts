import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;

  // check if token is undefined
  if (!token) {
    return new Response(JSON.stringify({ message: "Token not found" }), {
      status: 401,
    });
  }

  // make api request and check if a user is returned
  const response = await fetch(`${process.env.BE_API_URL}/user/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${token}`,
    },
  });
  const res = await response.json();
  if (res.statusCode === 401) {
    return new Response(JSON.stringify({ message: res.message }), {
      status: 401,
    });
  }

  return new Response(JSON.stringify({ access_token: token }), {
    status: 200,
  });
}
