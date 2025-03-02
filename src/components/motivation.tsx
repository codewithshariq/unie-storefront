import React from "react";
import { Button } from "./ui/button";

export default function Motivation() {
  return (
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
  );
}
