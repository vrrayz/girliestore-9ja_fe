"use client";

import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { InlineText, Item, Text, Text2Xl, TextXl } from "../Styled";
import {
  CardBody,
  CardBodyHeadingOne,
  CardBodyText,
  CardContainer,
} from "../Card";
import Image from "next/image";
import { CURRENCY } from "@/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import flwConfig from "@/data/flw.config";

export const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [subtotal, setSubtotal] = useState<number>(0);

  const handleFlutterPayment = useFlutterwave({
    ...flwConfig,
    amount: subtotal,
    customer: {
      email: "emmyvic98@gmail.com",
      phone_number: "08146027086",
      name: "john doe",
    },
  });

  const modifyQuantityRequested = (
    id: number,
    operation: "increase" | "decrease"
  ) => {
    const newCartItems = cartItems
      .map((cartItem) => {
        if (cartItem.id === id) {
          operation === "increase"
            ? (cartItem.quantityRequested += 1)
            : (cartItem.quantityRequested -= 1);
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.quantityRequested > 0);
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };
  useEffect(() => {
    setSubtotal(
      cartItems.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.price * currentValue.quantityRequested,
        0
      )
    );
  }, [cartItems]);
  return (
    <>
      <div className="p-2">
        {cartItems.map((item, index) => (
          <Item key={index} className="mt-1 mb-3 no-hover">
            <Image
              src={item.photoUrl}
              width={78}
              height={78}
              alt="item_image"
            />
            <CardBody className="ml-4">
              <CardBodyHeadingOne>{item.name}</CardBodyHeadingOne>
              <CardBodyText>
                <InlineText className="font-bold">
                  {CURRENCY} {item.price}
                </InlineText>
              </CardBodyText>
              <NumberButtonGroup className="mt-3">
                <button
                  className="styled-button gradient-coral"
                  onClick={() => modifyQuantityRequested(item.id, "decrease")}
                >
                  <FontAwesomeIcon icon={faMinus} size="xs" />
                </button>
                <span>{item.quantityRequested}</span>
                <button
                  className="styled-button gradient-coral"
                  onClick={() => modifyQuantityRequested(item.id, "increase")}
                >
                  <FontAwesomeIcon icon={faPlus} size="xs" />
                </button>
              </NumberButtonGroup>
            </CardBody>
          </Item>
        ))}
        <CardContainer className="px-3">
          <CardBody>
            <CardBodyHeadingOne className="uppercase">
              Summary
            </CardBodyHeadingOne>
            <div className="flex mt-3">
              <TextXl>Subtotal</TextXl>
              <Text2Xl className="ml-auto mr-4">
                {CURRENCY}
                {new Intl.NumberFormat("en-US").format(subtotal)}
              </Text2Xl>
            </div>
            <button
              className="styled-button gradient-olivedrab my-3"
              onClick={() => {
                handleFlutterPayment({
                  callback: (response) => {
                    console.log(response);
                    closePaymentModal(); // this will close the modal programmatically
                  },
                  onClose: () => {},
                });
              }}
            >
              <FontAwesomeIcon icon={faCreditCard} size="lg" className="mr-1" />{" "}
              <span>Proceed To Checkout</span>
            </button>
          </CardBody>
        </CardContainer>
      </div>
    </>
  );
};

const NumberButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 35px 50px 35px;
  font-size: 18px;
  button {
    width: 100%;
    height: 35px;
    font-size: 24px;
    font-weight: bold;
    border-radius: 50%;
    text-align: center;
    align-items: center;
  }
  span {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`;
