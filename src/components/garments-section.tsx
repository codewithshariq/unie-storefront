import React from "react";
import BrandPartner1 from "@/public/logos/partner-1.svg";
import BrandPartner2 from "@/public/logos/partner-2.svg";
import BrandPartner3 from "@/public/logos/partner-3.svg";
import BrandPartner4 from "@/public/logos/partner-4.svg";
import BrandPartner5 from "@/public/logos/partner-5.svg";
import BrandPartner6 from "@/public/logos/logo-brown.svg";
import { Button } from "./ui/button";

const BRAND_PARTNERS = [
  BrandPartner1,
  BrandPartner2,
  BrandPartner3,
  BrandPartner4,
  BrandPartner5,
  BrandPartner6,
];

const GARMENT_TYPES = ["Performance+", "Astro Lab", "Astro Armor", "Selene"];

export default function GarmentsSection() {
  return (
    <div className="flex flex-col max-w-max mb-[177px] mx-auto">
      <h2 className="font-mortendExtrabold text-5xl tracking-[0.96px] leading-[182%] text-center uppercase text-brown-400">
        Fashion | Comfort | Function
      </h2>
      <div className="flex w-full gap-x-[97px] items-center">
        <div className="flex flex-col gap-6 justify-center">
          {GARMENT_TYPES.map((type, index) => {
            return (
              <Button key={index} className="h-10">
                {type}
              </Button>
            );
          })}
        </div>
        <div className="flex h-[832px]">
          {/** Need to add the round table rotating animation */}
        </div>
      </div>
      <div className="flex items-center gap-x-[47px] self-center mb-6">
        {BRAND_PARTNERS.map((Logo, index) => {
          const isLast = index === BRAND_PARTNERS.length - 1;

          return (
            <Logo
              key={index}
              className={isLast ? "w-[96px] h-[24px] logo-filter" : ""}
            />
          );
        })}
      </div>
    </div>
  );
}
