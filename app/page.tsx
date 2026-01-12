import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main
      className="min-h-screen w-full bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat relative"
    >
      {/* global overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      <About />
      <Skills />
      <Experience />
      <Projects />
      <CaseStudies />
      <Contact />
    </main>
  );
}
