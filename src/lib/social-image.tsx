import { ImageResponse } from "next/og";

import { LOCATION, SITE_NAME } from "@/data/site";
import { loadGeistFonts } from "@/lib/fonts";

interface ImageSize {
  width: number;
  height: number;
}

export async function createSocialImage(size: ImageSize) {
  const fonts = await loadGeistFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#050505",
          backgroundImage:
            "radial-gradient(circle at 18% 0%, rgba(255,255,255,0.14), rgba(255,255,255,0) 42%)",
          color: "#ededed",
          padding: "72px",
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "Geist Mono",
            fontSize: 22,
            letterSpacing: 4,
            color: "#a3a3a3",
          }}
        >
          <span>ZB</span>
          <span>{LOCATION.toUpperCase()}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 500,
              letterSpacing: -3,
              lineHeight: 0.95,
            }}
          >
            {SITE_NAME}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 32,
              lineHeight: 1.35,
              color: "#a3a3a3",
            }}
          >
            Founder of Zakov AI
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Geist Mono",
            fontSize: 22,
            letterSpacing: 2,
            color: "#a3a3a3",
          }}
        >
          ZACH.RUNS-ON.DEV
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
