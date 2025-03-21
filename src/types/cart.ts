export interface CartItem {
  id: number;
  name: string;
  photoUrl: string;
  quantity: number;
  quantityRequested: number;
  price: number;
}

export type CartOperation = "increase" | "decrease";
