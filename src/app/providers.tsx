"use client";

import { CartContext } from "@/components/context/CartContext";
import { FingerPrintContext } from "@/components/context/FingerPrintContext";
import { useCart } from "@/hooks/useCart";
import { load } from "@fingerprintjs/fingerprintjs";
import React, { ReactNode, useCallback, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

export const Providers = ({ children }: Props) => {
  const { cartItems, setCartItems } = useCart();
  const [fingerprint, setFingerprint] = useState("");
  const getFingerprint = useCallback(async () => {
    const fp = await load();
    const result = await fp.get();
    setFingerprint(result.visitorId);
  }, []);

  useEffect(() => {
    getFingerprint();
  });
  return (
    <FingerPrintContext.Provider value={{ fingerPrint: fingerprint }}>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        {children}
      </CartContext.Provider>
    </FingerPrintContext.Provider>
  );
};
