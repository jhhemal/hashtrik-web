import { steps } from "@/lib/site";

export function Steps() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <h2 className="type-section">How a project runs</h2>
          <p className="mt-4 text-lg text-muted">Four stages, and you get something concrete at the end of each one.</p>
        </div>
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.name} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="card lift flex h-full flex-col p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className="grid size-12 place-items-center rounded-full bg-accent font-display text-xl font-semibold text-on-accent shadow-[0_10px_24px_-8px_var(--accent)]">
                    {i + 1}
                  </span>
                  <span className="rounded-full bg-tint px-3 py-1 text-sm font-medium text-accent">{step.time}</span>
                </div>
                <h3 className="mt-6 text-2xl">{step.name}</h3>
                <p className="mt-2 flex-1 text-muted">{step.text}</p>
                <p className="mt-5 border-t border-line pt-4 text-sm">
                  <span className="text-muted">You get</span>
                  <span className="mt-0.5 block font-medium">{step.output}</span>
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
