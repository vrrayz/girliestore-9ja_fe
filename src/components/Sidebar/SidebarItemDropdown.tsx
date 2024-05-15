import React, { useState } from "react";
import { SidebarListItem } from "./Sidebar";
import {
  faShop,
  faCaretRight,
  IconDefinition,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

interface Props {
  sidebarItemName: string;
  dropdownIconName?: IconDefinition;
  dropdownItems: { name: string; link: string }[];
}

export const SidebarItemDropdown = ({
  sidebarItemName,
  dropdownIconName,
  dropdownItems,
}: Props) => {
  const [dropdownToggled, setDropdownToggled] = useState<boolean>(false);
  const toggleDropdown = () => {
    event?.preventDefault();
    setDropdownToggled(!dropdownToggled);
  };
  return (
    <>
      <SidebarListItem onClick={() => toggleDropdown()}>
        {dropdownIconName ? (
          <FontAwesomeIcon icon={dropdownIconName} />
        ) : (
          <span></span>
        )}
        <span>{sidebarItemName}</span>
        <FontAwesomeIcon
          icon={dropdownToggled ? faCaretDown : faCaretRight}
          className="ml-auto"
        />
      </SidebarListItem>
      <Dropdown className={`${dropdownToggled && "toggled"}`}>
        {dropdownItems.map((item, i) => (
          <SidebarListItem href={item.link} key={i}>
            {item.name}
          </SidebarListItem>
        ))}
      </Dropdown>
    </>
  );
};

const Dropdown = styled.div`
  width: 100%;
  padding-left: 48px;
  overflow: hidden;
  max-height: 0px;
  transition: max-height 500ms;
  &.toggled {
    max-height: 500px;
  }
`;
