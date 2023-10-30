"use client";

import Product from "@/components/Project";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "../../components/SectionHeading";

const Products = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My products</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Product {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Products;
