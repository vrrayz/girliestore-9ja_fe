import { Category, SubCategory } from "./category";

export interface Product {
  id: number;
  name: string;
  description: string;
  categoryId: number;
  category: Category;
  subCategoryId: number;
  subCategory: SubCategory;
  shopId: number;
  photos: {
    url: string;
  }[];
  quantity: number;
  price: number;
  size?: number;
  unit?: string;
  color?: string;
  productEngagementId?: string;
  discountType?: string;
  discountPercentage?: number;
  quantityForDiscount?: number;
  hasDiscount?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TrendingProduct {
  id: string;
  productId: number;
  product: Product;
  score: number | string;
  createdAt: Date;
  updatedAt: Date | null;
}
