"use client";

import { paramsToId } from "@/helpers";
import { useStore } from "@/hooks/useStore";
import React from "react";
interface Props {
  id: string;
}
export const Sidebar = ({ id }: Props) => {
  //   const { store, isLoading } = useStore(paramsToId(id));

  return (
    <div className="hidden lg:grid gap-[24px]">
      <div>
        <h5 className="font-bold">Products</h5>
        <ul className="ml-4 mt-[16px]">
          <li>
            <a href={`/user/store/${id}`}>View Products</a>
          </li>
          <li>
            <a href={`/user/store/${id}/create-product`}>Create Product</a>
          </li>
        </ul>
      </div>
      <div>
        <h5 className="font-bold">Orders</h5>
        <ul className="ml-4 mt-[16px]">
          <li>
            <a href="#">View Orders</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
