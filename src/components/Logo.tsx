export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="9" y="9" width="6" height="6" fill="var(--spark)" />
      <path d="M9 2v20M15 2v20M2 9h20M2 15h20" stroke="currentColor" strokeWidth="2.2" fill="none" />
    </svg>
  );
}
