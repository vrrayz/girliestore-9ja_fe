import { Colors } from "@/styles";
import React from "react";
import styled from "styled-components";

const HorizontalNavigation = () => {
  return (
    <OverflowContainer className="no-scrollbar">
      <NavigationContainer>
        <NavItem className="active">All</NavItem>
        <NavItem>Arts &amp; Crafts</NavItem>
        <NavItem>Furniture</NavItem>
        <NavItem>Consumer Electronics</NavItem>
        <NavItem>Light Industry &amp; Daily Use</NavItem>
      </NavigationContainer>
    </OverflowContainer>
  );
};
const OverflowContainer = styled.div`
overflow-x: scroll;
`
const NavigationContainer = styled.div`
  display: flex;
  width: max-content;
  justify-content: center;
  margin: 0px 8px;
`;
const NavItem = styled.a`
padding: 2px 8px;
font-size: 0.95rem;

&.active{
    border-radius: 2px;
    border-bottom: 4px solid ${Colors.red};
}
`;
export default HorizontalNavigation;
