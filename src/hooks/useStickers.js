import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "wc2026_album_v3";

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
    setStickers((prev) => ({ ...prev, [key]: ((prev[key] || 0) + 1) % 3 }));
  }, []);

  return { stickers, toggle, loaded };
}
