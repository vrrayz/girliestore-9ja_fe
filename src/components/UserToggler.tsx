import { Colors, SCREENS } from "@/styles";
import React, { useState } from "react";
import styled from "styled-components";
import { MobileNavToggler, ToggleMenuContainer } from "./Toggler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export const UserToggler = () => {
  const [isNavToggled, setIsNavToggled] = useState(false);
  return (
    <ToggleMenuContainer>
      <UserNavToggler
        className={`${isNavToggled && "transformed"}`}
        onClick={() => setIsNavToggled(!isNavToggled)}
      >
        <UserIcon icon={faUser} />
      </UserNavToggler>

      {isNavToggled && (
        <UserDropdown>
          <div className="dropdown-container">
            <a href="#">My Orders</a>
            <a href="#">Profile Settings</a>
            <a href="#">Log Out</a>
            <a href="#">Log In / Sign up</a>
          </div>
        </UserDropdown>
      )}
    </ToggleMenuContainer>
  );
};

const UserIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
`;
const UserNavToggler = styled(MobileNavToggler)`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const UserDropdown = styled.div`
  min-width: 150px;
  position: absolute;
  top: 49px;
  right: 0;
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
    right: 13px;
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
  }

  .dropdown-container a{
    padding: 8px 16px;
    font-size: 0.8rem;
    border-bottom: 1px solid ${Colors.lightgray}8a;
    color: dimgray;
  }
`;
