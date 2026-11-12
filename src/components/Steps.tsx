import { steps } from "@/lib/site";

export function Steps() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <h2 className="type-section">How a project runs</h2>
          <p className="mt-4 text-lg text-muted">Four stages, and you see real progress in every one.</p>
        </div>
        <ol className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-[3.1rem] hidden border-t-2 border-dashed border-line lg:block" aria-hidden="true" />
          {steps.map((step, i) => (
            <li key={step.name} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="card lift relative h-full p-7">
                <span className="grid size-12 place-items-center rounded-full bg-accent font-display text-xl font-semibold text-on-accent shadow-[0_10px_24px_-8px_var(--accent)]">
                  {i + 1}
                </span>
                <h3 className="mt-6 text-2xl">{step.name}</h3>
                <p className="mt-2 text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
