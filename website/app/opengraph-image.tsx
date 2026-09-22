import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Holo Fridge — Smart Food & Fridge Assistant";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  // Load the transparent Holo render. If missing, render the layout
  // without the character (no fallback to logo, per spec).
  let hologramSrc: string | null = null;
  try {
    const res = await fetch(
      new URL("../public/holo-hologram.png", import.meta.url),
    );
    if (res.ok) {
      const buf = await res.arrayBuffer();
      const b64 = bufferToBase64(buf);
      hologramSrc = `data:image/png;base64,${b64}`;
    }
  } catch {
    hologramSrc = null;
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(180deg, #F8FCFF 0%, #ECF5F7 50%, #F5F7FA 100%)",
          fontFamily: "Inter, system-ui, sans-serif",
          color: "#262626",
          position: "relative",
        }}
      >
        {/* Top-right halo */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 800,
            height: 800,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(166,245,232,0.55) 0%, rgba(166,245,232,0) 70%)",
            display: "flex",
          }}
        />

        {/* LEFT — copy */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 620,
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#1E8E86",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 9999,
                background: "#32C0B5",
                boxShadow: "0 0 18px rgba(50,192,181,0.9)",
                display: "flex",
              }}
            />
            Holo Fridge
          </div>

          <div
            style={{
              marginTop: 28,
              fontSize: 92,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: -2,
              color: "#262626",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ display: "flex" }}>Your fridge,</span>
            <span
              style={{
                display: "flex",
                background:
                  "linear-gradient(120deg, #32C0B5 0%, #A6F5E8 60%, #32C0B5 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              finally smart.
            </span>
          </div>

          <div
            style={{
              marginTop: 28,
              fontSize: 28,
              lineHeight: 1.4,
              color: "#6B7280",
              display: "flex",
            }}
          >
            Track what you have, cook from it, waste less, and shop smarter.
          </div>
        </div>

        {/* RIGHT — Holo */}
        <div
          style={{
            position: "relative",
            width: 460,
            height: 460,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 420,
              height: 420,
              borderRadius: 9999,
              background:
                "radial-gradient(circle, rgba(166,245,232,0.65) 0%, rgba(166,245,232,0) 70%)",
              display: "flex",
            }}
          />
          {hologramSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={hologramSrc}
              alt="Holo"
              width={400}
              height={400}
              style={{ objectFit: "contain", zIndex: 3 }}
            />
          ) : (
            <div
              style={{
                width: 320,
                height: 320,
                borderRadius: 9999,
                background:
                  "radial-gradient(circle, rgba(166,245,232,0.85) 0%, rgba(166,245,232,0) 75%)",
                display: "flex",
                zIndex: 3,
              }}
            />
          )}
        </div>
      </div>
    ),
    { ...size },
  );
}

function bufferToBase64(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  let binary = "";
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode.apply(
      null,
      Array.from(bytes.subarray(i, i + chunk)),
    );
  }
  // btoa is available in the Edge runtime
  return btoa(binary);
}
