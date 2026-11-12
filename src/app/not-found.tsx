import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <div className="frame px-5 py-24 md:px-8 md:py-36">
        <h1 className="type-title">This page does not exist.</h1>
        <p className="mt-6 max-w-xl text-xl text-muted">The link may be old or mistyped.</p>
        <Link href="/" className="button mt-10 text-lg">
          Go to the home page
        </Link>
      </div>
    </section>
  );
}
