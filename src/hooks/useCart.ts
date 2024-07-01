import { getCartItems } from "@/helpers";
import { CartItem } from "@/types";
import { useEffect, useState } from "react";

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    getCartItems().then((res) => setCartItems(res));
  }, []);

  return { cartItems, setCartItems };
};
