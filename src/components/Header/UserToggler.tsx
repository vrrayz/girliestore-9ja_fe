import { Colors, SCREENS } from "@/styles";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { MobileNavToggler, ToggleMenuContainer } from "../Toggler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useIsAuthenticated } from "@/hooks/useIsAuthenticated";
import { logout } from "@/actions";
import { AuthContext } from "../context/AuthContext";
import { redirect } from "next/navigation";
import { UserTogglerDropdown } from "./UserTogglerDropdown";

export const UserToggler = () => {
  const [isNavToggled, setIsNavToggled] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useIsAuthenticated();
  const { setAuthUser } = useContext(AuthContext);

  const logoutAction = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    logout()
      .then((res) => {
        setAuthUser(undefined);
        setIsLoggedIn(false);
      })
      .then(() => setShouldRedirect(true));
  };
  useEffect(() => {
    if (shouldRedirect) {
      redirect("/");
    }
  }, [shouldRedirect]);
  return (
    <ToggleMenuContainer>
      <UserNavToggler
        className={`${isNavToggled && "transformed"}`}
        onClick={() => setIsNavToggled(!isNavToggled)}
      >
        <UserIcon icon={faUser} />
      </UserNavToggler>
      <UserTogglerDropdown
        isNavToggled={isNavToggled}
        isLoggedIn={isLoggedIn}
        logoutAction={logoutAction}
      />
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
