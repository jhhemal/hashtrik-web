import type { Metadata } from "next";
import { Closing } from "@/components/Closing";
import { PageIntro } from "@/components/PageIntro";
import { services, steps } from "@/lib/site";

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

      <section className="band">
        <div className="frame divide-y divide-line">
          {services.map((service) => (
            <article key={service.slug} id={service.slug} className="grid scroll-mt-16 gap-6 px-5 py-12 md:px-8 lg:grid-cols-[1fr_1fr_1fr] lg:gap-10 lg:py-16">
              <h2 className="type-section">{service.name}</h2>
              <p className="text-xl text-muted">{service.summary}</p>
              <ul className="divide-y divide-line border-y border-line">
                {service.includes.map((item) => (
                  <li key={item} className="py-2.5">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="band">
        <div className="frame">
          <h2 className="type-section px-5 pb-10 pt-16 md:px-8 md:pt-24">How a project runs</h2>
          <ol className="divide-y divide-line border-t border-line">
            {steps.map((step, i) => (
              <li key={step.name} className="grid grid-cols-[3rem_1fr] gap-x-4 px-5 py-8 md:grid-cols-[6rem_1fr_2fr] md:px-8">
                <span className="font-display text-4xl font-semibold text-accent">{i + 1}</span>
                <h3 className="self-center text-2xl">{step.name}</h3>
                <p className="col-start-2 mt-2 max-w-xl text-muted md:col-start-3 md:mt-0 md:self-center">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Closing />
    </>
  );
}
