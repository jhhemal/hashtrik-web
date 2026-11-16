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
            <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#3346ff" strokeWidth="2.6" strokeLinecap="round">
              <path d="M9.5 4l-2 16M16.5 4l-2 16M4.5 9h16M3.5 15h16" />
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
