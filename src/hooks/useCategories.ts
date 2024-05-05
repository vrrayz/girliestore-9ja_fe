import { getCategories, menuCategories } from "@/actions/categories";
import { Category } from "@/types";
import { useEffect, useState } from "react";

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  },[]);
  return { categories, setCategories };
};
