import type { Metadata } from "next";
import Link from "next/link";
import { HashMark } from "@/components/HashMark";
import { PageIntro } from "@/components/PageIntro";
import { principles, site, team } from "@/lib/site";

export const metadata: Metadata = {
  title: "Team",
  description: "The designers and engineers behind Hashtrik.",
};

export default function Team() {
  return (
    <>
      <PageIntro title="Six people. You will know all of us by name.">
        We stay small on purpose. The people you meet on the first call are the people who design and build your
        product.
      </PageIntro>

      <section className="band">
        <ul className="frame grid grid-cols-2 lg:grid-cols-3">
          {team.map((person) => (
            <li
              key={person.name}
              className="border-line px-5 py-8 max-lg:odd:border-r max-lg:nth-[n+3]:border-t md:px-8 lg:py-10 lg:not-nth-[3n]:border-r lg:nth-[n+4]:border-t"
            >
              <HashMark text={person.name} className="size-24 md:size-32" />
              <h2 className="mt-6 text-2xl">{person.name}</h2>
              <p className="mt-1 text-muted">{person.role}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="band">
        <div className="frame">
          <h2 className="type-section px-5 pb-10 pt-16 md:px-8 md:pt-24">How we work with you</h2>
          <ul className="grid border-t border-line md:grid-cols-3">
            {principles.map((item) => (
              <li key={item.name} className="border-line px-5 py-8 max-md:not-first:border-t md:px-8 md:not-last:border-r">
                <h3 className="text-2xl">{item.name}</h3>
                <p className="mt-3 text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band">
        <div className="frame flex flex-col items-start gap-8 px-5 py-16 md:flex-row md:items-end md:justify-between md:px-8 md:py-24">
          <div>
            <h2 className="type-title max-w-2xl">Want to work with us?</h2>
            <p className="mt-5 max-w-xl text-xl text-muted">
              We hire rarely and carefully. Send a short note and something you have built to{" "}
              <a href={`mailto:${site.email}`} className="text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent">
                {site.email}
              </a>
              .
            </p>
          </div>
          <Link href="/contact" className="button shrink-0 text-lg">
            Start a project
          </Link>
        </div>
      </section>
    </>
  );
}
