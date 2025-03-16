import { getProduct } from "@/actions/product";
import { productsMock } from "@/mocks";
import { Product } from "@/types";
import { useEffect, useState } from "react";

export const useProduct = (id: number) => {
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_DATA_FETCH_MODE == "mock") {
      setProduct(productsMock.filter((product) => product.id == id)[0]);
    } else {
      getProduct(id).then((res) => {
        setProduct(res);
      });
    }
  }, [id]);
  useEffect(() => {
    if (product) setIsLoading(false);
  }, [product]);
  return { product, setProduct, isLoading, setIsLoading };
};
