import { Colors } from "@/styles";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { CustomInput } from "./Form";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <HeaderContainer>
      {/* Toggler Would be fixed at the top left */}
      <div style={{ position: "fixed", top: "0px", left: "0px" }}>Toggler</div>
      {/* Logo and search */}
      <Image
        src="/assets/logo.png"
        width={50}
        height={50}
        alt="Logo"
        className="mx-auto mb-3"
      />
      <CustomInput
        icon={faSearch}
        placeholder={"Search"}
        className="w-11/12 mx-auto"
      />
      {/* User Dropdown would be fixed at the top right */}
      <div style={{ position: "fixed", top: "0px", right: "0px" }}>User</div>
    </HeaderContainer>
  );
};
const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: ${Colors.white};
  box-shadow: #00000059 0px -1px 4px 1px;
  padding: 12px 16px;
`;
