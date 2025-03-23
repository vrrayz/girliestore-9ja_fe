"use client";

import { AuthContext } from "@/components/context/AuthContext";
import { CartContext } from "@/components/context/CartContext";
import { FingerPrintContext } from "@/components/context/FingerPrintContext";
import { WishlistContext } from "@/components/context/WishlistContext";
import { useCart } from "@/hooks/useCart";
import { useIsAuthenticated } from "@/hooks/useIsAuthenticated";
import { useWishlist } from "@/hooks/useWishlist";
import { load } from "@fingerprintjs/fingerprintjs";
import React, { ReactNode, useCallback, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

export const Providers = ({ children }: Props) => {
  const { cartItems, setCartItems } = useCart();
  const [fingerprint, setFingerprint] = useState("");
  const { authUserDetails, setAuthUserDetails } = useIsAuthenticated();
  const { wishlist, setWishlist } = useWishlist();
  const getFingerprint = useCallback(async () => {
    const fp = await load();
    const result = await fp.get();
    setFingerprint(result.visitorId);
  }, []);

  useEffect(() => {
    getFingerprint();
  }, []);
  return (
    <AuthContext.Provider
      value={{ authUser: authUserDetails, setAuthUser: setAuthUserDetails }}
    >
      <WishlistContext.Provider value={{ wishlist, setWishlist }}>
        <FingerPrintContext.Provider value={{ fingerPrint: fingerprint }}>
          <CartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
          </CartContext.Provider>
        </FingerPrintContext.Provider>
      </WishlistContext.Provider>
    </AuthContext.Provider>
  );
};
