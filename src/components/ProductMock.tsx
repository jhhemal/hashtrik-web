// Small drawn previews for each product. Decorative only.

const washes: Record<string, string> = {
  Trikdesk: "bg-[linear-gradient(135deg,#3346ff,#4cc3ff)]",
  Trikforms: "bg-[linear-gradient(135deg,#8b6cff,#ff7ac3)]",
  Trikbooks: "bg-[linear-gradient(135deg,#ffb52e,#ff7a59)]",
};

function Line({ w }: { w: string }) {
  return <div className="h-2 rounded-full bg-line" style={{ width: w }} />;
}

export function ProductMock({ name }: { name: string }) {
  return (
    <div className={`relative h-56 overflow-hidden rounded-[1.25rem] p-5 pb-0 ${washes[name] ?? washes.Trikdesk}`} aria-hidden="true">
      <div className="h-full translate-y-1 rounded-t-2xl bg-surface p-4 shadow-xl transition-transform duration-500 group-hover:-translate-y-1">
        {name === "Trikforms" ? (
          <div className="space-y-3">
            <Line w="40%" />
            <div className="h-8 rounded-lg border border-line bg-bg" />
            <Line w="55%" />
            <div className="h-8 rounded-lg border border-line bg-bg" />
            <div className="h-8 w-24 rounded-full bg-violet" />
          </div>
        ) : name === "Trikbooks" ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Line w="35%" />
              <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-medium text-emerald-500">Paid</span>
            </div>
            <div className="font-display text-2xl font-semibold">$2,480.00</div>
            {["70%", "55%", "62%"].map((w) => (
              <div key={w} className="flex items-center justify-between gap-6">
                <Line w={w} />
                <Line w="14%" />
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-2.5">
            {["bg-accent", "bg-sky", "bg-spark"].map((dot, i) => (
              <div key={dot} className={`flex items-center gap-3 rounded-xl p-2.5 ${i === 0 ? "bg-tint" : ""}`}>
                <span className={`size-8 shrink-0 rounded-full ${dot}`} />
                <div className="flex-1 space-y-1.5">
                  <Line w={["55%", "40%", "48%"][i]} />
                  <Line w={["85%", "70%", "78%"][i]} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
