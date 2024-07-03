import { useState, useCallback } from "react";

export const useToast = () => {
  const [toggleToast, setToggleToast] = useState<boolean>(false);

  const closeToast = useCallback(() => {
    if (toggleToast) setTimeout(() => setToggleToast(false), 300);
  }, [toggleToast]);

  return { toggleToast, setToggleToast, closeToast };
};
