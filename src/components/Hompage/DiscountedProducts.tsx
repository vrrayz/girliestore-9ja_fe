import React from "react";
import {
  ProductListContainer,
  ProductItemCard,
} from "../Products/ProductItemCard";
import { SectionListHeader } from "./SectionListHeader";
import { useDiscountedProducts } from "@/hooks/useProducts";
import { LoadingLogo } from "../Loading";

export const DiscountedProducts = () => {
  const { products, isLoading } = useDiscountedProducts();
  return (
    <div className="mb-[40px]">
      <SectionListHeader link="#">
        Special Offers & <span className="text-olivedrab">Discount</span>
      </SectionListHeader>
      {isLoading && <LoadingLogo />}
      <ProductListContainer>
        {products?.map((product, i) => (
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
