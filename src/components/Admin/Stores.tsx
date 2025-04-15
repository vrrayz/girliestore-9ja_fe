"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { Loading } from "../Loading";
import { Button } from "../Buttons";
import { AddStoreModal } from "../Store/AddStoreModal";
import { CardBody, CardBodyHeadingOne, CardBodyText } from "../Card";
import { useStores } from "@/hooks/useStores";
import { Item, ItemsListGroup } from "../Styled";
import { useToast } from "@/hooks/useToast";
import { Toast } from "../Toast";
import { generateParamRoute } from "@/helpers";
import { adminRoutes } from "@/constants/routes";

export const Stores = () => {
  const { stores, setStores, isLoading, setIsLoading } = useStores();
  const [showModal, setShowModal] = useState<boolean>(false);
  const { toggleToast, setToast, closeToast, toast, showToast } = useToast();

  const showAddStoreModal = () => {
    setToast(undefined);
    setShowModal(true);
  };

  useEffect(() => {
    if (toast && toast.type == "success" && showModal) {
      setShowModal(false);
    }
  }, [showModal, toast]);

  return (
    <section>
      {isLoading && <Loading />}
      <SectionHeader className="my-3">
        <h4 className="text-[24px]">All Gs9ja Stores</h4>
        <Button className="btn-primary" onClick={() => showAddStoreModal()}>
          Add Store
        </Button>
      </SectionHeader>
      {showModal && stores && (
        <AddStoreModal
          setShowModal={setShowModal}
          setShowToast={showToast}
          setIsLoading={setIsLoading}
          stores={stores}
          setStores={setStores}
        />
      )}
      <ItemsListGroup>
        {stores?.map((store, i) => (
          <Item
            as={"a"}
            href={generateParamRoute(
              adminRoutes.store,
              `${store.name.split(" ").join("-")}-${store.id
                .toString()
                .padStart(7, "0")}`
            )}
            key={i}
            className="mb-2 shadow"
          >
            <Image
              src={store.photo_url || "/assets/icons/default_product.png"}
              width={78}
              height={78}
              alt="store_image"
              className="object-cover"
            />
            <CardBody className="overflow-hidden">
              <CardBodyHeadingOne className="truncate">
                {store.name}
              </CardBodyHeadingOne>
              <CardBodyText className="truncate">{store.address}</CardBodyText>
            </CardBody>
          </Item>
        ))}
      </ItemsListGroup>
      {toggleToast && toast && (
        <Toast
          type={toast.type}
          closeToast={closeToast}
          title={toast.title}
          message={toast.message}
        />
      )}
    </section>
  );
};

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  ${Button} {
    width: 50%;
    max-width: 200px;
  }
`;
