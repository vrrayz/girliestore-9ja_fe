import { SCREENS } from "@/styles";
import React, { useState } from "react";
import styled from "styled-components";
import { SidebarComponent } from "./Sidebar";

export const Toggler = () => {
  const [isNavToggled, setIsNavToggled] = useState(false);
  return (
    <>
      <ToggleMenuContainer>
        <MobileNavToggler
          className={`${isNavToggled && "transformed"}`}
          onClick={() => setIsNavToggled(!isNavToggled)}
        >
          <TogglerItem
            className={`${isNavToggled && "transformed"}`}
          ></TogglerItem>
          <TogglerItem
            className={`${isNavToggled && "transformed"}`}
          ></TogglerItem>
          <TogglerItem
            className={`${isNavToggled && "transformed"}`}
          ></TogglerItem>
        </MobileNavToggler>
      </ToggleMenuContainer>
      {isNavToggled && <SidebarComponent toggleSidebar={setIsNavToggled} />}
    </>
  );
};

export const ToggleMenuContainer = styled.div`
  display: flex;
  justify-content: space-around;

  a.nav-button {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  ${SCREENS.lg} {
    display: none;
  }
`;
export const MobileNavToggler = styled.div`
  width: 40px;
  height: 40px;
  margin: auto 0px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  cursor: pointer;
  transition: padding 200ms;
  z-index: 100;
  &.transformed {
    padding: 8px 0px;
  }
`;
export const TogglerItem = styled.div`
  width: 26px;
  height: 1px;
  background: #1a1221;
  box-shadow: 1px 0px 3px #663399;
  margin: auto;
  border-radius: 25%;
  margin-top: 7px;
  transition: margin 200ms, transform 200ms;
  &:nth-child(3) {
    width: 13px;
    margin-right: 7px;
    margin-bottom: 12px;
  }
  &:nth-child(1) {
    width: 13px;
    margin-left: 7px;
    margin-top: 13px;
  }
  &.transformed:nth-child(3) {
    margin-right: 9px;
    margin-top: 4px;
    transform: rotate(45deg);
  }
  &.transformed:nth-child(1) {
    margin-left: 9px;
    margin-top: 7px;
    transform: rotate(45deg);
  }
  &.transformed:nth-child(2) {
    transform: rotate(-45deg);
    margin-top: 4px;
  }
`;
