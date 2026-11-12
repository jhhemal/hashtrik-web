import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell Hashtrik what you want to build. We reply within one working day.",
};

export default function Contact() {
  return (
    <section>
      <div className="frame grid lg:grid-cols-2">
        <div className="px-5 pb-12 pt-16 md:px-8 md:pt-24 lg:pb-24">
          <h1 className="type-title">Tell us what you want to build.</h1>
          <p className="mt-6 max-w-md text-xl text-muted">
            A few lines is enough. We reply within one working day with questions or a time to talk.
          </p>
          <p className="mt-10 text-muted">Prefer email?</p>
          <a href={`mailto:${site.email}`} className="font-display text-2xl font-semibold underline decoration-accent decoration-2 underline-offset-4 hover:text-accent">
            {site.email}
          </a>
        </div>
        <div className="border-line px-5 py-12 max-lg:border-t md:px-8 lg:border-l lg:py-24">
          <Suspense>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
