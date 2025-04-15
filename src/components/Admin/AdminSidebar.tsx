"use client";

import { adminRoutes } from "@/constants/routes";
import React from "react";

export const AdminSidebar = () => {
  return (
    <div className="hidden lg:grid gap-[24px]">
      <a href="/admin" className="font-bold">
        Admin Home
      </a>
      <div>
        <h5 className="font-bold">Categories</h5>
        <ul className="ml-4 mt-[16px] flex flex-col gap-[12px]">
          <li>
            <a href={adminRoutes.categories}>View Categories</a>
          </li>
          {/* <li>
            <a href={adminRoutes.createCategory}>Create Category</a>
          </li> */}
        </ul>
      </div>
      <div>
        <h5 className="font-bold">Stores</h5>
        <ul className="ml-4 mt-[16px] flex flex-col gap-[12px]">
          <li>
            <a href={adminRoutes.stores}>View Stores</a>
          </li>
          <li>
            <a href={adminRoutes.createStore}>Create Store</a>
          </li>
        </ul>
      </div>
      <div>
        <h5 className="font-bold">Orders</h5>
        <ul className="ml-4 flex flex-col gap-[12px]">
          <li>
            <a href="#">View Orders</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
