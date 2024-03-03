"use server";
import { CredentialResponse } from "@react-oauth/google";
import { cookies } from "next/headers";
import { postData } from ".";

export const sendGoogleLoginDetails = async (
    credentialResponse: CredentialResponse
  ) => {
    const loginDetails = {
      access_token: credentialResponse.credential,
    };
    const loginRequest = await postData(
      "/auth/google-auth",
      loginDetails
    );
    if (loginRequest.access_token) {
      cookies().set("access_token", loginRequest.access_token, {
        httpOnly: true,
      });
      return {
        statusCode: loginRequest.statusCode,
        message: loginRequest.access_token,
      };
    }
    return {
      statusCode: loginRequest.statusCode,
      message: loginRequest.message,
    };
  };