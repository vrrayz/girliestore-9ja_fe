import { CartItem, CartOperation } from "@/types";

export const CURRENCY = "₦";

export const paramsToId = (paramId: string) => {
  const param = paramId.split("-");
  return Number(param[param.length - 1]);
};

export const paramsToName = (paramId: string) => {
  const param = paramId.split("-");
  param.pop();
  return param.join(" ");
};

export const modifyQuantityRequested = (
  id: number,
  cartItems: CartItem[],
  operation: CartOperation,
  setCartItems: (value: CartItem[]) => void
) => {
  const newCartItems = cartItems
    .map((cartItem) => {
      if (cartItem.id === id) {
        operation === "increase"
          ? (cartItem.quantityRequested += 1)
          : (cartItem.quantityRequested -= 1);
      }
      return cartItem;
    })
    .filter((cartItem) => cartItem.quantityRequested > 0);
  setCartItems(newCartItems);
  localStorage.setItem("cartItems", JSON.stringify(newCartItems));
};
