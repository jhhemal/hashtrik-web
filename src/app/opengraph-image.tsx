import { ImageResponse } from "next/og";
import {
  hashLevel,
  hashStroke,
  hashUpright,
  lockupAspect,
  lockupHashScale,
  lockupViewBox,
  logoBlue,
  logoCoral,
  wordHash,
  wordTrik,
} from "@/lib/logo";

// The preview picture shown when a link to the site is shared.
export const alt = "Hashtrik: we turn rough ideas into working software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ink = "#141b34";
const muted = "#5b6482";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: ink,
          backgroundColor: "#f7f8fc",
          backgroundImage:
            "radial-gradient(circle at 92% 0%, rgba(74,92,255,0.28) 0%, rgba(74,92,255,0) 46%), radial-gradient(circle at 0% 100%, rgba(232,71,43,0.2) 0%, rgba(232,71,43,0) 42%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* The main logo in its own colours, on the site's light background. */}
        <svg width={Math.round(104 * lockupAspect)} height="104" viewBox={lockupViewBox}>
          <g transform={`scale(${lockupHashScale})`} fill="none" strokeWidth={hashStroke} strokeLinecap="round">
            <path d={hashUpright} stroke={logoBlue} />
            <path d={hashLevel} stroke={logoCoral} />
          </g>
          <path d={wordHash} fill={logoBlue} />
          <path d={wordTrik} fill={logoCoral} />
        </svg>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 80, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2.5, maxWidth: 980 }}>
            We turn rough ideas into working software.
          </div>
          <div style={{ marginTop: 24, fontSize: 32, color: muted }}>
            Web apps, mobile apps and AI tools. The team behind Oikko.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: muted }}>
          <div>hashtrik.com</div>
          <div>Lansdale, Pennsylvania</div>
        </div>
      </div>
    ),
    size,
  );
}
