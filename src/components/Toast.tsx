import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Colors } from "@/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

type ToastType = "info" | "warning" | "failure" | "success";

interface Props {
  type?: ToastType;
  closeToast: () => void;
}

export const Toast = ({ type, closeToast }: Props) => {
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);
  const close = useCallback(() => {
    setShouldAnimate(true);
    closeToast();
  }, [closeToast]);
  useEffect(() => {
    const timeout = setTimeout(() => close(), 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [close]);
  return (
    <>
      <div className={`styled-toast ${type} ${shouldAnimate && "slideOut"}`}>
        {type && (
          <Image
            src={`/assets/icons/toast_${type}.svg`}
            width={70}
            height={70}
            alt="toast_img"
            className="toastImage"
          />
        )}
        <button className="closeButton" onClick={() => close()}>
          <FontAwesomeIcon icon={faClose} size="xl" />
        </button>
        <h3 className="text-xl font-bold mb-1">Hello !</h3>
        <p className="message mt-1">
          You successfully read this important message
        </p>
        <Image
          src={"/assets/logo_bw.png"}
          width={70}
          height={70}
          alt="toast_img"
          className="toastLogo"
        />
      </div>
    </>
  );
};
