import BusinessDescription from "@/components/business-description";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroCarousel from "@/components/hero-carousel";
import IndustryAccordion from "@/components/industry-accordion";
import { Button } from "@/components/ui/button";
import {
  UniformCarousel,
  UniformCarouselWrapper,
} from "@/components/uniform-carousel";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col min-h-screen max-w-screen-xl mx-auto blended-background">
      <Header />
      <HeroCarousel />
      <div className="w-full mx-8 mt-4 flex flex-col gap-[25px] self-center max-w-[1216px]">
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
