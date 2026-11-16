import { oikko } from "@/lib/site";

// Businesses connected through Oikko. Decorative.
const spots = [
  [78, 62],
  [322, 62],
  [50, 160],
  [350, 160],
  [92, 258],
  [308, 258],
];

export function OikkoGraphic() {
  return (
    <div className="relative overflow-hidden rounded-[1.5rem] bg-[linear-gradient(135deg,#3346ff,#8b6cff_55%,#4cc3ff)] p-3" aria-hidden="true">
      <svg viewBox="0 0 400 320" className="w-full rounded-[1.1rem] bg-surface">
        <g fill="none" stroke="var(--accent)" strokeWidth="1.6" opacity="0.55">
          {spots.map(([x, y], i) => (
            <path key={i} className="flow" d={`M200 160L${x} ${y}`} style={{ animationDelay: `${i * -0.25}s` }} />
          ))}
          <path className="flow" d="M78 62L322 62M50 160L92 258M350 160L308 258M92 258L308 258" opacity="0.5" />
        </g>
        {spots.map(([x, y], i) => (
          <g key={i}>
            <rect x={x - 46} y={y - 15} width="92" height="30" rx="15" fill="var(--bg)" stroke="var(--line)" />
            <circle cx={x - 31} cy={y} r="5" fill={["#3346ff", "#17b890", "#ffb52e", "#8b6cff", "#ff7a59", "#4cc3ff"][i]} />
            <text x={x - 20} y={y + 4} fontSize="10.5" fontWeight="600" fill="var(--ink)">
              {oikko.network[i]}
            </text>
          </g>
        ))}
        <circle cx="200" cy="160" r="46" fill="var(--accent)" opacity="0.15" className="pulse" style={{ transformOrigin: "200px 160px" }} />
        <circle cx="200" cy="160" r="36" fill="var(--accent)" />
        <text x="200" y="165" textAnchor="middle" fontSize="15" fontWeight="700" fill="var(--on-accent)">
          Oikko
        </text>
      </svg>
    </div>
  );
}
