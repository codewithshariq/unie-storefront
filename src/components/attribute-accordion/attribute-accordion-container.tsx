import React from "react";
import Svg1 from "@/public/attribute-accordion-1.svg";

interface AttributeAccordionContainerProps {
  children: React.ReactNode;
}

export function AttributeAccordionContainer({
  children,
}: AttributeAccordionContainerProps) {
  return (
    <div className="relative w-[1216px] h-[576px] mx-auto mb-[117.5px]">
      <Svg1 />
      <h3 className="absolute top-[7px] left-[2px] font-mortendExtrabold uppercase text-[35px] leading-[135%] tracking-[0.7px] text-brown-400">
        A WHOLE NEW WORLD OF VALUE
      </h3>
      {children}
    </div>
  );
}
