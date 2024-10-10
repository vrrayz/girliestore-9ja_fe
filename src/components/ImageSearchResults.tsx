import { useProductsByLabel } from "@/hooks/useProducts";
import React, { useEffect } from "react";
import { LoadingLogo } from "./Loading";
import {
  ProductListContainer,
  ProductItemCard,
} from "./Products/ProductItemCard";
import styled from "styled-components";
import { Colors, ModalOverlay } from "@/styles";
import { closeModal } from "./Modals/Modals";

interface Props {
  labels: string;
  setShowModal: (value: boolean) => void;
}

export const ImageSearchResults = ({ labels, setShowModal }: Props) => {
  const { products, isLoading } = useProductsByLabel(labels);

  useEffect(() => {
    console.log("The products are ", products);
  }, [products]);
  return (
    <ModalOverlay onClick={(event) => closeModal(event,setShowModal)} id="modal-overlay">
      <SearchResultsContainer>
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
      </SearchResultsContainer>
    </ModalOverlay>
  );
};

const SearchResultsContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 80vh;
  width: 100vw;
  background: ${Colors.whitesmoke};
`;
