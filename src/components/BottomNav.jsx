import { C } from "../theme.js";
import { NAV } from "../data/teams.js";

export default function BottomNav({ screen, onChange }) {
  return (
    <div
      style={{
        background: C.surface,
        borderTop: `1px solid ${C.border}`,
        display: "flex",
        padding: "8px 0 max(8px, env(safe-area-inset-bottom))",
        position: "sticky",
        bottom: 0,
        zIndex: 10,
      }}
    >
      {NAV.map(({ id, icon, label }) => {
        const active = screen === id;
        return (
          <button
            key={id}
            onClick={() => onChange(id)}
            style={{
              flex: 1,
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
              padding: "6px 4px",
              color: active ? C.accent : C.textMuted,
              touchAction: "manipulation",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <span style={{ fontSize: 22 }}>{icon}</span>
            <span
              style={{
                fontSize: 10,
                fontWeight: active ? 700 : 400,
                letterSpacing: 0.5,
                textTransform: "uppercase",
              }}
            >
              {label}
            </span>
            {active && (
              <div
                style={{
                  width: 20,
                  height: 2,
                  background: C.accent,
                  borderRadius: 99,
                  marginTop: 1,
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
