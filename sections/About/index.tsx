"use client";
import React from "react";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Timeline from "@/components/Timeline";
import { timelineData } from "@/constants";

const About = () => {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 px-4 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <SectionHeading>About me</SectionHeading>
      <div className="mt-16">
        <Timeline items={timelineData} />
      </div>
    </motion.section>
  );
};

export default About;
