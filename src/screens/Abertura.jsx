import { C, stState } from "../theme.js";
import { FWC_ABERTURA, FWC_MUSEU, CC_SERIES } from "../data/teams.js";
import ProgressBar from "../components/ProgressBar.jsx";

function StickerCard({ id, code, label, sub, status, onToggle }) {
  const s = stState(status);
  return (
    <button
      onClick={() => onToggle(id)}
      style={{
        background: s.bg,
        border: `1.5px solid ${s.border}`,
        borderRadius: 10,
        padding: "10px 6px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        minHeight: 82,
        touchAction: "manipulation",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <span style={{ fontSize: 10, fontWeight: 700, color: s.text }}>{code}</span>
      <span style={{ fontSize: 18, color: s.text, lineHeight: 1 }}>{s.icon}</span>
      <span
        style={{
          fontSize: 9,
          color: s.text,
          textAlign: "center",
          lineHeight: 1.3,
          wordBreak: "break-word",
          padding: "0 2px",
        }}
      >
        {label.length > 16 ? label.slice(0, 15) + "…" : label}
      </span>
      {sub && <span style={{ fontSize: 8, color: C.textMuted }}>{sub}</span>}
    </button>
  );
}

function Section({ title, items, color, stickers, onToggle }) {
  const have = items.filter((s) => (stickers[s.id] || 0) >= 1).length;
  return (
    <div style={{ marginBottom: 24 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 8,
        }}
      >
        <h3
          style={{
            fontFamily: "'Bebas Neue',cursive",
            fontSize: 18,
            color,
            margin: 0,
            letterSpacing: 1,
          }}
        >
          {title}
        </h3>
        <span style={{ fontSize: 13, color: C.textSec, fontWeight: 700 }}>
          {have}/{items.length}
        </span>
      </div>
      <ProgressBar
        pct={Math.round((have / items.length) * 100)}
        color={have === items.length ? C.gold : color}
        height={5}
      />
      <div
        style={{
          marginTop: 12,
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 8,
        }}
      >
        {items.map((s) => (
          <StickerCard
            key={s.id}
            id={s.id}
            code={s.code}
            label={s.label}
            sub={s.sub}
            status={stickers[s.id] || 0}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
}

export default function Especiais({ stickers, onToggle }) {
  const totalHave =
    FWC_ABERTURA.filter((s) => (stickers[s.id] || 0) >= 1).length +
    FWC_MUSEU.filter((s) => (stickers[s.id] || 0) >= 1).length +
    CC_SERIES.filter((s) => (stickers[s.id] || 0) >= 1).length;
  const totalCount = FWC_ABERTURA.length + FWC_MUSEU.length + CC_SERIES.length;

  return (
    <div style={{ padding: "16px 16px 24px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
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
          ⭐ FIGURINHAS ESPECIAIS
        </h2>
        <span style={{ fontSize: 14, color: C.textSec, fontWeight: 700 }}>
          {totalHave}/{totalCount}
        </span>
      </div>

      <Section
        title="FWC Abertura"
        items={FWC_ABERTURA}
        color={C.accent}
        stickers={stickers}
        onToggle={onToggle}
      />
      <Section
        title="FWC Museu Copa"
        items={FWC_MUSEU}
        color={C.blue}
        stickers={stickers}
        onToggle={onToggle}
      />
      <Section
        title="Coca-Cola"
        items={CC_SERIES}
        color={C.red}
        stickers={stickers}
        onToggle={onToggle}
      />

      <div
        style={{
          display: "flex",
          gap: 16,
          justifyContent: "center",
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
