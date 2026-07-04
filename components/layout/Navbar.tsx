"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-1/2 z-50 w-full -translate-x-1/2 px-6"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border border-white/10 bg-zinc-900/60 px-8 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]">

        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-wide text-white transition-colors duration-300 hover:text-violet-400"
        >
          Manibhushana KG
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-200 transition-colors duration-300 hover:text-violet-400"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile */}
        <button className="rounded-full border border-white/10 p-2 text-white transition hover:bg-white/10 md:hidden">
          <Menu size={20} />
        </button>
      </div>
    </motion.header>
  );
}