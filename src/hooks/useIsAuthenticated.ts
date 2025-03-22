import { authenticationRequest } from "@/actions";
import { User } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useIsAuthenticated = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [authUserDetails, setAuthUserDetails] = useState<User>();
  useEffect(() => {
    authenticationRequest().then((res) => {
      if (res.id) {
        setIsLoggedIn(true);
        setAuthUserDetails(res);
      }
    });
  }, []);

  return { isLoggedIn, setIsLoggedIn, authUserDetails, setAuthUserDetails };
};

const isAuthenticated = async () => {
  const response = await fetch("http://localhost:3000/api/getToken", {
    method: "GET",
    cache: "no-store",
  });
  console.log("The response === ", response);
  return response.status === 200;
};
