"use client";

import { Colors, SCREENS } from "@/styles";
import styled from "styled-components";
import { CardBody, CardContainer } from "./Card";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useCategories } from "@/hooks/useCategories";

interface Props {
  children: React.ReactNode;
  headerSpace?: number;
}

export const Body = ({ children, headerSpace }: Props) => {
  const { categories } = useCategories();

  return (
    <MainBody $headerSpace={headerSpace}>
      {children}
      <footer className="bg-olivedrab text-white relative lg:px-4">
        <Image
          src="/assets/footer_circle.svg"
          alt="svg"
          width={321}
          height={401}
          className="absolute top-0 right-0"
        />
        <div className="px-4 pt-[80px] pb-[30px] flex flex-col gap-[30px] items-start md:flex-row md:justify-between max-w-[1200px] mx-auto border-b border-b-[#05F3AB]">
          <div className="flex flex-col gap-[20px]">
            <a href="/" className="mr-auto">
              <Image
                src="/assets/logo_bw.png"
                width={100}
                height={100}
                alt="Logo"
              />
            </a>
            <div className="flex flex-col gap-[20px]">
              <span className="font-bold">Contact Us</span>
              <a className="flex gap-[11px] items-start">
                <FontAwesomeIcon icon={faWhatsapp} color="white" size="1x" />
                <div className="flex flex-col gap-[2px]">
                  <span>Whatsapp</span>
                  <span>+1 202-918-2132</span>
                </div>
              </a>
              <a className="flex gap-[11px] items-start">
                <FontAwesomeIcon icon={faPhone} color="white" size="1x" />
                <div className="flex flex-col gap-[2px]">
                  <span>Call Us</span>
                  <span>+1 202-918-2132</span>
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <span className="font-bold pb-[16px] border-b-white border-b-[3px]">
              Categories
            </span>
            <ul className="flex flex-col gap-[14px]">
              {categories.map((category, i) => (
                <li key={i}>
                  {" "}
                  <a href="#">{category.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-[20px]">
            <span className="font-bold pb-[16px] border-b-white border-b-[3px]">
              Customer Services
            </span>
            <ul className="flex flex-col gap-[14px]">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
        <div className="text-center py-[30px]">
          © 2025 All rights reserved. Girliestore9ja.
        </div>
      </footer>
    </MainBody>
  );
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
