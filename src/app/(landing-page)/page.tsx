import BusinessDescription from "@/components/business-description";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroCarousel from "@/components/hero-carousel";
import IndustryAccordion from "@/components/industry-accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  UniformCarousel,
  UniformCarouselWrapper,
} from "@/components/uniform-carousel";

import Svg1 from "@/public/contact-section-1.svg";
import Unifrom2 from "@/public/images/Uniform2.png";
import Image from "next/image";

const INDUSTRIES = [
  "Medical",
  "Hospitality",
  "Entertainment",
  "Government",
  "Service",
];

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col min-h-screen max-w-screen-xl mx-auto blended-background">
      <Header />
      <div className="flex flex-col w-full bg-brown-400">
        <HeroCarousel />
        <div className="w-full pt-4 flex flex-col gap-[25px] self-center px-8 pb-[53px] rounded-b-[40px] blended-background">
          <div className="flex w-full items-center">
            <h2 className="flex-1 font-mortendLight font-bold text-[3rem] text-brown-400 uppercase leading-[135%] tracking-[0.96px]">{`//A Whole New Unie-verse`}</h2>
            <p className="flex-1 font-spaceMono text-sm text-white-100">
              {`For years, the uniform industry has remained stagnant, often providing
          uncomfortable, unfashionable, and outdated garments simply out of
          necessity. However, with the changing landscape of workplaces and
          advancements in technology, it's high time for a significant
          transformation in this space.`}
            </p>
          </div>
          <Button className="max-w-max">THIS IS A BUTTON</Button>
        </div>
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
              <Image
                src={Unifrom2}
                alt="Uniform"
                fill
                className="object-cover"
              />
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
      </div>
      <UniformCarouselWrapper>
        <UniformCarousel />
      </UniformCarouselWrapper>
      <div className="flex flex-col my-[133px] items-center justify-center">
        <BusinessDescription />
      </div>
      <IndustryAccordion />
      <Footer />
    </div>
  );
}
