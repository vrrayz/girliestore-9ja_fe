"use client";

import { Colors } from "@/styles";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { CustomInput, InputContainer, InputIcon, StyledInput } from "./Form";
import {
  faCamera,
  faCartFlatbed,
  faCartShopping,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Toggler } from "./Toggler";
import { UserToggler } from "./UserToggler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "@/hooks/useCart";
import { CartContext } from "./CartContext";
import { useImagePrediction } from "@/hooks/useImagePrediction";
import { isImageInCorrectFormat } from "@/helpers";
import { ImageSearchResults } from "./ImageSearchResults";

interface Props {
  displaySearch?: boolean;
}

export const Header = ({ displaySearch }: Props) => {
  const [headerTop, setHeaderTop] = useState<number>(0);
  const { showPredictions, isMachineLoading, hasMachineError } =
    useImagePrediction();
  const [showImageSearchResults, setShowImageSearchResults] =
    useState<boolean>(false);
  const [imagePredictions, setImagePredictions] = useState<string>("");
  // const { cartItems } = useCart();
  const { cartItems } = useContext(CartContext);

  const searchPhoto = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      if (!isImageInCorrectFormat(event.target.files[0])) {
        await showPredictions(event.target.files[0]).then((res: any) => {
          console.log("The uploaded file predictions === ", res);
          const firstPrediction = res[0].className;
          console.log("The first prediction === ", firstPrediction);
          setImagePredictions(firstPrediction);
          setShowImageSearchResults(true);
        });
      }
    }
  };

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
          // <CustomInput
          //   icon={faSearch}
          //   placeholder={"Search"}
          //   className="w-full mx-auto header-input"
          // />
          <InputContainer className="w-full mx-auto header-input">
            {isMachineLoading ? (
              <InputIcon icon={faSearch} />
            ) : (
              <CameraButtonContainer>
                <CameraFileInput
                  type="file"
                  id="cameraInput"
                  accept="image/*"
                  onChange={(event) => searchPhoto(event)}
                  capture
                />
                <InputIcon icon={faCamera} />
              </CameraButtonContainer>
            )}
            <StyledInput placeholder={"Search"} />
          </InputContainer>
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

      {showImageSearchResults && (
        <ImageSearchResults
          setShowModal={setShowImageSearchResults}
          labels={imagePredictions}
        />
      )}
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

const CameraButtonContainer = styled.div`
  overflow: hidden;
  max-width: 28px;
  position: relative;
  display: flex;
`;

const CameraFileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`;
