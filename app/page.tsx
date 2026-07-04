import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Spotlight from "@/components/hero/Spotlight";
import About from "@/components/about/About";

export default function Home() {
  return (
    <>
      <Spotlight />
      <Navbar />
      <Hero />
      <About />
    </>
  );
}