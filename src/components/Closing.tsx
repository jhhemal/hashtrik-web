import Link from "next/link";
import { site } from "@/lib/site";

const next = [
  { title: "Write to us", text: "A few lines about what you want to build." },
  { title: "We reply within one working day", text: "With questions or a time for a short call." },
  { title: "You get a plan", text: "Scope, fixed price and dates, in writing." },
];

export function Closing() {
  return (
    <section className="wrap relative pb-16 pt-4" data-reveal>
      <div className="glow -top-10 left-[5%] size-72 bg-sky" />
      <div className="glow bottom-0 right-[8%] size-80 bg-violet" style={{ animationDelay: "-6s" }} />

      <div className="card relative grid items-center gap-10 p-7 shadow-[var(--shadow-lift)] md:p-12 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <div>
          <h2 className="type-title">Have an idea? Let&apos;s talk it through.</h2>
          <p className="mt-5 max-w-md text-lg text-muted">
            The first conversation is free and there is no obligation. You leave with a clearer plan either way.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link href="/contact" className="button text-lg">
              Start a project
            </Link>
            <a href={`mailto:${site.email}`} className="font-medium text-accent hover:underline">
              {site.email}
            </a>
          </div>
        </div>

        <ol className="space-y-3">
          {next.map((step, i) => (
            <li key={step.title} className="flex items-start gap-4 rounded-3xl bg-bg p-5">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent font-display font-semibold text-on-accent">
                {i + 1}
              </span>
              <div>
                <p className="font-display text-lg font-semibold">{step.title}</p>
                <p className="text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
