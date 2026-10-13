import { ImageResponse } from "next/og";

// Lives under [locale] on purpose: the middleware redirects every
// unprefixed path to /{locale}/…, so a root-level /icon would 404.
export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1A1917",
          color: "#F7F5F0",
          fontSize: 40,
          fontWeight: 600,
          fontFamily: "Inter, system-ui, sans-serif",
          letterSpacing: -1,
          borderRadius: 14,
        }}
      >
        H
      </div>
    ),
    { ...size },
  );
}
