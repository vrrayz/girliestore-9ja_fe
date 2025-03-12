import { getCategories, menuCategories } from "@/actions/categories";
import { categoryMock } from "@/mocks/categories";
import { Category } from "@/types";
import { useEffect, useState } from "react";

interface Props {
  isMock?: boolean;
}

export const useCategories = ({ isMock }: Props) => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    if (isMock) {
      setCategories(categoryMock);
    } else {
      getCategories().then((res) => {
        setCategories(res);
      });
    }
  }, [isMock]);
  return { categories, setCategories };
};
