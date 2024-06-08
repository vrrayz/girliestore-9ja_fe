import { getStore } from "@/actions/store";
import { Shop } from "@/types";
import { useEffect, useState } from "react";

export const useStore = (id: number) => {
  const [store, setStore] = useState<Shop>();
  const [isLoading, setIsLoading] = useState<boolean>(true)
  useEffect(() => {
    getStore(id).then((res) => {
      setStore(res);
    });
  },[id]);
  useEffect(() => {
    if(store) setIsLoading(false)
  },[store])
  return { store, setStore, isLoading, setIsLoading };
};
