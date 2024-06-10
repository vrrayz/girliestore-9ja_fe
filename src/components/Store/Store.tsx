"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Loading } from "../Loading";
import { Button } from "../Buttons";
import { AddStoreModal } from "./AddStoreModal";
import {
  CardBody,
  CardBodyHeadingOne,
  CardBodyText,
  CardContainer,
} from "../Card";
import { useStore } from "@/hooks/useStore";
import { ProductItemCard, ProductListContainer } from "../Products/ProductItemCard";
import { paramsToId } from "@/helpers";
import { useParamsRedirect } from "@/hooks/useParamsRedirect";

interface Props {
  id: string;
}

export const Store = ({ id }: Props) => {
  const { store, isLoading, setIsLoading } = useStore(
    paramsToId(id)
  );
  const {} = useParamsRedirect(id, store?.name);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    console.log("Shops from ui ", store);
  });
  return (
    <section style={{ width: "100vw" }}>
      {isLoading && <Loading />}
      {store && (
        <>
          <Image
            src={store?.photo_url || "/assets/icons/toast_success.svg"}
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
            <Button className="btn-primary" onClick={() => setShowModal(true)}>
              Add Product
            </Button>
          </SectionHeader>
          {showModal && (
            <AddStoreModal
              setShowModal={setShowModal}
              setIsLoading={setIsLoading}
            />
          )}

          <ProductListContainer>
            {store.products?.map((product, i) => (
              <ProductItemCard product={product} key={i} />
            ))}
          </ProductListContainer>
        </>
      )}
    </section>
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