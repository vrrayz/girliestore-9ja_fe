import { SCREENS } from "@/styles";
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
        onClick={() => console.log("Toggler Clicked")}
      >
         <UserIcon icon={faUser} />
      </UserNavToggler>
    </ToggleMenuContainer>
  );
};

const UserIcon = styled(FontAwesomeIcon)`
font-size: 1.5rem;
`
const UserNavToggler = styled(MobileNavToggler)`
display: flex;
justify-content: center;
flex-direction: column;
`