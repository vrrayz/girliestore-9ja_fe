import { Poppins } from "@/styles";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import {
  CardBody,
  CardBodyHeadingOne,
  CardBodyHeadingTwo,
  CardBodyText,
  CardContainer,
} from "./Card";
import { Product } from "@/types";

interface Props {
  product: Product;
}

export const ProductItemCard = ({ product }: Props) => {
  return (
    <ProductItemCardContainer>
      <ProductItemImage
        src={product.photos[0].url || "/assets/icons/toast_success.svg"}
      />
      <CardBody>
        <CardBodyHeadingOne>{product.name}</CardBodyHeadingOne>
        <CardBodyHeadingTwo>&pound;24,999.99</CardBodyHeadingTwo>
        <CardBodyText>10 peices</CardBodyText>
      </CardBody>
    </ProductItemCardContainer>
  );
};

export const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 8px;
`;

const ProductItemImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
`;
const ProductItemCardContainer = styled(CardContainer)`
  flex: 48.8% 0 0;
  margin: auto;
`;
