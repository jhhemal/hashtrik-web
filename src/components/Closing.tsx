import Link from "next/link";

export function Closing() {
  return (
    <section className="band">
      <div className="frame flex flex-col items-start gap-8 px-5 py-16 md:flex-row md:items-end md:justify-between md:px-8 md:py-24">
        <h2 className="type-title max-w-2xl">Have an idea? Tell us what you want to build.</h2>
        <Link href="/contact" className="button shrink-0 text-lg">
          Start a project
        </Link>
      </div>
    </section>
  );
}
