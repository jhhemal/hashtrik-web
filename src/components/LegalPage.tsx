import Link from "next/link";
import { legalUpdated, type LegalSection } from "@/lib/legal";
import { PageIntro } from "./PageIntro";

export function LegalPage({
  title,
  intro,
  sections,
  other,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
  other: { href: string; label: string };
}) {
  return (
    <>
      <PageIntro title={title}>{intro}</PageIntro>

      <section className="wrap grid gap-10 pb-24 pt-6 lg:grid-cols-[16rem_1fr] lg:gap-14">
        <nav aria-label="On this page" className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-sm text-muted">Last updated {legalUpdated}</p>
          <ol className="mt-4 hidden space-y-2 border-l border-line lg:block">
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="-ml-px block border-l border-transparent pl-4 text-muted transition-colors hover:border-accent hover:text-accent">
                  {section.heading}
                </a>
              </li>
            ))}
          </ol>
          <Link href={other.href} className="button button-soft mt-6 !px-4 !py-2 text-sm">
            {other.label}
          </Link>
        </nav>

        <div className="card max-w-3xl space-y-10 p-6 md:p-10">
          {sections.map((section, i) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <h2 className="text-2xl">
                <span className="mr-2 text-accent">{i + 1}.</span>
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4 text-muted">
                {section.paragraphs?.map((text) => <p key={text}>{text}</p>)}
                {section.items && (
                  <ul className="list-disc space-y-2 pl-5 marker:text-accent">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.after?.map((text) => <p key={text}>{text}</p>)}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
