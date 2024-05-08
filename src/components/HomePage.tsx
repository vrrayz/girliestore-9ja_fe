"use client";

import HorizontalNavigation from "@/components/HorizontalNavigation";
import React, { useEffect, useState } from "react";

export const HomePage = () => {
  return (
      <section style={{ width: "100vw" }}>
        <div className="p-4 mb-8" style={{ background: "#fff" }}>
          <HorizontalNavigation />
        </div>
        {/* <ProductItemCard />
        <ProductItemCard />
        <ProductItemCard />
        <ProductItemCard /> */}
      </section>
  );
};