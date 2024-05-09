import React, { useState } from "react";
import HorizontalNavigation from "../HorizontalNavigation";
import { ProductItemCard } from "../ProductItemCard";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Colors } from "@/styles";
import Image from "next/image";
import { ErrorMessage } from "../Form";

export const Stores = () => {
  const [storeImage, setStoreImage] = useState<string>();
  const [fileErrorMessage, setFileErrorMessage] = useState<string>()
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      // console.log(event.target.files[0])
      if(event.target.files[0].type !== "image/jpeg" && event.target.files[0].type !== "image/png"){
        setFileErrorMessage('Incorrect file format, must be either a .png or .jpg')
        return;
      }
      setFileErrorMessage('')
      setStoreImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <section style={{ width: "100vw" }}>
      <DragAndDropContainer>
        {storeImage ? (
          <ImagePreview>
            <Image src={storeImage} alt="img_preview" width={300} height={200} />
          </ImagePreview>
        ) : (
          <FileEmptyPlaceholder>
            <div className="mx-auto text-center flex flex-col opacity-50">
              <FontAwesomeIcon icon={faPlus} size="2x" />
              Upload Image
            </div>
          </FileEmptyPlaceholder>
        )}
        <input type="file" onChange={(event) => handleChange(event)} />
      </DragAndDropContainer>
      { fileErrorMessage && <ErrorMessage>{fileErrorMessage}</ErrorMessage> }
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
