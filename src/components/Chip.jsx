import { stState } from "../theme.js";

export default function Chip({ id, num, status, onTap }) {
  const s = stState(status);
  return (
    <button
      onClick={() => onTap(id)}
      style={{
        background: s.bg,
        border: `1.5px solid ${s.border}`,
        borderRadius: 8,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 52,
        gap: 2,
        padding: "4px 2px",
        touchAction: "manipulation",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <span style={{ fontSize: 10, color: s.text, fontWeight: 700 }}>{num}</span>
      <span style={{ fontSize: 18, color: s.text, lineHeight: 1 }}>{s.icon}</span>
    </button>
  );
}
