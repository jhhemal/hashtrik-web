import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { Closing } from "@/components/Closing";
import { Engagements } from "@/components/Engagements";
import { Faq } from "@/components/Faq";
import { Stack } from "@/components/Stack";
import { PageIntro } from "@/components/PageIntro";
import { ServiceIcon } from "@/components/ServiceIcon";
import { Steps } from "@/components/Steps";
import { services } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Services",
  description:
    "Web applications, mobile apps, AI and automation, product design, cloud and ongoing care from Hashtrik, with a fixed plan and price before work starts.",
  path: "/services",
});

export default function Services() {
  return (
    <>
      <PageIntro title="Six things we do, start to finish.">
        Hire us for one of them or for the whole product. Either way you get a fixed plan and a price before any work
        starts.
      </PageIntro>

      <section className="wrap pb-8 pt-8">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, i) => (
            <article key={service.slug} id={service.slug} className="scroll-mt-24" data-reveal style={{ transitionDelay: `${(i % 2) * 90}ms` }}>
              <div className="card lift h-full p-7 md:p-9">
                <ServiceIcon name={service.slug} />
                <h2 className="mt-6 text-3xl">{service.name}</h2>
                <p className="mt-3 text-lg text-muted">{service.summary}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {service.includes.map((item) => (
                    <li key={item} className="rounded-full bg-tint px-3.5 py-1.5 text-sm font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
                <dl className="mt-7 space-y-4 border-t border-line pt-6">
                  <div>
                    <dt className="text-sm text-muted">Good for</dt>
                    <dd className="mt-0.5">{service.goodFor}</dd>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <dt className="text-sm text-muted">Typical length</dt>
                      <dd className="mt-0.5 font-medium">{service.timeline}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-muted">We use</dt>
                      <dd className="mt-0.5 font-medium">{service.tools.join(", ")}</dd>
                    </div>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Steps />
      <Engagements />

      <section className="wrap pb-20" data-reveal>
        <div className="flex flex-col items-start gap-5 rounded-[1.75rem] bg-tint p-7 md:flex-row md:items-center md:justify-between md:p-9">
          <div className="max-w-2xl">
            <h2 className="text-2xl">Prefer one monthly subscription?</h2>
            <p className="mt-2 text-muted">
              With Oikko, launching soon, Hashtrik builds and runs your website and apps for a monthly fee, and your
              business joins a network of other members.
            </p>
          </div>
          <Link href="/products#oikko" className="button shrink-0">
            See Oikko
          </Link>
        </div>
      </section>

      <Stack />
      <Faq />
      <Closing />
    </>
  );
}
