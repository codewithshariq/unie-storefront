import Image from "next/image";
import React from "react";
import Svg1 from "@/public/uniform-carousel-1.svg?url";
import Svg2 from "@/public/uniform-carousel-2.svg";
import Svg3 from "@/public/uniform-carousel-3.svg";

interface UniformCarouselWrapperProps {
  children: React.ReactNode;
}

export function UniformCarouselWrapper({
  children,
}: UniformCarouselWrapperProps) {
  return (
    <div className="relative -mt-[248px]">
      <Image src={Svg1} alt="Svg 1" priority />
      <Svg2 className="absolute top-[35px] mx-[34px]" />
      <p className="font-normal text-2xl text-gray-200 font-spaceMono leading-[150%] tracking-[2.88px] uppercase absolute top-[25px] left-[304px]">
        un-1011001
      </p>
      <Svg3 className="absolute top-[147px] left-[25px]" />
      <div className="absolute top-[78px] left-0 right-0">{children}</div>
    </div>
  );
}
