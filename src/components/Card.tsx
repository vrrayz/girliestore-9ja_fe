import { HankenGrotesk } from "@/styles";
import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  background: #fff;
  position: relative;
  z-index: 0;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
`;

export const CardBody = styled.div`
  padding: 16px 8px;
`;
export const CardBodyHeadingOne = styled.h4`
  font-family: ${HankenGrotesk};
  font-weight: 400;
  font-size: 1rem;
`;
export const CardBodyHeadingTwo = styled.h4`
  font-family: ${HankenGrotesk};
  font-weight: 600;
  font-size: 1rem;
`;
export const CardBodyText = styled.p`
  font-weight: 300;
  font-size: 14px;
`;
