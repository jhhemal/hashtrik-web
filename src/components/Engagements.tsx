import Link from "next/link";
import { engagements } from "@/lib/site";
import { Check } from "./Check";

export function Engagements() {
  return (
    <section className="section !pt-0">
      <div className="wrap">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <h2 className="type-section">Three ways to work with us</h2>
          <p className="mt-4 text-lg text-muted">Pick the one that fits where your product is today. You can switch later.</p>
        </div>
        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {engagements.map((plan, i) => (
            <li key={plan.name} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
              <div className={`card lift flex h-full flex-col p-7 md:p-8 ${plan.featured ? "!border-accent ring-4 ring-accent/15" : ""}`}>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl">{plan.name}</h3>
                  {plan.featured && (
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-on-accent">Most chosen</span>
                  )}
                </div>
                <p className="mt-2 text-muted">{plan.bestFor}</p>
                <p className="mt-6 font-display text-3xl font-semibold tracking-tight">{plan.price}</p>
                <ul className="mt-6 flex-1 space-y-3 border-t border-line pt-6">
                  {plan.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <Check />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`button mt-8 ${plan.featured ? "" : "button-soft"}`}>
                  Ask about this
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
