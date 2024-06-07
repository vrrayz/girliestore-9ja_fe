export interface Product {
  id: number;
  name: string;
  description: string;
  categoryId: number;
  shopId: number;
  photos: {
    url: string;
  }[];
  createdAt: Date;
  updatedAt: Date;
}
