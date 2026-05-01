import { useMemo } from "react";
import { C } from "../theme.js";
import { FWC_ABERTURA, FWC_MUSEU, CC_SERIES, GROUPS } from "../data/teams.js";

export default function Trocas({ stickers }) {
  const list = useMemo(() => {
    const all = [
      ...FWC_ABERTURA.map((s) => ({ id: s.id, code: s.code, label: s.label, teamName: "FWC Abertura",   flag: "⭐" })),
      ...FWC_MUSEU.map((s)    => ({ id: s.id, code: s.code, label: s.label, teamName: "FWC Museu Copa", flag: "🏛️" })),
      ...CC_SERIES.map((s)    => ({ id: s.id, code: s.code, label: s.label, teamName: "Coca-Cola",       flag: "🥤" })),
      ...GROUPS.flatMap((g) =>
        g.teams.flatMap((t) =>
          t.stickers.map((s) => ({ id: s.id, code: s.code, label: s.label, teamName: t.name, flag: t.flag }))
        )
      ),
    ];
    return all.filter((s) => (stickers[s.id] || 0) === 2);
  }, [stickers]);

  if (list.length === 0)
    return (
      <div style={{ padding: "60px 24px", textAlign: "center", color: C.textMuted }}>
        <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
        <p
          style={{
            fontSize: 17,
            fontFamily: "'Barlow Condensed',sans-serif",
            fontWeight: 700,
            color: C.textSec,
          }}
        >
          Nenhuma repetida ainda!
        </p>
        <p style={{ fontSize: 13, lineHeight: 1.6 }}>
          Quando você marcar uma figurinha como ↺, ela aparecerá aqui para facilitar a troca.
        </p>
      </div>
    );

  return (
    <div style={{ padding: "16px 16px 24px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 14,
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
          🔄 REPETIDAS
        </h2>
        <span
          style={{
            fontSize: 13,
            fontWeight: 700,
            background: C.dup,
            color: C.dupText,
            borderRadius: 20,
            padding: "4px 12px",
            border: `1px solid ${C.dupBorder}`,
          }}
        >
          {list.length} {list.length === 1 ? "figurinha" : "figurinhas"}
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {list.map((s) => (
          <div
            key={s.id}
            style={{
              background: C.surface,
              borderRadius: 14,
              padding: "12px 16px",
              border: `1px solid ${C.dupBorder}33`,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span style={{ fontSize: 28, lineHeight: 1 }}>{s.flag}</span>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  fontFamily: "'Barlow Condensed',sans-serif",
                  color: C.textPrimary,
                }}
              >
                {s.teamName}
              </div>
              <div style={{ fontSize: 12, color: C.textMuted, marginTop: 2 }}>
                {s.code} · {s.label}
              </div>
            </div>
            <span style={{ fontSize: 20, color: C.dupText }}>↺</span>
          </div>
        ))}
      </div>
    </div>
  );
}
