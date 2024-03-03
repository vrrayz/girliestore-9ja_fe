"use client";

import { redirect } from "@/actions";
import { sendGoogleLoginDetails } from "@/actions/googleLogin";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import React from "react";

interface Props {
  setExtraError: (error: string) => void;
}

export const GoogleLoginClient = ({ setExtraError }: Props) => {
  const handleGoogleLogin = (credentialResponse: CredentialResponse) => {
    sendGoogleLoginDetails(credentialResponse).then((res) => {
      setExtraError(res.statusCode !== 200 ? res.message : "");
      if (res.statusCode === 200) redirect("/");
    });
  };
  return (
    <GoogleLogin
      onSuccess={handleGoogleLogin}
      onError={() => {
        setExtraError("Authentication Failed");
      }}
    />
  );
};
