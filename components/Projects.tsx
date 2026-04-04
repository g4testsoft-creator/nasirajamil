"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} className="mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center md:text-left"
      >
        <p className="text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
          Projects
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--fg)] md:text-4xl">
          Selected work
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">
          Here are some of the projects I've worked on.
        </p>
      </motion.div>

      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {site.projects.map((project, i) => (
          <motion.li
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="group flex flex-col rounded-2xl border border-white/10 bg-[var(--card)] p-6 shadow-sm transition-[border-color,box-shadow] hover:border-[var(--accent)]/35 hover:shadow-[0_20px_40px_-24px_var(--accent-glow)]"
          >
            <h3 className="text-lg font-semibold text-[var(--fg)]">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-[var(--muted)] ring-1 ring-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <Link
                href={project.link}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] transition-colors hover:text-[var(--fg)]"
              >
                Live <ExternalLink className="h-4 w-4" />
              </Link>
              <Link
                href={project.repo}
                className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
              >
                Code <Code className="h-4 w-4" />
              </Link>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
