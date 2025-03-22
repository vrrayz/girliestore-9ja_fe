import { User } from "@/types";
import { createContext, SetStateAction } from "react";

export const AuthContext = createContext<{
  authUser?: User;
  setAuthUser: (value: SetStateAction<User | undefined>) => void;
}>({ setAuthUser: (value: SetStateAction<User | undefined>) => {} });
