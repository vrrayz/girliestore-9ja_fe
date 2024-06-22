"use client";

import { paramsToId } from "@/helpers";
import { useProduct } from "@/hooks/useProduct";
import React from "react";
import { Loading } from "../Loading";
import Image from "next/image";
import styled from "styled-components";
import { CardBody, CardBodyHeadingOne, CardBodyText, CardContainer } from "../Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareRight } from "@fortawesome/free-regular-svg-icons/faCaretSquareRight";

interface Props {
  id: string;
}
export const Product = ({ id }: Props) => {
  const { product, isLoading, setIsLoading } = useProduct(paramsToId(id));
  return (
    <section style={{ width: "100vw" }}>
      {isLoading && <Loading />}
      {product && (
        <>
          <Image
            src={product.photos[0]?.url || "/assets/icons/default_product.png"}
            width={200}
            height={200}
            alt="product_image"
            className="mx-auto my-4"
          />
          <ProductInfoContainer>
            <CardBody>
              <CardBodyHeadingOne>{product.name}</CardBodyHeadingOne>
              <CardBodyText>
                {/* <FontAwesomeIcon icon={faCaretSquareRight} /> */}
                <span>{product.category.name}</span>
              </CardBodyText>
              <CardBodyText>
                {/* <FontAwesomeIcon icon={faInfoCircle} />
                <span>{store.description}</span> */}
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
    margin: 12px 0px;

    svg {
      margin: auto 0px;
    }

    span {
      margin: auto 0px;
    }
  }
`;