"use client";

import { Colors } from "@/styles";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { CustomInput } from "./Form";
import {
  faCartFlatbed,
  faCartShopping,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Toggler } from "./Toggler";
import { UserToggler } from "./UserToggler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "@/hooks/useCart";

interface Props {
  displaySearch?: boolean;
}

export const Header = ({ displaySearch }: Props) => {
  const [headerTop, setHeaderTop] = useState<number>(0);
  const { cartItems } = useCart();
  useEffect(() => {
    const handleScroll = () => {
      if (displaySearch) {
        if (window.scrollY > 0 && window.scrollY <= 62) {
          setHeaderTop(window.scrollY);
        }
        if (window.scrollY > 62) setHeaderTop(62);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [displaySearch]);
  return (
    <HeaderContainer $headerTop={headerTop}>
      {/* Toggler Would be fixed at the top left */}
      <div style={{ position: "fixed", top: "12px", left: "8px", zIndex: "1" }}>
        <Toggler />
      </div>
      {/* Logo and search */}

      <LogoAndSearchContainer>
        <a href="/" className="mx-auto mb-3">
          <Image
            src="/assets/logo.png"
            width={50}
            height={50}
            alt="Logo"
            className="logo"
          />
        </a>
        {displaySearch && (
          <CustomInput
            icon={faSearch}
            placeholder={"Search"}
            className="w-full mx-auto header-input"
          />
        )}
      </LogoAndSearchContainer>

      {/* User Dropdown would be fixed at the top right */}
      <UserMenuItemsContainer>
        <UserToggler />
        <Cart href="#">
          <CartIcon icon={faCartFlatbed} />
          {cartItems.length > 0 ? (
            <CartItemsCount>{cartItems.length}</CartItemsCount>
          ) : (
            <></>
          )}
        </Cart>
      </UserMenuItemsContainer>
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
  z-index: 1;
  top: ${(props) => 0 - props.$headerTop}px;
  //   transition: top 0ms;

  .logo {
    opacity: ${(props) => 1 - (props.$headerTop / 100) * 2};
    // transition: opacity 0ms;
  }

  div.header-input {
    width: ${(props) => 100 - props.$headerTop / 2 - 5}%;
  }
`;
const LogoAndSearchContainer = styled.div`
  position: relative;
  top: 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const UserMenuItemsContainer = styled.div`
  position: fixed;
  top: 12px;
  right: 0px;
  display: flex;
`;

const Cart = styled.a`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 40px;
  height: 40px;
  z-index: 100;
  color: ${Colors.olivedrab};
  position: relative;
`;
const CartIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
`;
const CartItemsCount = styled.span`
  background: ${Colors.coral};
  position: absolute;
  top: 3px;
  right: 3px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.white};
  font-size: 12px;
`;
