import { useMemo } from "react";
import { C } from "../theme.js";
import { GROUPS, ALL_IDS, TOTAL } from "../data/teams.js";
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
  const groupStats = useMemo(
    () =>
      GROUPS.map((g) => {
        const ids = g.teams.flatMap((t) => t.stickers.map((s) => s.id));
        let have = 0;
        ids.forEach((id) => { if ((stickers[id] || 0) >= 1) have++; });
        const total = ids.length;
        return { ...g, have, total, pct: Math.round((have / total) * 100) };
      }),
    [stickers]
  );

  const totHave = useMemo(() => {
    let n = 0;
    ALL_IDS.forEach((id) => { if ((stickers[id] || 0) >= 1) n++; });
    return n;
  }, [stickers]);

  const dups = useMemo(
    () => Object.values(stickers).filter((v) => v === 2).length,
    [stickers]
  );

  const pct = Math.round((totHave / TOTAL) * 100);

  return (
    <div style={{ padding: "0 16px 24px" }}>
      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(135deg,#0e2813 0%,#1a4a2a 50%,#0e2813 100%)",
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
          Álbum Panini · {TOTAL} figurinhas
        </p>
        <ProgressBar pct={pct} color={pct === 100 ? C.gold : C.accent} height={10} />
        <p style={{ fontSize: 13, color: C.textSec, marginTop: 8 }}>
          {totHave} / {TOTAL} &nbsp;·&nbsp; {pct}% completo
        </p>
      </div>

      {/* Stats */}
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        <StatPill val={totHave}        label="Tenho"     color={C.haveText} />
        <StatPill val={TOTAL - totHave} label="Faltam"   color={C.gold} />
        <StatPill val={dups}           label="Repetidas" color={C.blue} />
      </div>

      {/* Group cards */}
      <h2
        style={{
          fontFamily: "'Bebas Neue',cursive",
          fontSize: 18,
          color: C.gold,
          margin: "0 0 12px",
          letterSpacing: 1,
        }}
      >
        POR GRUPO
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {groupStats.map((g) => (
          <button
            key={g.id}
            onClick={() => onNav("album", g.id)}
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
            <div
              style={{
                fontFamily: "'Bebas Neue',cursive",
                fontSize: 22,
                color: C.gold,
                minWidth: 22,
              }}
            >
              {g.id}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", gap: 3, marginBottom: 6 }}>
                {g.teams.map((t) => (
                  <span key={t.abv} style={{ fontSize: 20 }}>{t.flag}</span>
                ))}
              </div>
              <ProgressBar
                pct={g.pct}
                color={g.pct === 100 ? C.gold : C.accent}
                height={4}
              />
            </div>
            <div style={{ textAlign: "right", minWidth: 44 }}>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  fontFamily: "'Bebas Neue',cursive",
                  color: g.pct === 100 ? C.gold : C.haveText,
                }}
              >
                {g.pct}%
              </div>
              <div style={{ fontSize: 10, color: C.textMuted }}>
                {g.have}/{g.total}
              </div>
            </div>
            <span style={{ fontSize: 14, color: C.textMuted }}>›</span>
          </button>
        ))}
      </div>

      {/* Legend */}
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
