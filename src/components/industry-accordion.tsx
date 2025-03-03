"use client";
import React, { useState } from "react";
import DotRightIcon from "@/public/icons/tabler-icon-dot-right.svg";
import Svg1 from "@/public/industry-accordion-1.svg";
import Svg2 from "@/public/industry-accordion-2.svg";
import OpenAccordionSvg from "@/public/industry-accordion-3.svg";
import MedicalIcon from "@/public/icons/icon-accordion-medical.svg";
import HospitalityIcon from "@/public/icons/icon-accordion-hospitality.svg";
import EntertainmentIcon from "@/public/icons/icon-accordion-entertainment.svg";
import GovernmentIcon from "@/public/icons/icon-accordion-government.svg";
import ServiceIcon from "@/public/icons/icon-accordion-service.svg";
import { Button } from "./ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent } from "./ui/accordion";
import { AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";

const IMAGES = [
  "/images/Industry1.png",
  "/images/Industry2.png",
  "/images/Industry3.png",
  "/images/Industry4.png",
];

const ACCORDIONS = [
  {
    id: 1,
    title: "Medical",
    Icon: MedicalIcon,
    description: `The medical industry unites skilled practitioners, advanced research centers, and modern facilities to deliver patient care, drive innovative treatments, and improve health outcomes worldwide.`,
  },
  {
    id: 2,
    title: "Hospitality",
    Icon: HospitalityIcon,
    description: `The hospitality industry encompasses a wide range of businesses and services that cater to travelers and guests, including hotels, restaurants, resorts, and more.`,
  },
  {
    id: 3,
    title: "Entertainment",
    Icon: EntertainmentIcon,
    description: `The entertainment industry encompasses a diverse range of businesses and services that cater to the cultural and recreational needs of individuals and communities.`,
  },
  {
    id: 4,
    title: "Government",
    Icon: GovernmentIcon,
    description: `The government sector encompasses the various levels of government, including local, state, and federal, and their respective agencies and departments.`,
  },
  {
    id: 5,
    title: "Service",
    Icon: ServiceIcon,
    description: `The service workforce comprises millions of individuals worldwide,
            spanning various industries such as hospitality, retail,
            transportation, and more, making it one of the largest and most
            diverse sectors of the global economy.`,
  },
];

export default function IndustryAccordion() {
  const [activeAccordion, setActiveAccordion] = useState("Service");

  return (
    <div className="relative flex items-end h-[511px] mx-auto mb-[75px]">
      <Accordion
        type="single"
        collapsible
        className="flex flex-row w-[1146px]"
        orientation="horizontal"
        defaultValue="Service"
        onValueChange={(value) => {
          setActiveAccordion(value ? value : "Service");
        }}
        value={activeAccordion}
      >
        {ACCORDIONS.map((accordion, index) => {
          const { title, Icon, description } = accordion;
          const isFirst = index === 0;
          const isLast = index === ACCORDIONS.length - 1;
          const isActive = activeAccordion === title;

          return (
            <AccordionItem
              key={title}
              value={title}
              className="relative flex flex-row text-brown-400 border-none h-[511px]"
            >
              <AccordionTrigger
                className={cn(
                  "relative flex flex-col justify-between items-center h-full w-[51px] border border-brown-400 pt-4 pb-6 px-[11px] hover:no-underline data-[state=open]:w-[82px] data-[state=open]:text-black-500 data-[state=open]:font-semibold data-[state=open]:border-none data-[state=open]:items-start  [&[data-state=open]>svg]:rotate-0",
                  isFirst && "rounded-l-[20px]",
                  isLast && "rounded-r-[20px]"
                )}
              >
                {isActive && (
                  <OpenAccordionSvg className="absolute top-0 left-0 fill-current text-brown-400" />
                )}
                <p
                  className={cn(
                    "flex font-spaceGrotesk text-base uppercase vertical-writing tracking-[1.6px] leading-[182%] z-10"
                  )}
                >
                  {title}
                </p>
                <Icon className={cn("fill-current", isActive && "mr-[13px]")} />
              </AccordionTrigger>
              <AccordionContent className="pb-0 relative flex items-end w-[873px] h-full mr-4">
                <div className="absolute top-0 left-[59px] flex gap-3 items-center">
                  <h2 className="font-mortendExtrabold text-[2rem] font-bold uppercase leading-[182%] tracking-[0.64px] text-brown-400">
                    {`// Built for all industries`}
                  </h2>
                  <DotRightIcon className="w-[98px] h-[6px] fill-brown-400" />
                </div>
                <div key={index} className={cn("relative flex flex-shrink-0")}>
                  <Svg1 />
                  <div className="absolute left-[27px] top-0 flex items-center border-b border-solid border-brown-400 h-[124px]">
                    <div className="flex flex-shrink-0 items-center justify-center h-full w-[65.5px] border-r border-solid border-brown-400">
                      <Svg2 />
                    </div>
                    <p className="text-white-100 font-spaceMono text-base p-3 pr-[52px]">
                      {description}
                    </p>
                  </div>
                  <div className="absolute left-6 bottom-[25px] flex items-end gap-5">
                    {IMAGES.map((src, index) => (
                      <div
                        key={index}
                        className="relative flex-shrink-0 w-[179px] h-[235px] first:w-[137px] last:w-[137px] rounded-md overflow-hidden"
                      >
                        <Image
                          src={src}
                          fill
                          alt={`Industry Image ${index + 1}`}
                          className="absolute object-cover"
                          sizes="14vw"
                        />
                      </div>
                    ))}
                  </div>
                  <Button className="absolute bottom-6 right-6">
                    Learn More
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
