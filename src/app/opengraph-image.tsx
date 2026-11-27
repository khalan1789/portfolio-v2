import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Benjamin Ducau, développeur full stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BACKGROUND_COLOR = "#fef3e7";
const TYPOGRAPHY_COLOR = "#64523d";
const PRIMARY_COLOR = "#be4a1b";
const TERCARY_COLOR = "#2e1e0a";

const LOGO_PATH = join(process.cwd(), "public/images/logo_brandind_ouvert.svg");

async function loadLogoAsDataUrl() {
   const logoSvg = await readFile(LOGO_PATH, "utf-8");

   const logoBase64 = Buffer.from(logoSvg).toString("base64");

   return `data:image/svg+xml;base64,${logoBase64}`;
}

export default async function OpenGraphImage() {
   const logoSource = await loadLogoAsDataUrl();

   return new ImageResponse(
      <div
         style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 80,
            backgroundColor: BACKGROUND_COLOR,
            color: TYPOGRAPHY_COLOR,
         }}
      >
         {/* eslint-disable-next-line @next/next/no-img-element */}
         <img
            src={logoSource}
            width={110}
            height={140}
            alt=""
            style={{ marginBottom: 40 }}
         />
         <div style={{ display: "flex", fontSize: 88, color: TERCARY_COLOR }}>
            Benjamin Ducau
         </div>
         <div
            style={{
               display: "flex",
               marginTop: 16,
               fontSize: 48,
               color: PRIMARY_COLOR,
            }}
         >
            Développeur Full Stack
         </div>
         <div
            style={{
               display: "flex",
               marginTop: 40,
               fontSize: 34,
               color: TYPOGRAPHY_COLOR,
            }}
         >
            Sensibilité utilisateur, business et produit - Comprendre avant de
            construire
         </div>
      </div>,
      size,
   );
}
