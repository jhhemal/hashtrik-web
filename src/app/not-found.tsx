import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative">
      <div className="glow left-1/2 top-0 size-96 -translate-x-1/2 bg-accent" />
      <div className="wrap relative py-28 text-center md:py-40">
        <h1 className="type-title">This page does not exist.</h1>
        <p className="mx-auto mt-6 max-w-xl text-xl text-muted">The link may be old or mistyped.</p>
        <Link href="/" className="button mt-10 text-lg">
          Go to the home page
        </Link>
      </div>
    </section>
  );
}
