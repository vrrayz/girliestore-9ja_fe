import { getProduct } from "@/actions/product";
import { Product } from "@/types";
import { useEffect, useState } from "react";

export const useProduct = (id: number) => {
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState<boolean>(true)
  useEffect(() => {
    getProduct(id).then((res) => {
      setProduct(res);
    });
  },[id]);
  useEffect(() => {
    if(product) setIsLoading(false)
  },[product])
  return { product, setProduct, isLoading, setIsLoading };
};
