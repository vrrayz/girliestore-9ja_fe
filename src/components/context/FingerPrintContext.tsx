import { SetStateAction, createContext } from "react";

export const FingerPrintContext = createContext<{
  fingerPrint: string;
}>({
  fingerPrint: "",
});
