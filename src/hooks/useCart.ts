import { getCartItems } from "@/actions";
import { CartItem } from "@/types";
import { useEffect, useState } from "react";

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  return { cartItems, setCartItems };
};
