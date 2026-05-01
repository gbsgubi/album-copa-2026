import { stState } from "../theme.js";
import { C } from "../theme.js";

export default function Chip({ id, code, label, foil, status, onTap }) {
  const s = stState(status);
  const short = label.length > 11 ? label.slice(0, 10) + "…" : label;
  return (
    <button
      onClick={() => onTap(id)}
      style={{
        background: s.bg,
        border: `1.5px solid ${foil ? C.gold + "aa" : s.border}`,
        borderRadius: 8,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 68,
        gap: 1,
        padding: "5px 3px",
        touchAction: "manipulation",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <span style={{ fontSize: 9, color: foil && status === 0 ? C.gold : s.text, fontWeight: 700 }}>
        {code}
      </span>
      <span style={{ fontSize: 17, color: s.text, lineHeight: 1 }}>{s.icon}</span>
      <span
        style={{
          fontSize: 8,
          color: s.text,
          textAlign: "center",
          maxWidth: "100%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          padding: "0 2px",
        }}
      >
        {short}
      </span>
    </button>
  );
}
