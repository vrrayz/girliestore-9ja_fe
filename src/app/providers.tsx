"use client";

import { AuthContext } from "@/component/AuthContext";
import React, { ReactNode } from "react";

interface Props {
  access_token: string | undefined;
  children: ReactNode;
}

export const Providers = ({ children, access_token }: Props) => {
  const isAuthenticated = access_token ? true : false;
  const token = access_token || ''
  return (
    <AuthContext.Provider value={{ isAuthenticated, access_token: token }}>
      {children}
    </AuthContext.Provider>
  );
};
