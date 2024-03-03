"use client";

import { Colors, Poppins, SCREENS } from "@/styles";
import styled from "styled-components";

export const FormContainer = styled.div`
  box-shadow: #00000059 0px 0px 14px 2px;
  ${SCREENS.sm} {
    max-width: 360px;
  }
  ${SCREENS.lg} {
    max-width: 720px;
  }
  margin: auto;
`;

export const Input = styled.input`
  border: 1px solid #717171;
  padding: 6px 8px;
  width: 100%;
  border-radius: 3px;
  font-family: ${Poppins};

  &.btn-primary {
    background: ${Colors.red};
    color: ${Colors.white};
    border-color: ${Colors.red};
  }
  &.btn-primary.active,
  &.btn-primary:hover {
    background: ${Colors.saddlebrown};
    border-color: ${Colors.saddlebrown};
  }
`;
export const Label = styled.label`
  font-family: ${Poppins};
`;

export const SideBackground = styled.div`
  background: url(/assets/login_side_bg.jpg);
  background-position: center;
  background-size: cover;
`;
export const ErrorMessage = styled.span`
  font-size: 12px;
  color: ${Colors.red};
  margin-bottom: 8px;
  display: block;
`;
