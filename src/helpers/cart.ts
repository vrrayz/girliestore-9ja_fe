import { CartItem } from "@/types";

/********************* VERY IMPORTANT INFO ***************************************************
// Add to cart works... but modify this so that product doesn't show all the details of the product
// what is needed for a cart is 
->the product id,
->one picture,
->the product name
->price
->the quantity available(this requires some consideration because the cookie would need to be updated on the current amount is available for that particular product)
->then add an extra field which will take in the amount the user wants to order (amount requested)

QUICK LOGIC NOTE FOR THAT LAST PART
-> if the updated amount available is less than the amount of that product the user added to cart, reduce the amount requested to the amount availble
-> the user can't checkout the cart if the amount available is zero
**********************************************************************************************/

export const addToCart = async (cartItem: CartItem) => {
  if (!localStorage.getItem("cartItems"))
    localStorage.setItem("cartItems", "[]");
  const newCartItems: CartItem[] = await getCartItems();
  newCartItems.push(cartItem);
  localStorage.setItem("cartItems", JSON.stringify(newCartItems));
};

export const getCartItems = async () => {
  const newCartItems: CartItem[] = JSON.parse(
    localStorage.getItem("cartItems") || "[]"
  );
  return newCartItems;
};
