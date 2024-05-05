import { menuCategories } from "@/actions/categories";
import { useState } from "react";

export const useCategories = () => {
  const [categories, setCategories] = useState<string[]>(menuCategories);
  return { categories, setCategories };
};
