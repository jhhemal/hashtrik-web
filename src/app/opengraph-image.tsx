import { ImageResponse } from "next/og";

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
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 24,
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="58" height="58" viewBox="0 0 64 64">
          <path d="M21 8v48M43 8v48M8 21h48M8 43h48" fill="none" stroke="#141b34" strokeWidth="6" strokeLinecap="round" />
          <rect x="26.5" y="26.5" width="11" height="11" rx="2.5" fill="#3346ff" />
        </svg>
          </div>
          <div style={{ fontSize: 46, fontWeight: 700 }}>Hashtrik</div>
        </div>

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
