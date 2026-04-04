import Link from "next/link";
import { Mail, MessageCircle, Phone, UserRound } from "lucide-react";
import { site } from "@/lib/site";

const telHref = `tel:${site.phone.replace(/\s/g, "")}`;
const waHref = `https://wa.me/${site.whatsapp}`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[var(--bg-elevated)] py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-medium text-[var(--fg)]">{site.name}</p>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Response time: {site.responseTime}
            </p>
            <p className="mt-4 text-sm text-[var(--muted)]">
              © {year} {site.name}
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              <Mail size={16} className="shrink-0 text-[var(--accent)]" />
              {site.email}
            </a>
            <a
              href={telHref}
              className="inline-flex items-center gap-2 text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              <Phone size={16} className="shrink-0 text-[var(--accent)]" />
              {site.phone}
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              <MessageCircle size={16} className="shrink-0 text-[var(--accent)]" />
              WhatsApp
            </a>
            <Link
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              <UserRound size={16} className="shrink-0 text-[var(--accent)]" aria-hidden />
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
