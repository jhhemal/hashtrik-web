import { stack } from "@/lib/site";

export function Stack() {
  return (
    <section className="section !pt-0">
      <div className="wrap">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <h2 className="type-section">What we build with</h2>
          <p className="mt-4 text-lg text-muted">
            Widely used, well-supported tools, so any good team can maintain your product after us.
          </p>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((group, i) => (
            <li key={group.group} data-reveal style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
              <div className="card h-full !rounded-3xl p-6">
                <h3 className="text-xl">{group.group}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-full bg-tint px-3.5 py-1.5 text-sm font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
