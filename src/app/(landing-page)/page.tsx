import BusinessDescription from "@/components/business-description";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroCarousel from "@/components/hero-carousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <div className="flex flex-1 flex-col min-h-screen max-w-screen-xl mx-auto blended-background">
      <Header />
      <HeroCarousel slides={SLIDES} options={OPTIONS} />
      <div className="flex flex-col my-[133px] items-center justify-center">
        <BusinessDescription />
      </div>
      <Footer />
    </div>
  );
}
