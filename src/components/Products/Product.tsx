"use client";

import { useProduct } from "@/hooks/useProduct";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Loading } from "../Loading";
import Image from "next/image";
import styled from "styled-components";
import {
  CardBody,
  CardBodyHeadingOne,
  CardBodyText,
  CardContainer,
} from "../Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  InlineTextSmall,
  InlineTextXl,
  MultiplePhotosContainer,
} from "../Styled";
import {
  faCartFlatbed,
  faMinus,
  faPlus,
  faTags,
  faHeart as faHeartSolid,
} from "@fortawesome/free-solid-svg-icons";
import { ReviewAndRating } from "./ReviewAndRating";
import { StarRatings } from "./StarRatings";
import { CartContext } from "../context/CartContext";
import {
  CURRENCY,
  addToCart,
  modifyQuantityRequested,
  paramsToId,
} from "@/helpers";
import { useToast } from "@/hooks/useToast";
import { Toast } from "../Toast";
import { recordCartPoints, recordProductView } from "@/actions/product";
import { FingerPrintContext } from "../context/FingerPrintContext";
import { AuthContext } from "../context/AuthContext";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { WishlistContext } from "../context/WishlistContext";
import { createWishlist, deleteWishlist } from "@/actions/wishlist";

interface Props {
  id: string;
}
export const Product = ({ id }: Props) => {
  const { product, isLoading } = useProduct(paramsToId(id));
  const { cartItems, setCartItems } = useContext(CartContext);
  const { toggleToast, closeToast, toast, showToast } = useToast();
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const { fingerPrint } = useContext(FingerPrintContext);
  const { authUser } = useContext(AuthContext);
  const { wishlist, setWishlist } = useContext(WishlistContext);
  const isItemAdded = useMemo(() => {
    return (
      product && cartItems.filter((item) => item.id === product?.id).length > 0
    );
  }, [cartItems, product]);
  const wishlistItem = useMemo(
    () =>
      wishlist.filter(
        ({ productId, userId }) =>
          productId == product?.id && userId == authUser?.id
      )[0],
    [authUser?.id, product?.id, wishlist]
  );
  const getCartItemQuantity = useCallback(
    (itemId: number) => {
      return cartItems.filter((item) => item.id === itemId)[0]
        .quantityRequested;
    },
    [cartItems]
  );

  const addProductToCart = () => {
    if (product) {
      const cartItem = {
        id: product.id,
        name: product.name,
        photoUrl: product.photos[0].url,
        quantity: product.quantity,
        quantityRequested: 1,
        price: product.price,
      };
      addToCart(cartItem)
        .then(() => setCartItems([...cartItems, cartItem]))
        .then(() =>
          showToast({
            title: "Item Added !!",
            message: "You've added an item to your cart",
            type: "success",
          })
        )
        .then(() => {
          let cartEngagementData = new FormData();
          cartEngagementData.append("productId", product.id.toString());
          cartEngagementData.append("score", (3).toString());
          cartEngagementData.append("scoreAction", "increment");
          recordCartPoints(cartEngagementData);
        });
    }
  };

  const productWishlistAction = useCallback(() => {
    if (authUser) {
      if (wishlistItem) {
        deleteWishlist(wishlistItem.id).then((res) => {
          if (res.id) {
            setWishlist(wishlist.filter(({ id }) => id != wishlistItem.id));
          }
        });
      } else if (!wishlistItem && product) {
        let wishlistFormData = new FormData();
        wishlistFormData.append("userId", authUser.id.toString());
        wishlistFormData.append("productId", product.id.toString());
        createWishlist(wishlistFormData).then((res) => {
          if (res.id) {
            setWishlist([...wishlist, { ...res }]);
          }
        });
      }
    } else {
      console.log("Throw a modal or redirect the user! User needs to login");
    }
  }, [authUser, product, wishlist, wishlistItem]);

  useEffect(() => {
    if (product) {
      let formData = new FormData();
      formData.append("productId", product.id.toString());
      formData.append("deviceId", fingerPrint);
      if (authUser) {
        formData.append("userId", authUser.id.toString());
      }
      recordProductView(formData).then((res) => {
        if (res.id) console.log("Engagement recorded");
        console.log("Form Data == ", formData);
        console.log("Engagement res == ", res);
      });
    }
  }, [authUser, fingerPrint, product]);
  return (
    <section style={{ width: "100vw", maxWidth: "1200px" }} className="mx-auto">
      {isLoading && <Loading />}
      {product && (
        <div className="grid gap-[16px] p-[16px]">
          <div className="flex flex-col xl:flex-row gap-[16px] xl:items-start">
            <div className="flex flex-col lg:flex-row gap-[16px] lg:items-start justify-center xl:min-w-[700px]">
              <div className="grid grid-cols-4 lg:grid-rows-4 lg:grid-cols-1 lg:w-[170px] gap-[8px]">
                {product.photos.map((photo, i) => (
                  <Image
                    src={photo.url || "/assets/icons/default_product.png"}
                    width={200}
                    height={200}
                    alt="product_image"
                    className={`aspect-[85/69] w-full object-cover rounded-[4px] ${
                      activePhotoIndex == i
                        ? "border-[2px] border-olivedrab"
                        : ""
                    } hover:border-[2px] hover:border-olivedrab`}
                    key={i}
                    style={{ cursor: "pointer" }}
                    onClick={() => setActivePhotoIndex(i)}
                  />
                ))}
              </div>
              <Image
                src={
                  product.photos[activePhotoIndex].url ||
                  "/assets/icons/default_product.png"
                }
                width={200}
                height={200}
                alt="product_image"
                className="aspect-[5/6] w-full max-w-[500px] object-cover rounded-[4px] mx-auto lg:mx-0 max-h"
              />
            </div>
            <ProductInfoContainer className="mb-5 mt-4 xl:my-0">
              <CardBody>
                <h4 className="font-bold text-[24px]">{product.name}</h4>
                <StarRatings
                  ratingsCount={5}
                  hasReviewersCount
                  reviewersCount={53}
                />
                <CardBodyText>
                  <InlineTextSmall>
                    Category:{" "}
                    <a href="#" className="text-red font-bold">
                      {product.category.name}
                    </a>
                  </InlineTextSmall>
                </CardBodyText>
                <CardBodyText>
                  <FontAwesomeIcon icon={faTags} />
                  <InlineTextXl className="font-extrabold">
                    {CURRENCY} {product.price}
                  </InlineTextXl>
                </CardBodyText>
                <CardBodyText className="mb-2">
                  <InlineTextSmall>
                    {product.quantity} items left
                  </InlineTextSmall>
                </CardBodyText>
                <CardBodyHeadingOne>Description</CardBodyHeadingOne>
                <CardBodyText className="my-3">
                  {product.description}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
                  quos, consequatur eum ea tempore amet ducimus saepe rerum
                  quisquam possimus corrupti dignissimos dolorem officiis?
                  Eligendi et placeat illum doloribus assumenda?
                </CardBodyText>
                <div className="flex gap-[8px] items-center my-3">
                  {isItemAdded ? (
                    <div className="flex w-[159px] h-[44px] flex-shrink">
                      <button
                        className="w-[40px] border border-gainsboro rounded-tl rounded-bl"
                        onClick={() =>
                          modifyQuantityRequested(
                            product.id,
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
                        className="w-[79px] text-center border-gainsboro border-x-0"
                        value={getCartItemQuantity(product.id)}
                        disabled
                      />
                      <button
                        className="w-[40px] bg-olivedrab text-white border border-olivedrab rounded-tr rounded-br"
                        onClick={() =>
                          modifyQuantityRequested(
                            product.id,
                            cartItems,
                            "increase",
                            setCartItems
                          )
                        }
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                  ) : (
                    <button
                      className="styled-button gradient-olivedrab flex-shrink"
                      onClick={() => addProductToCart()}
                    >
                      <FontAwesomeIcon
                        icon={faCartFlatbed}
                        size="lg"
                        className="mr-1"
                      />
                      <span className="ml-1">Add To Cart</span>
                    </button>
                  )}
                  <button
                    className="w-[50px] aspect-[1/1] border border-gainsboro rounded"
                    // disabled={wishlistItem ? true : false}
                    onClick={() => productWishlistAction()}
                  >
                    {wishlistItem ? (
                      <FontAwesomeIcon
                        icon={faHeartSolid}
                        size="xl"
                        color="red"
                      />
                    ) : (
                      <FontAwesomeIcon icon={faHeart} size="xl" color="gray" />
                    )}
                  </button>
                </div>
              </CardBody>
            </ProductInfoContainer>
          </div>
          <ProductInfoContainer className="mb-5">
            <CardBody>
              <CardBodyHeadingOne>Reviews and Ratings</CardBodyHeadingOne>
              <CardBodyText className="mb-5">
                <InlineTextSmall className="font-bold">
                  Avg Rating:
                </InlineTextSmall>
                <InlineTextSmall className="font-extrabold text-red">
                  <span>4.5/5</span>
                  <span className="font-normal"> (from {53} customers)</span>
                </InlineTextSmall>
              </CardBodyText>
              <ReviewAndRating />
              <ReviewAndRating />
              <ReviewAndRating />
            </CardBody>
          </ProductInfoContainer>
        </div>
      )}
      {toggleToast && toast && (
        <Toast
          type={toast.type}
          closeToast={closeToast}
          title={toast.title}
          message={toast.message}
        />
      )}
    </section>
  );
};
const ProductInfoContainer = styled(CardContainer)`
  padding: 8px 16px;
  box-shadow: 0px 5px 7px 0px #0000001a;
  ${CardBodyText} {
    display: flex;
    gap: 12px;
    svg {
      margin: auto 0px;
    }

    span {
      margin: auto 0px;
    }
  }
`;
const ProductImage = styled(Image)`
  width: 100%;
  max-width: 350px;
  height: 250px;
  object-fit: cover;
`;

const CustomMultiPhoto = styled(MultiplePhotosContainer)`
  gap: 12px;
`;
