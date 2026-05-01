"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  return (
    <section
      ref={ref}
      id="home"
      className=" max-w-[50rem] text-center sm:mb-0 scroll-mt-[50rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.25,
            }}
          >
            <Image
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              alt="Ricardo portrait"
              width={192}
              height={192}
              quality="95"
              priority={true}
              src="https://www.yellowwei.cn/img/0cf11687-8451-4f34-b06d-3306b527dc8a.jpg"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              duration: 0.7,
              delay: 0.1,
            }}
            className="absolute bottom-0 right-0 text-3xl"
          >
            👏
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-3xl text-gray-900 dark:text-gray-200"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span>Hello, I'm Yellowwei.</span> <br /> I'm a{" "}
        <span className="font-bold">Front-End Engineer</span> at{" "}
        <span className="font-bold">Huawei</span> with one year of professional
        experience. <br />
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "I enjoy building websites、chrome extensions and mobile apps.",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "My current focus is React (Next.js),TailwindCSS, Framer Motion.",
            1000,
          ]}
          wrapper="span"
          speed={70}
          repeat={Infinity}
        />
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          className="group bg-accent-500 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-accent-600 active:scale-105 transition shadow-md shadow-accent-500/20 font-medium"
          href="#contact"
        >
          Contact me here{" "}
          <BsArrowRight className="group-hover:translate-x-1 transition opacity-90" />
        </Link>
        <a
          className="group bg-white dark:bg-primary-800 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack text-gray-900 dark:text-gray-200 hover:text-accent-500 dark:hover:text-accent-500"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
