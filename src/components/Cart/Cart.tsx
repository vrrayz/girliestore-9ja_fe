"use client";

import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { Item } from "../Styled";
import { CardBody, CardBodyHeadingOne, CardBodyText } from "../Card";
import Image from "next/image";
import { CURRENCY } from "@/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

export const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <>
      <div className="p-2">
        {cartItems.map((item, index) => (
          <Item key={index} className="my-1">
            <Image
              src={item.photoUrl}
              width={78}
              height={78}
              alt="item_image"
            />
            <CardBody>
              <CardBodyHeadingOne>{item.name}</CardBodyHeadingOne>
              <CardBodyText>
                {CURRENCY} {item.price}
              </CardBodyText>
            </CardBody>
          </Item>
        ))}
        <button className="styled-button gradient-olivedrab my-3">
          <FontAwesomeIcon icon={faCreditCard} size="lg" className="mr-1" />{" "}
          <span>Proceed To Checkout</span>
        </button>
      </div>
    </>
  );
};
