import { useCategories } from "@/hooks/useCategories";
import { Colors } from "@/styles";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const HorizontalNavigation = () => {
  const { categories } = useCategories();
  return (
    <OverflowContainer className="no-scrollbar w-full my-auto">
      <NavigationContainer>
        {categories?.map((item, i) => (
          <NavItem key={i}>
            <span>{item.name}</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </NavItem>
        ))}
      </NavigationContainer>
    </OverflowContainer>
  );
};
const OverflowContainer = styled.div`
  overflow-x: scroll;
`;
const NavigationContainer = styled.div`
  display: flex;
  width: max-content;
  justify-content: center;
  margin: 0px 8px;
  gap: 14px;
`;
const NavItem = styled.a`
  padding: 9px 14px;
  font-size: 14px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  gap: 6px;
  background: #f3fbf9;
  cursor: pointer;
  svg {
    color: ${Colors.olivedrab};
  }

  &.active,
  &:hover {
    background: ${Colors.olivedrab};
    color: ${Colors.white};

    svg {
      color: ${Colors.white};
    }
  }
`;
export default HorizontalNavigation;
