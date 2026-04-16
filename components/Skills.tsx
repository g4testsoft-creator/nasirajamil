"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

const categories = Object.entries(site.skills) as [
  string,
  readonly string[],
][];

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} className="mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-6 text-center md:text-left"
      >
        <h4 className="mt-2 text-xl font-semibold tracking-tight text-[var(--fg)] md:text-2xl">
          Tech I work with
        </h4>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {categories.map(([label, items], catIndex) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: catIndex * 0.06 }}
            className="rounded-2xl border border-white/10 bg-[var(--card)] p-3"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--fg)]">
              {label}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
            <div className="text-sm text-[var(--muted)]">
              {items.join(', ')}
            </div>
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
