import { CustomInput } from "@/components/Form";
import { Header } from "@/components/Header";
import HorizontalNavigation from "@/components/HorizontalNavigation";
import { ProductItemCard } from "@/components/ProductItemCard";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const HomePage = () => {
  const [headerTop, setHeaderTop] = useState<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 0 && window.scrollY <= 50) {
        setHeaderTop(window.scrollY);
      }
      if (window.scrollY > 50) setHeaderTop(50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Body>
      <Header headerTop={headerTop} />
      <div></div>
      <section style={{ width: "100vw" }}>
        <div className="p-4 mb-8" style={{ background: "#fff" }}>
          <HorizontalNavigation />
        </div>
        <ProductItemCard />
        <ProductItemCard />
        <ProductItemCard />
        <ProductItemCard />
      </section>
    </Body>
  );
};

const Body = styled.div`
  display: grid;
  grid-template-rows: 120px 1fr;
`;
