import Link from "next/link";
import { oikko } from "@/lib/site";
import { Check } from "./Check";
import { OikkoGraphic } from "./OikkoGraphic";

// full: the long version for the Products page. Otherwise a shorter teaser.
export function OikkoSpotlight({ full = false }: { full?: boolean }) {
  return (
    <section id="oikko" className="wrap scroll-mt-24 pt-14" data-reveal>
      <div className="card p-4 shadow-[var(--shadow-lift)] md:p-5">
        <div className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
          <OikkoGraphic />
          <div className="p-3 md:p-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-tint px-3 py-1 text-sm font-semibold text-accent">
              <span className="pulse size-2 rounded-full bg-accent" />
              {oikko.status}
            </p>
            <h2 className="type-section mt-4">{oikko.name}</h2>
            <p className="mt-2 font-display text-xl font-semibold tracking-tight">{oikko.tagline}</p>
            <p className="mt-4 text-lg text-muted">{oikko.summary}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="button">
                Join the waitlist
              </Link>
              {!full && (
                <Link href="/products#oikko" className="button button-soft">
                  How Oikko works
                </Link>
              )}
            </div>
          </div>
        </div>

        {full && (
          <div className="grid gap-8 border-t border-line p-3 pt-8 md:mt-5 md:p-6 md:pt-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h3 className="text-2xl">How it works</h3>
              <ol className="mt-5 space-y-4">
                {oikko.steps.map((step, i) => (
                  <li key={step.name} className="flex gap-4">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-accent font-display font-semibold text-on-accent">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-display text-lg font-semibold">{step.name}</p>
                      <p className="text-muted">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="text-2xl">What members get</h3>
              <ul className="mt-5 space-y-3">
                {oikko.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <Check />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
