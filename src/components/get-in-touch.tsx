import React from "react";
import Svg1 from "@/public/contact-section-1.svg";
import Unifrom2 from "@/public/images/Uniform2.png";
import Image from "next/image";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";

const INDUSTRIES = [
  "Medical",
  "Hospitality",
  "Entertainment",
  "Government",
  "Service",
];

export default function GetInTouch() {
  return (
    <div className="flex w-full bg-brown-400 px-[30px] pt-[43px] gap-x-5 pb-20">
      <div className="flex flex-col gap-y-[17px] w-[541px] pt-5">
        <p className="font-mortendLight font-bold text-lg tracking-[0.36px] leading-[135%] uppercase text-black-700">{`// Bespoke Premium Quality Uniforms.`}</p>
        <p className="text-black-500 text-base tracking-[0.32px] leading-[150%]">
          I need copy for this section. Something about the uniforms and the
          quality of them and whatever else.
        </p>
      </div>
      <div className="relative flex items-stretch z-10">
        <Svg1 className="flex-shrink-0" />
        <div className="relative w-[269px] h-full flex-shrink-0 rounded-r-[40px] overflow-hidden">
          <Image src={Unifrom2} alt="Uniform" fill className="object-cover" />
        </div>
        <div className="absolute top-5 left-4">
          <p className="font-mortendLight font-bold text-lg tracking-[0.36px] leading-[135%] uppercase text-black-700 mb-[21px]">{`// Get in Touch`}</p>
          <form className="grid grid-cols-2 gap-x-2 gap-y-4 w-[356px]">
            <Input className="col-span-2" placeholder="Business Name" />
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Industry" />
              </SelectTrigger>
              <SelectContent>
                {INDUSTRIES.map((industry) => (
                  <SelectItem key={industry} value={industry}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input placeholder="Employees" />
            <Input placeholder="Point of Contact" />
            <Input placeholder="Position" />
            <Input placeholder="Phone" />
            <Input placeholder="Email" />
            <div className="flex col-span-2 items-center gap-x-2">
              <div className="flex-1 h-px bg-[#423F3C]" />
              <Button className="flex-shrink-0 bg-input-background text-white-100 p-2 rounded-sm h-6 text-xs max-w-[121px] normal-case font-light hover:bg-input-background hover:text-white-100">
                Submit Form
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
