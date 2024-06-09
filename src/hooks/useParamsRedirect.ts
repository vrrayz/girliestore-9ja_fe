import { paramsToId } from "@/helpers";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export const useParamsRedirect = (paramId: string, name?: string) => {
  useEffect(() => {
    const paramIdNameArray = paramId.split("-");
    paramIdNameArray.pop();
    const paramIdName = paramIdNameArray.join(" ");
    if (name && name !== paramIdName) {
      redirect(
        `${name.split(" ").join("-")}-${paramsToId(paramId)
          .toString()
          .padStart(7, "0")}`
      );
    }
  }, [name, paramId]);

  return {};
};
