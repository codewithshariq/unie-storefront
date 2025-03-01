"use client";
import React, { useEffect, useRef } from "react";
import Globe from "@/public/icons/globe.svg";
import { TextAnimator } from "@/animations/text-animator";

export default function BusinessDescription() {
  const paragraphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = paragraphRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animator = new TextAnimator(target);
            animator.animate();

            // Disconnecting the observer to ensure this only runs once
            observerInstance.disconnect();
          }
        });
      },
      {
        root: null, // the viewport
        rootMargin: "0px",
        threshold: 0.05, // trigger when 5% of the div is visible
      }
    );

    observer.observe(target);

    // Cleanup the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col w-full border border-brown-500 max-w-[989px]">
      <div className="flex">
        <div className="felx flex-shrink-0 items-center justify-center py-11 px-[1.125rem] border-r border-brown-500">
          <Globe className="w-20 h-20 animate-[spin_3s_linear_infinite] select-none" />
        </div>
        <p
          ref={paragraphRef}
          className="px-[25px] py-[14px] font-spaceMono text-white-100 text-base terminal-effect terminal-effect--cursor-square"
        >
          At UNIE, we provide complete end-to-end uniform solutions designed to
          save your business valuable resources while enhancing your brand’s
          image. From custom design consultations to bring your vision to life,
          to manufacturing, distribution, and fulfillment services that ensure
          your team is always equipped with high-quality uniforms, we handle it
          all. Our seamless employee management tools simplify uniform tracking
          and reordering, reducing waste and streamlining operations.
        </p>
      </div>
      <div className="flex h-[2.6875rem]">
        <div className="flex-shrink-0 bg-brown-500 w-[117px]" />
        <div className="w-full border-t border-brown-500" />
      </div>
    </div>
  );
}
