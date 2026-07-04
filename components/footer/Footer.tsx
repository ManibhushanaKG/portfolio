"use client";

import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10">

      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-16">

        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="mb-12 rounded-full border border-white/10 bg-zinc-900/60 p-4 text-white transition hover:border-violet-500 hover:bg-violet-500/10"
        >
          <FiArrowUp size={22} />
        </button>

        <h2 className="mb-3 text-3xl font-bold text-white">
          Manibhushana KG
        </h2>

        <p className="mb-8 text-center text-zinc-400">
          Software Engineer • Full Stack Developer • AI Developer
        </p>

        <div className="mb-10 flex gap-5">

          <a
            href="https://github.com/ManibhushanaKG"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 p-4 text-white transition hover:border-violet-500 hover:bg-violet-500/10"
          >
            <FiGithub size={20} />
          </a>

          <a
            href="https://linkedin.com/in/manibhushana"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 p-4 text-white transition hover:border-violet-500 hover:bg-violet-500/10"
          >
            <FiLinkedin size={20} />
          </a>

          <a
            href="mailto:manibhushana2241@gmail.com"
            className="rounded-full border border-white/10 p-4 text-white transition hover:border-violet-500 hover:bg-violet-500/10"
          >
            <FiMail size={20} />
          </a>

        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <p className="mt-8 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Manibhushana KG • Built with Next.js,
          Tailwind CSS & Framer Motion.
        </p>

      </div>

    </footer>
  );
}