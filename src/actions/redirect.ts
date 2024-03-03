'use server';

import { redirect as nextRedirect } from "next/navigation";

export const redirect = async (url: string) => {
  nextRedirect(url);
};
