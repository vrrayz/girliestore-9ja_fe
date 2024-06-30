"use client";

import { Colors } from "@/styles";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  headerSpace?: number;
}

export const Body = ({ children, headerSpace }: Props) => {
  return <MainBody $headerSpace={headerSpace}>{children}</MainBody>;
};

export const MainBody = styled.div<{ $headerSpace?: number }>`
  display: grid;
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
export const TextSmall = styled.p`
  font-size: 12px;
`;
export const Text = styled.p`
  font-size: 16px;
`;
export const TextXl = styled.p`
  font-size: 20px;
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
