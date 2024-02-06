import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useIsAuthenticated = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const isUserAuthenticated = await isAuthenticated();

      if (!isUserAuthenticated) {
        router.push("/auth/login");
        return;
      }

      setIsLoggedIn(true);
    })();
  }, [router]);

  return { isLoggedIn };
};

const isAuthenticated = async () => {
  const response = await fetch("http://localhost:3000/api/getToken", {
    method: "GET",
    cache: "no-store",
  });
  console.log("The response === ", response);
  return response.status === 200;
};
