import type { Metadata } from "next";
import { Closing } from "@/components/Closing";
import { HashMark } from "@/components/HashMark";
import { PageIntro } from "@/components/PageIntro";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description: "Software Hashtrik builds and runs itself: Trikdesk, Trikforms and Trikbooks.",
};

export default function Products() {
  return (
    <>
      <PageIntro title="Software we build and run ourselves.">
        Alongside client work we keep a few products of our own. They are where we try new ideas first and learn what
        running software really costs.
      </PageIntro>

      <section className="band">
        <div className="frame divide-y divide-line">
          {products.map((product) => (
            <article key={product.name} className="grid gap-8 px-5 py-12 md:grid-cols-[auto_1fr] md:px-8 lg:grid-cols-[auto_1fr_1fr] lg:gap-12 lg:py-16">
              <HashMark text={product.name} className="size-32 lg:size-44" label={`${product.name} mark`} />
              <div>
                <p className="inline-flex items-center gap-2 text-sm font-medium">
                  <span className={`size-2.5 ${product.status === "Live" ? "bg-accent" : product.status === "Beta" ? "bg-spark" : "border border-muted"}`} />
                  {product.status}
                </p>
                <h2 className="type-section mt-3">{product.name}</h2>
                <p className="mt-4 max-w-md text-xl text-muted">{product.summary}</p>
              </div>
              <ul className="divide-y divide-line self-start border-y border-line md:col-start-2 lg:col-start-3">
                {product.points.map((point) => (
                  <li key={point} className="py-2.5">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <Closing />
    </>
  );
}
