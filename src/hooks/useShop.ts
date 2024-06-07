import { getShop } from "@/actions/store";
import { Shop } from "@/types";
import { useEffect, useState } from "react";

export const useShop = (id: number) => {
  const [shop, setShop] = useState<Shop>();
  const [isLoading, setIsLoading] = useState<boolean>(true)
  useEffect(() => {
    getShop(id).then((res) => {
      setShop(res);
    });
  },[id]);
  useEffect(() => {
    if(shop) setIsLoading(false)
  },[shop])
  return { shop, setShop, isLoading, setIsLoading };
};
