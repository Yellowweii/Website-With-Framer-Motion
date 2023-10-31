import About from "@/sections/About";
import Intro from "@/components/Intro";
import Products from "@/sections/Projects";
import SectionDivider from "@/sections/Section-divider";
import Skills from "@/sections/Skills";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Products />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
