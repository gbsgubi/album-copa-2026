export const C = {
  bg: "#05100a",
  surface: "#0a1c0e",
  surfaceHigh: "#0e2413",
  border: "#14291a",
  accent: "#22c55e",
  gold: "#f59e0b",
  blue: "#38bdf8",
  red: "#f87171",
  textPrimary: "#e8fdf0",
  textSec: "#6db88a",
  textMuted: "#3d6b50",
  have: "#14532d",
  haveBorder: "#16a34a",
  haveText: "#4ade80",
  dup: "#451a03",
  dupBorder: "#b45309",
  dupText: "#fbbf24",
  miss: "#0c1e11",
  missBorder: "#1a3a22",
  missText: "#2d5c3e",
};

export const stState = (status) => {
  if (!status || status <= 0) return { bg: C.miss, border: C.missBorder, text: C.missText, icon: "—" };
  if (status === 1) return { bg: C.have, border: C.haveBorder, text: C.haveText, icon: "✓" };
  const dups = status - 1;
  return { bg: C.dup, border: C.dupBorder, text: C.dupText, icon: dups > 1 ? `↺${dups}` : "↺" };
};
