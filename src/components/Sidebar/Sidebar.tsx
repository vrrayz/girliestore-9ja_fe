import { useCategories } from "@/hooks/useCategories";
import { Colors, Poppins } from "@/styles";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faShop, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Overlay } from "../Styled";
import { SidebarItemDropdown } from "./SidebarItemDropdown";
import { storeLinks } from "@/actions/store";
import { useIsAuthenticated } from "@/hooks/useIsAuthenticated";
import { AuthContext } from "../context/AuthContext";

interface Props {
  toggleSidebar: (value: boolean) => void;
}

export const SidebarComponent = ({ toggleSidebar }: Props) => {
  const { categories } = useCategories();
  // const { isLoggedIn } = useIsAuthenticated();
  const { authUser } = useContext(AuthContext);

  const closeSidebar = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const newEvent = event.target as HTMLElement;
    if (newEvent.id === "sidebar-overlay") toggleSidebar(false);
  };

  useEffect(() => {
    console.log("User  == ", authUser);
  }, [authUser]);

  return (
    <Overlay id="sidebar-overlay" onClick={(event) => closeSidebar(event)}>
      <Sidebar>
        <div></div>
        <SidebarList>
          {authUser && authUser.role == "admin" && (
            <SidebarItemDropdown
              dropdownIconName={faShop}
              dropdownItems={storeLinks}
              sidebarItemName="Store"
            />
          )}
          <SidebarListItem>
            {" "}
            <FontAwesomeIcon icon={faPhone} /> <span>Contact Us</span>
          </SidebarListItem>
          <SidebarListItem href="/auth/login">
            <FontAwesomeIcon icon={faUser} />
            <span>Login</span>
          </SidebarListItem>
          <SidebarListItem href="/auth/register">
            <FontAwesomeIcon icon={faUserPlus} />
            <span>Sign up</span>
          </SidebarListItem>
          {categories?.map((item, i) => (
            <SidebarListItem href="#" key={i}>
              {item.name}
            </SidebarListItem>
          ))}
        </SidebarList>
      </Sidebar>
    </Overlay>
  );
};

const Sidebar = styled.div`
  width: 70%;
  height: 100%;
  background: ${Colors.whitesmoke};
  display: grid;
  grid-template-rows: 73px 1fr;
  font-family: ${Poppins};
  color: ${Colors.darkslategray};
`;
const SidebarList = styled.div`
  border-top: 1px solid ${Colors.lightgray};
  display: flex;
  flex-direction: column;
`;
export const SidebarListItem = styled.a`
  padding: 12px 24px;
  font-size: 0.8rem;
  display: flex;
  gap: 8px;

  svg {
    margin-top: auto;
    margin-bottom: auto;
  }

  &:hover,
  &:active {
    background-color: ${Colors.red};
    color: ${Colors.white};
  }
`;
