import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="band">
      <div className="frame grid gap-10 px-5 py-12 md:grid-cols-[2fr_1fr_1fr] md:px-8">
        <div>
          <Link href="/" className="flex items-center gap-2.5 font-display text-xl font-semibold tracking-tight">
            <Logo className="size-6" />
            {site.name}
          </Link>
          <p className="mt-4 max-w-sm text-muted">
            A software agency. We design, build and look after web apps, mobile apps and AI tools.
          </p>
        </div>
        <ul className="space-y-2">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-accent">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <p className="text-muted">Write to us</p>
          <a href={`mailto:${site.email}`} className="font-medium underline decoration-accent decoration-2 underline-offset-4 hover:text-accent">
            {site.email}
          </a>
        </div>
      </div>
      <div className="band">
        <p className="frame px-5 py-5 text-sm text-muted md:px-8">© 2026 {site.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
