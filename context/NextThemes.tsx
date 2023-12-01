"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

const NextThemes = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </div>
  );
};

export default NextThemes;
