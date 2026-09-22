import { ImageResponse } from "next/og";

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
          background:
            "linear-gradient(135deg, #A6F5E8 0%, #32C0B5 100%)",
          color: "#FFFFFF",
          fontSize: 42,
          fontWeight: 700,
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
