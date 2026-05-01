import { useMemo, useState } from "react";
import { C, stState } from "../theme.js";
import { GROUPS, FWC_ABERTURA, FWC_MUSEU, CC_SERIES } from "../data/teams.js";

const ALL_STICKERS = [
  ...FWC_ABERTURA.map((s) => ({ ...s, teamName: "FWC Abertura", flag: "⭐" })),
  ...FWC_MUSEU.map((s) => ({ ...s, teamName: "FWC Museu Copa", flag: "🏛️" })),
  ...CC_SERIES.map((s) => ({ ...s, teamName: "Coca-Cola", flag: "🥤" })),
  ...GROUPS.flatMap((g) =>
    g.teams.flatMap((t) =>
      t.stickers.map((s) => ({ ...s, teamName: t.name, flag: t.flag }))
    )
  ),
];

export default function Busca({ stickers, onToggle }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return ALL_STICKERS.filter(
      (s) =>
        s.code.toLowerCase().includes(q) ||
        s.label.toLowerCase().includes(q) ||
        s.teamName.toLowerCase().includes(q)
    ).slice(0, 50);
  }, [query]);

  return (
    <div style={{ padding: "0 16px 24px" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          background: C.bg,
          paddingTop: 4,
          paddingBottom: 12,
          zIndex: 5,
        }}
      >
        <input
          type="search"
          placeholder="Buscar jogador, código ou seleção…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
          style={{
            width: "100%",
            boxSizing: "border-box",
            background: C.surface,
            border: `1px solid ${C.border}`,
            borderRadius: 12,
            padding: "12px 16px",
            fontSize: 15,
            color: C.textPrimary,
            fontFamily: "'Barlow Condensed',sans-serif",
            outline: "none",
            WebkitAppearance: "none",
          }}
        />
      </div>

      {query.trim().length === 0 && (
        <div style={{ textAlign: "center", padding: "60px 20px", color: C.textMuted }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
          <p style={{ fontSize: 15, lineHeight: 1.6, margin: 0 }}>
            Busque por nome do jogador,
            <br />
            código da figurinha ou seleção.
          </p>
          <p style={{ fontSize: 12, marginTop: 10, color: C.textMuted }}>
            Ex: "Vini", "BRA5", "Brasil"
          </p>
        </div>
      )}

      {query.trim().length === 1 && (
        <p style={{ textAlign: "center", color: C.textMuted, fontSize: 13 }}>
          Digite pelo menos 2 caracteres…
        </p>
      )}

      {query.trim().length >= 2 && results.length === 0 && (
        <div style={{ textAlign: "center", padding: "40px 0", color: C.textMuted }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>😕</div>
          <p style={{ fontSize: 15 }}>Nenhum resultado para "{query}"</p>
        </div>
      )}

      {results.length > 0 && (
        <>
          <p style={{ fontSize: 12, color: C.textMuted, margin: "0 0 10px" }}>
            {results.length === 50 ? "Primeiros 50 resultados" : `${results.length} resultado${results.length !== 1 ? "s" : ""}`}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {results.map((s) => {
              const status = stickers[s.id] || 0;
              const st = stState(status);
              return (
                <button
                  key={s.id}
                  onClick={() => onToggle(s.id)}
                  style={{
                    background: st.bg,
                    border: `1px solid ${st.border}`,
                    borderRadius: 14,
                    padding: "12px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    cursor: "pointer",
                    touchAction: "manipulation",
                    WebkitTapHighlightColor: "transparent",
                    color: C.textPrimary,
                    textAlign: "left",
                    width: "100%",
                  }}
                >
                  <span style={{ fontSize: 28, lineHeight: 1 }}>{s.flag}</span>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: 700,
                        color: st.text,
                        fontFamily: "'Barlow Condensed',sans-serif",
                      }}
                    >
                      {s.label}
                    </div>
                    <div style={{ fontSize: 12, color: C.textMuted, marginTop: 2 }}>
                      {s.code} · {s.teamName}
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: 20,
                      color: st.text,
                      minWidth: 28,
                      textAlign: "center",
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {st.icon}
                  </span>
                </button>
              );
            })}
          </div>
          {results.length === 50 && (
            <p style={{ textAlign: "center", fontSize: 12, color: C.textMuted, marginTop: 8 }}>
              Refine a busca para ver mais resultados
            </p>
          )}
        </>
      )}
    </div>
  );
}
