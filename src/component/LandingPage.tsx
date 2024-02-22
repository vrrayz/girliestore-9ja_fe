"use client";

import { Colors, SCREENS, Poppins } from "@/styles";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

export const LandingPage = () => {
  return (
    <MainPage>
      <Navbar>
        <a href="#" className="logo">
          <Image
            src="/assets/logo.png"
            width={50}
            height={50}
            alt="Logo"
            style={{ marginTop: "4px" }}
          />
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
          Shop, <br />
          Sparkle
          <br /> and Shine
        </Slogan>
        <PreviewFrameContainer>
          <PreviewFrame>
            <PictureSlide $background="/assets/frame_slide_2.jpg"></PictureSlide>
          </PreviewFrame>
          <PreviewFrame>
            <PictureSlide $background="/assets/frame_slide_3.jpg"></PictureSlide>
          </PreviewFrame>
        </PreviewFrameContainer>
      </HeroSection>
      <Section>
        <NotePanel>
          <h3>Get the latest</h3>
          <p>
            Get ready to indulge in a sneak peek of what&apos;s to come! Explore
            our curated selection of premium designs and must-have accessories.
          </p>
        </NotePanel>
      </Section>
      <Section style={{ background: `${Colors.brown}` }}>
        <SectionContainer>
          <SectionHeader>Explore Our Diverse Range</SectionHeader>
          <ProductsRow>
            <PreviewFrame>
              <PictureSlide $background="/assets/products/product_1.jpg"></PictureSlide>
            </PreviewFrame>
            <PreviewFrame>
              <PictureSlide $background="/assets/products/product_2.jpg"></PictureSlide>
            </PreviewFrame>
            <PreviewFrame>
              <PictureSlide $background="/assets/products/product_3.jpg"></PictureSlide>
            </PreviewFrame>
          </ProductsRow>
        </SectionContainer>
      </Section>
    </MainPage>
  );
};

const MainPage = styled.main`
  background-color: ${Colors.red};
  //   width: 100vw;
  //   height: 100vh;
  //   color: ${Colors.brown};
  background-image: url("/assets/background.png");
  background-position: center;
  background-size: cover;
  overflow-x: hidden;
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
  padding-bottom: 42px;
  max-width: 1200px;
  margin: auto;
  margin-bottom: 50px;
  ${SCREENS.sm} {
    display: flex;
    justify-content: center;
  }
  ${SCREENS.lg} {
    gap: 24px;
  }
`;
const PreviewFrame = styled.div`
  width: 230px;
  padding: 2px;
  height: 300px;
  background: ${Colors.white};
  //   margin: auto;
  border-radius: 12px;

  ${SCREENS.sm} {
    margin: 0;
    margin-top: 40px;
    margin-left: 8px;
  }
  ${SCREENS.lg} {
    width: 300px;
    height: 391px;
  }
`;
const PreviewFrameContainer = styled.div`
  position: relative;
  top: 0px;
  width: 50%;
  ${PreviewFrame}:nth-child(2) {
    position: absolute;
    top: 100px;
    left: 125px;
  }
`;

const PictureSlide = styled.div<{ $background: string }>`
  background-color: ${Colors.brown};
  background-position: center;
  background-image: url(${(props) => props.$background});
  height: 100%;
  background-size: cover;
  border-radius: 12px;
`;
const Slogan = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 3.6rem;
  color: #000;
  font-weight: 400;

  ${SCREENS.lg} {
    font-size: 5rem;
    margin-left: auto;
  }
`;

const Section = styled.section`
  margin-top: 50px;
  padding: 18px;
  position: relative;
`;
const NotePanel = styled.div`
  background-color: ${Colors.white};
  padding: 18px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  position: relative;
  right: -20px;
  padding-left: 27px;
  box-shadow: #00000059 7px 7px 20px 4px;

  h3 {
    color: ${Colors.brown};
    font-family: ${Poppins};
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 3px;
  }
  p {
    font-family: ${Poppins};
    font-weight: 300;
    font-size: 0.8rem;
  }
  ${SCREENS.sm} {
    // right: 0px;
    max-width: 360px;
    margin-left: auto;
  }
`;
const SectionContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`;
const SectionHeader = styled.h1`
  font-family: ${Poppins};
  text-transform: capitalize;
  font-weight: 300;
  text-align: center;
  font-size: 2rem;
`;
const ProductsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 8px;
  overflow-x: scroll;
  ${SCREENS.lg} {
   overflow-x: hidden;
  }
`;
