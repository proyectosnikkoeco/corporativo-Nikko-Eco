import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

const BONE = "#EFEDE6";
const INK = "#0A0E1A";
const AMBER = "#F0B73E";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: BONE,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <span
          style={{
            fontSize: 54,
            fontWeight: 900,
            color: INK,
            letterSpacing: -3,
            lineHeight: 1,
            transform: "translate(-4px, 2px)",
          }}
        >
          N
        </span>
        <div
          style={{
            position: "absolute",
            right: 11,
            bottom: 18,
            width: 11,
            height: 11,
            borderRadius: 999,
            background: AMBER,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
