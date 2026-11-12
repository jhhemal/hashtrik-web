import type { Metadata } from "next";
import { Closing } from "@/components/Closing";
import { Facts } from "@/components/Facts";
import { PageIntro } from "@/components/PageIntro";
import { Logo } from "@/components/Logo";
import { founders, principles, site, type Founder, type Person } from "@/lib/site";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the Hashtrik team: co-founders Asmaul-Husna Rinvi and Jahidul Hasan, and the people who work with them.",
};

const washes = [
  "bg-[linear-gradient(135deg,#8b6cff,#ff7ac3)]",
  "bg-[linear-gradient(135deg,#17b890,#4cc3ff)]",
  "bg-[linear-gradient(135deg,#ffb52e,#ff7a59)]",
  "bg-[linear-gradient(135deg,#4cc3ff,#8b6cff)]",
  "bg-[linear-gradient(135deg,#ff7a59,#8b6cff)]",
];

function initials(name: string) {
  const parts = name.split(" ");
  return parts[0][0] + parts[parts.length - 1][0];
}

function Skills({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-1.5">
      {items.map((skill) => (
        <li key={skill} className="rounded-full bg-tint px-2.5 py-0.5 text-sm font-medium">
          {skill}
        </li>
      ))}
    </ul>
  );
}

function FounderCard({ person }: { person: Founder }) {
  return (
    <div className="card lift mx-auto flex items-start gap-5 p-5 shadow-[var(--shadow-lift)] lg:max-w-md lg:p-6">
      <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-[linear-gradient(135deg,#3346ff,#8b6cff)] font-display text-2xl font-semibold text-white lg:size-20 lg:text-3xl">
        {initials(person.name)}
      </span>
      <div>
        <h2 className="text-2xl">{person.name}</h2>
        <p className="mt-1 font-medium text-accent">{person.role}</p>
        <p className="mt-2 text-muted">{person.bio}</p>
        <Skills items={person.skills} />
      </div>
    </div>
  );
}

function MemberCard({ person, wash }: { person: Person; wash: string }) {
  return (
    <div className="card lift flex h-full items-start gap-4 !rounded-3xl p-4 lg:block lg:p-5">
      <span className={`grid size-12 shrink-0 place-items-center rounded-xl font-display text-lg font-semibold text-white ${wash}`}>
        {initials(person.name)}
      </span>
      <div className="lg:mt-4">
        <h3 className="text-xl">{person.name}</h3>
        <p className="mt-0.5 font-medium text-accent">{person.role}</p>
        <p className="mt-2 text-muted">{person.bio}</p>
        <Skills items={person.skills} />
      </div>
    </div>
  );
}

export default function Team() {
  let member = 0;
  return (
    <>
      <PageIntro title="A small team. You will know all of us by name.">
        Two co-founders lead the company, one on the business side and one on the technical side. Here is who does
        what, and who you will be talking to.
      </PageIntro>

      <section className="wrap pb-8 pt-8" aria-label="Team structure">
        <div className="rise mx-auto flex w-fit items-center gap-2.5 rounded-full border border-line bg-surface py-2 pl-2 pr-5 font-display text-lg font-semibold shadow-[var(--shadow)] max-lg:ml-0">
          <Logo className="size-8" />
          {site.name}
        </div>
        <div className="tree-stem" />

        <ul className="tree-kids">
          {founders.map((founder, i) => (
            <li
              key={founder.name}
              className="tree-kid rise"
              style={{ flexGrow: founder.reports.length, animationDelay: `${0.2 + i * 0.15}s` }}
            >
              <FounderCard person={founder} />
              <div className="tree-stem" />
              <ul className="tree-kids">
                {founder.reports.map((person) => (
                  <li key={person.name} className="tree-kid">
                    <MemberCard person={person} wash={washes[member++ % washes.length]} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <Facts />

      <section className="section">
        <div className="wrap">
          <h2 className="type-section text-center" data-reveal>
            How we work with you
          </h2>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((item, i) => (
              <li key={item.name} data-reveal style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
                <div className="card lift h-full p-7">
                  <h3 className="text-2xl">{item.name}</h3>
                  <p className="mt-3 text-muted">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-12 max-w-xl text-center text-lg text-muted" data-reveal>
            Want to join us? We hire rarely and carefully. Send a short note and something you have built to{" "}
            <a href={`mailto:${site.email}`} className="font-medium text-accent hover:underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>

      <Closing />
    </>
  );
}
