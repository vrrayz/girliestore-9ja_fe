import { CustomInput } from "@/components/Form";
import { ProductItemCard } from "@/components/ProductItemCard";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const HomePage = () => {
  return (
    <div>
      <ProductItemCard />
      <div className="p-4" style={{ background: "#fff" }}>
        <CustomInput icon={faSearch} placeholder={"Search"} />
      </div>
    </div>
  );
};
