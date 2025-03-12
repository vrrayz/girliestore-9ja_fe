"use client";

import { Colors, SCREENS } from "@/styles";
import React, { useContext, useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import { CartContext } from "../CartContext";
import { MobileHeader } from "./MobileHeader";
import { LargeHeader } from "./LargeHeader";

interface Props {
  displaySearch?: boolean;
}

export const Header = ({ displaySearch }: Props) => {
  const [headerTop, setHeaderTop] = useState<number>(0);

  const showMobileHeader = useMemo(() => window.screen.availWidth < 1024, []);
  // const { cartItems } = useCart();
  const { cartItems } = useContext(CartContext);
  useEffect(() => {
    const handleScroll = () => {
      if (displaySearch && showMobileHeader) {
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
  }, [displaySearch, showMobileHeader]);
  return (
    <HeaderContainer $headerTop={headerTop} className="lg:h-[132px]">
      {showMobileHeader ? <MobileHeader displaySearch /> : <LargeHeader />}
    </HeaderContainer>
  );
};
const HeaderContainer = styled.header<{ $headerTop: number }>`
  position: sticky;
  background: ${Colors.white};
  box-shadow: #00000059 0px -1px 4px 1px;
  z-index: 1;
  top: ${(props) => 0 - props.$headerTop}px;
  //   transition: top 0ms;

  .mobile-header-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 12px 16px;
    width: 100vw;

    ${SCREENS.lg} {
      display: none;
    }

    .logo {
      opacity: ${(props) => 1 - (props.$headerTop / 100) * 2};
      // transition: opacity 0ms;
    }

    div.header-input {
      width: ${(props) => 100 - props.$headerTop / 2 - 5}%;
    }
  }
`;
