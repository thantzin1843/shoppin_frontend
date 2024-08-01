'use client'
import ProductList from "@/components/List/ProductList";
import Title from "@/components/title/Title";
import { HeroSlider } from "@/components/slider/HeroSlider";
import ChooseUs from "@/components/chooseus/chooseus";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="">
      <div className="h-screen">
      {/* <div>{data}</div> */}
       <HeroSlider/>
       </div>

       <motion.div className="sm:w-full md:w-5/6 md:mx-auto">
        <Title text="Featured Products"/>
        <ProductList/>
       </motion.div>

       <div className="sm:w-full md:w-5/6 md:mx-auto px-5 h-lvh">
        <ChooseUs/>
       </div>

    </main>
  );
}
