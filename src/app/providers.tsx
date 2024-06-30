"use client";

import { CartContext } from "@/components/CartContext";
import { useCart } from "@/hooks/useCart";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Providers = ({ children }: Props) => {
  const { cartItems, setCartItems } = useCart();
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
