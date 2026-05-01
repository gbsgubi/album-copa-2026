import { useMemo } from "react";
import { C } from "../theme.js";
import { ABERTURA, CONFS, TEAMS, TOTAL, teamStickers } from "../data/teams.js";
import ProgressBar from "../components/ProgressBar.jsx";

function StatPill({ val, label, color }) {
  return (
    <div
      style={{
        flex: 1,
        background: C.surface,
        borderRadius: 12,
        padding: "12px 6px",
        textAlign: "center",
        border: `1px solid ${C.border}`,
      }}
    >
      <div
        style={{
          fontSize: 28,
          fontWeight: 900,
          color,
          fontFamily: "'Bebas Neue',cursive",
          lineHeight: 1,
        }}
      >
        {val}
      </div>
      <div
        style={{
          fontSize: 10,
          color: C.textMuted,
          marginTop: 2,
          letterSpacing: 0.8,
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function Home({ stickers, onNav }) {
  const confStats = useMemo(
    () =>
      CONFS.map((c) => {
        const teams = TEAMS.filter((t) => t.c === c.id);
        const total = teams.length * 20;
        let have = 0;
        teams.forEach((t) =>
          teamStickers(t).forEach((s) => {
            if ((stickers[s.id] || 0) >= 1) have++;
          })
        );
        return { ...c, have, total, pct: Math.round((have / total) * 100) };
      }),
    [stickers]
  );

  const totHave = useMemo(() => {
    let n = 0;
    [
      ...ABERTURA.map((s) => s.id),
      ...TEAMS.flatMap((t) => teamStickers(t).map((s) => s.id)),
    ].forEach((k) => {
      if ((stickers[k] || 0) >= 1) n++;
    });
    return n;
  }, [stickers]);

  const pct = Math.round((totHave / TOTAL) * 100);

  return (
    <div style={{ padding: "0 16px 24px" }}>
      <div
        style={{
          background:
            "linear-gradient(135deg,#0e2813 0%,#1a4a2a 50%,#0e2813 100%)",
          borderRadius: 20,
          padding: "24px 20px 20px",
          marginBottom: 20,
          border: `1px solid ${C.border}`,
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 52 }}>⚽</div>
        <h1
          style={{
            fontFamily: "'Bebas Neue',cursive",
            fontSize: 32,
            margin: "6px 0 2px",
            letterSpacing: 3,
            color: C.gold,
          }}
        >
          COPA 2026
        </h1>
        <p
          style={{
            fontSize: 11,
            color: C.textMuted,
            margin: "0 0 16px",
            letterSpacing: 1.5,
            textTransform: "uppercase",
          }}
        >
          Álbum Panini · 980 figurinhas
        </p>
        <ProgressBar pct={pct} color={pct === 100 ? C.gold : C.accent} height={10} />
        <p style={{ fontSize: 13, color: C.textSec, marginTop: 8 }}>
          {totHave} / {TOTAL} &nbsp;·&nbsp; {pct}% completo
        </p>
      </div>

      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        <StatPill val={totHave} label="Tenho" color={C.haveText} />
        <StatPill val={TOTAL - totHave} label="Faltam" color={C.gold} />
        <StatPill
          val={Object.values(stickers).filter((v) => v === 2).length}
          label="Repetidas"
          color={C.blue}
        />
      </div>

      <div style={{ marginBottom: 6 }}>
        <h2
          style={{
            fontFamily: "'Bebas Neue',cursive",
            fontSize: 18,
            color: C.gold,
            margin: "0 0 12px",
            letterSpacing: 1,
          }}
        >
          POR CONFEDERAÇÃO
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {confStats.map((c) => (
            <button
              key={c.id}
              onClick={() => onNav("album", c.id)}
              style={{
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: 14,
                padding: "12px 16px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 12,
                textAlign: "left",
                color: C.textPrimary,
                touchAction: "manipulation",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <span style={{ fontSize: 24 }}>{c.icon}</span>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    fontFamily: "'Barlow Condensed',sans-serif",
                    marginBottom: 6,
                  }}
                >
                  {c.label}
                  <span
                    style={{
                      fontSize: 11,
                      color: C.textMuted,
                      marginLeft: 8,
                    }}
                  >
                    {TEAMS.filter((t) => t.c === c.id).length} seleções
                  </span>
                </div>
                <ProgressBar
                  pct={c.pct}
                  color={c.pct === 100 ? C.gold : C.accent}
                  height={4}
                />
              </div>
              <div style={{ textAlign: "right", minWidth: 40 }}>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: c.pct === 100 ? C.gold : C.haveText,
                    fontFamily: "'Bebas Neue',cursive",
                  }}
                >
                  {c.pct}%
                </div>
                <div style={{ fontSize: 10, color: C.textMuted }}>
                  {c.have}/{c.total}
                </div>
              </div>
              <span style={{ fontSize: 14, color: C.textMuted }}>›</span>
            </button>
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: 20,
          background: C.surface,
          borderRadius: 12,
          padding: "12px 16px",
          border: `1px solid ${C.border}`,
        }}
      >
        <p
          style={{
            fontSize: 11,
            color: C.textMuted,
            margin: "0 0 8px",
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          Legenda
        </p>
        <div style={{ display: "flex", gap: 20, fontSize: 13, flexWrap: "wrap" }}>
          <span style={{ color: C.missText }}>— Falta</span>
          <span style={{ color: C.haveText }}>✓ Tenho</span>
          <span style={{ color: C.dupText }}>↺ Repetida</span>
        </div>
        <p style={{ fontSize: 11, color: C.textMuted, margin: "8px 0 0" }}>
          Toque nas figurinhas para alternar o estado.
        </p>
      </div>
    </div>
  );
}
