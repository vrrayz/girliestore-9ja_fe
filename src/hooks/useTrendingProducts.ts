import { getTrendingProducts } from "@/actions/product";
import { trendingProductsMock } from "@/mocks";
import { TrendingProduct } from "@/types";
import { useEffect, useState } from "react";

export const useTrendingProducts = () => {
  const [trendingProducts, setTrendingProducts] = useState<TrendingProduct[]>();
  const [isTrendingProductLoading, setIsTrendingProductLoading] =
    useState<boolean>(true);
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_DATA_FETCH_MODE == "mock") {
      setTrendingProducts(trendingProductsMock);
    } else {
      getTrendingProducts().then((res) => {
        setTrendingProducts(res);
      });
    }
  }, []);
  useEffect(() => {
    if (trendingProducts) setIsTrendingProductLoading(false);
  }, [trendingProducts]);
  return {
    trendingProducts,
    setTrendingProducts,
    isTrendingProductLoading,
    setIsTrendingProductLoading,
  };
};
