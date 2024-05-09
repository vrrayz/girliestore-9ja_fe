"use client";

import HorizontalNavigation from "@/components/HorizontalNavigation";
import React, { useEffect, useState } from "react";
import { Body } from "./Styled";
import { Header } from "./Header";

export const HomePage = () => {
  return (
    <Body>
      <Header displaySearch={true} />
      <div></div>
      <section style={{ width: "100vw" }}>
        <div className="p-4 mb-8" style={{ background: "#fff" }}>
          <HorizontalNavigation />
        </div>
        {/* <ProductItemCard />
        <ProductItemCard />
        <ProductItemCard />
        <ProductItemCard /> */}
      </section>
    </Body>
  );
};
