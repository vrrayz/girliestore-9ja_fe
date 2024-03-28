import { Poppins } from "@/styles";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

export const ProductItemCard = () => {
  return (
    <CardContainer>
      {/* image with caption(s) */}
      <ProductItemImage src="/assets/products/product_1.jpg" />
      {/* body with description and price */}
      <CardBody>
        <CardBodyHeadingOne>Product Title</CardBodyHeadingOne>
        <div className="flex justify-between">
          <div>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <CardBodyHeadingTwo>&pound;24,999.99</CardBodyHeadingTwo>
        </div>
      </CardBody>
    </CardContainer>
  );
};

const ProductItemImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
`;
const CardContainer = styled.div`
  width: 100%;
  max-width: 250px;
  margin: auto;
`;

const CardBody = styled.div`
  border: 1px solid grey;
  padding: 16px 8px;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
`;
const CardBodyHeadingOne = styled.h4`
  font-family: ${Poppins};
  letter-spacing: 1.5px;
  font-weight: 600;
  font-size: 1.1rem;
`;
const CardBodyHeadingTwo = styled.h4`
  font-family: ${Poppins};
  font-weight: 400;
  font-size: 1rem;
`;
