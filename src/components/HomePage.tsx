"use client";

import HorizontalNavigation from "@/components/HorizontalNavigation";
import React from "react";
import { Body } from "./Styled";
import { Header } from "./Header/Header";
import { useProducts } from "@/hooks/useProducts";
import { LoadingLogo } from "./Loading";
import {
  ProductItemCard,
  ProductListContainer,
} from "./Products/ProductItemCard";
import Image from "next/image";

export const HomePage = () => {
  const { products, isLoading } = useProducts("desc");
  return (
    <Body>
      <Header displaySearch={true} />
      <section className="w-full max-w-[1200px] mx-auto">
        <div className="px-4 h-[69px] border border-gainsboro border-x-0 border-t-0 flex flex-col items-center">
          <HorizontalNavigation />
        </div>
        {isLoading && <LoadingLogo />}
        <div className="px-4 xl:px-0">
          <div className="w-full aspect-[3/1] md:aspect-[3/1] max-w-[1201px] overflow-hidden mx-auto relative rounded-[16px] my-[34px] my-lg-[120px]">
            <Image
              src={"/assets/banners/banner_1.jpg"}
              width={1200}
              height={400}
              alt="mask_banner"
              className="block w-full h-full object-cover"
            />
          </div>
          <div>
            <ProductListContainer>
              {products?.map((product, i) => (
                <ProductItemCard
                  link={`/products/${product.name
                    .split(" ")
                    .join("-")}-${product.id.toString().padStart(7, "0")}`}
                  hasLink
                  product={product}
                  key={i}
                />
              ))}
            </ProductListContainer>
          </div>
        </div>
      </section>
    </Body>
  );
};
