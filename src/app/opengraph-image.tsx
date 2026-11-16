import { ImageResponse } from "next/og";
import { hashLevel, hashStroke, hashUpright, lockupAspect, lockupHashScale, lockupViewBox, wordHash, wordTrik } from "@/lib/logo";

// The preview picture shown when a link to the site is shared.
export const alt = "Hashtrik: we turn rough ideas into working software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          color: "#ffffff",
          background: "linear-gradient(125deg, #2434e6 0%, #5b4bff 55%, #8b6cff 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* The logo in white: blue and coral would get lost on this background. */}
        <svg width={Math.round(84 * lockupAspect)} height="84" viewBox={lockupViewBox}>
          <g transform={`scale(${lockupHashScale})`} fill="none" stroke="#ffffff" strokeWidth={hashStroke} strokeLinecap="round">
            <path d={hashUpright} />
            <path d={hashLevel} />
          </g>
          <path d={wordHash} fill="#ffffff" />
          <path d={wordTrik} fill="#ffffff" />
        </svg>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 82, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2.5, maxWidth: 980 }}>
            We turn rough ideas into working software.
          </div>
          <div style={{ marginTop: 26, fontSize: 32, opacity: 0.85 }}>
            Web apps, mobile apps and AI tools. The team behind Oikko.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, opacity: 0.85 }}>
          <div>hashtrik.com</div>
          <div>Lansdale, Pennsylvania</div>
        </div>
      </div>
    ),
    size,
  );
}
