"use client";

import { Colors, SCREENS } from "@/styles";
import styled from "styled-components";
import { CardBody, CardContainer } from "./Card";

interface Props {
  children: React.ReactNode;
  headerSpace?: number;
}

export const Body = ({ children, headerSpace }: Props) => {
  return <MainBody $headerSpace={headerSpace}>{children}</MainBody>;
};

export const MainBody = styled.div<{ $headerSpace?: number }>`
  // display: grid;
  position: relative;
  z-index: 0;
  grid-template-rows: ${(props) => props.$headerSpace || 120}px 1fr;
`;
export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  top: 0;
  height: 100vh;
  left: 0;
  background: ${Colors.overlayDark};
  backdrop-filter: blur(1px);
`;
export const MultiplePhotosContainer = styled.div<{
  $photoCount: number;
  $maxWidth?: number;
  $photoWidth?: number;
}>`
  width: 100%;
  max-width: ${(props) => props.$maxWidth || "320"}px;
  display: grid;
  overflow-x: scroll;
  grid-template-columns: repeat(
    ${(props) => props.$photoCount},
    ${(props) => props.$photoWidth || 270}px
  );
  padding-bottom: 6px;
  justify-content: ${(props) => (props.$photoCount === 1 ? "center" : "start")};
  align-items: ${(props) => (props.$photoCount === 1 ? "center" : "start")};
`;
export const ItemsListGroup = styled.div`
  padding: 16px;
  ${SCREENS.md} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  ${SCREENS.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const Item = styled(CardContainer)`
  display: flex;
  padding: 0px 8px;
  border-radius: 12px;
  transform: scale(1);
  transition: transform 500ms;
  img {
    width: 25%;
    max-width: 70px;
    max-height: 70px;
    margin: auto;
    border-radius: 8px;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: 1px 1px 3px 0px #0000008a;
    background-color: ${Colors.red};
    color: ${Colors.white};
  }
  &.no-hover:hover {
    background-color: ${Colors.white};
    color: ${Colors.black};
  }
  ${CardBody} {
    width: 100%;
  }
`;
export const TextSmall = styled.p`
  font-size: 12px;
`;
export const Text = styled.p`
  font-size: 16px;
`;
export const TextXl = styled.p`
  font-size: 20px;
`;
export const Text2Xl = styled.p`
  font-size: 24px;
`;
export const InlineTextSmall = styled.span`
  font-size: 12px;
`;
export const InlineText = styled.span`
  font-size: 16px;
`;
export const InlineTextXl = styled.span`
  font-size: 20px;
`;
export const InlineText2Xl = styled.span`
  font-size: 24px;
`;
