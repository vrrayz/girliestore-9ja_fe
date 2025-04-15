"use client";

import HorizontalNavigation from "@/components/Hompage/HorizontalNavigation";
import React, { useContext, useEffect } from "react";
import { useProducts } from "@/hooks/useProducts";
import { LoadingLogo } from "../Loading";
import {
  ProductItemCard,
  ProductListContainer,
} from "../Products/ProductItemCard";
import Image from "next/image";
import { SectionListHeader } from "./SectionListHeader";
import { FingerPrintContext } from "../context/FingerPrintContext";
import { useTrendingProducts } from "@/hooks/useTrendingProducts";
import { TrendingProducts } from "./TrendingProducts";
import { AuthContext } from "../context/AuthContext";
import { DiscountedProducts } from "./DiscountedProducts";

export const HomePage = () => {
  const { products, isLoading } = useProducts("desc");
  const { fingerPrint } = useContext(FingerPrintContext);
  const { authUser } = useContext(AuthContext);

  useEffect(() => {
    console.log("The fingerprint is == ", fingerPrint);
    console.log("The user === ", authUser);
  }, [authUser, fingerPrint]);
  return (
    <>
      <div className="px-4 h-[69px] border border-gainsboro border-x-0 border-t-0 flex flex-col items-center">
        <HorizontalNavigation />
      </div>
      <div className="px-0">
        <div className="w-full aspect-[3/1] md:aspect-[3/1] max-w-[1201px] overflow-hidden mx-auto relative rounded-[16px] my-[34px] lg:my-[120px]">
          <Image
            src={"/assets/banners/banner_1.jpg"}
            width={1200}
            height={400}
            alt="mask_banner"
            className="block w-full h-full object-cover"
          />
        </div>

        <TrendingProducts />
        <DiscountedProducts />
        <div className="mb-[40px]">
          <SectionListHeader link="#">
            New Arrivals |{" "}
            <span className="text-olivedrab">Latest Collection</span>
          </SectionListHeader>
          {isLoading && <LoadingLogo />}
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
    </>
  );
};
