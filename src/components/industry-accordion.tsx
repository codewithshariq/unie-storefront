"use client";
import React, { useState } from "react";
import DotRightIcon from "@/public/icons/tabler-icon-dot-right.svg";
import Svg1 from "@/public/industry-accordion-1.svg";
import Svg2 from "@/public/industry-accordion-2.svg";
import Svg3 from "@/public/industry-accordion-3.svg";
import MedicalIcon from "@/public/icons/icon-accordion-medical.svg";
import HospitalityIcon from "@/public/icons/icon-accordion-hospitality.svg";
import EntertainmentIcon from "@/public/icons/icon-accordion-entertainment.svg";
import GovernmentIcon from "@/public/icons/icon-accordion-government.svg";
import ServiceIcon from "@/public/icons/icon-accordion-service.svg";
import { Button } from "./ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
  const [selectedAccordionId, setSelectedAccordionId] = useState<number>(5);

  function handleAccordionClick(id: number) {
    setSelectedAccordionId(id);
  }

  return (
    <div className="relative flex items-end h-[511px] mx-auto mb-[75px]">
      <div className="absolute left-[332px] top-0 flex gap-3 items-center">
        <h2 className="font-mortendExtrabold text-[2rem] font-bold uppercase leading-[182%] tracking-[0.64px] text-brown-400">
          {`// Built for all industries`}
        </h2>
        <DotRightIcon className="w-[98px] h-[6px] fill-brown-400" />
      </div>
      <div className="inline-flex self-stretch flex-shrink-0 -mr-3">
        {ACCORDIONS.map((accordion, index) => {
          const { id, title, Icon } = accordion;
          const isSelected = selectedAccordionId === id;

          if (index === ACCORDIONS.length - 1) {
            return (
              <div
                key={index}
                className={cn(
                  "relative w-[82px] inline-flex flex-col justify-between self-stretch pl-[11px] pt-4 pb-6 cursor-pointer text-brown-400 transition-all duration-200 ease-out",
                  isSelected && "text-black-500 font-semibold"
                )}
                onClick={() => handleAccordionClick(id)}
              >
                <Svg3
                  className={cn(
                    "absolute top-0 left-0 fill-none stroke-brown-400 cursor-pointer transition-all duration-200 ease-out",
                    isSelected && "fill-brown-400"
                  )}
                ></Svg3>
                <p className="flex flex-col-reverse pl-[5px] max-w-4">
                  {title.split("").map((letter, index) => (
                    <span
                      key={index}
                      className="font-spaceMono text-base uppercase -rotate-90 leading-none"
                    >
                      {letter}
                    </span>
                  ))}
                </p>
                <Icon
                  className={cn(
                    "fill-brown-400 z-10",
                    isSelected && "fill-black-500"
                  )}
                />
              </div>
            );
          }

          return (
            <div
              key={index}
              className={cn(
                "w-[53px] inline-flex flex-col items-center justify-between self-stretch border border-solid border-brown-400 first:border-l first:border-solid first:border-brown-400 first:rounded-l-[20px] px-[11px] pt-4 pb-6 cursor-pointer text-brown-400 transition-all duration-200 ease-out",
                isSelected && "bg-brown-400 text-black-500 font-semibold"
              )}
              onClick={() => handleAccordionClick(id)}
            >
              <p className="flex flex-col-reverse">
                {title.split("").map((letter, index) => (
                  <span
                    key={index}
                    className="font-spaceMono text-base uppercase -rotate-90 leading-none"
                  >
                    {letter}
                  </span>
                ))}
              </p>
              <Icon
                className={cn("fill-brown-400", isSelected && "fill-black-500")}
              />
            </div>
          );
        })}
      </div>
      {ACCORDIONS.map((accordion, index) => {
        const { id, description } = accordion;
        const isSelected = selectedAccordionId === id;

        return (
          <div
            key={index}
            className={cn(
              "relative flex-shrink-0 transition-all duration-300 ease-out transform origin-top",
              isSelected ? "flex" : "hidden"
            )}
          >
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
                  />
                </div>
              ))}
            </div>
            <Button className="absolute bottom-6 right-6">Learn More</Button>
          </div>
        );
      })}
    </div>
  );
}
