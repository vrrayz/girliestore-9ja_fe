export interface Category {
  id: number;
  name: string;
  subCategories?: SubCategory[];
}
export interface SubCategory {
  id: number;
  name: string;
  categoryId?: number;
  category?: Category;
}
