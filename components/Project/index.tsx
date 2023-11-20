"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";

interface ProductProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

const Product = ({ title, description, tags, imageUrl }: ProductProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      className="mb-3 sm:mb-6 last:mb-0 group"
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg sm:pr-8 sm:h-[20rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="sm:gap-12 pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10  flex h-full justify-between overflow-hidden group-even:flex-row-reverse">
          <div className="flex flex-col justify-around gap-3">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
            <ul className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] tracking-wider text-white rounded-full dark:text-white/70" key={index}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center">
            <Image
              className=" hidden sm:block max-w-[240px] rounded-t-lg shadow-2xl
               transition 
               group-hover:scale-[1.04]
               group-hover:-translate-x-3
               group-hover:translate-y-3
               group-hover:-rotate-2
               group-even:group-hover:translate-x-3
               group-even:group-hover:translate-y-3
               group-even:group-hover:rotate-2"
              src={imageUrl}
              alt="Project I worked on"
              quality={95}
              width="300"
              height="300"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Product;
