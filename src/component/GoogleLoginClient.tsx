'use client';

import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import React from 'react'

interface Props{
    sendGoogleLoginDetails: (credentialResponse: CredentialResponse) => Promise<void>
}

export const GoogleLoginClient = ({sendGoogleLoginDetails}: Props) => {
  return (
    <GoogleLogin
        onSuccess={sendGoogleLoginDetails}
        onError={() => {
          console.log("Login Failed");
        }}
      />
  )
}