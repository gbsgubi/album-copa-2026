export const TOTAL = 980;

export const ABERTURA = Array.from({ length: 20 }, (_, i) => ({
  id: `ab-${i}`,
  num: i + 1,
  label: [
    "Capa do Álbum", "Logo Copa 2026", "Taça FIFA", "Mascote",
    "MetLife Stadium", "Rose Bowl", "SoFi Stadium", "Levi's Stadium",
    "AT&T Stadium", "Arrowhead Stad.", "Lincoln Fin. Field", "Gillette Stadium",
    "Lumen Field", "Hard Rock Stad.", "Merc.-Benz Stad.", "BMO Field",
    "BC Place", "Estadio Azteca", "Estadio Akron", "Estadio BBVA",
  ][i],
}));

const TEAMS_RAW = [
  // CONMEBOL
  { id: "brasil",      n: "Brasil",          f: "🇧🇷", c: "CONMEBOL" },
  { id: "argentina",   n: "Argentina",        f: "🇦🇷", c: "CONMEBOL" },
  { id: "colombia",    n: "Colômbia",         f: "🇨🇴", c: "CONMEBOL" },
  { id: "equador",     n: "Equador",          f: "🇪🇨", c: "CONMEBOL" },
  { id: "paraguai",    n: "Paraguai",         f: "🇵🇾", c: "CONMEBOL" },
  { id: "uruguai",     n: "Uruguai",          f: "🇺🇾", c: "CONMEBOL" },
  // UEFA
  { id: "alemanha",    n: "Alemanha",         f: "🇩🇪", c: "UEFA" },
  { id: "austria",     n: "Áustria",          f: "🇦🇹", c: "UEFA" },
  { id: "belgica",     n: "Bélgica",          f: "🇧🇪", c: "UEFA" },
  { id: "bosnia",      n: "Bósnia e Herz.",   f: "🇧🇦", c: "UEFA" },
  { id: "croacia",     n: "Croácia",          f: "🇭🇷", c: "UEFA" },
  { id: "escocia",     n: "Escócia",          f: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", c: "UEFA" },
  { id: "espanha",     n: "Espanha",          f: "🇪🇸", c: "UEFA" },
  { id: "franca",      n: "França",           f: "🇫🇷", c: "UEFA" },
  { id: "holanda",     n: "Holanda",          f: "🇳🇱", c: "UEFA" },
  { id: "inglaterra",  n: "Inglaterra",       f: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", c: "UEFA" },
  { id: "noruega",     n: "Noruega",          f: "🇳🇴", c: "UEFA" },
  { id: "portugal",    n: "Portugal",         f: "🇵🇹", c: "UEFA" },
  { id: "rep_tcheca",  n: "Rep. Tcheca",      f: "🇨🇿", c: "UEFA" },
  { id: "suecia",      n: "Suécia",           f: "🇸🇪", c: "UEFA" },
  { id: "suica",       n: "Suíça",            f: "🇨🇭", c: "UEFA" },
  { id: "turquia",     n: "Turquia",          f: "🇹🇷", c: "UEFA" },
  // CONCACAF
  { id: "canada",      n: "Canadá",           f: "🇨🇦", c: "CONCACAF" },
  { id: "curacao",     n: "Curaçao",          f: "🇨🇼", c: "CONCACAF" },
  { id: "eua",         n: "Estados Unidos",   f: "🇺🇸", c: "CONCACAF" },
  { id: "haiti",       n: "Haiti",            f: "🇭🇹", c: "CONCACAF" },
  { id: "mexico",      n: "México",           f: "🇲🇽", c: "CONCACAF" },
  { id: "panama",      n: "Panamá",           f: "🇵🇦", c: "CONCACAF" },
  // CAF
  { id: "africa_sul",  n: "África do Sul",    f: "🇿🇦", c: "CAF" },
  { id: "algeria",     n: "Argélia",          f: "🇩🇿", c: "CAF" },
  { id: "cabo_verde",  n: "Cabo Verde",       f: "🇨🇻", c: "CAF" },
  { id: "ctmarfim",    n: "Costa do Marfim",  f: "🇨🇮", c: "CAF" },
  { id: "egito",       n: "Egito",            f: "🇪🇬", c: "CAF" },
  { id: "gana",        n: "Gana",             f: "🇬🇭", c: "CAF" },
  { id: "marrocos",    n: "Marrocos",         f: "🇲🇦", c: "CAF" },
  { id: "rd_congo",    n: "RD Congo",         f: "🇨🇩", c: "CAF" },
  { id: "senegal",     n: "Senegal",          f: "🇸🇳", c: "CAF" },
  { id: "tunisia",     n: "Tunísia",          f: "🇹🇳", c: "CAF" },
  // AFC
  { id: "arabia",      n: "Arábia Saudita",   f: "🇸🇦", c: "AFC" },
  { id: "australia",   n: "Austrália",        f: "🇦🇺", c: "AFC" },
  { id: "catar",       n: "Catar",            f: "🇶🇦", c: "AFC" },
  { id: "coreia",      n: "Coreia do Sul",    f: "🇰🇷", c: "AFC" },
  { id: "ira",         n: "Irã",              f: "🇮🇷", c: "AFC" },
  { id: "iraque",      n: "Iraque",           f: "🇮🇶", c: "AFC" },
  { id: "japao",       n: "Japão",            f: "🇯🇵", c: "AFC" },
  { id: "jordania",    n: "Jordânia",         f: "🇯🇴", c: "AFC" },
  { id: "uzbequistao", n: "Uzbequistão",      f: "🇺🇿", c: "AFC" },
  // OFC
  { id: "nz",          n: "Nova Zelândia",    f: "🇳🇿", c: "OFC" },
];

export const TEAMS = TEAMS_RAW.map((t, i) => ({ ...t, start: 21 + i * 20 }));

export const teamStickers = (t) => [
  { id: `${t.id}|0`, num: t.start,     label: "Escudo"   },
  { id: `${t.id}|1`, num: t.start + 1, label: "Uniforme" },
  ...Array.from({ length: 18 }, (_, k) => ({
    id: `${t.id}|${k + 2}`,
    num: t.start + k + 2,
    label: `Jogador ${k + 1}`,
  })),
];

export const CONFS = [
  { id: "CONMEBOL", label: "CONMEBOL", icon: "🌎" },
  { id: "UEFA",     label: "UEFA",     icon: "🌍" },
  { id: "CONCACAF", label: "CONCACAF", icon: "🌎" },
  { id: "CAF",      label: "CAF",      icon: "🌍" },
  { id: "AFC",      label: "AFC",      icon: "🌏" },
  { id: "OFC",      label: "OFC",      icon: "🌊" },
];

export const NAV = [
  { id: "home",     icon: "🏆", label: "Início"   },
  { id: "album",    icon: "📋", label: "Álbum"    },
  { id: "abertura", icon: "📖", label: "Abertura" },
  { id: "trocas",   icon: "🔄", label: "Trocas"   },
];
