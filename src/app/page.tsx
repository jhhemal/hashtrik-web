import Link from "next/link";
import { Closing } from "@/components/Closing";
import { HashMark } from "@/components/HashMark";
import { IdeaMark } from "@/components/IdeaMark";
import { products, services, steps } from "@/lib/site";

const cell = "draw max-lg:after:hidden";
const linkCell =
  "draw block px-5 py-7 font-display text-2xl font-semibold tracking-tight transition-colors max-lg:after:hidden md:px-8 lg:py-9";

export default function Home() {
  return (
    <>
      <section>
        <div className="frame grid lg:grid-cols-[1fr_2fr_1fr]">
          <div className={`${cell} flex items-end px-5 py-8 after:hidden md:px-8 lg:py-12 lg:before:hidden`}>
            <p className="settle max-w-md text-muted">
              Hashtrik is a small software agency. We design, build and look after web apps, mobile apps and AI tools
              for growing businesses.
            </p>
          </div>

          <div className={`${cell} order-first flex items-center px-5 py-14 before:hidden md:px-8 lg:order-none lg:px-12 lg:py-28`}>
            <h1 className="type-hero settle">We turn rough ideas into working software.</h1>
          </div>

          <div className={`${cell} px-5 py-8 md:px-8 lg:py-12 lg:before:hidden`}>
            <div className="settle h-full">
              <IdeaMark />
            </div>
          </div>

          <Link href="/services" className={`${linkCell} after:hidden hover:bg-ink hover:text-bg`}>
            See our services
          </Link>
          <Link href="/contact" className={`${linkCell} bg-accent text-on-accent hover:bg-ink hover:text-bg`}>
            Start a project
          </Link>
          <Link href="/products" className={`${linkCell} hover:bg-ink hover:text-bg`}>
            Try our products
          </Link>
        </div>
      </section>

      <section className="band">
        <div className="frame">
          <div className="flex flex-wrap items-end justify-between gap-4 px-5 pb-10 pt-16 md:px-8 md:pt-24">
            <h2 className="type-section">What we do</h2>
            <Link href="/services" className="font-medium underline decoration-accent decoration-2 underline-offset-4 hover:text-accent">
              All services in detail
            </Link>
          </div>
          <ul>
            {services.map((service) => (
              <li key={service.slug} className="border-t border-line">
                <Link
                  href={`/services#${service.slug}`}
                  className="grid gap-1 px-5 py-6 transition-colors hover:bg-surface md:grid-cols-[1fr_2fr] md:gap-8 md:px-8"
                >
                  <span className="font-display text-2xl font-semibold tracking-tight">{service.name}</span>
                  <span className="max-w-xl text-muted">{service.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band">
        <div className="frame">
          <h2 className="type-section px-5 pb-10 pt-16 md:px-8 md:pt-24">How a project runs</h2>
          <ol className="grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.name} className="border-line px-5 py-8 max-sm:not-first:border-t sm:max-lg:odd:border-r sm:max-lg:nth-[n+3]:border-t md:px-8 lg:not-last:border-r">
                <span className="font-display text-5xl font-semibold text-accent">{i + 1}</span>
                <h3 className="mt-6 text-2xl">{step.name}</h3>
                <p className="mt-2 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band">
        <div className="frame">
          <div className="px-5 pb-10 pt-16 md:px-8 md:pt-24">
            <h2 className="type-section">Products we run ourselves</h2>
            <p className="mt-4 max-w-xl text-muted">
              We build and operate our own software too, so we know what it takes to keep a product alive after launch.
            </p>
          </div>
          <ul className="grid border-t border-line md:grid-cols-3">
            {products.map((product) => (
              <li key={product.name} className="border-line max-md:not-first:border-t md:not-last:border-r">
                <Link href="/products" className="flex h-full gap-5 px-5 py-8 transition-colors hover:bg-surface md:flex-col md:px-8">
                  <HashMark text={product.name} className="size-20 shrink-0 md:size-28" />
                  <div>
                    <h3 className="text-2xl">{product.name}</h3>
                    <p className="mt-2 text-muted">{product.summary}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Closing />
    </>
  );
}
