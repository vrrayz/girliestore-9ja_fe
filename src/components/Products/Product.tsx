"use client";

import { CURRENCY, paramsToId } from "@/helpers";
import { useProduct } from "@/hooks/useProduct";
import React, { useContext } from "react";
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
import {
  InlineTextSmall,
  InlineTextXl,
  MultiplePhotosContainer,
} from "../Styled";
import { faCartFlatbed, faTags } from "@fortawesome/free-solid-svg-icons";
import { ReviewAndRating } from "./ReviewAndRating";
import { StarRatings } from "./StarRatings";
import { addToCart } from "@/actions";
import { CartContext } from "../CartContext";

interface Props {
  id: string;
}
export const Product = ({ id }: Props) => {
  const { product, isLoading, setIsLoading } = useProduct(paramsToId(id));
  const { cartItems, setCartItems } = useContext(CartContext);

  const addProductToCart = () => {
    if (product) {
      const cartItem = {
        id: product.id,
        name: product.name,
        photoUrl: product.photos[0].url,
        quantity: product.quantity,
        quantityRequested: 1,
        price: product.price,
      };
      addToCart(cartItem).then(() => setCartItems([...cartItems, cartItem]));
    }
  };
  return (
    <section style={{ width: "100vw" }}>
      {isLoading && <Loading />}
      {product && (
        <>
          <CustomMultiPhoto
            $photoCount={product.photos.length}
            $maxWidth={400}
            $photoWidth={350}
          >
            {product.photos.map((photo, i) => (
              <ProductImage
                src={photo.url || "/assets/icons/default_product.png"}
                width={200}
                height={200}
                alt="product_image"
                className="mx-auto mt-3"
                key={i}
              />
            ))}
          </CustomMultiPhoto>
          <ProductInfoContainer className="mb-5 mt-4">
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
              <StarRatings
                ratingsCount={5}
                hasReviewersCount
                reviewersCount={53}
              />
              <button
                className="styled-button gradient-olivedrab my-3"
                onClick={() => addProductToCart()}
              >
                <FontAwesomeIcon
                  icon={faCartFlatbed}
                  size="lg"
                  className="mr-1"
                />
                <span className="ml-1">Add To Cart</span>
              </button>
            </CardBody>
          </ProductInfoContainer>
          <ProductInfoContainer className="mb-5">
            <CardBody>
              <CardBodyHeadingOne>Description</CardBodyHeadingOne>
              <CardBodyText className="my-3">
                {product.description}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
                quos, consequatur eum ea tempore amet ducimus saepe rerum
                quisquam possimus corrupti dignissimos dolorem officiis?
                Eligendi et placeat illum doloribus assumenda?
              </CardBodyText>
            </CardBody>
          </ProductInfoContainer>
          <ProductInfoContainer className="mb-5">
            <CardBody>
              <CardBodyHeadingOne>Reviews and Ratings</CardBodyHeadingOne>
              <CardBodyText className="mb-5">
                <InlineTextSmall className="font-bold">
                  Avg Rating:
                </InlineTextSmall>
                <InlineTextSmall className="font-extrabold text-red">
                  <span>4.5/5</span>
                  <span className="font-normal"> (from {53} customers)</span>
                </InlineTextSmall>
              </CardBodyText>
              <ReviewAndRating />
              <ReviewAndRating />
              <ReviewAndRating />
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
  box-shadow: 0px 5px 7px 0px #0000001a;
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
