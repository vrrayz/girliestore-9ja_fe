import { CredentialResponse } from "@react-oauth/google";
import { cookies } from "next/headers";

export const sendGoogleLoginDetails = async (
    credentialResponse: CredentialResponse
  ) => {
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
      access_token: credentialResponse.credential,
    };
    const loginRequest = await postData(
      "http://localhost:5551/auth/google-auth",
      loginDetails
    );
    if (loginRequest.access_token) {
      cookies().set("access_token", loginRequest.access_token, {
        httpOnly: true,
      });
    }
  };