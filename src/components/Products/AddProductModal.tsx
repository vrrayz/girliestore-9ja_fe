import {
  ModalOverlay,
  Modal,
  ModalHeading,
  CloseButton,
  ModalBody,
  Colors,
} from "@/styles";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { closeModal, ErrorModal } from "../Modals/Modals";
import Image from "next/image";
import { DragAndDropContainer, ErrorMessage, FileEmptyPlaceholder, ImagePreview, Input, Label, TextArea } from "../Form";
import styled from "styled-components";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCategories } from "@/hooks/useCategories";
import { addProduct } from "@/actions/product";

interface Props {
  setShowModal: (value: boolean) => void;
  setIsLoading: (value: boolean) => void;
  storeId: number;
}
type ShopInput = {
  name: string;
  description: string;
  shopId: number;
  categoryId: number;
  price: number;
  quantity: number;
  file: FileList;
};

export const AddProductModal = ({
  setShowModal,
  setIsLoading,
  storeId,
}: Props) => {
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
  const [productImage, setProductImage] = useState<string>();
  const [inputFile, setInputFile] = useState<FileList>();
  const { categories } = useCategories();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShopInput>({
    mode: "onChange",
    defaultValues: {
      shopId: storeId,
    },
  });

  const isInCorrectFormat = (blob: Blob) =>
    !blob || (blob.type !== "image/jpeg" && blob.type !== "image/png");

  const onSubmit: SubmitHandler<ShopInput> = (data) => {
    setIsLoading(true);
    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("shopId", data.shopId.toString());
    formData.append("categoryId", data.categoryId.toString());
    formData.append("categoryId", data.price.toString());
    formData.append("categoryId", data.quantity.toString());
    formData.append("file", data.file[0]);

    addProduct(formData).then(async (res) => {
      console.log("This is the response ", res);
      if (res.statusCode === 200) {
        console.log("Response success");
        setShowModal(false);
      } else {
        setShowErrorModal(true);
      }
      setIsLoading(false);
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      if (!isInCorrectFormat(event.target.files[0])) {
        setProductImage(URL.createObjectURL(event.target.files[0]));
        setInputFile(event.target.files);
      }
    }
  };
  return (
    <>
      {showErrorModal ? (
        <ErrorModal
          title={"Error Creating Term"}
          setShowModal={setShowErrorModal}
        />
      ) : (
        <ModalOverlay
          onClick={(event) => closeModal(event, setShowModal)}
          id="modal-overlay"
        >
          <Modal>
            <ModalHeading>Add New Product</ModalHeading>
            <CloseButton onClick={() => setShowModal(false)}>
              <FontAwesomeIcon icon={faXmark} size="lg" />
            </CloseButton>
            <ModalBody>
              <form onSubmit={handleSubmit(onSubmit)}>
                <DragAndDropContainer>
                  {productImage && !errors.file ? (
                    <ImagePreview>
                      <Image
                        src={productImage}
                        alt="img_preview"
                        width={300}
                        height={200}
                      />
                    </ImagePreview>
                  ) : (
                    <FileEmptyPlaceholder>
                      <div className="mx-auto text-center flex flex-col opacity-50">
                        <FontAwesomeIcon icon={faPlus} size="2x" />
                        Upload Image
                      </div>
                    </FileEmptyPlaceholder>
                  )}
                  <input
                    type="file"
                    {...register("file", {
                      onChange: (event) => handleChange(event),
                      required: "Photo is required",
                      validate: (value) =>
                        !isInCorrectFormat(value[0]) ||
                        "Incorrect file format, must be either a .png or .jpg",
                    })}
                  />
                </DragAndDropContainer>
                {errors.file && (
                  <ErrorMessage>{errors.file.message}</ErrorMessage>
                )}
                <Label htmlFor="name">Product Name</Label>
                <Input
                  type="text"
                  {...register("name", {
                    required: "Product Name is required",
                  })}
                  className={`${errors.name ? "mb-0" : "mb-4"}`}
                />
                {errors.name && (
                  <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}
                <Label htmlFor="categoryId">Product Category</Label>
                <select
                  {...register("categoryId", {
                    required: "Category is required",
                  })}
                  className={`${errors.categoryId ? "mb-0" : "mb-4"}`}
                >
                  <option value=""></option>
                  {categories.map((category, i) => (
                    <option key={i} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                {errors.categoryId && (
                  <ErrorMessage>{errors.categoryId.message}</ErrorMessage>
                )}
                <Label htmlFor="description">Description</Label>
                <TextArea
                  {...register("description", {
                    required: "Product Description is required",
                  })}
                  className={`${errors.description ? "mb-0" : "mb-4"}`}
                ></TextArea>
                {errors.description && (
                  <ErrorMessage>{errors.description.message}</ErrorMessage>
                )}
                <div className="flex">
                  <div>
                    <Label htmlFor="price">Price</Label>
                    <Input
                      type="number"
                      {...register("price", {
                        required: "Product Price is required",
                      })}
                      className={`${errors.price ? "mb-0" : "mb-4"}`}
                    />
                    {errors.price && (
                      <ErrorMessage>{errors.price.message}</ErrorMessage>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input
                      type="number"
                      {...register("quantity", {
                        required: "Product Name is required",
                      })}
                      className={`${errors.quantity ? "mb-0" : "mb-4"}`}
                    />
                    {errors.quantity && (
                      <ErrorMessage>{errors.quantity.message}</ErrorMessage>
                    )}
                  </div>
                </div>
                <Input
                  type="submit"
                  value="Create Product"
                  className="btn-primary mb-4"
                />
              </form>
            </ModalBody>
          </Modal>
        </ModalOverlay>
      )}
    </>
  );
};
