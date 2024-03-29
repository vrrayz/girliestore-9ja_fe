import { Poppins } from "@/styles";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { CardBody, CardBodyHeadingOne, CardBodyHeadingTwo, CardBodyText, CardContainer } from "./Card";

export const ProductItemCard = () => {
  return (
    <div className="flex justify-between">
      <ProductItemCardContainer>
        <ProductItemImage src="/assets/products/product_1.jpg" />
        <CardBody>
          <CardBodyHeadingOne>Product Title</CardBodyHeadingOne>
            <CardBodyHeadingTwo>&pound;24,999.99</CardBodyHeadingTwo>
            <CardBodyText>10 peices</CardBodyText>
        </CardBody>
      </ProductItemCardContainer>
    </div>
  );
};

const ProductItemImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
`;
const ProductItemCardContainer = styled(CardContainer)`
flex: 48.8% 0 0;
  margin: auto;
`
