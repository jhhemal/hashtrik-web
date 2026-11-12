export function PageIntro({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="frame px-5 pb-14 pt-16 md:px-8 md:pb-20 md:pt-24">
        <h1 className="type-title max-w-4xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-xl text-muted">{children}</p>
      </div>
    </section>
  );
}
