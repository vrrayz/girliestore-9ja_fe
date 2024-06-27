import { getProducts } from "@/actions/product";
import { Product, SortOrder } from "@/types";
import { useEffect, useState } from "react";

export const useProducts = (sortOrder?: SortOrder) => {
  const [products, setProducts] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    let data = { orderBy: "asc" };
    if (sortOrder) data.orderBy = sortOrder;
    getProducts(data).then((res) => {
      setProducts(res);
    });
  }, [sortOrder]);
  useEffect(() => {
    if (products) setIsLoading(false);
  }, [products]);
  return { products, setProducts, isLoading, setIsLoading };
};
