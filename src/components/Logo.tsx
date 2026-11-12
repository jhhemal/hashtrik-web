export function Logo({ className }: { className?: string }) {
  return (
    <span className={`grid place-items-center rounded-xl bg-accent text-on-accent ${className ?? ""}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" className="size-[62%]" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
        <path d="M9.5 4l-2 16M16.5 4l-2 16M4.5 9h16M3.5 15h16" />
      </svg>
    </span>
  );
}
