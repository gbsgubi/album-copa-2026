import { C } from "../theme.js";

export default function ProgressBar({ pct, color = C.accent, height = 6 }) {
  return (
    <div
      style={{
        background: "#0a1a0d",
        borderRadius: 99,
        height,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${pct}%`,
          height: "100%",
          borderRadius: 99,
          background: color,
          transition: "width 0.4s ease",
        }}
      />
    </div>
  );
}
