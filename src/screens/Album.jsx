import { useCallback, useState } from "react";
import { C } from "../theme.js";
import { GROUPS } from "../data/teams.js";
import ProgressBar from "../components/ProgressBar.jsx";
import Chip from "../components/Chip.jsx";

const GROUP_IDS = "ABCDEFGHIJKL".split("");

export default function Album({ stickers, onToggle, initGroup }) {
  const [groupId, setGroupId] = useState(initGroup || "A");
  const [openTeam, setOpen] = useState(null);

  const group = GROUPS.find((g) => g.id === groupId);

  const teamProgress = useCallback(
    (t) => {
      let have = 0;
      let dup = 0;
      t.stickers.forEach((s) => {
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
      {/* Group tabs */}
      <div
        style={{
          overflowX: "auto",
          display: "flex",
          gap: 4,
          padding: "10px 16px",
          scrollbarWidth: "none",
          background: C.surface,
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        {GROUP_IDS.map((id) => (
          <button
            key={id}
            onClick={() => { setGroupId(id); setOpen(null); }}
            style={{
              width: 36,
              height: 36,
              borderRadius: 99,
              border: "none",
              cursor: "pointer",
              fontSize: 14,
              fontWeight: 700,
              fontFamily: "'Bebas Neue',cursive",
              flexShrink: 0,
              background: groupId === id ? C.accent : C.bg,
              color: groupId === id ? "#fff" : C.textMuted,
              touchAction: "manipulation",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {id}
          </button>
        ))}
      </div>

      {/* Team list */}
      <div style={{ padding: "12px 16px", display: "flex", flexDirection: "column", gap: 8 }}>
        {group?.teams.map((team) => {
          const prog = teamProgress(team);
          const isOpen = openTeam === team.abv;

          return (
            <div
              key={team.abv}
              style={{
                background: C.surface,
                borderRadius: 16,
                border: `1px solid ${prog.full ? C.accent + "66" : C.border}`,
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => setOpen(isOpen ? null : team.abv)}
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
                <span style={{ fontSize: 34, lineHeight: 1 }}>{team.flag}</span>
                <div style={{ flex: 1, textAlign: "left" }}>
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      fontFamily: "'Barlow Condensed',sans-serif",
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: 6,
                    }}
                  >
                    {team.name}
                    {prog.full && (
                      <span style={{ fontSize: 11, color: C.gold }}>✦ COMPLETO</span>
                    )}
                    {team.warn && (
                      <span
                        style={{
                          fontSize: 10,
                          color: C.gold,
                          background: "#2a1a00",
                          borderRadius: 4,
                          padding: "1px 5px",
                          border: `1px solid ${C.gold}44`,
                        }}
                      >
                        Dados a confirmar
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
                        minWidth: 52,
                        textAlign: "right",
                      }}
                    >
                      {prog.have}/20{prog.dup > 0 ? ` · ${prog.dup}↺` : ""}
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
                      gridTemplateColumns: "repeat(4,1fr)",
                      gap: 6,
                    }}
                  >
                    {team.stickers.map((s) => (
                      <Chip
                        key={s.id}
                        id={s.id}
                        code={s.code}
                        label={s.label}
                        foil={s.foil}
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
