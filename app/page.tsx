import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Spotlight from "@/components/hero/Spotlight";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/projects";
import Experience from "@/components/experience/Experience";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";

export default function Home() {
  return (
    <>
      <>
  <ScrollProgress />

  <Spotlight />
  <Navbar />
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Experience />
  <Contact />
  <Footer />
</>
    </>
  );
}