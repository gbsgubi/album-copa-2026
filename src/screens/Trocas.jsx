import { useMemo, useState } from "react";
import { C } from "../theme.js";
import { FWC_ABERTURA, FWC_MUSEU, CC_SERIES, GROUPS, TOTAL } from "../data/teams.js";

const ALL_STICKERS = [
  ...FWC_ABERTURA.map((s) => ({ id: s.id, code: s.code, label: s.label, teamName: "FWC Abertura", flag: "⭐" })),
  ...FWC_MUSEU.map((s) => ({ id: s.id, code: s.code, label: s.label, teamName: "FWC Museu Copa", flag: "🏛️" })),
  ...CC_SERIES.map((s) => ({ id: s.id, code: s.code, label: s.label, teamName: "Coca-Cola", flag: "🥤" })),
  ...GROUPS.flatMap((g) =>
    g.teams.flatMap((t) =>
      t.stickers.map((s) => ({ id: s.id, code: s.code, label: s.label, teamName: t.name, flag: t.flag }))
    )
  ),
];

function TabBtn({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        flex: 1,
        background: active ? C.accent : C.bg,
        border: `1px solid ${active ? C.accent : C.border}`,
        borderRadius: 10,
        padding: "9px 4px",
        color: active ? "#fff" : C.textMuted,
        fontSize: 13,
        fontWeight: 700,
        fontFamily: "'Barlow Condensed',sans-serif",
        cursor: "pointer",
        touchAction: "manipulation",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      {children}
    </button>
  );
}

export default function Trocas({ stickers }) {
  const [view, setView] = useState("repetidas");
  const [feedback, setFeedback] = useState("");

  const dupList = useMemo(
    () => ALL_STICKERS.filter((s) => (stickers[s.id] || 0) >= 2),
    [stickers]
  );

  const missList = useMemo(
    () => ALL_STICKERS.filter((s) => (stickers[s.id] || 0) === 0),
    [stickers]
  );

  const totalDupCopies = useMemo(
    () => dupList.reduce((sum, s) => sum + ((stickers[s.id] || 0) - 1), 0),
    [dupList, stickers]
  );

  const handleShare = async (type) => {
    const list = type === "repetidas" ? dupList : missList;
    const grouped = {};
    list.forEach((s) => {
      if (!grouped[s.teamName]) grouped[s.teamName] = { flag: s.flag, items: [] };
      const extra = (stickers[s.id] || 0) - 1;
      grouped[s.teamName].items.push(
        type === "repetidas" && extra > 1 ? `${s.code}(×${extra})` : s.code
      );
    });
    const header =
      type === "repetidas"
        ? `🔄 Minhas repetidas — Copa 2026 (${totalDupCopies} cópia${totalDupCopies !== 1 ? "s" : ""} extra)\n`
        : `📋 Figurinhas que faltam — Copa 2026 (${missList.length}/${TOTAL})\n`;
    const lines = [header];
    Object.entries(grouped).forEach(([team, { flag, items }]) => {
      lines.push(`${flag} ${team}: ${items.join(", ")}`);
    });
    const text = lines.join("\n");

    if (navigator.share) {
      try {
        await navigator.share({ title: header.trim(), text });
        return;
      } catch {}
    }
    try {
      await navigator.clipboard.writeText(text);
      setFeedback("Copiado!");
    } catch {
      setFeedback("Erro ao copiar");
    }
    setTimeout(() => setFeedback(""), 2500);
  };

  return (
    <div style={{ padding: "16px 16px 24px" }}>
      {/* Tabs */}
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <TabBtn active={view === "repetidas"} onClick={() => setView("repetidas")}>
          🔄 Repetidas
        </TabBtn>
        <TabBtn active={view === "faltas"} onClick={() => setView("faltas")}>
          📋 Faltas
        </TabBtn>
      </div>

      {/* Repetidas */}
      {view === "repetidas" && (
        <>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <h2
              style={{
                fontFamily: "'Bebas Neue',cursive",
                fontSize: 20,
                color: C.gold,
                margin: 0,
                letterSpacing: 1,
              }}
            >
              REPETIDAS
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
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
                {totalDupCopies} extra{totalDupCopies !== 1 ? "s" : ""}
              </span>
              {dupList.length > 0 && (
                <button
                  onClick={() => handleShare("repetidas")}
                  style={{
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    borderRadius: 20,
                    padding: "4px 12px",
                    fontSize: 13,
                    color: C.textSec,
                    cursor: "pointer",
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 700,
                    touchAction: "manipulation",
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  {feedback || "Compartilhar"}
                </button>
              )}
            </div>
          </div>

          {dupList.length === 0 ? (
            <div style={{ padding: "60px 24px", textAlign: "center", color: C.textMuted }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
              <p style={{ fontSize: 17, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, color: C.textSec }}>
                Nenhuma repetida ainda!
              </p>
              <p style={{ fontSize: 13, lineHeight: 1.6 }}>
                Quando você marcar ↺, a figurinha aparecerá aqui.
              </p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {dupList.map((s) => {
                const extra = (stickers[s.id] || 0) - 1;
                return (
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
                      <div style={{ fontSize: 15, fontWeight: 700, fontFamily: "'Barlow Condensed',sans-serif", color: C.textPrimary }}>
                        {s.teamName}
                      </div>
                      <div style={{ fontSize: 12, color: C.textMuted, marginTop: 2 }}>
                        {s.code} · {s.label}
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        background: C.dup,
                        color: C.dupText,
                        borderRadius: 20,
                        padding: "3px 10px",
                        border: `1px solid ${C.dupBorder}`,
                        whiteSpace: "nowrap",
                      }}
                    >
                      +{extra} extra{extra !== 1 ? "s" : ""}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}

      {/* Faltas */}
      {view === "faltas" && (
        <>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <h2
              style={{
                fontFamily: "'Bebas Neue',cursive",
                fontSize: 20,
                color: C.gold,
                margin: 0,
                letterSpacing: 1,
              }}
            >
              FALTAM
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  background: C.surface,
                  color: C.gold,
                  borderRadius: 20,
                  padding: "4px 12px",
                  border: `1px solid ${C.border}`,
                }}
              >
                {missList.length}/{TOTAL}
              </span>
              {missList.length > 0 && (
                <button
                  onClick={() => handleShare("faltas")}
                  style={{
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    borderRadius: 20,
                    padding: "4px 12px",
                    fontSize: 13,
                    color: C.textSec,
                    cursor: "pointer",
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 700,
                    touchAction: "manipulation",
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  {feedback || "Compartilhar"}
                </button>
              )}
            </div>
          </div>

          {missList.length === 0 ? (
            <div style={{ padding: "60px 24px", textAlign: "center", color: C.textMuted }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>🏆</div>
              <p style={{ fontSize: 17, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, color: C.gold }}>
                Álbum completo!
              </p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {missList.map((s) => (
                <div
                  key={s.id}
                  style={{
                    background: C.surface,
                    borderRadius: 14,
                    padding: "12px 16px",
                    border: `1px solid ${C.border}`,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <span style={{ fontSize: 28, lineHeight: 1 }}>{s.flag}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 15, fontWeight: 700, fontFamily: "'Barlow Condensed',sans-serif", color: C.textPrimary }}>
                      {s.teamName}
                    </div>
                    <div style={{ fontSize: 12, color: C.textMuted, marginTop: 2 }}>
                      {s.code} · {s.label}
                    </div>
                  </div>
                  <span style={{ fontSize: 18, color: C.missText }}>—</span>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
