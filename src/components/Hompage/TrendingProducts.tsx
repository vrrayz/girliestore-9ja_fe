import { TrendingProduct } from "@/types";
import React from "react";
import {
  ProductListContainer,
  ProductItemCard,
} from "../Products/ProductItemCard";
import { SectionListHeader } from "./SectionListHeader";

interface Props {
  trendingProducts: TrendingProduct[];
}

export const TrendingProducts = ({ trendingProducts }: Props) => {
  return (
    <div className="mb-[40px]">
      <SectionListHeader link={"#"}>
        Trending & <span className="text-olivedrab">Best Sellers</span>
      </SectionListHeader>
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
