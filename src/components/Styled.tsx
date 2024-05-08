"use client";

import styled from "styled-components";

export const Body = ({ children }: { children: React.ReactNode }) => {
  return <MainBody>{children}</MainBody>;
};

export const MainBody = styled.div`
  display: grid;
  grid-template-rows: 120px 1fr;
`;
