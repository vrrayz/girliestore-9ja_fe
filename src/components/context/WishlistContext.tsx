import { Wishlist } from "@/types";
import { SetStateAction, createContext } from "react";

export const WishlistContext = createContext<{
  wishlist: Wishlist[];
  setWishlist: (value: SetStateAction<Wishlist[]>) => void;
}>({
  wishlist: [],
  setWishlist: (value: SetStateAction<Wishlist[]>) => {},
});
