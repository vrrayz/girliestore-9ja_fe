import { CartItem } from "@/types";

export const cartItemsJson = [
  {
    id: 25,
    name: "sadsad",
    photoUrl:
      "https://res.cloudinary.com/dnxhfgvtu/image/upload/v1718040402/ytwgfyksyh6gufqlvyhu.png",
    quantity: 3,
    quantityRequested: 1,
    price: 363,
  },
  {
    id: 27,
    name: "TV for test",
    photoUrl:
      "https://res.cloudinary.com/dnxhfgvtu/image/upload/v1719396142/cjxffo5hpm812qgasm2s.jpg",
    quantity: 10,
    quantityRequested: 1,
    price: 500,
  },
  {
    id: 18,
    name: "First product with price and quantity",
    photoUrl:
      "https://res.cloudinary.com/dnxhfgvtu/image/upload/v1718034169/qkgizq3rb25vreywcbcu.jpg",
    quantity: 2,
    quantityRequested: 1,
    price: 1735.5,
  },
];
export const cartItems: CartItem[] = cartItemsJson;
