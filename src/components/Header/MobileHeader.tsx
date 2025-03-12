import { cartItems } from "@/mocks";
import { Colors } from "@/styles";
import { faSearch, faCartFlatbed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { CustomInput } from "../Form";
import { Toggler } from "../Toggler";
import { UserToggler } from "../UserToggler";
import Image from "next/image";

interface Props {
  displaySearch?: boolean;
}

export const MobileHeader = ({ displaySearch }: Props) => {
  return (
    <div className="mobile-header-container">
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
        <Cart href="/cart">
          <CartIcon icon={faCartFlatbed} />
          {/* {cartItems.length > 0 ? ( */}
          <CartItemsCount>{cartItems.length}</CartItemsCount>
          {/* ) : (
      <></>
    )} */}
        </Cart>
      </UserMenuItemsContainer>
    </div>
  );
};

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
export const CartItemsCount = styled.span`
  background: ${Colors.tomato};
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
