import { Colors, Poppins } from "@/styles";
import styled from "styled-components";

export const Button = styled.button`
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