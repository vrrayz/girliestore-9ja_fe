import React from "react";
import Image from "next/image";
import {
  faCartFlatbed,
  faLocation,
  faSearch,
  faTag,
  faTruckArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { CustomInput } from "../Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { cartItems } from "@/mocks";
import { CartItemsCount } from "./MobileHeader";

export const LargeHeader = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="bg-topHeaderBg h-[42px] px-4">
        <div className="w-full flex items-center max-w-[1200px] mx-auto h-full text-gray justify-between">
          <span>Welcome to Girliestore9ja</span>
          <div className="flex gap-[16px] items-center font-['Hanken Grotesk'] font-light text-gray">
            <a href="#" className="flex gap-[6px] items-center">
              <FontAwesomeIcon icon={faLocation} color="olivedrab" />
              <span>Deliver anywhere</span>
            </a>
            <span className="text-gainsboro">|</span>
            <a href="#" className="flex gap-[6px] items-center relative">
              <FontAwesomeIcon icon={faTruckArrowRight} color="olivedrab" />
              <span>Track your order</span>
            </a>
            <span className="text-gainsboro">|</span>
            <a href="#" className="flex gap-[6px] items-center relative">
              <FontAwesomeIcon icon={faTag} color="olivedrab" />
              <span>All offers</span>
            </a>
          </div>
        </div>
      </div>
      <div className="h-[90px] px-4">
        <div className="w-full h-full max-w-[1200px] mx-auto flex justify-between items-center ">
          <a href="/" className="mr-auto">
            <Image src="/assets/logo.png" width={50} height={50} alt="Logo" />
          </a>
          <div className="flex gap-[30px] w-[778px]">
            <CustomInput
              icon={faSearch}
              placeholder={"Search"}
              className="w-[507px] header-input"
            />
            <div className="flex gap-[20px] grow items-center font-['Hanken Grotesk'] text-gray">
              <a href="#" className="flex gap-[6px] items-center">
                <FontAwesomeIcon icon={faUser} color="olivedrab" />
                <span>Sign Up/Sign In</span>
              </a>
              <span className="text-gainsboro">|</span>
              <a href="#" className="flex gap-[6px] items-center relative">
                <FontAwesomeIcon icon={faCartFlatbed} color="olivedrab" />
                <span>Cart</span>
                <CartItemsCount style={{ right: "-15px" }}>
                  {cartItems.length}
                </CartItemsCount>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
