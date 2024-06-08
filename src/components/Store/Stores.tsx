import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Colors, SCREENS } from "@/styles";
import Image from "next/image";
import { ErrorMessage, FormContainer, Input, Label, TextArea } from "../Form";
import { SubmitHandler, useForm } from "react-hook-form";
import { addStore } from "@/actions/store";
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

export const Stores = () => {
  const { stores, setStores, isLoading, setIsLoading } = useStores();
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <section style={{ width: "100vw" }}>
      {isLoading && <Loading />}
      {/* <CustomFormContainer>
        <div className="lg:w-1/2 px-6 py-16">
          
        </div>
      </CustomFormContainer> */}
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
      <StoreList>
        {stores?.map((store, i) => (
          <StoreItem as={"a"} href={`/user/store/${store.id}`} key={i} className="mb-2">
            <Image src={store.photo_url || "/assets/icons/toast_success.svg"} width={78} height={78} alt="store_image" />
            <CardBody>
              <CardBodyHeadingOne>{store.name}</CardBodyHeadingOne>
              <CardBodyText>{store.address}</CardBodyText>
            </CardBody>
          </StoreItem>
        ))}
      </StoreList>
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
  &:hover{
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
padding: 16px;
${SCREENS.md}{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;   
}
${SCREENS.lg}{
  grid-template-columns: repeat(3, 1fr);
}

`
