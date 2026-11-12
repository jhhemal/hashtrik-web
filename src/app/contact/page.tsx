import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Faq } from "@/components/Faq";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Hashtrik what you want to build. We reply within one working day.",
};

const next = [
  "We read your note and reply within one working day.",
  "A short call to understand the problem.",
  "You get a plan with scope, price and dates.",
];

export default function Contact() {
  return (
    <>
      <section className="relative">
        <div className="glow -top-10 left-[10%] size-96 bg-accent" />
        <div
          className="glow right-[5%] top-40 size-80 bg-violet"
          style={{ animationDelay: "-6s" }}
        />
        <div className="wrap relative grid gap-12 pb-20 pt-20 md:pt-28 lg:grid-cols-2 lg:gap-16">
          <div className="rise">
            <h1 className="type-title">Tell us what you want to build.</h1>
            <p className="mt-6 max-w-md text-xl text-muted">
              A few lines is enough. Here is what happens after you write.
            </p>
            <ol className="mt-10 space-y-5">
              {next.map((text, i) => (
                <li key={text} className="flex items-center gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-tint font-display font-semibold text-accent">
                    {i + 1}
                  </span>
                  {text}
                </li>
              ))}
            </ol>
            <dl className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="card !rounded-3xl p-5">
                <dt className="text-sm text-muted">Email</dt>
                <dd className="mt-1 font-display text-xl font-semibold">
                  <a
                    href={`mailto:${site.email}`}
                    className="transition-colors hover:text-accent"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="card !rounded-3xl p-5">
                <dt className="text-sm text-muted">Working hours</dt>
                <dd className="mt-1 font-medium">{site.hours}</dd>
              </div>
            </dl>
            <div className="mt-4 rounded-3xl bg-tint p-5">
              <p className="font-medium">Helpful to include</p>
              <p className="mt-1 text-muted">
                What the product should do, who will use it, any deadline, and a
                rough budget if you have one.
              </p>
            </div>
          </div>
          <div
            className="card rise p-6 shadow-[var(--shadow-lift)] md:p-9"
            style={{ animationDelay: "0.15s" }}
          >
            <ContactForm />
          </div>
        </div>
      </section>
      <Faq />
    </>
  );
}
