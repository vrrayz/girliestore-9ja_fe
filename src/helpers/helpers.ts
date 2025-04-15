import { getTrendingProducts, recordCartPoints } from "@/actions/product";
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

export const modifyQuantityRequested = async (
  id: number,
  cartItems: CartItem[],
  operation: CartOperation,
  setCartItems: (value: CartItem[]) => void
) => {
  let itemToDelete: CartItem | null = {
    id: 0,
    name: "",
    photoUrl: "",
    quantity: 0,
    quantityRequested: 0,
    price: 0,
  };
  const newCartItems = cartItems
    .map((cartItem) => {
      if (cartItem.id === id) {
        operation === "increase"
          ? (cartItem.quantityRequested += 1)
          : (cartItem.quantityRequested -= 1);
      }
      return cartItem;
    })
    .filter((cartItem) => {
      if (cartItem.quantityRequested <= 0) {
        itemToDelete = cartItem;
      }
      return cartItem.quantityRequested > 0;
    });

  setCartItems(newCartItems);
  localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  if (
    itemToDelete.id != 0 &&
    process.env.NEXT_PUBLIC_DATA_FETCH_MODE != "mock"
  ) {
    let cartEngagementData = new FormData();
    cartEngagementData.append("productId", itemToDelete.id.toString());
    cartEngagementData.append("score", (3).toString());
    cartEngagementData.append("scoreAction", "decrement");
    recordCartPoints(cartEngagementData);
  }
};

export const generateParamRoute = (route: string, paramId: string) => {
  const newRoute = route.replace(":id", paramId);
  return newRoute;
};
