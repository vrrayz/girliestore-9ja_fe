import { getProducts } from "@/actions/product";
import { Product } from "@/types";
import { useEffect, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true)
  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
    });
  },[]);
  useEffect(() => {
    if(products) setIsLoading(false)
  },[products])
  return { products, setProducts, isLoading, setIsLoading };
};
