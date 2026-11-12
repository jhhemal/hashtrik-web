// A drawn "screenshot" of the kind of software Hashtrik builds.
// Purely decorative, so it is hidden from screen readers.

const bars = [38, 56, 44, 72, 60, 88, 70, 96, 78, 64, 84, 100];
const rows = [
  { name: "Clinic booking app", tag: "Shipped", tone: "bg-emerald-500/15 text-emerald-500" },
  { name: "Store dashboard", tag: "In review", tone: "bg-spark/20 text-amber-600" },
  { name: "Support assistant", tag: "Building", tone: "bg-tint text-accent" },
];

export function AppMock() {
  return (
    <div className="relative mx-auto max-w-5xl text-left" aria-hidden="true">
      <div className="glow -top-10 left-[8%] size-72 bg-sky" />
      <div className="glow right-[6%] top-10 size-80 bg-violet" style={{ animationDelay: "-5s" }} />
      <div className="glow bottom-0 left-1/3 size-72 bg-accent" style={{ animationDelay: "-9s" }} />

      <div className="card relative overflow-hidden !rounded-[1.5rem] shadow-[var(--shadow-lift)]">
        <div className="flex items-center gap-2 border-b border-line px-5 py-3.5">
          <span className="size-3 rounded-full bg-[#ff6b6b]" />
          <span className="size-3 rounded-full bg-spark" />
          <span className="size-3 rounded-full bg-[#3ecf8e]" />
          <span className="ml-4 hidden h-7 flex-1 items-center rounded-full bg-bg px-4 text-xs text-muted sm:flex">
            app.yourproduct.com
          </span>
        </div>

        <div className="grid md:grid-cols-[12rem_1fr]">
          <div className="hidden space-y-1.5 border-r border-line p-4 text-sm md:block">
            {["Overview", "Projects", "Customers", "Reports", "Settings"].map((item, i) => (
              <div key={item} className={`rounded-xl px-3 py-2 font-medium ${i === 0 ? "bg-tint text-accent" : "text-muted"}`}>
                {item}
              </div>
            ))}
          </div>

          <div className="space-y-4 p-4 sm:p-6">
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[
                ["Active users", "12,480"],
                ["Orders today", "326"],
                ["Uptime", "99.98%"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-line bg-bg p-3 sm:p-4">
                  <div className="truncate text-xs text-muted">{label}</div>
                  <div className="mt-1 font-display text-lg font-semibold sm:text-2xl">{value}</div>
                </div>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
              <div className="rounded-2xl border border-line bg-bg p-4">
                <div className="text-sm font-medium">Growth this year</div>
                <div className="mt-4 flex h-32 items-end gap-1.5 sm:h-40 sm:gap-2.5">
                  {bars.map((height, i) => (
                    <div
                      key={i}
                      className="grow flex-1 rounded-t-md bg-[linear-gradient(to_top,var(--accent),var(--violet))]"
                      style={{ height: `${height}%`, animationDelay: `${0.5 + i * 0.06}s`, opacity: 0.45 + (i / bars.length) * 0.55 }}
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-2.5 rounded-2xl border border-line bg-bg p-4">
                <div className="text-sm font-medium">Projects</div>
                {rows.map((row) => (
                  <div key={row.name} className="flex items-center justify-between gap-3 rounded-xl bg-surface px-3 py-2.5 text-sm">
                    <span className="truncate">{row.name}</span>
                    <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${row.tone}`}>{row.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="float absolute -right-4 top-[13%] hidden lg:block xl:-right-16">
        <div className="card flex items-center gap-3 !rounded-2xl px-4 py-3 shadow-[var(--shadow-lift)]">
          <span className="grid size-9 place-items-center rounded-full bg-emerald-500/15 text-emerald-500">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
          </span>
          <div className="text-sm">
            <div className="font-semibold">Release went live</div>
            <div className="text-muted">Version 2.4, no downtime</div>
          </div>
        </div>
      </div>

      <div className="float absolute -bottom-10 -left-4 hidden lg:block xl:-left-16" style={{ animationDelay: "-3s" }}>
        <div className="card w-44 !rounded-[1.75rem] p-2.5 shadow-[var(--shadow-lift)]">
          <div className="rounded-[1.25rem] bg-bg p-3">
            <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-line" />
            <div className="h-16 rounded-xl bg-[linear-gradient(135deg,var(--accent),var(--sky))]" />
            <div className="mt-3 h-2 w-3/4 rounded-full bg-line" />
            <div className="mt-2 h-2 w-1/2 rounded-full bg-line" />
            <div className="mt-3 rounded-full bg-accent py-1.5 text-center text-xs font-semibold text-on-accent">Book now</div>
          </div>
        </div>
      </div>
    </div>
  );
}
