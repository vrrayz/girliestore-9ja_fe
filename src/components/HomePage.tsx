"use client";

import HorizontalNavigation from "@/components/HorizontalNavigation";
import React, { useEffect, useState } from "react";
import { Body } from "./Styled";
import { Header } from "./Header";
import { useProducts } from "@/hooks/useProducts";
import { Loading } from "./Loading";
import { ProductItemCard, ProductListContainer } from "./ProductItemCard";

export const HomePage = () => {
  const { products, setProducts, isLoading } = useProducts();
  return (
    <Body>
      <Header displaySearch={true} />
      <div></div>
      <section style={{ width: "100vw" }}>
        <div className="p-4 mb-8" style={{ background: "#fff" }}>
          <HorizontalNavigation />
        </div>
        {isLoading && <Loading />}
        <ProductListContainer>
          {products?.map((product, i) => (
            <ProductItemCard product={product} key={i} />
          ))}
        </ProductListContainer>
      </section>
    </Body>
  );
};
