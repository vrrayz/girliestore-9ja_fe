"use client";

import { Colors } from "@/styles";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { CustomInput } from "./Form";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Toggler } from "./Toggler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { UserToggler } from "./UserToggler";

interface Props {
  displaySearch?: boolean;
}

export const Header = ({ displaySearch }: Props) => {
  const [headerTop, setHeaderTop] = useState<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 0 && window.scrollY <= 62) {
        setHeaderTop(window.scrollY);
      }
      if (window.scrollY > 62) setHeaderTop(62);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <HeaderContainer $headerTop={headerTop}>
      {/* Toggler Would be fixed at the top left */}
      <div
        style={{ position: "fixed", top: "12px", left: "12px", zIndex: "1" }}
      >
        <Toggler />
      </div>
      {/* Logo and search */}

      <LogoAndSearchContainer>
        <Image
          src="/assets/logo.png"
          width={50}
          height={50}
          alt="Logo"
          className="mx-auto mb-3 logo"
        />
        {displaySearch && (
          <CustomInput
            icon={faSearch}
            placeholder={"Search"}
            className="w-full mx-auto header-input"
          />
        )}
      </LogoAndSearchContainer>

      {/* User Dropdown would be fixed at the top right */}
      <div style={{ position: "fixed", top: "12px", right: "12px" }}>
        <UserToggler />
      </div>
    </HeaderContainer>
  );
};
const HeaderContainer = styled.header<{ $headerTop: number }>`
  position: fixed;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: ${Colors.white};
  box-shadow: #00000059 0px -1px 4px 1px;
  padding: 12px 16px;
  width: 100vw;
  top: ${(props) => 0 - props.$headerTop}px;
  //   transition: top 0ms;

  .logo {
    opacity: ${(props) => 1 - (props.$headerTop / 100) * 2};
    // transition: opacity 0ms;
  }

  div.header-input {
    width: ${(props) => 100 - props.$headerTop / 2}%;
  }
`;
const LogoAndSearchContainer = styled.div`
  position: relative;
  top: 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
