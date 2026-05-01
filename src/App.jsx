import { useState } from "react";
import { C } from "./theme.js";
import { useStickers } from "./hooks/useStickers.js";
import Home from "./screens/Home.jsx";
import Album from "./screens/Album.jsx";
import Abertura from "./screens/Abertura.jsx";
import Trocas from "./screens/Trocas.jsx";
import BottomNav from "./components/BottomNav.jsx";

export default function App() {
  const { stickers, toggle, loaded } = useStickers();
  const [screen, setScreen] = useState("home");
  const [albumConf, setAlbumConf] = useState("CONMEBOL");

  const navTo = (s, conf) => {
    setScreen(s);
    if (conf) setAlbumConf(conf);
  };

  if (!loaded) {
    return (
      <div
        style={{
          background: C.bg,
          minHeight: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: C.textPrimary,
          fontFamily: "'Barlow Condensed',sans-serif",
          fontSize: 16,
        }}
      >
        Carregando álbum… ⚽
      </div>
    );
  }

  return (
    <div
      style={{
        background: C.bg,
        minHeight: "100%",
        color: C.textPrimary,
        fontFamily: "'Barlow Condensed',sans-serif",
        display: "flex",
        flexDirection: "column",
        maxWidth: 480,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          background: C.surface,
          borderBottom: `1px solid ${C.border}`,
          padding: "14px 16px 12px",
          position: "sticky",
          top: 0,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <span style={{ fontSize: 24 }}>⚽</span>
        <div>
          <div
            style={{
              fontFamily: "'Bebas Neue',cursive",
              fontSize: 20,
              letterSpacing: 2,
              color: C.gold,
              lineHeight: 1,
            }}
          >
            COPA DO MUNDO 2026
          </div>
          <div
            style={{
              fontSize: 10,
              color: C.textMuted,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Álbum Panini · Controle de Figurinhas
          </div>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", paddingTop: 14 }}>
        {screen === "home" && <Home stickers={stickers} onNav={navTo} />}
        {screen === "album" && (
          <Album stickers={stickers} onToggle={toggle} initConf={albumConf} />
        )}
        {screen === "abertura" && (
          <Abertura stickers={stickers} onToggle={toggle} />
        )}
        {screen === "trocas" && <Trocas stickers={stickers} />}
      </div>

      <BottomNav screen={screen} onChange={setScreen} />
    </div>
  );
}
