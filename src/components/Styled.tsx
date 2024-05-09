"use client";

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
