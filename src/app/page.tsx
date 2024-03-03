"use client";

import { InputField } from "@/components/Input";
import { Loading } from "@/components/Loading";
// import { LandingPage } from '@/component/LandingPage';
import dynamic from "next/dynamic";

const LandingPage = dynamic(() => import("@/components/LandingPage"), {
  ssr: false,
});

export default function Home() {
  return <LandingPage />;
}
