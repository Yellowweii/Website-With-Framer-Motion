import About from "@/sections/About";
import Intro from "@/components/Intro";
import Products from "@/sections/Projects";
import TechnologyShow from "@/sections/Technology-show";
import Skills from "@/sections/Skills";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <TechnologyShow />
      <About />
      <Products />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
