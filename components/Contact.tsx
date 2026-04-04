"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/site";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "visitor"}`);
    const body = encodeURIComponent(
      `${message}\n\n—\n${email ? `Reply to: ${email}` : ""}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <div ref={ref} className="mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center md:text-left"
      >
        <p className="text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
          Contact
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--fg)] md:text-4xl">
          Let&apos;s work together
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">
          Share a short note about your project or role. I&apos;ll respond as soon
          as I can.
        </p>
      </motion.div>

      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="space-y-6 rounded-2xl border border-white/10 bg-[var(--card)] p-8"
        >
          <div className="flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/15 text-[var(--accent)]">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--fg)]">Email</p>
              <a
                href={`mailto:${site.email}`}
                className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
              >
                {site.email}
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[var(--muted)]">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--fg)]">Availability</p>
              <p className="text-[var(--muted)]">{site.location}</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 12 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.05 }}
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-[var(--card)] p-8"
        >
          <label className="block">
            <span className="text-sm font-medium text-[var(--fg)]">Name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-xl border border-white/10 bg-[var(--bg)] px-4 py-3 text-[var(--fg)] outline-none ring-[var(--accent)] transition-[border,box-shadow] focus:border-[var(--accent)]/50 focus:ring-2 focus:ring-[var(--accent)]/20"
              placeholder="Jane Doe"
              autoComplete="name"
            />
          </label>
          <label className="mt-5 block">
            <span className="text-sm font-medium text-[var(--fg)]">Your email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-xl border border-white/10 bg-[var(--bg)] px-4 py-3 text-[var(--fg)] outline-none ring-[var(--accent)] transition-[border,box-shadow] focus:border-[var(--accent)]/50 focus:ring-2 focus:ring-[var(--accent)]/20"
              placeholder="you@company.com"
              autoComplete="email"
            />
          </label>
          <label className="mt-5 block">
            <span className="text-sm font-medium text-[var(--fg)]">Message</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-[var(--bg)] px-4 py-3 text-[var(--fg)] outline-none ring-[var(--accent)] transition-[border,box-shadow] focus:border-[var(--accent)]/50 focus:ring-2 focus:ring-[var(--accent)]/20"
              placeholder="Tell me about timelines, stack, and goals…"
            />
          </label>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent)] py-3.5 text-sm font-medium text-[var(--accent-fg)] shadow-lg shadow-[var(--accent)]/20 transition-transform hover:scale-[1.01] active:scale-[0.99] sm:w-auto sm:px-8"
          >
            <Send className="h-4 w-4" />
            Send via email
          </button>
        </motion.form>
      </div>
    </div>
  );
}
