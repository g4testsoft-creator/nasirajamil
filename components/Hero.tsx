"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 pt-20 md:px-8">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--accent-glow) 0%, transparent 45%), radial-gradient(circle at 80% 60%, rgba(99, 102, 241, 0.15) 0%, transparent 40%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,transparent,var(--bg))]" />

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[var(--muted)] backdrop-blur-sm"
        >
          <Sparkles className="h-3.5 w-3.5 text-[var(--accent)]" />
          {site.location}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="text-4xl font-semibold tracking-tight text-[var(--fg)] sm:text-5xl md:text-6xl md:leading-[1.1]"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-[var(--accent)] to-indigo-400 bg-clip-text text-transparent">
            {site.name}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-4 max-w-2xl text-lg text-[var(--muted)] md:text-xl"
        >
          {site.title} — {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[var(--accent-fg)] shadow-lg shadow-[var(--accent)]/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            View work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-[var(--fg)] backdrop-blur-sm transition-colors hover:border-[var(--accent)]/40 hover:bg-white/10"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-[var(--muted)]"
        aria-label="Scroll to about"
      >
        <span className="hidden sm:inline">Scroll</span>
        <ArrowDown className="h-5 w-5 animate-bounce text-[var(--accent)]" />
      </motion.a>
    </div>
  );
}
