"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-7xl px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-violet-400">
          Featured Projects
        </p>

        <h2 className="mb-16 text-5xl font-bold text-white">
          Things I've Built.
        </h2>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-fuchsia-500/0 to-blue-500/0 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:from-violet-500/10 group-hover:via-fuchsia-500/10 group-hover:to-blue-500/10" />

              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
  {project.image ? (
    <Image
      src={project.image}
      alt={project.title}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="object-cover transition duration-700 group-hover:scale-110"
    />
  ) : (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-violet-600/30 via-fuchsia-500/20 to-blue-500/20">
      <span className="text-lg font-semibold text-white/70">
        {project.title}
      </span>
    </div>
  )}

  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
</div>

              {/* Content */}
              <div className="relative z-10 p-8">
                <h3 className="mb-4 text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mb-6 leading-8 text-zinc-400">
                  {project.description}
                </p>

                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 transition group-hover:border-violet-500/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white transition-all hover:border-violet-400 hover:bg-violet-500/10"
                  >
                    <FiGithub />
                    GitHub
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-violet-600 px-5 py-3 text-sm font-medium text-white transition-all hover:scale-105 hover:bg-violet-500"
                    >
                      <FiExternalLink />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}