import { useCategories } from "@/hooks/useCategories";
import { Colors, Poppins } from "@/styles";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faPhone,
  faPhoneAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

interface Props {
  toggleSidebar: (value: boolean) => void;
}

export const SidebarComponent = ({ toggleSidebar }: Props) => {
  const { categories } = useCategories();

  const closeSidebar = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const newEvent = event.target as HTMLElement;
    if (newEvent.id === "sidebar-overlay") toggleSidebar(false);
  };

  return (
    <SidebarOverlay
      id="sidebar-overlay"
      onClick={(event) => closeSidebar(event)}
    >
      <Sidebar>
        <div></div>
        <SidebarList>
          {categories?.map((item, i) => (
            <SidebarListItem href="#" key={i}>
              {item.name}
            </SidebarListItem>
          ))}
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
        </SidebarList>
      </Sidebar>
    </SidebarOverlay>
  );
};

const SidebarOverlay = styled.div`
  position: fixed;
  width: 100vw;
  top: 0;
  height: 100vh;
  left: 0;
  background: ${Colors.overlayDark};
  backdrop-filter: blur(1px);
`;
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
const SidebarListItem = styled.a`
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
