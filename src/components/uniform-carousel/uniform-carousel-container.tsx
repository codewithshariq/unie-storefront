"use client";
import React, { useState } from "react";
import Svg1 from "@/public/uniform-carousel-1.svg";
import Svg2 from "@/public/uniform-carousel-2.svg";
import { UniformCarousel } from "./uniform-carousel";

const IMAGES = [
  {
    src: "/images/Uniform1.png",
    sku: "un-1011001",
  },
  {
    src: "/images/Uniform2.png",
    sku: "un-1341012",
  },
  {
    src: "/images/Uniform4.png",
    sku: "un-1079074",
  },
  {
    src: "/images/Uniform3.png",
    sku: "un-1211893",
  },
  {
    src: "/images/Uniform4.png",
    sku: "un-1039004",
  },
];

export function UniformCarouselContainer() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative -mt-[248px] w-full h-[823px] blended-background uniform-carousel-clip-path">
      <Svg1 className="absolute top-[35px] mx-[34px]" />
      <p className="font-normal text-2xl text-gray-200 font-spaceMono leading-[150%] tracking-[2.88px] uppercase absolute top-[25px] left-[304px]">
        {IMAGES[activeIndex].sku}
      </p>
      <Svg2 className="absolute top-[147px] left-[25px]" />
      <div className="absolute top-[78px] left-0 right-0">
        <UniformCarousel setActiveIndex={setActiveIndex} images={IMAGES} />
      </div>
    </div>
  );
}
