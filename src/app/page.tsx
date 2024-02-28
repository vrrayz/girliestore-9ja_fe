"use client";

import { InputField } from "@/component/Input";
import { Loading } from "@/component/Loading";
// import { LandingPage } from '@/component/LandingPage';
import dynamic from "next/dynamic";

const LandingPage = dynamic(() => import("@/component/LandingPage"), {
  ssr: false,
});

export default function Home() {
  return <LandingPage />;
}
