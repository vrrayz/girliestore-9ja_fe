import { Colors } from "@/styles";
import React from "react";
import styled from "styled-components";

interface Props {
  isNavToggled: boolean;
  isLoggedIn: boolean;
  logoutAction: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
}

export const UserTogglerDropdown = ({
  isNavToggled,
  isLoggedIn,
  logoutAction,
}: Props) => {
  return (
    <>
      {isNavToggled && (
        <UserDropdown>
          <div className="dropdown-container">
            <a href="/wishlist">Wishlist</a>
            <a href="#">My Orders</a>
            <a href="#">Profile Settings</a>
            {isLoggedIn && (
              <a href="#" onClick={(event) => logoutAction(event)}>
                Log Out
              </a>
            )}
            {!isLoggedIn && <a href="/auth/login">Log In / Sign up</a>}
          </div>
        </UserDropdown>
      )}
    </>
  );
};

const UserDropdown = styled.div`
  min-width: 150px;
  position: absolute;
  top: 49px;
  right: 20px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 1px 1px 3px 0px #0000008a;

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 15px;
    height: 30px;
    background: #fff;
    top: -7px;
    right: 26px;
    transform: rotate(-19deg) skew(0deg, -45deg);
    box-shadow: 1px 1px 3px 0px #0000008a;
  }

  .dropdown-container {
    width: 100%;
    height: 100%;
    background: white;
    position: relative;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    z-index: 10000;
  }

  .dropdown-container a {
    padding: 8px 16px;
    font-size: 0.8rem;
    border-bottom: 1px solid ${Colors.lightgray}8a;
    color: dimgray;
  }
`;
