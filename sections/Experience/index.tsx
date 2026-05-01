"use client";
import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/constants";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "@/components/SectionHeading";
import { useTheme } from "next-themes";
import { useInView } from "framer-motion";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";

export default function Experience() {
  const ref_two = React.useRef(null);
  const inView_two = useInView(ref_two, { amount: 0.5, once: true });
  const { setActiveSection } = useActiveSectionContext();
  const { ref } = useSectionInView("Experience", 0.6);
  const { theme } = useTheme();
  useEffect(() => {
    if (inView_two) {
      setActiveSection("Experience");
    }
  }, [inView_two]);
  return (
    <div ref={ref_two}>
      <section
        id="experience"
        ref={ref}
        className="scroll-mt-28 mb-28 sm:mb-40"
      >
        <SectionHeading>My experience</SectionHeading>
        <VerticalTimeline lineColor="">
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible={inView_two}
                contentStyle={{
                  background:
                    theme === "light" ? "#ffffff" : "rgba(15, 23, 42, 0.8)",
                  boxShadow:
                    "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                  border:
                    theme === "light"
                      ? "1px solid rgba(229, 231, 235, 1)"
                      : "1px solid rgba(30, 41, 59, 1)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid rgb(99, 102, 241)"
                      : "0.4rem solid rgb(99, 102, 241)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === "light"
                      ? "rgb(99, 102, 241)"
                      : "rgb(99, 102, 241)",
                  fontSize: "1.5rem",
                  color: "white",
                }}
              >
                <h3 className="text-lg font-semibold capitalize text-gray-900 dark:text-gray-200">
                  {item.title}
                </h3>
                <p className="font-normal !mt-0 text-gray-600 dark:text-gray-400">
                  {item.location}
                </p>
                <p className="!mt-1 !font-normal text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </section>
    </div>
  );
}
