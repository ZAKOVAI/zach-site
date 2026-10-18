import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function loadGeistFonts() {
  const directory = join(process.cwd(), "node_modules/geist/dist/fonts");
  const [regular, medium, mono] = await Promise.all([
    readFile(join(directory, "geist-sans/Geist-Regular.ttf")),
    readFile(join(directory, "geist-sans/Geist-Medium.ttf")),
    readFile(join(directory, "geist-mono/GeistMono-Regular.ttf")),
  ]);

  return [
    { name: "Geist", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "Geist", data: medium, weight: 500 as const, style: "normal" as const },
    {
      name: "Geist Mono",
      data: mono,
      weight: 400 as const,
      style: "normal" as const,
    },
  ];
}
