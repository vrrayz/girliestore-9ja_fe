"use client";

import React, { useContext } from "react";
import { SectionListHeader } from "./Hompage/SectionListHeader";
import {
  ProductListContainer,
  ProductItemCard,
} from "./Products/ProductItemCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { WishlistContext } from "./context/WishlistContext";

export const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);

  return (
    <div className="my-[40px]">
      <SectionListHeader>
        Wishlist{" "}
        <span className="text-olivedrab">
          <FontAwesomeIcon icon={faHeart} color="olivedrab" />
        </span>
      </SectionListHeader>
      <ProductListContainer>
        {wishlist.map(({ product }, i) => (
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
