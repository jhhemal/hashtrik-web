import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-10 border-t border-line">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight">
            <Logo className="size-8" />
            {site.name}
          </Link>
          <p className="mt-4 max-w-sm text-muted">
            A software agency. We design, build and look after web apps, mobile apps and AI tools.
          </p>
        </div>
        <ul className="space-y-2.5">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-muted transition-colors hover:text-accent">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <p className="text-muted">Write to us</p>
          <a href={`mailto:${site.email}`} className="font-medium transition-colors hover:text-accent">
            {site.email}
          </a>
        </div>
      </div>
      <p className="wrap pb-8 text-sm text-muted">© 2026 {site.name}. All rights reserved.</p>
    </footer>
  );
}
