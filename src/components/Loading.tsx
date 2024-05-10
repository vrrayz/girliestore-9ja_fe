import React from "react";
import styled from "styled-components";
import { Overlay } from "./Styled";
import { Colors } from "@/styles";
import Image from "next/image";

export const Loading = () => {
  return (
    <LoadingOverlay>
      <LoadingBox>
        <Image
          src={"/assets/loading.svg"}
          width={50}
          height={50}
          alt="loading"
        />
      </LoadingBox>
    </LoadingOverlay>
  );
};

const LoadingOverlay = styled(Overlay)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 10000000;
  
  img {
    transform: rotate(0deg);
    animation: rotateLoading;
    animation-duration: 300ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;

const LoadingBox = styled.div`
  width: 50px;
  height: 50px;
  margin: auto;
  // background: ${Colors.saddlebrown};
`;
