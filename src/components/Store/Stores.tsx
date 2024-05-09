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

type ShopInput = {
  name: string;
  address: string;
  description: string;
  file: FileList;
};

export const Stores = () => {
  const { shops, setShops } = useShops();
  const [storeImage, setStoreImage] = useState<string>();
  const [inputFile, setInputFile] = useState<FileList>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShopInput>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<ShopInput> = (data) => {
    let formData = new FormData()
    formData.append('name',data.name)
    formData.append('address',data.address)
    formData.append('description',data.description)
    formData.append('file',data.file[0])
   
    addShop(formData).then(async (res) => {
      console.log("This is the response ",res)
      //   setExtraError(res.statusCode !== 200 ? "Incorrect Credentials" : "");
      if (res.statusCode === 200) {
        // setShops((prev) => [
        //   ...prev,
        //   { id: res.data.id, name: res.data.name },
        // ]);
      }
    });
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      // console.log(event.target.files[0])
      if (!isInCorrectFormat(event.target.files[0])) {
        setStoreImage(URL.createObjectURL(event.target.files[0]));
        setInputFile(event.target.files);
      }
    }
  };
  const isInCorrectFormat = (blob: Blob) =>
    !blob || (blob.type !== "image/jpeg" && blob.type !== "image/png");
  return (
    <section style={{ width: "100vw" }}>
      <CustomFormContainer>
        <div className="lg:w-1/2 px-6 py-16">
          <form onSubmit={handleSubmit(onSubmit)}>
            <DragAndDropContainer>
              {storeImage && !errors.file ? (
                <ImagePreview>
                  <Image
                    src={storeImage}
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
            {errors.file && <ErrorMessage>{errors.file.message}</ErrorMessage>}
            <Label htmlFor="name">Store Name</Label>
            <Input
              type="text"
              {...register("name", { required: "Store Name is required" })}
              className={`${errors.name ? "mb-0" : "mb-4"}`}
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

            <Label htmlFor="address">Address</Label>
            <Input
              type="text"
              {...register("address", {
                required: "Store Address is required",
              })}
              className={`${errors.address ? "mb-0" : "mb-4"}`}
            />
            {errors.address && (
              <ErrorMessage>{errors.address.message}</ErrorMessage>
            )}

            <Label htmlFor="description">Description</Label>
            <TextArea
              {...register("description", {
                required: "Store Description is required",
              })}
              className={`${errors.description ? "mb-0" : "mb-4"}`}
            ></TextArea>
            {errors.description && (
              <ErrorMessage>{errors.description.message}</ErrorMessage>
            )}

            <Input
              type="submit"
              value="Create Store"
              className="btn-primary mb-4"
            />
          </form>
        </div>
      </CustomFormContainer>
    </section>
  );
};

const DragAndDropContainer = styled.div`
  width: 300px;
  height: 200px;
  border: 2px dashed ${Colors.darkslategray}8a;
  margin: auto;
  position: relative;
  border-radius: 6px;

  input[type="file"] {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
`;

const FileEmptyPlaceholder = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const ImagePreview = styled.div`
  width: 100%;
  height: 100%;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const CustomFormContainer = styled(FormContainer)`
  box-shadow: none;
`;
