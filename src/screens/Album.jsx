import { useCallback, useState } from "react";
import { C } from "../theme.js";
import { CONFS, TEAMS, teamStickers } from "../data/teams.js";
import ProgressBar from "../components/ProgressBar.jsx";
import Chip from "../components/Chip.jsx";

export default function Album({ stickers, onToggle, initConf }) {
  const [conf, setConf] = useState(initConf || "CONMEBOL");
  const [openTeam, setOpen] = useState(null);

  const teams = TEAMS.filter((t) => t.c === conf);

  const teamProgress = useCallback(
    (t) => {
      const list = teamStickers(t);
      let have = 0;
      let dup = 0;
      list.forEach((s) => {
        const v = stickers[s.id] || 0;
        if (v >= 1) have++;
        if (v === 2) dup++;
      });
      return { have, dup, pct: Math.round((have / 20) * 100), full: have === 20 };
    },
    [stickers]
  );

  return (
    <div style={{ padding: "0 0 16px" }}>
      <div
        style={{
          overflowX: "auto",
          display: "flex",
          gap: 6,
          padding: "12px 16px",
          scrollbarWidth: "none",
          background: C.surface,
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        {CONFS.map((c) => (
          <button
            key={c.id}
            onClick={() => {
              setConf(c.id);
              setOpen(null);
            }}
            style={{
              padding: "8px 16px",
              borderRadius: 99,
              border: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
              fontSize: 13,
              fontWeight: 700,
              fontFamily: "'Barlow Condensed',sans-serif",
              letterSpacing: 0.5,
              background: conf === c.id ? C.accent : C.bg,
              color: conf === c.id ? "#fff" : C.textMuted,
              touchAction: "manipulation",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {c.icon} {c.label}
          </button>
        ))}
      </div>

      <div
        style={{
          padding: "12px 16px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {teams.map((team) => {
          const prog = teamProgress(team);
          const isOpen = openTeam === team.id;
          const list = teamStickers(team);

          return (
            <div
              key={team.id}
              style={{
                background: C.surface,
                borderRadius: 16,
                border: `1px solid ${prog.full ? C.accent + "66" : C.border}`,
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => setOpen(isOpen ? null : team.id)}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "14px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  color: C.textPrimary,
                  touchAction: "manipulation",
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                <span style={{ fontSize: 36, lineHeight: 1 }}>{team.f}</span>
                <div style={{ flex: 1, textAlign: "left" }}>
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      fontFamily: "'Barlow Condensed',sans-serif",
                    }}
                  >
                    {team.n}
                    {prog.full && (
                      <span
                        style={{ marginLeft: 8, fontSize: 11, color: C.gold }}
                      >
                        ✦ COMPLETO
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginTop: 6,
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <ProgressBar
                        pct={prog.pct}
                        color={prog.full ? C.gold : C.accent}
                        height={4}
                      />
                    </div>
                    <span
                      style={{
                        fontSize: 11,
                        color: prog.full ? C.gold : C.textSec,
                        minWidth: 44,
                        textAlign: "right",
                      }}
                    >
                      {prog.have}/20{prog.dup > 0 ? ` ·${prog.dup}↺` : ""}
                    </span>
                  </div>
                </div>
                <span
                  style={{
                    fontSize: 18,
                    color: C.textMuted,
                    transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                >
                  ›
                </span>
              </button>

              {isOpen && (
                <div style={{ padding: "0 16px 16px" }}>
                  <div
                    style={{
                      background: C.bg,
                      borderRadius: 10,
                      padding: 10,
                      display: "grid",
                      gridTemplateColumns: "repeat(5,1fr)",
                      gap: 6,
                    }}
                  >
                    {list.map((s) => (
                      <Chip
                        key={s.id}
                        id={s.id}
                        num={s.num}
                        status={stickers[s.id] || 0}
                        onTap={onToggle}
                      />
                    ))}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: 16,
                      justifyContent: "center",
                      marginTop: 8,
                      fontSize: 11,
                      color: C.textMuted,
                    }}
                  >
                    <span>— Falta</span>
                    <span style={{ color: C.haveText }}>✓ Tenho</span>
                    <span style={{ color: C.dupText }}>↺ Repetida</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
