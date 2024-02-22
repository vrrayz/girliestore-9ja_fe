"use client";

import { Colors } from "@/styles";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

export const LandingPage = () => {
  return (
    <MainPage>
      <Navbar>
        <a href="#" className="logo">
          <Image src="/assets/logo.png" width={50} height={50} alt="Logo" style={{marginTop: '4px'}}/>
        </a>
        <div className="menu">
          <a href="#" className="menu__item">
            About Us
          </a>
          <a href="#" className="menu__item">
            Contact Us
          </a>
        </div>
      </Navbar>
      <HeroSection>
        <Slogan>
            Shop, Sparkle and Shine
        </Slogan>
        <PreviewFrame>
          <PictureSlide></PictureSlide>
        </PreviewFrame>
      </HeroSection>
    </MainPage>
  );
};

const MainPage = styled.main`
  background-color: ${Colors.red};
  width: 100vw;
  height: 100vh;
  color: ${Colors.brown};
  background-image: url("/assets/background.png");
  background-position: center;
  background-size: cover;
`;
const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;

  .logo {
    margin-top: auto;
    margin-bottom: auto;
  }

  .menu {
    display: flex;
    gap: 9px;
    justify-content: space-between;
    font-size: 0.9rem;
    margin-top: auto;
    margin-bottom: auto;
    color: ${Colors.red};
  }
  .menu .menu__item {
    padding: 18px 0px;
  }
`;
const HeroSection = styled.section`
padding: 18px;
padding-top: 12px;
`;
const PreviewFrame = styled.div`
  width: 230px;
  padding: 2px;
  height: 300px;
  background: #fff;
  margin: auto;
  border-radius: 12px;
`;

const PictureSlide = styled.div`
  background-color: ${Colors.brown};
  background-position: center;
  background-image: url(/assets/frame_slide_3.jpg);
  height: 100%;
  background-size: cover;
  border-radius: 12px;
`;
const Slogan = styled.p`
font-family: "Poppins", sans-serif;
font-size: 3.6rem;
color: #000;
font-weight: 400;
`
