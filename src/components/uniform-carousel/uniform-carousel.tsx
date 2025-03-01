"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { usePrevNextButtons } from "./usePrevNextButtons";
import ArrowLeftIcon from "@/public/icons/tabler-icon-arrow-narrow-left.svg";
import styles from "./uniform-carousel.module.css";
import { cn } from "@/lib/utils";
import Image from "next/image";

const TWEEN_FACTOR_BASE = 0.1;

type image = {
  src: string;
  sku: string;
};

interface UniformCarouselProps {
  setActiveIndex: (index: number) => void;
  images: image[];
}

export const UniformCarousel = ({
  setActiveIndex,
  images,
}: UniformCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: () => 100,
  });
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback((emblaApi: EmblaCarouselType) => {
    const selectedIndex = emblaApi.selectedScrollSnap();
    setActiveIndex(selectedIndex);

    tweenNodes.current.forEach((node, index) => {
      if (index === selectedIndex) {
        node.style.width = "362px";
        node.style.height = "662px";
      } else {
        node.style.width = "362px";
        node.style.height = "473px";
      }
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);
  }, [emblaApi, tweenScale, setTweenFactor, setTweenNodes]);

  return (
    <div className={cn(styles.embla)}>
      <div className={cn(styles.embla__viewport)} ref={emblaRef}>
        <div className={cn(styles.embla__container)}>
          {images.map((img, index) => {
            const { src } = img;

            return (
              <div key={index} className={cn(styles.embla__slide)}>
                <Image
                  src={src}
                  alt={`Uniform ${index}`}
                  fill
                  sizes="28.28vw"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex gap-2 items-center absolute left-[86px] bottom-[-42px]">
        <ArrowLeftIcon className="cursor-pointer" onClick={onPrevButtonClick} />
        <p className="font-spaceMono text-sm text-white-100 select-none">
          Scroll
        </p>
      </div>
      <div className="flex gap-2 items-center absolute right-[86px] bottom-[-42px]">
        <ArrowLeftIcon
          className="cursor-pointer rotate-180"
          onClick={onNextButtonClick}
        />
      </div>
    </div>
  );
};
