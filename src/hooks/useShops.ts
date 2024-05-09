import { getShops } from "@/actions/store";
import { Category, Shop } from "@/types";
import { useEffect, useState } from "react";

export const useShops = () => {
  const [shops, setShops] = useState<Shop[]>([]);
  useEffect(() => {
    getShops().then((res) => {
      setShops(res);
    });
  },[]);
  return { shops, setShops };
};
