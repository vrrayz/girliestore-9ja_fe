import { Poppins, SCREENS } from "@/styles";
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
import { CURRENCY } from "@/helpers";

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
        src={product.photos[0]?.url || "/assets/icons/default_product.png"}
      />
      <div className="p-[12px] font-['Hanken Grotesk']">
        <CardBodyHeadingOne
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          {product.name}
        </CardBodyHeadingOne>
        <CardBodyHeadingTwo>
          {CURRENCY}
          {new Intl.NumberFormat("en-US", {
            style: "decimal",
          }).format(product.price)}
        </CardBodyHeadingTwo>
      </div>
    </ProductItemCardContainer>
  );
};

export const ProductListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 8px;

  ${SCREENS.lg} {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const ProductItemImage = styled.img`
  width: 100%;
  height: 64%;
  max-height: 189px;
  object-fit: contain;
  object-position: center;
  background: #eaeaea;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;
const ProductItemCardContainer = styled(CardContainer)<{ $hasLink?: boolean }>`
  margin: auto;
  width: 100%;
  height: 100%;
  aspect-ratio: 0.76/1;
  max-height: 295px;
  max-width: 227px;
  display: flex;
  flex-direction: column;
  cursor: ${(props) => (props.$hasLink ? "pointer" : "none")};
  border-radius: 16px;
  border: 1px solid #ededed;

  &:hover {
    border-color: olivedrab;
  }
`;
