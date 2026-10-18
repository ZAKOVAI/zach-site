import { ImageResponse } from "next/og";

import { loadGeistFonts } from "@/lib/fonts";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
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
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: -0.6,
        }}
      >
        ZB
      </div>
    ),
    { ...size, fonts },
  );
}
