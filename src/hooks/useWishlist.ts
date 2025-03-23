import { getWishlist } from "@/actions/wishlist";
import { AuthContext } from "@/components/context/AuthContext";
import { wishlistMock } from "@/mocks";
import { Wishlist } from "@/types";
import { useContext, useEffect, useState } from "react";
import { useIsAuthenticated } from "./useIsAuthenticated";

export const useWishlist = () => {
  const [wishlist, setWishlist] = useState<Wishlist[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { authUserDetails } = useIsAuthenticated();

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_DATA_FETCH_MODE == "mock") {
      setWishlist(wishlistMock);
    } else {
      if (authUserDetails) {
        getWishlist().then((res) => {
          setWishlist(res);
        });
      } else {
        setWishlist([]);
      }
    }
  }, [authUserDetails]);
  useEffect(() => {
    if (wishlist) setIsLoading(false);
    console.log("Wishlist === ", wishlist);
  }, [wishlist]);
  return { wishlist, setWishlist, isLoading, setIsLoading };
};
