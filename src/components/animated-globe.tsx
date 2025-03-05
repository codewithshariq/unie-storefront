"use client";
import * as animationData from "@/lib/lottie/globe-lottie.json";
import { LottieOptions, useLottie } from "lottie-react";

export default function AnimatedGlobe() {
  const defaultOptions: LottieOptions = {
    animationData,
    loop: true,
  };

  const { View } = useLottie(defaultOptions);

  return <div className="w-20 h-20 select-none">{View}</div>;
}
