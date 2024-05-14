import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Colors } from "@/styles";
import Image from "next/image";
import { ErrorMessage, FormContainer, Input, Label, TextArea } from "../Form";
import { SubmitHandler, useForm } from "react-hook-form";
import { addShop } from "@/actions/store";
import { useShops } from "@/hooks/useShops";
import { Loading } from "../Loading";
import { Button } from "../Buttons";
import { AddStoreModal } from "./AddStoreModal";

export const Stores = () => {
  const { shops, setShops, isLoading, setIsLoading } = useShops();
  const [showModal, setShowModal] = useState<boolean>(false);

  // if(isLoading) return <Loading />
  return (
    <section style={{ width: "100vw" }}>
      {isLoading && <Loading />}
      {/* <CustomFormContainer>
        <div className="lg:w-1/2 px-6 py-16">
          
        </div>
      </CustomFormContainer> */}
      <SectionHeader className="my-3">
        <Button className="btn-primary" onClick={() => setShowModal(true)}>Add Store</Button>
      </SectionHeader>
      {showModal && <AddStoreModal setShowModal={setShowModal} setIsLoading={setIsLoading} />}
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
