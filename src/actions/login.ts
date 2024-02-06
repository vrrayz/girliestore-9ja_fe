import { cookies } from "next/headers";

export const sendLoginDetails = async (formData: FormData) => {
  "use server";
  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data),
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  const loginDetails = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const loginRequest = await postData(
    "http://localhost:5551/auth/login",
    loginDetails
  );
  if (loginRequest.access_token) {
    cookies().set("access_token", loginRequest.access_token, {
      httpOnly: true,
    });
  }
};
