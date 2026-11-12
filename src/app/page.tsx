import Link from "next/link";
import { AppMock } from "@/components/AppMock";
import { Closing } from "@/components/Closing";
import { ProductMock } from "@/components/ProductMock";
import { ServiceIcon } from "@/components/ServiceIcon";
import { Steps } from "@/components/Steps";
import { products, services, tools } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="relative">
        <div className="wrap pb-16 pt-16 text-center md:pt-24">
          <p className="rise inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-1.5 text-sm font-medium shadow-[var(--shadow)]">
            <span className="pulse size-2 rounded-full bg-emerald-500" />
            Web, mobile and AI from one small team
          </p>
          <h1 className="type-hero rise mx-auto mt-7 max-w-4xl" style={{ animationDelay: "0.08s" }}>
            We turn rough ideas into working software.
          </h1>
          <p className="rise mx-auto mt-6 max-w-2xl text-xl text-muted" style={{ animationDelay: "0.16s" }}>
            Hashtrik designs, builds and looks after web apps, mobile apps and AI tools for growing businesses.
          </p>
          <div className="rise mt-9 flex flex-wrap justify-center gap-3" style={{ animationDelay: "0.24s" }}>
            <Link href="/contact" className="button text-lg">
              Start a project
            </Link>
            <Link href="/services" className="button button-soft text-lg">
              See what we do
            </Link>
          </div>
          <div className="rise mt-16 md:mt-20" style={{ animationDelay: "0.4s" }}>
            <AppMock />
          </div>
        </div>
      </section>

      <section className="py-6" aria-label="Tools we build with">
        <p className="text-center text-sm font-medium text-muted">Tools we build with</p>
        <div className="marquee-mask mt-5">
          <ul className="marquee">
            {[...tools, ...tools].map((tool, i) => (
              <li key={i} aria-hidden={i >= tools.length} className="mx-2.5 rounded-full border border-line bg-surface px-5 py-2 font-medium text-muted">
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-5" data-reveal>
            <div className="max-w-xl">
              <h2 className="type-section">What we do</h2>
              <p className="mt-4 text-lg text-muted">Hire us for one piece or for the whole product, start to finish.</p>
            </div>
            <Link href="/services" className="button button-soft">
              All services
            </Link>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <li key={service.slug} data-reveal style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
                <Link href={`/services#${service.slug}`} className="card lift block h-full p-7">
                  <ServiceIcon name={service.slug} />
                  <h3 className="mt-6 text-2xl">{service.name}</h3>
                  <p className="mt-2 text-muted">{service.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Steps />

      <section className="section !pt-0">
        <div className="wrap">
          <div className="mx-auto max-w-2xl text-center" data-reveal>
            <h2 className="type-section">Products we run ourselves</h2>
            <p className="mt-4 text-lg text-muted">
              We build and operate our own software too, so we know what it takes to keep a product alive after launch.
            </p>
          </div>
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {products.map((product, i) => (
              <li key={product.name} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
                <Link href="/products" className="card lift group block h-full p-3">
                  <ProductMock name={product.name} />
                  <div className="p-4 pt-5">
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
