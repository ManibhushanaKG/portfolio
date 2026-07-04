"use client";

import { motion } from "framer-motion";

const skills = [
  "Java",
  "Python",
  "C",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Flask",
  "Django",
  "Oracle",
  "MySQL",
  "Git",
  "GitHub",
  "AI",
  "Machine Learning",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-violet-400">
          Skills
        </p>

        <h2 className="mb-12 text-5xl font-bold text-white">
          Technologies I work with.
        </h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <motion.div
              whileHover={{
                scale: 1.08,
                y: -4,
              }}
              key={skill}
              className="rounded-full border border-white/10 bg-zinc-900/60 px-6 py-3 text-zinc-200 backdrop-blur-xl transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}