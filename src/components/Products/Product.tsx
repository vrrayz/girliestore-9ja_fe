"use client";

import { CURRENCY, paramsToId } from "@/helpers";
import { useProduct } from "@/hooks/useProduct";
import React from "react";
import { Loading } from "../Loading";
import Image from "next/image";
import styled from "styled-components";
import {
  CardBody,
  CardBodyHeadingOne,
  CardBodyText,
  CardContainer,
} from "../Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareRight } from "@fortawesome/free-regular-svg-icons/faCaretSquareRight";
import {
  InlineTextSmall,
  InlineTextXl,
  MultiplePhotosContainer,
} from "../Styled";
import { faStar, faTags } from "@fortawesome/free-solid-svg-icons";
import { Colors } from "@/styles";

interface Props {
  id: string;
}
export const Product = ({ id }: Props) => {
  const { product, isLoading, setIsLoading } = useProduct(paramsToId(id));
  const starRatings = new Array(5).fill(0);
  return (
    <section style={{ width: "100vw" }}>
      {isLoading && <Loading />}
      {product && (
        <>
          <CustomMultiPhoto
            $photoCount={product.photos.length}
            $maxWidth={380}
            $photoWidth={350}
          >
            {product.photos.map((photo, i) => (
              <ProductImage
                src={photo.url || "/assets/icons/default_product.png"}
                width={200}
                height={200}
                alt="product_image"
                className="mx-auto my-4"
                key={i}
              />
            ))}
          </CustomMultiPhoto>
          <ProductInfoContainer>
            <CardBody>
              <CardBodyHeadingOne>{product.name}</CardBodyHeadingOne>
              <CardBodyText>
                <InlineTextSmall>
                  Category:{" "}
                  <a href="#" className="text-red font-bold">
                    {product.category.name}
                  </a>
                </InlineTextSmall>
              </CardBodyText>
              <CardBodyText>
                <FontAwesomeIcon icon={faTags} />
                <InlineTextXl className="font-extrabold">
                  {CURRENCY} {product.price}
                </InlineTextXl>
              </CardBodyText>
              <CardBodyText className="mb-2">
                <InlineTextSmall>{product.quantity} items left</InlineTextSmall>
              </CardBodyText>
              <CardBodyText className="mb-2">
                <StarRatingsContainer>
                  {starRatings.map((rating, i) => (
                    <FontAwesomeIcon icon={faStar} color={Colors.red} key={i} />
                  ))}
                </StarRatingsContainer>
              </CardBodyText>
            </CardBody>
          </ProductInfoContainer>
          {/* <SectionHeader className="my-3">
            <Button className="btn-primary" onClick={() => setShowModal(true)}>
              Add Product
            </Button>
          </SectionHeader> */}
          {/* {showModal && (
            <AddProductModal
              setShowModal={setShowModal}
              setIsLoading={setIsLoading}
              storeId={store.id}
            />
          )} */}

          {/* <ProductListContainer>
            {store.products?.map((product, i) => (
              <ProductItemCard product={product} key={i} />
            ))}
          </ProductListContainer> */}
        </>
      )}
    </section>
  );
};
const ProductInfoContainer = styled(CardContainer)`
  padding: 8px 16px;
  ${CardBodyText} {
    display: flex;
    gap: 12px;
    svg {
      margin: auto 0px;
    }

    span {
      margin: auto 0px;
    }
  }
`;
const ProductImage = styled(Image)`
  width: 100%;
  max-width: 350px;
  height: 250px;
  object-fit: cover;
`;

const CustomMultiPhoto = styled(MultiplePhotosContainer)`
  gap: 12px;
`;

const StarRatingsContainer = styled.div`
  display: flex;
  gap: 2px;
`;
