import { ImageResponse } from "next/og";

import { loadGeistFonts } from "@/lib/fonts";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const fonts = await loadGeistFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050505",
          color: "#ededed",
          fontFamily: "Geist",
          fontSize: 72,
          fontWeight: 500,
          letterSpacing: -2,
        }}
      >
        ZB
      </div>
    ),
    { ...size, fonts },
  );
}
