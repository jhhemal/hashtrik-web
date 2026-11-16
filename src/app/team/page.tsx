import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Closing } from "@/components/Closing";
import { Facts } from "@/components/Facts";
import { PageIntro } from "@/components/PageIntro";
import { TeamTree } from "@/components/TeamTree";
import { principles, site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Team",
  description:
    "Meet the Hashtrik team: co-founders Asmaul-Husna Rinvi (CEO) and Jahidul Hasan (CTO), and the designers and engineers who work with them.",
  path: "/team",
});

export default function Team() {
  return (
    <>
      <PageIntro title="A small team. You will know all of us by name.">
        Two co-founders lead the company, one on the business side and one on the technical side. Explore the tree to
        see who does what, and who you will be talking to.
      </PageIntro>

      <section className="wrap pb-8 pt-4" aria-label="Team structure">
        <TeamTree />
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
