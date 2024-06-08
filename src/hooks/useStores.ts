import { getStores } from "@/actions/store";
import { Shop } from "@/types";
import { useEffect, useState } from "react";

export const useStores = () => {
  const [stores, setStores] = useState<Shop[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true)
  useEffect(() => {
    getStores().then((res) => {
      setStores(res);
    });
  },[]);
  useEffect(() => {
    if(stores) setIsLoading(false)
  },[stores])
  return { stores, setStores, isLoading, setIsLoading };
};
