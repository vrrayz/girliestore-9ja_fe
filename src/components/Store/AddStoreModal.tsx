import {
  ModalOverlay,
  Modal,
  ModalHeading,
  CloseButton,
  ModalBody,
} from "@/styles";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { closeModal, ErrorModal } from "../Modals/Modals";
import Image from "next/image";
import {
  DragAndDropContainer,
  ErrorMessage,
  FileEmptyPlaceholder,
  ImagePreview,
  Input,
  Label,
  TextArea,
} from "../Form";
import { SubmitHandler, useForm } from "react-hook-form";
import { addStore } from "@/actions/store";
import { imageFormatValidationMessage, isInCorrectFormat } from "@/helpers";
import { Shop, Toast } from "@/types";

interface Props {
  setShowModal: (value: boolean) => void;
  setIsLoading: (value: boolean) => void;
  setShowToast: ({ title, message, type }: Toast) => void;
  setStores: (value: Shop[]) => void;
  stores: Shop[];
}
type ShopInput = {
  name: string;
  address: string;
  description: string;
  file: FileList;
};

export const AddStoreModal = ({
  setShowModal,
  setIsLoading,
  setShowToast,
  setStores,
  stores,
}: Props) => {
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
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
    setIsLoading(true);
    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("address", data.address);
    formData.append("description", data.description);
    formData.append("file", data.file[0]);

    addStore(formData).then(async (res) => {
      if (res.statusCode === 200) {
        // console.log("Response == ", res.data);
        setStores([...stores, res.data]);
        setShowToast({
          title: "Store Added !!",
          message: "You've added a store to the platform",
          type: "success",
        });
        // setShowModal(false);
      } else {
        // console.log("Response == ", res);
        setShowToast({
          title: "Error Uploading Store",
          message: "There was an error uploading the store",
          type: "failure",
        });
        setShowErrorModal(true);
      }
      setIsLoading(false);
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      if (!isInCorrectFormat(event.target.files[0])) {
        setStoreImage(URL.createObjectURL(event.target.files[0]));
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
            <ModalHeading>Add New Store</ModalHeading>
            <CloseButton onClick={() => setShowModal(false)}>
              <FontAwesomeIcon icon={faXmark} size="lg" />
            </CloseButton>
            <ModalBody>
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
                        imageFormatValidationMessage,
                    })}
                  />
                </DragAndDropContainer>
                {errors.file && (
                  <ErrorMessage>{errors.file.message}</ErrorMessage>
                )}
                <Label htmlFor="name">Store Name</Label>
                <Input
                  type="text"
                  {...register("name", { required: "Store Name is required" })}
                  className={`${errors.name ? "mb-0" : "mb-4"}`}
                />
                {errors.name && (
                  <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}

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
            </ModalBody>
          </Modal>
        </ModalOverlay>
      )}
    </>
  );
};
