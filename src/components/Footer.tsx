import Link from "next/link";
import { addressLine, oikko, products, services, site } from "@/lib/site";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Services",
    links: services.map((service) => ({ label: service.name, href: `/services#${service.slug}` })),
  },
  {
    title: "Products",
    links: [
      { label: oikko.name, href: "/products#oikko", tag: "New" },
      ...products.map((product) => ({ label: product.name, href: `/products#${product.name.toLowerCase()}` })),
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "Team", href: "/team" },
      { label: "How we work", href: "/services#process" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const linkClass = "text-muted transition-colors hover:text-accent";

export function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden border-t border-line bg-surface">
      <div className="glow -bottom-40 left-[10%] size-96 bg-accent" />
      <div className="glow -bottom-52 right-[5%] size-96 bg-violet" style={{ animationDelay: "-7s" }} />

      {/* Watermark: sits behind the footer content in the bottom-right corner
          and takes up no space of its own. */}
      <p
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[0.16em] right-[-0.04em] select-none bg-[linear-gradient(to_bottom,var(--accent),transparent_95%)] bg-clip-text font-display text-[5rem] font-semibold leading-none tracking-tighter text-transparent opacity-20 sm:text-[7rem] lg:text-[9rem]"
      >
        #{site.name}
      </p>

      <div className="wrap relative">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.5fr_2.5fr] lg:gap-16">
          <div>
            <Link href="/" className="flex w-fit items-center">
              <Logo className="h-9" />
            </Link>
            <p className="mt-5 max-w-sm text-muted">
              A software company. We design, build and look after web apps, mobile apps and AI tools, and we are the
              team behind Oikko.
            </p>

            <dl className="mt-8 space-y-5">
              <div className="flex gap-4">
                <dt className="grid size-10 shrink-0 place-items-center rounded-full bg-tint text-accent">
                  <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="3" />
                    <path d="M3.5 7.5l8.5 6 8.5-6" />
                  </svg>
                  <span className="sr-only">Email</span>
                </dt>
                <dd>
                  <a href={`mailto:${site.email}`} className="font-medium transition-colors hover:text-accent">
                    {site.email}
                  </a>
                  <span className="block text-sm text-muted">We reply within one working day</span>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="grid size-10 shrink-0 place-items-center rounded-full bg-tint text-accent">
                  <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.800 12 21 12 21z" />
                    <circle cx="12" cy="9.5" r="2.5" />
                  </svg>
                  <span className="sr-only">Headquarters</span>
                </dt>
                <dd>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addressLine)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium transition-colors hover:text-accent"
                  >
                    {site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}
                  </a>
                  <span className="block text-sm text-muted">{site.hours}</span>
                </dd>
              </div>
            </dl>

            <Link href="/contact" className="button mt-8">
              Start a project
            </Link>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="font-display text-lg font-semibold">{column.title}</p>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={`inline-flex items-center gap-2 ${linkClass}`}>
                        {link.label}
                        {"tag" in link && (
                          <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-semibold text-on-accent">{link.tag}</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-line py-6 text-sm text-muted">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-accent">
              Terms and Conditions
            </Link>
          </p>
          <a href="#main" className="inline-flex items-center gap-2 font-medium text-ink transition-colors hover:text-accent">
            Back to top
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 19V5M6 11l6-6 6 6" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
