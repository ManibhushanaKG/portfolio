"use client";

import { Menu } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 md:top-6 left-1/2 z-50 w-full -translate-x-1/2 px-4 md:px-6"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border border-white/10 bg-zinc-950/40 px-6 md:px-7 backdrop-blur-2xl shadow-2xl">
        {/* Logo */}
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="text-xl font-bold tracking-wide text-white transition hover:text-violet-400"
        >
          Manibhushana KG
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-300 transition-all duration-300 hover:text-violet-400"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          aria-label="Open Menu"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 hover:border-violet-500 hover:bg-violet-500/10 md:hidden"
        >
          <Menu size={24} />
        </button>
      </div>
    </motion.header>
  );
}