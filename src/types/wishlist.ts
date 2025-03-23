import { Product } from "./product";
import { User } from "./user";

export interface Wishlist {
  id: string;
  userId: number;
  user: User;
  productId: number;
  product: Product;
  createdAt: Date;
  updatedAt: Date | null;
}
