import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-10 border-t border-line">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1.3fr_1.3fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight">
            <Logo className="size-8" />
            {site.name}
          </Link>
          <p className="mt-4 max-w-sm text-muted">
            A software company. We design, build and look after web apps, mobile apps and AI tools, and we are the
            team behind Oikko.
          </p>
        </div>
        <div>
          <p className="font-medium">Company</p>
          <ul className="mt-3 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/products#oikko" className="text-muted transition-colors hover:text-accent">
                Oikko
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-medium">Headquarters</p>
          <address className="mt-3 not-italic text-muted">
            {site.address.street}
            <br />
            {site.address.city}, {site.address.state} {site.address.zip}
            <br />
            United States
          </address>
        </div>
        <div>
          <p className="font-medium">Contact</p>
          <a href={`mailto:${site.email}`} className="mt-3 block text-muted transition-colors hover:text-accent">
            {site.email}
          </a>
          <p className="mt-2.5 text-muted">{site.hours}</p>
        </div>
      </div>
      <p className="wrap pb-8 text-sm text-muted">© 2026 {site.name}. All rights reserved.</p>
    </footer>
  );
}
