export function PageIntro({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="relative">
      <div className="glow left-1/2 top-0 size-[30rem] -translate-x-1/2 bg-accent" />
      <div className="wrap relative pb-10 pt-20 text-center md:pt-28">
        <h1 className="type-title rise mx-auto max-w-4xl">{title}</h1>
        <p className="rise mx-auto mt-6 max-w-2xl text-xl text-muted" style={{ animationDelay: "0.12s" }}>
          {children}
        </p>
      </div>
    </section>
  );
}
