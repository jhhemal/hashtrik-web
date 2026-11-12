import type { Metadata } from "next";
import { Closing } from "@/components/Closing";
import { PageIntro } from "@/components/PageIntro";
import { principles, site, team } from "@/lib/site";

export const metadata: Metadata = {
  title: "Team",
  description: "The designers and engineers behind Hashtrik.",
};

const washes = [
  "bg-[linear-gradient(135deg,#3346ff,#4cc3ff)]",
  "bg-[linear-gradient(135deg,#8b6cff,#ff7ac3)]",
  "bg-[linear-gradient(135deg,#ffb52e,#ff7a59)]",
  "bg-[linear-gradient(135deg,#17b890,#4cc3ff)]",
  "bg-[linear-gradient(135deg,#ff7a59,#8b6cff)]",
  "bg-[linear-gradient(135deg,#4cc3ff,#8b6cff)]",
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export default function Team() {
  return (
    <>
      <PageIntro title="Six people. You will know all of us by name.">
        We stay small on purpose. The people you meet on the first call are the people who design and build your
        product.
      </PageIntro>

      <section className="wrap pb-8 pt-8">
        <ul className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-3">
          {team.map((person, i) => (
            <li key={person.name} data-reveal style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
              <div className="card lift group h-full p-3">
                <div className={`grid aspect-[4/3] place-items-center overflow-hidden rounded-[1.25rem] ${washes[i % washes.length]}`}>
                  <span className="font-display text-5xl font-semibold text-white/95 transition-transform duration-500 group-hover:scale-110 md:text-7xl">
                    {initials(person.name)}
                  </span>
                </div>
                <div className="p-3 pt-4 md:p-4 md:pt-5">
                  <h2 className="text-xl md:text-2xl">{person.name}</h2>
                  <p className="mt-1 text-muted">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="type-section text-center" data-reveal>
            How we work with you
          </h2>
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {principles.map((item, i) => (
              <li key={item.name} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
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
