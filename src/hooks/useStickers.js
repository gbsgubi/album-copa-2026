import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "wc2026_album_v3";
const MAX_STATUS = 5; // 0=falta, 1=tenho, 2-5=1-4 repetidas

export function useStickers() {
  const [stickers, setStickers] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setStickers(JSON.parse(raw));
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const t = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stickers));
      } catch {}
    }, 300);
    return () => clearTimeout(t);
  }, [stickers, loaded]);

  const toggle = useCallback((key) => {
    setStickers((prev) => ({ ...prev, [key]: ((prev[key] || 0) + 1) % (MAX_STATUS + 1) }));
  }, []);

  const exportData = useCallback(() => {
    const blob = new Blob([JSON.stringify(stickers)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `album-copa-2026-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [stickers]);

  const importData = useCallback((file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          if (typeof data !== "object" || Array.isArray(data)) throw new Error();
          setStickers(data);
          resolve();
        } catch {
          reject(new Error("Arquivo inválido"));
        }
      };
      reader.readAsText(file);
    });
  }, []);

  return { stickers, toggle, loaded, exportData, importData };
}
