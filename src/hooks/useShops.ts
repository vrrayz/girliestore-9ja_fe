import { getShops } from "@/actions/store";
import { Category, Shop } from "@/types";
import { useEffect, useState } from "react";

export const useShops = () => {
  const [shops, setShops] = useState<Shop[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true)
  useEffect(() => {
    getShops().then((res) => {
      setShops(res);
    });
  },[]);
  useEffect(() => {
    if(shops) setIsLoading(false)
  },[shops])
  return { shops, setShops, isLoading, setIsLoading };
};
