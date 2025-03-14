import { CartItem } from "@/types";
import { SetStateAction, createContext } from "react";

export const CartContext = createContext<{
  cartItems: CartItem[];
  setCartItems: (value: SetStateAction<CartItem[]>) => void;
}>({
  cartItems: [],
  setCartItems: (value: SetStateAction<CartItem[]>) => {},
});
