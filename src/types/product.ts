import { Category } from "./category";

export interface Product {
  id: number;
  name: string;
  description: string;
  categoryId: number;
  category: Category;
  shopId: number;
  photos: {
    url: string;
  }[];
  quantity: number;
  price: number;
  color: string;
  unit: string;
  size: number;
  createdAt: Date;
  updatedAt: Date;
}
