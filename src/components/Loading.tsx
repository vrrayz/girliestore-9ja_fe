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

export const LoadingLogo = () => {
  return (
    <LogoContainer>
      <Image src="/assets/logo_bw.png" width={50} height={50} alt="loading" />
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  img {
    margin: 0 auto;
    transform: scale(1);
    animation: scaleLoading;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;

const LoadingOverlay = styled(Overlay)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 10000000;

  img {
    transform: rotate(0deg);
    animation: rotateLoading;
    animation-duration: 700ms;
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
