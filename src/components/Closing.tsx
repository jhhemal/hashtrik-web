import Link from "next/link";

export function Closing() {
  return (
    <section className="wrap pb-16 pt-4" data-reveal>
      <div className="relative overflow-hidden rounded-[2.25rem] bg-[linear-gradient(120deg,#2a3cf0,#6a4dff_60%,#8b6cff)] px-6 py-16 text-center text-white shadow-[0_40px_80px_-30px_rgba(74,70,255,0.6)] md:px-12 md:py-24">
        <div className="glow -left-20 -top-24 size-80 bg-[#4cc3ff] !opacity-50" />
        <div className="glow -bottom-32 right-0 size-96 bg-[#ffb52e] !opacity-30" style={{ animationDelay: "-6s" }} />
        <div className="relative">
          <h2 className="type-title mx-auto max-w-3xl">Have an idea? Tell us what you want to build.</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">
            A few lines is enough. We reply within one working day.
          </p>
          <Link href="/contact" className="button mt-9 !bg-white text-lg !text-[#141b34] !shadow-[0_16px_40px_-12px_rgba(0,0,0,0.45)]">
            Start a project
          </Link>
        </div>
      </div>
    </section>
  );
}
