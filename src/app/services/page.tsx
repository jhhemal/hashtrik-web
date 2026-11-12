import type { Metadata } from "next";
import { Closing } from "@/components/Closing";
import { PageIntro } from "@/components/PageIntro";
import { ServiceIcon } from "@/components/ServiceIcon";
import { Steps } from "@/components/Steps";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Web applications, mobile apps, AI and automation, product design, cloud and ongoing support.",
};

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
              </div>
            </article>
          ))}
        </div>
      </section>

      <Steps />
      <Closing />
    </>
  );
}
