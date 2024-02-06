"use client";

import React from "react";
import { Users } from "./component/Users";
import { useIsAuthenticated } from "@/hooks/useIsAuthenticated";

export default function Page() {
  const { isLoggedIn } = useIsAuthenticated()

  if(!isLoggedIn) {
    return <h1>Loading ....</h1>
  }

  return (
    <>
      <h1>Check Logged In === </h1>
      <Users />
    </>
  );
}
