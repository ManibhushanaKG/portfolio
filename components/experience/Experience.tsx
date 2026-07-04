"use client";

import { motion } from "framer-motion";

export const timeline = [
  {
    year: "2023",
    title: "Started B.E. in Computer Science Engineering",
    subtitle: "Bangalore Institute of Technology",
    description:
      "Began my Computer Science Engineering journey with a strong foundation in programming, object-oriented design, data structures, algorithms and database management while maintaining a CGPA of 8.92/10.",
  },

  {
    year: "Oct 2023 – Mar 2024",
    title: "Freelance Web Developer",
    subtitle: "Independent Clients • Remote",
    description:
      "Designed and deployed responsive business websites using HTML, CSS, JavaScript and Node.js. Collaborated directly with clients, integrated backend contact forms and delivered projects within tight timelines.",
  },

  {
    year: "Jan 2024 – Present",
    title: "Coding Club Member",
    subtitle: "Bangalore Institute of Technology",
    description:
      "Organize weekly coding sessions focused on Java, Python and Data Structures while helping junior students strengthen problem-solving and competitive programming skills.",
  },

  {
    year: "2025",
    title: "Full Stack & AI Developer",
    subtitle: "Personal Projects",
    description:
      "Built multiple full-stack and AI-powered applications including ClubSphere AI, Citizen Complaint Portal, Flight Management System and Inventory Management System using React, Next.js, Java, Python, Flask, Oracle SQL and modern web technologies.",
  },

  {
    year: "Present",
    title: "Software Engineering Intern Candidate",
    subtitle: "Backend • Full Stack • AI",
    description:
      "Continuously building production-ready software, strengthening backend engineering skills, exploring AI applications and preparing for software engineering internships through real-world projects and continuous learning.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-violet-400">
          Experience
        </p>

        <h2 className="mb-20 text-5xl font-bold text-white">
          My Journey.
        </h2>

        <div className="relative border-l border-white/10 pl-8">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              className="relative mb-14"
            >
              <div className="absolute -left-[42px] top-2 h-5 w-5 rounded-full border-4 border-violet-500 bg-zinc-950" />

              <span className="text-sm font-semibold text-violet-400">
                {item.year}
              </span>

              <h3 className="mt-2 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-1 text-violet-300">
                {item.subtitle}
              </p>

              <p className="mt-4 max-w-3xl leading-8 text-zinc-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}