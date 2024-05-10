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