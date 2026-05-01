import { C, stState } from "../theme.js";
import { ABERTURA } from "../data/teams.js";
import ProgressBar from "../components/ProgressBar.jsx";

export default function Abertura({ stickers, onToggle }) {
  let have = 0;
  ABERTURA.forEach((s) => {
    if ((stickers[s.id] || 0) >= 1) have++;
  });

  return (
    <div style={{ padding: "16px 16px 24px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <h2
          style={{
            fontFamily: "'Bebas Neue',cursive",
            fontSize: 22,
            color: C.gold,
            margin: 0,
            letterSpacing: 1,
          }}
        >
          📖 ABERTURA & ESTÁDIOS
        </h2>
        <span style={{ fontSize: 14, color: C.textSec, fontWeight: 700 }}>
          {have}/20
        </span>
      </div>
      <ProgressBar
        pct={Math.round((have / 20) * 100)}
        color={have === 20 ? C.gold : C.accent}
        height={6}
      />
      <div
        style={{
          marginTop: 16,
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 8,
        }}
      >
        {ABERTURA.map((s) => {
          const status = stickers[s.id] || 0;
          const style_ = stState(status);
          return (
            <button
              key={s.id}
              onClick={() => onToggle(s.id)}
              style={{
                background: style_.bg,
                border: `1.5px solid ${style_.border}`,
                borderRadius: 10,
                padding: "10px 4px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
                minHeight: 70,
                touchAction: "manipulation",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <span style={{ fontSize: 10, fontWeight: 700, color: style_.text }}>
                {s.num}
              </span>
              <span
                style={{
                  fontSize: 9,
                  color: style_.text,
                  textAlign: "center",
                  lineHeight: 1.3,
                  padding: "0 3px",
                  wordBreak: "break-word",
                }}
              >
                {s.label.length > 12 ? s.label.slice(0, 11) + "…" : s.label}
              </span>
              <span style={{ fontSize: 16, color: style_.text, lineHeight: 1 }}>
                {style_.icon}
              </span>
            </button>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          gap: 16,
          justifyContent: "center",
          marginTop: 12,
          fontSize: 11,
          color: C.textMuted,
        }}
      >
        <span>— Falta</span>
        <span style={{ color: C.haveText }}>✓ Tenho</span>
        <span style={{ color: C.dupText }}>↺ Repetida</span>
      </div>
    </div>
  );
}
