import { ImageResponse } from "next/og";
import { hashLevel, hashStroke, hashUpright, logoBlue, logoCoral, symbolViewBox } from "@/lib/logo";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#f7f8fc" }}>
        <svg width="128" height="128" viewBox={symbolViewBox} fill="none" strokeWidth={hashStroke} strokeLinecap="round">
          <path d={hashUpright} stroke={logoBlue} />
          <path d={hashLevel} stroke={logoCoral} />
        </svg>
      </div>
    ),
    size,
  );
}
