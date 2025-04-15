import { getDiscountedProducts, getProducts } from "@/actions/product";
import { productsMock } from "@/mocks";
import { Product, SortOrder } from "@/types";
import { useEffect, useState } from "react";

export const useProducts = (sortOrder?: SortOrder) => {
  const [products, setProducts] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_DATA_FETCH_MODE == "mock") {
      setProducts(productsMock);
    } else {
      let data = { orderBy: "asc" };
      if (sortOrder) data.orderBy = sortOrder;
      getProducts(data).then((res) => {
        setProducts(res);
      });
    }
  }, [sortOrder]);
  useEffect(() => {
    if (products) setIsLoading(false);
  }, [products]);
  return { products, setProducts, isLoading, setIsLoading };
};

export const useDiscountedProducts = () => {
  const [products, setProducts] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_DATA_FETCH_MODE == "mock") {
      setProducts(productsMock);
    } else {
      getDiscountedProducts().then((res) => {
        setProducts(res);
      });
    }
  }, []);
  useEffect(() => {
    if (products) setIsLoading(false);
  }, [products]);
  return { products, setProducts, isLoading, setIsLoading };
};
