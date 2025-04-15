"use client";

import React, { useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Loading } from "../Loading";
import { Button } from "../Buttons";
import {
  CardBody,
  CardBodyHeadingOne,
  CardBodyText,
  CardContainer,
} from "../Card";
import { useStore } from "@/hooks/useStore";
import {
  ProductItemCard,
  ProductListContainer,
} from "../Products/ProductItemCard";
import { paramsToId } from "@/helpers";
import { useParamsRedirect } from "@/hooks/useParamsRedirect";
import Link from "next/link";

interface Props {
  id: string;
}

export const Store = ({ id }: Props) => {
  const { store, isLoading } = useStore(paramsToId(id));
  const {} = useParamsRedirect(id, store?.name);

  return (
    <>
      {isLoading && <Loading />}
      {store && (
        <div>
          <Image
            src={store?.photo_url || "/assets/icons/default_product.png"}
            width={200}
            height={200}
            alt="store_image"
            className="mx-auto my-4"
          />
          <StoreInfoContainer>
            <CardBody>
              <CardBodyHeadingOne>Store Info</CardBodyHeadingOne>
              <CardBodyText>
                <FontAwesomeIcon icon={faGlobe} />
                <span>{store.address}</span>
              </CardBodyText>
              <CardBodyText>
                <FontAwesomeIcon icon={faInfoCircle} />
                <span>{store.description}</span>
              </CardBodyText>
            </CardBody>
          </StoreInfoContainer>
          <SectionHeader className="my-3">
            <Link
              href={`${id}/create-product`}
              className="bg-tomato px-[8px] py-[6px] rounded w-6/12 max-w-[200px] text-white text-center border border-tomato hover:bg-saddlebrown hover:border-saddlebrown"
            >
              Add Product
            </Link>
          </SectionHeader>

          <ProductListContainer>
            {store.products?.map((product, i) => (
              <ProductItemCard product={product} key={i} />
            ))}
          </ProductListContainer>
        </div>
      )}
    </>
  );
};

const SectionHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  ${Button} {
    width: 50%;
    max-width: 200px;
  }
`;

const StoreInfoContainer = styled(CardContainer)`
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
