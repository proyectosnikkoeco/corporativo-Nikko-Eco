import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const BONE = "#EFEDE6";
const INK = "#0A0E1A";
const AMBER = "#F0B73E";

export default function AppleIcon() {
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
            fontSize: 150,
            fontWeight: 900,
            color: INK,
            letterSpacing: -8,
            lineHeight: 1,
            transform: "translate(-10px, 6px)",
          }}
        >
          N
        </span>
        <div
          style={{
            position: "absolute",
            right: 32,
            bottom: 50,
            width: 30,
            height: 30,
            borderRadius: 999,
            background: AMBER,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
