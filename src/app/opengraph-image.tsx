import { ImageResponse } from "next/og";
import { brand } from "@/lib/brand";

export const alt = `${brand.name} — ${brand.claim}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Tokens de marca (no podemos usar variables CSS dentro de ImageResponse).
const INK = "#0A0E1A";
const BONE = "#EFEDE6";
const AMBER = "#F0B73E";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: INK,
          padding: "80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "flex-end", color: BONE }}>
          <span style={{ fontSize: 64, fontWeight: 800, letterSpacing: "-3px" }}>
            Nikko
          </span>
          <span
            style={{
              fontSize: 36,
              fontStyle: "italic",
              color: AMBER,
              marginLeft: 6,
              marginBottom: 6,
            }}
          >
            Eco.
          </span>
        </div>

        {/* Claim */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 84,
              fontWeight: 800,
              letterSpacing: "-4px",
              lineHeight: 1,
              color: "rgba(239,237,230,0.55)",
            }}
          >
            Tus objetivos,
          </span>
          <span
            style={{
              fontSize: 84,
              fontWeight: 800,
              letterSpacing: "-4px",
              lineHeight: 1,
              color: AMBER,
            }}
          >
            nuestra meta.
          </span>
        </div>

        {/* Pie */}
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "rgba(239,237,230,0.5)",
          }}
        >
          Grupo de servicio inmobiliario integral
        </div>

        {/* Isotipo — stamp esquina inferior derecha */}
        <div
          style={{
            position: "absolute",
            right: 80,
            bottom: 76,
            display: "flex",
            alignItems: "flex-end",
            color: BONE,
          }}
        >
          <span style={{ fontSize: 80, fontWeight: 900, letterSpacing: "-5px", lineHeight: 1 }}>
            N
          </span>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: AMBER,
              marginLeft: 2,
              marginBottom: 12,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
