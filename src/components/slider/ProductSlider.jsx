
"use client";

import { Carousel } from "flowbite-react";
import PromotionCard from "../card/PromotionCard";

export function ProductSlider() {
    const customTheme = {
        "control": {
            "base": "inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/30 group-hover:bg-orange-500/50 sm:h-10 sm:w-10",
            "icon": "h-5 w-5 text-black dark:text-gray-800 sm:h-6 sm:w-6"
          },
    }
  return (
    <div className="h-[270px] bg-orange-500/20 rounded-lg md:mt-10" >
      <Carousel theme={customTheme}>
        <PromotionCard/>
        <PromotionCard/>
        <PromotionCard/>
        <PromotionCard/>
      </Carousel>
    </div>
  );
}
