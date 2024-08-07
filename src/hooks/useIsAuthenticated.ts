import { isUserAuthenticated } from "@/actions";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useIsAuthenticated = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    useEffect(() => {
      isUserAuthenticated().then((res) => {
        setIsLoggedIn(res);
      });
    },[]);

  return { isLoggedIn, setIsLoggedIn };
};

const isAuthenticated = async () => {
  const response = await fetch("http://localhost:3000/api/getToken", {
    method: "GET",
    cache: "no-store",
  });
  console.log("The response === ", response);
  return response.status === 200;
};
