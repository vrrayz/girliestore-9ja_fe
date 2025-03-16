"use client";

import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import {
  InlineText,
  InlineTextXl,
  Item,
  Text,
  Text2Xl,
  TextXl,
} from "../Styled";
import {
  CardBody,
  CardBodyHeadingOne,
  CardBodyText,
  CardContainer,
} from "../Card";
import Image from "next/image";
import { CURRENCY, modifyQuantityRequested } from "@/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faMinus,
  faPlus,
  faTags,
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

  // const modifyQuantityRequested = (
  //   id: number,
  //   operation: "increase" | "decrease"
  // ) => {
  //   const newCartItems = cartItems
  //     .map((cartItem) => {
  //       if (cartItem.id === id) {
  //         operation === "increase"
  //           ? (cartItem.quantityRequested += 1)
  //           : (cartItem.quantityRequested -= 1);
  //       }
  //       return cartItem;
  //     })
  //     .filter((cartItem) => cartItem.quantityRequested > 0);
  //   setCartItems(newCartItems);
  //   localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  // };
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
      <div className="p-2 max-w-[1200px] mx-auto">
        <div className="grid gap-[20px]">
          <div className="shadow p-4">
            <div className="grid grid-cols-2 md:grid-cols-[1fr_100px_1fr_100px] gap-[20px] items-center text-center">
              <h4 className="text-[18px]">Product</h4>
              <h4 className="text-[18px]">Price</h4>
              <h4 className="text-[18px]">Quantity</h4>
              <h4 className="text-[18px]">Total</h4>
            </div>
          </div>
          {cartItems.map((item, index) => (
            <div key={index} className="mt-1 mb-3 no-hover shadow p-4">
              <div className="grid grid-cols-2 md:grid-cols-[1fr_100px_1fr_100px] gap-[20px] items-center">
                <div className="flex items-center gap-[20px]">
                  <Image
                    src={item.photoUrl}
                    width={78}
                    height={78}
                    alt="item_image"
                    className="rounded"
                  />
                  <h4 className="font-bold text-[18px]">{item.name}</h4>
                </div>

                <div>
                  <CardBodyText>
                    <FontAwesomeIcon icon={faTags} />
                    <InlineTextXl className="font-extrabold">
                      {CURRENCY} {item.price}
                    </InlineTextXl>
                  </CardBodyText>
                </div>
                <div className="flex w-full lg:w-[159px] h-[44px] col-span-2 md:col-span-1 mx-auto">
                  <button
                    className="w-[25.2%] lg:w-[40px] border border-gainsboro rounded-tl rounded-bl"
                    onClick={() =>
                      modifyQuantityRequested(
                        item.id,
                        cartItems,
                        "decrease",
                        setCartItems
                      )
                    }
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <input
                    type="number"
                    className="w-[74.8%] lg:w-[79px] text-center border-gainsboro border-x-0"
                    value={item.quantityRequested}
                    disabled
                  />
                  <button
                    className="w-[25.2%] lg:w-[40px] bg-olivedrab text-white border border-olivedrab rounded-tr rounded-br"
                    onClick={() =>
                      modifyQuantityRequested(
                        item.id,
                        cartItems,
                        "increase",
                        setCartItems
                      )
                    }
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <span className="text-[20px] col-span-2 md:col-span-1 text-center">
                  {CURRENCY}
                  {item.quantityRequested * item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
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
