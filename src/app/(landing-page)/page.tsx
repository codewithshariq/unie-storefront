import Header from "./components/header";
import Footer from "./components/footer";
import styels from "./page.module.css";
import { cn } from "@/lib/utils";
import Gallery from "./components/gallery";
import styles from "./page.module.css";
// import DividerBrown from "@/assets/icons/divider-brown.svg";
import Brand1 from "@/assets/icons/brand-1.svg";
import Brand2 from "@/assets/icons/brand-2.svg";
import Brand3 from "@/assets/icons/brand-3.svg";
import Brand4 from "@/assets/icons/brand-4.svg";
import Brand5 from "@/assets/icons/brand-5.svg";
import LogoBrown from "@/assets/logos/logo-brown-500.png";
import Image from "next/image";

export default function Home() {
  const buttons = ["Performance+", "Astro Lab", "Astro Armor", "Selene"];

  return (
    <div
      className={cn(
        "flex flex-1 flex-col min-h-screen w-screen",
        styels.container
      )}
    >
      <Header />
      <div className="flex flex-col items-center w-full blended-container">
        <h2 className="uppercase text-brown-300 font-mortendExtrabold font-bold text-5xl">
          Fashion | Comfort | Function
        </h2>
        <div className="flex items-center mt-12 gap-[97px]">
          <div className="flex flex-col justify-center items-start gap-6">
            {buttons.map((buttonText, index) => {
              return (
                <button
                  key={index}
                  className="flex font-spaceGrotesk text-sm font-normal uppercase items-center justify-center rounded-full border border-brown-300 px-3 py-2.5 text-white-500 hover:bg-brown-300 hover:text-black-700 transition-all duration-300"
                >
                  {buttonText}
                </button>
              );
            })}
          </div>
          <div
            className={cn(
              "relative flex items-center justify-center mb-60",
              styles.elipseContainer
            )}
          >
            <Image
              src={"/images/hoddie-3d.png"}
              alt="hoddie-3d"
              width={314}
              height={646}
              className="absolute top-20"
            />
          </div>
        </div>
        <div className="flex items-center gap-12 mt-16">
          <Brand4 />
          <Brand3 />
          <Brand1 />
          <Brand2 />
          <Brand5 />
          <Image src={LogoBrown} alt="logo" width={96} height={24} />
        </div>
      </div>
      <Gallery />
      <Footer />
    </div>
  );
}
