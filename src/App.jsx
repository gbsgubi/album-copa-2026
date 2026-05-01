import { useRef, useState } from "react";
import { C } from "./theme.js";
import { useStickers } from "./hooks/useStickers.js";
import Home from "./screens/Home.jsx";
import Album from "./screens/Album.jsx";
import Especiais from "./screens/Abertura.jsx";
import Trocas from "./screens/Trocas.jsx";
import Busca from "./screens/Busca.jsx";
import BottomNav from "./components/BottomNav.jsx";

export default function App() {
  const { stickers, toggle, loaded, exportData, importData } = useStickers();
  const [screen, setScreen] = useState("home");
  const [albumGroup, setAlbumGroup] = useState("A");
  const [importMsg, setImportMsg] = useState("");
  const fileInputRef = useRef(null);

  const navTo = (s, group) => {
    setScreen(s);
    if (group) setAlbumGroup(group);
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    e.target.value = "";
    try {
      await importData(file);
      setImportMsg("Backup importado!");
    } catch {
      setImportMsg("Arquivo inválido.");
    }
    setTimeout(() => setImportMsg(""), 3000);
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
      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

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
        <div style={{ flex: 1 }}>
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

      {importMsg && (
        <div
          style={{
            background: importMsg.includes("!") ? C.have : C.dup,
            color: importMsg.includes("!") ? C.haveText : C.dupText,
            textAlign: "center",
            padding: "8px 16px",
            fontSize: 13,
            fontWeight: 700,
            borderBottom: `1px solid ${importMsg.includes("!") ? C.haveBorder : C.dupBorder}`,
          }}
        >
          {importMsg}
        </div>
      )}

      <div style={{ flex: 1, overflowY: "auto", paddingTop: 14 }}>
        {screen === "home" && (
          <Home
            stickers={stickers}
            onNav={navTo}
            onExport={exportData}
            onImport={handleImportClick}
          />
        )}
        {screen === "album" && (
          <Album stickers={stickers} onToggle={toggle} initGroup={albumGroup} />
        )}
        {screen === "especiais" && (
          <Especiais stickers={stickers} onToggle={toggle} />
        )}
        {screen === "trocas" && <Trocas stickers={stickers} />}
        {screen === "busca" && <Busca stickers={stickers} onToggle={toggle} />}
      </div>

      <BottomNav screen={screen} onChange={setScreen} />
    </div>
  );
}
