import Link from "next/link";
import { company } from "@/lib/site";

export function About() {
  return (
    <section className="section !pt-0">
      <div className="wrap grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <div data-reveal>
          <h2 className="type-section">About Hashtrik</h2>
          <p className="mt-4 text-lg text-muted">
            Hashtrik is a software company based in Lansdale, Pennsylvania. We build websites, apps and AI tools for
            businesses, and we look after them once they are live.
          </p>
          <p className="mt-4 text-lg text-muted">
            We are also building Oikko, a platform that brings businesses together and gives each of them a technology
            team on a monthly subscription.
          </p>
          <Link href="/team" className="button button-soft mt-7">
            Meet the team
          </Link>
        </div>
        <dl className="card divide-y divide-line px-7 py-3" data-reveal>
          {company.map((row) => (
            <div key={row.label} className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-4">
              <dt className="text-muted">{row.label}</dt>
              <dd className="font-medium">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
