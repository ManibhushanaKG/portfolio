"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900); // Faster loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#030712]"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: "linear",
              }}
              className="mx-auto mb-8 h-16 w-16 rounded-full border-[5px] border-violet-500 border-t-transparent shadow-[0_0_35px_rgba(139,92,246,0.55)]"
            />

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-4xl font-bold text-white"
            >
              Manibhushana KG
            </motion.h1>

            <motion.p
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
              }}
              className="mt-4 uppercase tracking-[0.35em] text-zinc-400"
            >
              LOADING PORTFOLIO...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}