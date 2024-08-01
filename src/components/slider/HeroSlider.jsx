
"use client";

import { Carousel } from "flowbite-react";
import SliderCard from "../card/SliderCard";
const customTheme = {
    "control": {
        "base": "inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 group-hover:bg-orange-500/90 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
      },
    "indicators": {
        "active": {
          "off": " hover:bg-orange-700 dark:bg-gray-800/50 dark:hover:bg-gray-800",
          "on": " dark:bg-gray-800"
        },
        "base": "h-4 w-4 rounded-full bg-orange-500",
      },
  }
export function HeroSlider() {
  return (
    <div className="h-5/6 md:mt-3 ">
      <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)} theme={customTheme} >
        <SliderCard titleOne="Sale! Up to 50% Off!" titleTwo="Summer Sale Collection" btnText="Shop Now" img="/heroone.avif"/>
        <SliderCard titleOne="Promotion! 20% Off!" titleTwo="Funiture Sale Collection" btnText="Shop Now" img="/pot.jpg"/>
        <SliderCard titleOne="Discount! Up to 30% Off!" titleTwo="Digital Sale Collection" btnText="Shop Now" img="/phone.jpg"/>
      </Carousel>
    </div>
  );
}
