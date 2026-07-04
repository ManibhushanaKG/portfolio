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
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-300 backdrop-blur-md">
  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
  Available for Internships
</div>
        <p className="mb-6 uppercase tracking-[0.4em] text-sm text-zinc-500">
  SOFTWARE ENGINEER • AI DEVELOPER
</p>
        <h1 className="bg-gradient-to-r from-white via-zinc-200 to-violet-400 bg-clip-text text-7xl font-black tracking-tight text-transparent md:text-[8rem]">
  {profile.name}
</h1>

        <h2 className="mt-8 text-3xl font-semibold text-zinc-300 md:text-5xl">
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          {profile.subtitle}
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <Button
  size="lg"
  className="rounded-full border border-violet-500/20 bg-violet-600/20 px-8 text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-violet-500/30"
>
            View Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
  size="lg"
  variant="outline"
  className="rounded-full border-white/20 bg-white/5 px-8 text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/10"
  >
            <Download className="mr-2 h-5 w-5" />
            Resume
          </Button>
        </div>
      </motion.div>
    </section>
  );
}