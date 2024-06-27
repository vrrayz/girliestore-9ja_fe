import { Poppins } from "@/styles";
import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  background: #fff;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
`;

export const CardBody = styled.div`
  padding: 16px 8px;
`;
export const CardBodyHeadingOne = styled.h4`
  font-family: ${Poppins};
  font-weight: 400;
  font-size: 1rem;
`;
export const CardBodyHeadingTwo = styled.h4`
  font-family: ${Poppins};
  font-weight: 600;
  font-size: 1rem;
`;
export const CardBodyText = styled.p`
  font-weight: 300;
  font-size: 14px;
`;
