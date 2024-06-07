export interface Product {
  id: number;
  name: string;
  description: string;
  categoryId: number;
  shopId: number;
  photos: {
    url: string;
  }[];
  quantity: number;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}
