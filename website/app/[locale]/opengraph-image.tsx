import { ImageResponse } from "next/og";

// Lives under [locale] on purpose: the middleware redirects every
// unprefixed path to /{locale}/…, so a root-level /opengraph-image would 404.
export const runtime = "edge";
export const alt = "Holo — Not just a fridge app";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * OG image: hero mockup on ivory with the one-line tagline.
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
          background: "#F7F5F0",
          fontFamily: "Inter, system-ui, sans-serif",
          color: "#24221F",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Copy */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: -0.5,
              color: "#24221F",
            }}
          >
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
            <span style={{ display: "flex" }}>a fridge app.</span>
          </div>

          <div
            style={{
              marginTop: 30,
              display: "flex",
              fontSize: 26,
              lineHeight: 1.4,
              color: "#6F6A62",
              maxWidth: 560,
            }}
          >
            Holo knows what&apos;s in your fridge, what&apos;s running out, and what&apos;s for dinner.
          </div>

          {/* Single turquoise rule — the accent device */}
          <div
            style={{
              marginTop: 36,
              width: 72,
              height: 3,
              background: "#32C0B5",
              display: "flex",
            }}
          />
        </div>

        {/* Mockup — cropped at the bottom edge */}
        <div
          style={{
            position: "absolute",
            right: 112,
            top: 86,
            width: 300,
            height: 650,
            borderRadius: 48,
            background: "#1A1917",
            padding: 8,
            display: "flex",
            boxShadow: "0 30px 60px -30px rgba(36,34,31,0.35)",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 40,
              overflow: "hidden",
              background: "#0F0E0C",
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
