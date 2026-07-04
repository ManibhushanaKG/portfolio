"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#070b18] px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="mb-4 text-8xl font-black text-violet-500">
          404
        </h1>

        <h2 className="mb-4 text-3xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mx-auto mb-10 max-w-md text-zinc-400">
          Looks like the page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="rounded-full bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-500"
        >
          Back to Home
        </Link>
      </motion.div>
    </main>
  );
}