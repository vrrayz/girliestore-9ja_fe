"use client";

import HorizontalNavigation from "@/components/HorizontalNavigation";
import React, { useEffect, useState } from "react";
import { Body } from "./Styled";
import { Header } from "./Header";
import { useProducts } from "@/hooks/useProducts";
import { Loading, LoadingLogo } from "./Loading";
import { ProductItemCard, ProductListContainer } from "./Products/ProductItemCard";

export const HomePage = () => {
  const { products, isLoading } = useProducts();
  return (
    <Body>
      <Header displaySearch={true} />
      <div></div>
      <section style={{ width: "100vw" }}>
        <div className="p-4 mb-8" style={{ background: "#fff" }}>
          <HorizontalNavigation />
        </div>
        {isLoading && <LoadingLogo />}
        <ProductListContainer>
          {products?.map((product, i) => (
            <ProductItemCard link={`/products/${product.name.split(' ').join('-')}-${product.id.toString().padStart(7,'0')}`} hasLink product={product} key={i} />
          ))}
        </ProductListContainer>
      </section>
    </Body>
  );
};
