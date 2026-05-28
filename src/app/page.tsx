import Hero from "./components/sections/hero";
import About from "./components/sections/about";
import Features from "./components/sections/features";
import Services from "./components/sections/services";
import Process from "./components/sections/process";
import Team from "./components/sections/team";
import Projects from "./components/sections/projects";
import FAQ from "./components/sections/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Services />
      <Process />
      <Team />
      <Projects />
      <FAQ />
    </>
  );
}
