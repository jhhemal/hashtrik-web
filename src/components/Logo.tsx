// The Hashtrik symbol: a hash with its centre cell filled.
// Colours follow the light or dark theme. Print-ready files are in public/brand.
export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M21 8v48M43 8v48M8 21h48M8 43h48" fill="none" stroke="var(--ink)" strokeWidth="6" strokeLinecap="round" />
      <rect x="26.5" y="26.5" width="11" height="11" rx="2.5" fill="var(--accent)" />
    </svg>
  );
}
