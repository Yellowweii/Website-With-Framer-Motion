"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settings } from "@/lib/data";
import { motion } from "framer-motion";

export default function TechnologyShow() {
  return (
    <motion.div
      className="py-20 md:py-24 container max-w-[72rem] bg-transparent rounded-2xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
    >
      <Slider {...settings}>
        <img className="object-contain h-[100px]" src="/JavaScript.png" alt="html" />
        <img className="object-contain h-[100px]" src="/Vue.png" alt="html" />
        <img className="object-contain h-[100px]" src="/react.png" alt="html" />
        <img className="object-contain h-[100px]" src="/next.svg" alt="next.js" />
        <img className="object-contain h-[100px]" src="/typescript.png" alt="typescript" />
        <img className="object-contain h-[100px]" src="/tailwindcss.png" alt="tailwindcss" />
        <img className="object-contain h-[100px]" src="/framer.png" alt="framer motion" />
        <img className="object-contain h-[100px]" src="/java.png" alt="html" />
        <img className="object-contain h-[100px]" src="/mysql.png" alt="html" />
      </Slider>
    </motion.div>
  );
}
