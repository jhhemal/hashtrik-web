import type { Metadata } from "next";
import Link from "next/link";
import { Closing } from "@/components/Closing";
import { PageIntro } from "@/components/PageIntro";
import { ProductMock } from "@/components/ProductMock";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description: "Software Hashtrik builds and runs itself: Trikdesk, Trikforms and Trikbooks.",
};

const statusDot: Record<string, string> = {
  Live: "bg-emerald-500",
  Beta: "bg-spark",
  "In development": "bg-muted",
};

export default function Products() {
  return (
    <>
      <PageIntro title="Software we build and run ourselves.">
        Alongside client work we keep a few products of our own. They are where we try new ideas first and learn what
        running software really costs.
      </PageIntro>

      <section className="wrap space-y-6 pb-16 pt-8">
        {products.map((product, i) => (
          <article key={product.name} data-reveal>
            <div className="card lift group grid items-center gap-6 p-4 md:grid-cols-2 md:gap-10 md:p-5">
              <div className={i % 2 ? "md:order-last" : ""}>
                <ProductMock name={product.name} />
              </div>
              <div className="p-3 md:p-6">
                <p className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-sm font-medium">
                  <span className={`size-2 rounded-full ${statusDot[product.status]} ${product.status === "Live" ? "pulse" : ""}`} />
                  {product.status}
                </p>
                <h2 className="type-section mt-4">{product.name}</h2>
                <p className="mt-3 text-lg text-muted">{product.summary}</p>
                <p className="mt-4">
                  <span className="text-muted">Made for </span>
                  <span className="font-medium">{product.audience.toLowerCase()}</span>
                </p>
                <ul className="mt-6 grid gap-x-6 gap-y-2.5 border-t border-line pt-6 sm:grid-cols-2">
                  {product.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-tint text-accent">
                        <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="button button-soft mt-7">
                  {product.status === "Live" ? "Ask for a demo" : "Get early access"}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="section !pt-0">
        <div className="wrap grid gap-5 md:grid-cols-3">
          {[
            ["Built on real use", "Every product started as a tool we or a client needed, then grew from there."],
            ["Your data stays yours", "Export everything at any time. No lock-in and no selling of data."],
            ["Support from the builders", "Questions go to the people who wrote the product, not a script."],
          ].map(([name, text], i) => (
            <div key={name} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="card h-full p-7">
                <h2 className="text-2xl">{name}</h2>
                <p className="mt-3 text-muted">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Closing />
    </>
  );
}
