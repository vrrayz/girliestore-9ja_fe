import { getCategories, menuCategories } from "@/actions/categories";
import { categoryMock } from "@/mocks/categories";
import { Category } from "@/types";
import { useEffect, useState } from "react";

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_DATA_FETCH_MODE == "mock") {
      setCategories(categoryMock);
    } else {
      getCategories().then((res) => {
        setCategories(res);
      });
    }
  }, []);
  return { categories, setCategories };
};
