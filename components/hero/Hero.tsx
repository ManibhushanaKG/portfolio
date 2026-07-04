"use client";

import GridBackground from "./GridBackground";
import BackgroundGlow from "./BackgroundGlow";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex min-h-[110vh] items-center justify-center overflow-hidden px-6">
      <GridBackground />
      <BackgroundGlow />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-6xl text-center"
      >
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-300 backdrop-blur-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
          Available for Internships
        </div>

        {/* Roles */}
        <p className="mb-6 text-[10px] uppercase tracking-[0.18em] text-zinc-500 sm:text-xs md:text-sm md:tracking-[0.4em]">
          SOFTWARE ENGINEER • FULL STACK DEVELOPER • AI DEVELOPER
        </p>

        {/* Name */}
        <h1 className="bg-gradient-to-r from-white via-zinc-200 to-violet-400 bg-clip-text text-transparent font-black tracking-tight leading-none text-5xl sm:text-6xl md:text-7xl lg:text-[8rem]">
  {profile.name}
</h1>

        {/* Subtitle */}
        <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
          {profile.subtitle}
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <a href="#projects">
  <Button
    size="lg"
    className="rounded-full border border-violet-500/20 bg-violet-600 px-8 text-white transition-all duration-300 hover:scale-105 hover:bg-violet-500"
  >
    View Projects
    <ArrowRight className="ml-2 h-5 w-5" />
  </Button>
</a>

          <a href="/resume.pdf" download>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white/20 bg-white/5 px-8 text-white transition-all duration-300 hover:scale-105 hover:bg-white/10"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}