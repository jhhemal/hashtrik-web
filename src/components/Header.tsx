"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-3 z-50 px-3">
      <div className="mx-auto max-w-5xl rounded-[1.75rem] border border-line bg-surface/75 shadow-[var(--shadow)] backdrop-blur-xl">
        <div className="flex h-14 items-center justify-between pl-3 pr-2">
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight">
            <Logo className="size-8" />
            {site.name}
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {nav.slice(0, 3).map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-4 py-1.5 font-medium transition-colors ${
                    active ? "bg-tint text-accent" : "text-muted hover:bg-tint hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <Link href="/contact" className="button hidden !px-5 !py-2 md:inline-flex">
              Start a project
            </Link>
            <button
              type="button"
              className="grid size-10 place-items-center rounded-full md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(!open)}
            >
              <svg viewBox="0 0 24 24" className="size-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" aria-hidden="true">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <nav id="mobile-nav" aria-label="Main" className="rise border-t border-line p-2 md:hidden" style={{ animationDuration: "0.3s" }}>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={pathname.startsWith(item.href) ? "page" : undefined}
                className="block rounded-2xl px-4 py-3 font-display text-xl font-semibold aria-[current=page]:bg-tint aria-[current=page]:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
