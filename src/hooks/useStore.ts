import { getStore } from "@/actions/store";
import { Shop } from "@/types";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export const useStore = (id: number) => {
  const [store, setStore] = useState<Shop>();
  const [isNotFound, setIsNotFound] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    getStore(id).then((res) => {
      res.statusCode === 404 ? setIsNotFound(true) : setStore(res);
    });
  }, [id]);
  useEffect(() => {
    if (isNotFound) redirect("/");
    if (store && !isNotFound) setIsLoading(false);
  }, [isNotFound, store]);
  return { store, setStore, isLoading, setIsLoading };
};
