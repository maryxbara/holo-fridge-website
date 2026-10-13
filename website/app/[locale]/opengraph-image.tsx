import { ImageResponse } from "next/og";

// Lives under [locale] on purpose: the middleware redirects every
// unprefixed path to /{locale}/…, so a root-level /opengraph-image would 404.
export const runtime = "edge";
export const alt = "Holo — Not just a fridge app";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * OG image: hero mockup on the pearl gradient with the one-line tagline.
 * English on every locale until the copy is native-reviewed.
 */
export default async function OG() {
  let mockupSrc: string | null = null;
  try {
    const res = await fetch(new URL("../../public/screens/home-hero.png", import.meta.url));
    if (res.ok) {
      const buf = await res.arrayBuffer();
      mockupSrc = `data:image/png;base64,${bufferToBase64(buf)}`;
    }
  } catch {
    mockupSrc = null;
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
          padding: "72px 88px",
          background: "linear-gradient(180deg, #F8FCFF 0%, #ECF5F7 50%, #F5F7FA 100%)",
          fontFamily: "Inter, system-ui, sans-serif",
          color: "#262626",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top-right halo */}
        <div
          style={{
            position: "absolute",
            top: -220,
            right: -180,
            width: 820,
            height: 820,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(166,245,232,0.55) 0%, rgba(166,245,232,0) 70%)",
            display: "flex",
          }}
        />
        {/* Copy */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 20,
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
            Holo
          </div>

          <div
            style={{
              marginTop: 28,
              display: "flex",
              flexDirection: "column",
              fontSize: 84,
              fontWeight: 600,
              lineHeight: 1.02,
              letterSpacing: -3,
            }}
          >
            <span style={{ display: "flex" }}>Not just</span>
            <span
              style={{
                display: "flex",
                background: "linear-gradient(120deg, #1E8E86 0%, #32C0B5 55%, #5ED6CC 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              a fridge app.
            </span>
          </div>

          <div
            style={{
              marginTop: 30,
              display: "flex",
              fontSize: 26,
              lineHeight: 1.4,
              color: "#6B7280",
              maxWidth: 560,
            }}
          >
            Holo knows what&apos;s in your fridge, what&apos;s running out, and what&apos;s for dinner.
          </div>

        </div>

        {/* Mockup — glowing shell, cropped at the bottom edge */}
        <div
          style={{
            position: "absolute",
            right: 112,
            top: 86,
            width: 300,
            height: 650,
            borderRadius: 48,
            background: "#262626",
            padding: 8,
            display: "flex",
            boxShadow:
              "0 40px 80px -20px rgba(38,38,38,0.3), 0 0 0 1px rgba(166,245,232,0.35), 0 0 24px rgba(50,192,181,0.35), 0 0 60px rgba(50,192,181,0.2)",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 40,
              overflow: "hidden",
              background: "#000",
              display: "flex",
            }}
          >
            {mockupSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={mockupSrc}
                alt=""
                width={284}
                height={634}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            ) : null}
          </div>
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
    binary += String.fromCharCode.apply(null, Array.from(bytes.subarray(i, i + chunk)));
  }
  return btoa(binary);
}
