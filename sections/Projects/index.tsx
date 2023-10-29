import Product from "@/components/Project";
import { projectsData } from "@/lib/data";
import React from "react";
import SectionHeading from "../../components/SectionHeading";

const Products = () => {
  return (
    <section id="projects" className="scroll-mt-28">
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
