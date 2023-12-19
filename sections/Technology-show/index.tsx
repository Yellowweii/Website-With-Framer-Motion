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
        <img className="object-contain h-[100px]" src="/JavaScript.png" alt="JavaScript" />
        <img className="object-contain h-[100px]" src="/Vue.png" alt="Vue" />
        <img className="object-contain h-[100px]" src="/react.png" alt="React" />
        <img className="object-contain h-[100px]" src="/next.svg" alt="Next.js" />
        <img className="object-contain h-[100px]" src="/typescript.png" alt="Typescript" />
        <img className="object-contain h-[100px]" src="/tailwindcss.png" alt="Tailwind Css" />
        <img className="object-contain h-[100px]" src="/framer.png" alt="Framer Motion" />
        <img className="object-contain h-[100px]" src="/flutter.png" alt="Flutter" />
        <img className="object-contain h-[100px]" src="/dart.png" alt="Dart" />
        <img className="object-contain h-[100px]" src="/java.png" alt="Java" />
        <img className="object-contain h-[100px]" src="/mysql.png" alt="MySQL" />
      </Slider>
    </motion.div>
  );
}
