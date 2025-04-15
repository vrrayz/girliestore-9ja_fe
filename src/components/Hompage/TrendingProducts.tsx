import React from "react";
import {
  ProductListContainer,
  ProductItemCard,
} from "../Products/ProductItemCard";
import { SectionListHeader } from "./SectionListHeader";
import { useTrendingProducts } from "@/hooks/useTrendingProducts";
import { LoadingLogo } from "../Loading";

export const TrendingProducts = () => {
  const { trendingProducts, isTrendingProductLoading } = useTrendingProducts();

  return (
    <div className="mb-[40px]">
      <SectionListHeader link={"#"}>
        Trending & <span className="text-olivedrab">Best Sellers</span>
      </SectionListHeader>
      {isTrendingProductLoading && <LoadingLogo />}

      <ProductListContainer>
        {trendingProducts?.map(({ product }, i) => (
          <ProductItemCard
            link={`/products/${product.name.split(" ").join("-")}-${product.id
              .toString()
              .padStart(7, "0")}`}
            hasLink
            product={product}
            key={i}
          />
        ))}
      </ProductListContainer>
    </div>
  );
};
