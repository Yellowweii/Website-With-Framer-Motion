import React from "react";

interface SectionHeadingProps {
  children: React.ReactNode;
}

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return <h2 className="text-3xl font-medium capitalize mb-8 text-center text-gray-900 dark:text-gray-200">{children}</h2>;
};

export default SectionHeading;
