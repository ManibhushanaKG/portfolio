"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6 py-32"
    >
      <div className="grid w-full gap-16 lg:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-violet-400">
            About Me
          </p>

          <h2 className="mb-8 text-5xl font-bold leading-tight text-white">
            Building software that solves real problems.
          </h2>

          <p className="text-lg leading-9 text-zinc-300">
            I'm a Computer Science student passionate about Artificial
            Intelligence, Full Stack Development, and scalable backend systems.
            I enjoy transforming ideas into high-quality applications using
            modern technologies.
          </p>

          <p className="mt-6 text-lg leading-9 text-zinc-400">
            My focus is creating software that's fast, beautiful, and useful —
            from AI-powered assistants to enterprise applications and modern
            web experiences.
          </p>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/10 bg-zinc-900/60 p-10 backdrop-blur-2xl"
        >
          <div className="space-y-8">
            <div>
              <p className="text-sm text-zinc-400">Location</p>
              <h3 className="mt-1 text-xl font-semibold text-white">
                Bengaluru, India
              </h3>
            </div>

            <div>
              <p className="text-sm text-zinc-400">Education</p>
              <h3 className="mt-1 text-xl font-semibold text-white">
                B.E. Computer Science Engineering
              </h3>
            </div>

            <div>
              <p className="text-sm text-zinc-400">Current CGPA</p>
              <h3 className="mt-1 text-xl font-semibold text-white">
                9.0+
              </h3>
            </div>

            <div>
              <p className="text-sm text-zinc-400">Interests</p>
              <h3 className="mt-1 text-xl font-semibold text-white">
                AI • Full Stack • Cloud • Backend
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}