"use client";
import * as animationData from "@/public/globe-lottie.json";

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function AnimatedGlobe() {
  return (
    <div className="w-20 h-20 select-none">
      <Lottie animationData={animationData} loop />
    </div>
  );
}
