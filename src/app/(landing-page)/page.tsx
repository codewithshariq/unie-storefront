import BusinessDescription from "@/components/business-description";
import Footer from "@/components/footer";
import GetInTouch from "@/components/get-in-touch";
import Header from "@/components/header";
import HeroCarousel from "@/components/hero-carousel/hero-carousel";
import IndustryAccordion from "@/components/industry-accordion";
import Motivation from "@/components/motivation";
import { UniformCarouselContainer } from "@/components/uniform-carousel";

import SectionSeparator from "@/public/section-separator.svg";
import {
  AttributeAccordion,
  AttributeAccordionContainer,
} from "@/components/attribute-accordion";
import GarmentsSection from "@/components/garments-section";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col min-h-screen max-w-screen-xl mx-auto blended-background">
      <Header />
      <div className="flex flex-col w-full bg-brown-400">
        <HeroCarousel />
        <Motivation />
        <GetInTouch />
      </div>
      <UniformCarouselContainer />
      <div className="flex flex-col my-[133px] items-center justify-center">
        <BusinessDescription />
      </div>
      <IndustryAccordion />
      <div className="w-full">
        <SectionSeparator className="fill-brown-400 w-[1280px] h-[168px] rotate-180" />
        <GarmentsSection />
        <AttributeAccordionContainer>
          <AttributeAccordion />
        </AttributeAccordionContainer>
      </div>
      <Footer />
    </div>
  );
}
