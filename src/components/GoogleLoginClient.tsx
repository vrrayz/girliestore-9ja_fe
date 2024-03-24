"use client";

import { sendGoogleLoginDetails } from "@/actions/googleLogin";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import React from "react";

interface Props {
  setExtraError: (error: string) => void;
  setShouldRedirect: (value: boolean) => void;
}

export const GoogleLoginClient = ({
  setExtraError,
  setShouldRedirect,
}: Props) => {
  const handleGoogleLogin = (credentialResponse: CredentialResponse) => {
    sendGoogleLoginDetails(credentialResponse).then((res) => {
      if (res.statusCode !== 200) {
        setExtraError(res.message);
      }
      if (res.statusCode === 200) {
        setShouldRedirect(true);
      }
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
