const paths: Record<string, React.ReactNode> = {
  web: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="3" />
      <path d="M3 9.5h18M7 7h.01M10 7h.01" />
    </>
  ),
  mobile: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="3" />
      <path d="M11 18.5h2" />
    </>
  ),
  ai: <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" />,
  design: (
    <>
      <path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 013 3L8 19z" />
      <path d="M14 7l3 3" />
    </>
  ),
  cloud: <path d="M7 18.5a4.5 4.5 0 01-.6-8.96 6 6 0 0111.5 1.5A3.75 3.75 0 0117.5 18.5z" />,
  support: (
    <>
      <path d="M12 3l7.5 3v5.5c0 4.6-3.1 8-7.5 9.5-4.4-1.5-7.5-4.9-7.5-9.5V6z" />
      <path d="M9 12l2.2 2.2L15.5 10" />
    </>
  ),
};

export function ServiceIcon({ name }: { name: string }) {
  return (
    <span className="icon-tile">
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {paths[name]}
      </svg>
    </span>
  );
}
