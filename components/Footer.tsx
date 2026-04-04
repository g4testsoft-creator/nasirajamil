import Link from "next/link";
import { Code, Mail, UserRound } from "lucide-react";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[var(--bg-elevated)] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-8">
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          {site.social.linkedin ? (
            <Link
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
              aria-label="LinkedIn profile"
            >
              <UserRound size={20} />
            </Link>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
