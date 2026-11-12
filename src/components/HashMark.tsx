import { markCells } from "@/lib/hash";

const CELL = 40;
const INSET = 5;
const SIZE = CELL - INSET * 2;

const fills = {
  accent: "var(--accent)",
  ink: "var(--ink)",
  spark: "var(--spark)",
} as const;

export function HashMark({
  text,
  className,
  label,
}: {
  text: string;
  className?: string;
  label?: string;
}) {
  const cells = markCells(text);
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {cells.map((cell, i) => {
        const x = (i % 3) * CELL + INSET;
        const y = Math.floor(i / 3) * CELL + INSET;
        const fill = fills[cell.tone];
        const spin = `rotate(${cell.turn * 90} ${x + SIZE / 2} ${y + SIZE / 2})`;
        switch (cell.shape) {
          case "square":
            return <rect key={i} x={x} y={y} width={SIZE} height={SIZE} fill={fill} />;
          case "circle":
            return <circle key={i} cx={x + SIZE / 2} cy={y + SIZE / 2} r={SIZE / 2} fill={fill} />;
          case "quarter":
            return (
              <path
                key={i}
                d={`M${x} ${y}h${SIZE}a${SIZE} ${SIZE} 0 0 1 -${SIZE} ${SIZE}z`}
                fill={fill}
                transform={spin}
              />
            );
          case "triangle":
            return <path key={i} d={`M${x} ${y}h${SIZE}l-${SIZE} ${SIZE}z`} fill={fill} transform={spin} />;
          default:
            return null;
        }
      })}
      <path d="M40 0v120M80 0v120M0 40h120M0 80h120" stroke="var(--ink)" strokeWidth="1.25" fill="none" />
    </svg>
  );
}
