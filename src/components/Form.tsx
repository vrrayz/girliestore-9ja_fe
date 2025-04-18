"use client";

import { Colors, Poppins, SCREENS } from "@/styles";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

interface Prop {
  icon: IconDefinition;
  placeholder: string;
  className?: string;
}

export const CustomInput = ({ icon, placeholder, className }: Prop) => {
  return (
    <InputContainer className={className}>
      <InputIcon icon={icon} />
      <StyledInput placeholder={placeholder} />
    </InputContainer>
  );
};

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
  background: ${Colors.gray2};

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
export const Select = styled.select`
  border: 1px solid #717171;
  padding: 6px 8px;
  width: 100%;
  border-radius: 3px;
  font-family: ${Poppins};
  background: ${Colors.gray2};

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
export const TextArea = styled.textarea`
  border: 1px solid #717171;
  padding: 6px 8px;
  width: 100%;
  border-radius: 3px;
  font-family: ${Poppins};
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
const InputContainer = styled.div`
  display: flex;
  border-radius: 25px;
  background: ${Colors.whitesmoke};
  padding: 8px 16px;
  gap: 6px;
  height: 42px;
`;
const StyledInput = styled(Input)`
  background: transparent;
  border: none !important;
  outline: none !important;
`;
const InputIcon = styled(FontAwesomeIcon)`
  margin: auto;
  color: #666;
`;
export const DragAndDropContainer = styled.div<{ $width?: number }>`
  width: ${(props) => (props.$width ? props.$width : "300")}px;
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
export const FileEmptyPlaceholder = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const ImagePreview = styled.div`
  width: 100%;
  height: 100%;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
