import React, { useState } from "react";
import styled from "styled-components";
import { Colors, SCREENS } from "@/styles";
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
import { useStores } from "@/hooks/useStores";
import { Item, ItemsListGroup } from "../Styled";

export const Stores = () => {
  const { stores, isLoading, setIsLoading } = useStores();
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <section style={{ width: "100vw" }}>
      {isLoading && <Loading />}
      <SectionHeader className="my-3">
        <Button className="btn-primary" onClick={() => setShowModal(true)}>
          Add Store
        </Button>
      </SectionHeader>
      {showModal && (
        <AddStoreModal
          setShowModal={setShowModal}
          setIsLoading={setIsLoading}
        />
      )}
      <ItemsListGroup>
        {stores?.map((store, i) => (
          <Item
            as={"a"}
            href={`/user/store/${store.name.split(" ").join("-")}-${store.id
              .toString()
              .padStart(7, "0")}`}
            key={i}
            className="mb-2"
          >
            <Image
              src={store.photo_url || "/assets/icons/default_product.png"}
              width={78}
              height={78}
              alt="store_image"
            />
            <CardBody>
              <CardBodyHeadingOne>{store.name}</CardBodyHeadingOne>
              <CardBodyText>{store.address}</CardBodyText>
            </CardBody>
          </Item>
        ))}
      </ItemsListGroup>
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
