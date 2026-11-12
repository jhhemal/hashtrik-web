import { faqs } from "@/lib/site";

export function Faq({ limit }: { limit?: number }) {
  const items = limit ? faqs.slice(0, limit) : faqs;
  return (
    <section className="section !pt-0">
      <div className="wrap grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-14">
        <div data-reveal>
          <h2 className="type-section">Questions people ask first</h2>
          <p className="mt-4 text-lg text-muted">Straight answers on price, timing and ownership.</p>
        </div>
        <div className="space-y-3" data-reveal>
          {items.map((item, i) => (
            <details key={item.q} open={i === 0} className="card group/faq !rounded-3xl px-6 py-1 open:shadow-[var(--shadow-lift)]">
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
      </div>
    </section>
  );
}
