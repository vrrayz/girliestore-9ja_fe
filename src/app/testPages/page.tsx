"use client";

import { Toast } from "@/components/Toast";
import { useToast } from "@/hooks/useToast";

export default function Home() {
  const { toggleToast, setToggleToast, closeToast } = useToast();
  return (
    <>
      <button className="styled-button" onClick={() => setToggleToast(true)}>
        Toggle Toast
      </button>
      {toggleToast && <Toast type="success" closeToast={closeToast} />}
    </>
  );
}
