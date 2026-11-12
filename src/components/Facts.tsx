import { facts } from "@/lib/site";

export function Facts() {
  return (
    <section className="wrap pt-14" data-reveal>
      <dl className="card grid grid-cols-2 gap-y-8 p-7 md:p-9 lg:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.label} className="flex flex-col-reverse px-2 lg:px-5">
            <dt className="mt-2 text-muted">{fact.label}</dt>
            <dd className="font-display text-4xl font-semibold tracking-tight text-accent md:text-5xl">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
