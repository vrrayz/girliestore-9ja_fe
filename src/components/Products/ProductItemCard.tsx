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
} from "../Card";
import { Product } from "@/types";
import { useRouter } from "next/navigation";

interface Props {
  product: Product;
  hasLink?: boolean;
  link?: string;
}

export const ProductItemCard = ({ product, hasLink, link }: Props) => {
  const router = useRouter();
  const redirectToLink = (link?: string) => {
    if (link) router.push(link);
  };
  return (
    <ProductItemCardContainer
      $hasLink={hasLink}
      onClick={() => redirectToLink(link)}
    >
      <ProductItemImage
        src={product.photos[0]?.url || "/assets/icons/toast_success.svg"}
      />
      <CardBody>
        <CardBodyHeadingOne>{product.name}</CardBodyHeadingOne>
        <CardBodyHeadingTwo>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "NGN",
          }).format(product.price)}
        </CardBodyHeadingTwo>
        <CardBodyText>{product.quantity} Items</CardBodyText>
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
const ProductItemCardContainer = styled(CardContainer)<{ $hasLink?: boolean }>`
  flex: 48.8% 0 0;
  margin: auto;
  cursor: ${(props) => (props.$hasLink ? "pointer" : "none")};
`;
