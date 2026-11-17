import type { Metadata } from "next";
import Link from "next/link";
import { Closing } from "@/components/Closing";
import { PageIntro } from "@/components/PageIntro";
import { pageMeta } from "@/lib/seo";
import { faqGroups, site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "FAQ",
  description:
    "Answers to common questions about working with Hashtrik: cost, timelines, ownership, payment, Oikko, support after launch, and privacy.",
  path: "/faq",
});

// Lets search engines show these questions and answers directly in results.
const faqData = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqGroups.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  ),
}).replace(/</g, "\\u003c");

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqData }} />
      <PageIntro title="Frequently asked questions">
        Straight answers about price, timing, ownership, Oikko and what happens after launch.
      </PageIntro>

      <section className="wrap grid gap-10 pb-16 pt-6 lg:grid-cols-[16rem_1fr] lg:gap-14">
        <nav aria-label="Topics" className="lg:sticky lg:top-24 lg:self-start">
          <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
            {faqGroups.map((group) => (
              <li key={group.id}>
                <a
                  href={`#${group.id}`}
                  className="block rounded-full border border-line bg-surface px-4 py-1.5 font-medium text-muted transition-colors hover:border-accent hover:text-accent lg:border-transparent lg:bg-transparent"
                >
                  {group.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 hidden rounded-3xl bg-tint p-5 lg:block">
            <p className="font-medium">Can&apos;t find your question?</p>
            <a href={`mailto:${site.email}`} className="mt-1 block text-accent hover:underline">
              {site.email}
            </a>
          </div>
        </nav>

        <div className="max-w-3xl space-y-12">
          {faqGroups.map((group) => (
            <section key={group.id} id={group.id} className="scroll-mt-24">
              <h2 className="type-section">{group.title}</h2>
              <div className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <details key={item.q} className="card group/faq !rounded-3xl px-6 py-1 open:shadow-[var(--shadow-lift)]">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-xl font-semibold [&::-webkit-details-marker]:hidden">
                      {item.q}
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-tint text-accent transition-transform duration-300 group-open/faq:rotate-45">
                        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </summary>
                    <p className="max-w-2xl pb-5 text-muted">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}
          <p className="text-muted">
            For how this website handles your information, see the{" "}
            <Link href="/privacy" className="font-medium text-accent hover:underline">
              Privacy Policy
            </Link>{" "}
            and the{" "}
            <Link href="/terms" className="font-medium text-accent hover:underline">
              Terms and Conditions
            </Link>
            .
          </p>
        </div>
      </section>

      <Closing />
    </>
  );
}
