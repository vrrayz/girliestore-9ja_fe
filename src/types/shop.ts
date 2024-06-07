import { Product } from "./product";
import { User } from "./user";

export interface Shop {
  id: number;
  name: string;
  address: string;
  ownerId: number;
  photo_url: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  owner: User;
  products: Product[];
}
