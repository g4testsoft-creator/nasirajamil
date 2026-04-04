"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone, UserRound } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";

const telHref = `tel:${site.phone.replace(/\s/g, "")}`;
const waHref = `https://wa.me/${site.whatsapp}`;

export default function Contact() {
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
          Contact
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--fg)] md:text-4xl">
          Let&apos;s work together
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">
          Email, phone, WhatsApp, or LinkedIn — {site.responseTime}.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45 }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        <a
          href={`mailto:${site.email}`}
          className="flex gap-4 rounded-2xl border border-white/10 bg-[var(--card)] p-6 transition-colors hover:border-[var(--accent)]/30"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/15 text-[var(--accent)]">
            <Mail size={20} />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-[var(--fg)]">Email</p>
            <p className="truncate text-sm text-[var(--muted)]">{site.email}</p>
          </div>
        </a>

        <a
          href={telHref}
          className="flex gap-4 rounded-2xl border border-white/10 bg-[var(--card)] p-6 transition-colors hover:border-[var(--accent)]/30"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[var(--muted)]">
            <Phone size={20} />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-[var(--fg)]">Phone</p>
            <p className="text-sm text-[var(--muted)]">{site.phone}</p>
          </div>
        </a>

        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-4 rounded-2xl border border-white/10 bg-[var(--card)] p-6 transition-colors hover:border-[var(--accent)]/30"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[var(--muted)]">
            <MessageCircle size={20} />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-[var(--fg)]">WhatsApp</p>
            <p className="text-sm text-[var(--muted)]">Message on WhatsApp</p>
          </div>
        </a>

        <Link
          href={site.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-4 rounded-2xl border border-white/10 bg-[var(--card)] p-6 transition-colors hover:border-[var(--accent)]/30"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[var(--muted)]">
            <UserRound size={20} aria-hidden />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-[var(--fg)]">LinkedIn</p>
            <p className="truncate text-sm text-[var(--muted)]">Profile</p>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
