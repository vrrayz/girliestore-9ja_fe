"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faInfo,
  faInfoCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Colors, SCREENS } from "@/styles";
import Image from "next/image";
import { ErrorMessage, FormContainer, Input, Label, TextArea } from "../Form";
import { SubmitHandler, useForm } from "react-hook-form";
import { Loading } from "../Loading";
import { Button } from "../Buttons";
import { AddStoreModal } from "./AddStoreModal";
import {
  CardBody,
  CardBodyHeadingOne,
  CardBodyText,
  CardContainer,
} from "../Card";
import { useShop } from "@/hooks/useShop";

interface Props {
  id: number;
}

export const Store = ({ id }: Props) => {
  const { shop, setShop, isLoading, setIsLoading } = useShop(id);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    console.log("Shops from ui ", shop);
  });

  // if(isLoading) return <Loading />
  return (
    <section style={{ width: "100vw" }}>
      {isLoading && <Loading />}
      {shop && (
        <>
          <Image
            src={shop?.photo_url || "/assets/icons/toast_success.svg"}
            width={200}
            height={200}
            alt="shop_image"
            className="mx-auto my-4"
          />
          <StoreInfoContainer>
            <CardBody>
              <CardBodyHeadingOne>Store Info</CardBodyHeadingOne>
              <CardBodyText>
                <FontAwesomeIcon icon={faGlobe} />
                <span>{shop.address}</span>
              </CardBodyText>
              <CardBodyText>
                <FontAwesomeIcon icon={faInfoCircle} />
                <span>{shop.description}</span>
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

          {shop.products.map((product, i) => (
            <StoreList key={i}>
              <StoreItem className="mb-2">
                <Image
                  src={product.photos[0].url || "/assets/icons/toast_success.svg"}
                  width={78}
                  height={78}
                  alt="shop_image"
                />
                <CardBody>
                  <CardBodyHeadingOne>{product.name}</CardBodyHeadingOne>
                  {/* <CardBodyText>{shop.address}</CardBodyText> */}
                </CardBody>
              </StoreItem>
            </StoreList>
          ))}
        </>
      )}
    </section>
  );
};

const CustomFormContainer = styled(FormContainer)`
  box-shadow: none;
`;
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
const StoreItem = styled(CardContainer)`
  display: flex;
  padding: 0px 8px;
  border-radius: 12px;
  transform: scale(1);
  transition: transform 500ms;
  img {
    width: 25%;
    max-width: 70px;
    max-height: 70px;
    margin: auto;
    border-radius: 8px;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: 1px 1px 3px 0px #0000008a;
    background-color: ${Colors.red};
    color: ${Colors.white};
  }
  ${CardBody} {
    width: 100%;
  }
`;
const StoreList = styled.div`
//   padding: 16px;
  ${SCREENS.md} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  ${SCREENS.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
