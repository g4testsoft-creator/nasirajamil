"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <div ref={ref} className="mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center md:text-left"
      >
        <p className="text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
          About
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--fg)] md:text-4xl">
          Building products end to end
        </h2>
      </motion.div>

      <div className="grid gap-10 md:grid-cols-[1fr_280px] md:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="space-y-4 text-[var(--muted)]"
        >
          {site.about.map((p, i) => (
            <p key={i} className="leading-relaxed">
              {p}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6 shadow-inner"
        >
          <div className="aspect-square max-w-[240px] overflow-hidden rounded-xl bg-[var(--bg-elevated)] md:mx-auto">
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--accent)]/20 to-indigo-500/10 text-5xl font-semibold text-[var(--fg)]">
              {site.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
