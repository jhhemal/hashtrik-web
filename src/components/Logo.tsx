import {
  hashLevel,
  hashStroke,
  hashUpright,
  lockupHashScale,
  lockupViewBox,
  logoBlue,
  logoCoral,
  symbolViewBox,
  wordHash,
  wordTrik,
} from "@/lib/logo";

function Hash({ upright, level }: { upright: string; level: string }) {
  return (
    <g fill="none" strokeWidth={hashStroke} strokeLinecap="round">
      <path d={hashUpright} stroke={upright} />
      <path d={hashLevel} stroke={level} />
    </g>
  );
}

// The full logo: woven hash and the word. Size it by height, e.g. className="h-7".
// The same colours are used in the light and the dark theme.
export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox={lockupViewBox} className={`w-auto ${className ?? ""}`} role="img" aria-label="Hashtrik">
      <g transform={`scale(${lockupHashScale})`}>
        <Hash upright={logoBlue} level={logoCoral} />
      </g>
      <path d={wordHash} fill={logoBlue} />
      <path d={wordTrik} fill={logoCoral} />
    </svg>
  );
}

// The hash on its own, for tight spaces.
export function LogoSymbol({ className }: { className?: string }) {
  return (
    <svg viewBox={symbolViewBox} className={className} aria-hidden="true">
      <Hash upright={logoBlue} level={logoCoral} />
    </svg>
  );
}
