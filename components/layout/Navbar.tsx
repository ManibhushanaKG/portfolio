"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-wide transition hover:opacity-80"
        >
          Manibhushana KG
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#about" className="hover:text-violet-400 transition">
            About
          </Link>

          <Link href="#skills" className="hover:text-violet-400 transition">
            Skills
          </Link>

          <Link href="#projects" className="hover:text-violet-400 transition">
            Projects
          </Link>

          <Link href="#contact" className="hover:text-violet-400 transition">
            Contact
          </Link>
        </nav>

        {/* Mobile */}
        <button className="md:hidden">
          <Menu size={26} />
        </button>
      </div>
    </header>
  );
}