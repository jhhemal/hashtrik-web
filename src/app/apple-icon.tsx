import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#f7f8fc" }}>
        <svg width="124" height="124" viewBox="0 0 64 64">
          <path d="M21 8v48M43 8v48M8 21h48M8 43h48" fill="none" stroke="#141b34" strokeWidth="6" strokeLinecap="round" />
          <rect x="26.5" y="26.5" width="11" height="11" rx="2.5" fill="#3346ff" />
        </svg>
      </div>
    ),
    size,
  );
}
