import { industries } from "@/lib/site";

export function Industries() {
  return (
    <section className="section !pt-0">
      <div className="wrap grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-14">
        <div data-reveal>
          <h2 className="type-section">Who we build for</h2>
          <p className="mt-4 text-lg text-muted">
            The problems change from one industry to the next. These are the kinds of products we are set up to build.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {industries.map((item, i) => (
            <li key={item.name} data-reveal style={{ transitionDelay: `${(i % 2) * 90}ms` }}>
              <div className="card lift h-full !rounded-3xl p-6">
                <h3 className="text-xl">{item.name}</h3>
                <p className="mt-1.5 text-muted">{item.example}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
