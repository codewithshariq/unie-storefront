"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ZapierIcon from "@/public/icons/tabler-icon-brand-zapier.svg";
import DollarIcon from "@/public/icons/tabler-icon-currency-dollar.svg";
import RecycleIcon from "@/public/icons/tabler-icon-recycle.svg";
import AdjustmentIcon from "@/public/icons/tabler-icon-adjustments.svg";
import TrendingIcon from "@/public/icons/tabler-icon-trending-up.svg";
import UserCheckIcon from "@/public/icons/tabler-icon-user-check.svg";

import OpenAccordionSvg from "@/public/attribute-accordion-2.svg";
import { useState } from "react";

const ACCORDIONS = [
  {
    title: "Customizable",
    Icon: ZapierIcon,
  },
  {
    title: "Automated",
    Icon: AdjustmentIcon,
  },
  {
    title: "Affordable",
    Icon: DollarIcon,
  },
  {
    title: "On-Trend",
    Icon: TrendingIcon,
  },
  {
    title: "Less Waste",
    Icon: RecycleIcon,
  },
  {
    title: "Retention",
    Icon: UserCheckIcon,
  },
];

export function AttributeAccordion() {
  const [activeAccordion, setActiveAccordion] = useState("Customizable");

  return (
    <Accordion
      type="single"
      collapsible
      className="absolute top-[26px] right-4 flex flex-row justify-end"
      orientation="horizontal"
      defaultValue="Customizable"
      onValueChange={(value) => {
        setActiveAccordion(value ? value : "Customizable");
      }}
      value={activeAccordion}
    >
      {ACCORDIONS.map((accordion, index) => {
        const { title, Icon } = accordion;
        const isFirst = index === 0;
        const isLast = index === ACCORDIONS.length - 1;
        const isActive = activeAccordion === title;
        const activeAccordionIndex = ACCORDIONS.findIndex(
          (accordion) => accordion.title === activeAccordion
        );

        return (
          <AccordionItem
            key={title}
            value={title}
            className="relative flex flex-row-reverse text-brown-400 border-none h-[528px]"
          >
            <AccordionTrigger
              className={cn(
                "relative flex flex-col justify-between items-center h-full w-[51px] border border-brown-400 pt-4 pb-6 px-[11px] hover:no-underline data-[state=open]:w-[82px] data-[state=open]:text-black-500 data-[state=open]:font-semibold data-[state=open]:border-none data-[state=open]:items-end [&>svg:last-child]:hidden [&[data-state=open]>svg]:rotate-0",
                isFirst && "rounded-l-[20px]",
                isLast && "rounded-r-[20px]",
                !isActive &&
                  index < activeAccordionIndex &&
                  "h-[477px] self-end"
              )}
            >
              {isActive && (
                <OpenAccordionSvg className="absolute top-0 left-0 fill-current text-brown-400" />
              )}
              <Icon
                className={cn(
                  "w-6 h-6 stroke-current",
                  isActive && "mr-[13px]"
                )}
              />
              <p
                className={cn(
                  "flex font-spaceGrotesk text-base uppercase flex-col-reverse max-w-4 vertical-writing tracking-[1.6px] leading-[182%] z-10"
                )}
              >
                {title}
              </p>
            </AccordionTrigger>
            <AccordionContent className="pb-0 pl-4 w-full flex flex-col items-start pt-[51px] gap-y-[11px]">
              <div className="relative w-[827px] h-[368px] z-10">
                <Image
                  src="/images/attribute-accordion-1.png"
                  alt="attribute-accordion-1"
                  fill
                  sizes="64.60vw"
                />
                <div
                  className="absolute top-4 left-4 w-[760px] h-[332px] bg-brown-400 rounded-[30px] overflow-hidden"
                  style={{
                    boxShadow:
                      "0px 127px 43px 0px rgba(0, 0, 0, 0.18), 0px 58.716px 19.88px 0px rgba(0, 0, 0, 0.13), 0px 33.596px 11.375px 0px rgba(0, 0, 0, 0.11), 0px 20.392px 6.905px 0px rgba(0, 0, 0, 0.10), 0px 12.287px 4.16px 0px rgba(0, 0, 0, 0.08), 0px 6.842px 2.317px 0px rgba(0, 0, 0, 0.07), 0px 2.943px 0.996px 0px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <Image
                    src="/images/attribute-accordion-2.png"
                    alt="attribute-accordion-2"
                    fill
                    className="object-cover"
                    sizes="59.375vw"
                  />
                </div>
              </div>
              <p className="font-spaceMono text-base text-white-100 w-[793px]">
                Our world-class uniform solutions are fully customizable,
                allowing brands to create one-of-a-kind garments that seamlessly
                align with their identity, functionality needs, and performance
                expectations.
              </p>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
