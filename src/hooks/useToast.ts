import { Toast } from "@/types";
import { useState, useCallback } from "react";

export const useToast = () => {
  const [toggleToast, setToggleToast] = useState<boolean>(false);
  const [toast, setToast] = useState<Toast>();

  const closeToast = useCallback(() => {
    if (toggleToast) setTimeout(() => setToggleToast(false), 300);
  }, [toggleToast]);

  const showToast = ({ title, message, type }: Toast) => {
    setToast({ title, message, type });
    setToggleToast(true);
  };

  return { toggleToast, setToggleToast, closeToast, toast, showToast };
};
