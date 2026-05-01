/* ─── FWC SERIES ─────────────────────────────────────────────── */
export const FWC_ABERTURA = [
  { id: "FWC|00", code: "FWC00", label: "Logo Panini" },
  { id: "FWC|01", code: "FWC1",  label: "Emblema Oficial (1)" },
  { id: "FWC|02", code: "FWC2",  label: "Emblema Oficial (2)" },
  { id: "FWC|03", code: "FWC3",  label: "Mascote" },
  { id: "FWC|04", code: "FWC4",  label: "Slogan" },
  { id: "FWC|05", code: "FWC5",  label: "Bola Oficial" },
  { id: "FWC|06", code: "FWC6",  label: "Emblema Canadá" },
  { id: "FWC|07", code: "FWC7",  label: "Emblema México" },
  { id: "FWC|08", code: "FWC8",  label: "Emblema USA" },
];

export const FWC_MUSEU = [
  { id: "FWC|09", code: "FWC9",  label: "Uruguai 1930/1950" },
  { id: "FWC|10", code: "FWC10", label: "Itália 1934/1938" },
  { id: "FWC|11", code: "FWC11", label: "Alemanha 54/74/90/14" },
  { id: "FWC|12", code: "FWC12", label: "Brasil 58/62/70/94/02" },
  { id: "FWC|13", code: "FWC13", label: "Inglaterra 1966" },
  { id: "FWC|14", code: "FWC14", label: "Argentina 78/86/22" },
  { id: "FWC|15", code: "FWC15", label: "França 1998/2018" },
  { id: "FWC|16", code: "FWC16", label: "Espanha 2010" },
  { id: "FWC|17", code: "FWC17", label: "Museu Pôster 1" },
  { id: "FWC|18", code: "FWC18", label: "Museu Pôster 2" },
  { id: "FWC|19", code: "FWC19", label: "Museu Pôster 3" },
];

/* ─── CC SERIES ──────────────────────────────────────────────── */
export const CC_SERIES = [
  { id: "CC|01", code: "CC1",  label: "Lamine Yamal",      sub: "Espanha" },
  { id: "CC|02", code: "CC2",  label: "Joshua Kimmich",    sub: "Alemanha" },
  { id: "CC|03", code: "CC3",  label: "Harry Kane",         sub: "Inglaterra" },
  { id: "CC|04", code: "CC4",  label: "Santiago Giménez",  sub: "México" },
  { id: "CC|05", code: "CC5",  label: "Josko Gvardiol",    sub: "Croácia" },
  { id: "CC|06", code: "CC6",  label: "Federico Valverde", sub: "Uruguai" },
  { id: "CC|07", code: "CC7",  label: "Jefferson Lerma",   sub: "Colômbia" },
  { id: "CC|08", code: "CC8",  label: "Enner Valencia",    sub: "Equador" },
  { id: "CC|09", code: "CC9",  label: "Gabriel Magalhães", sub: "Brasil" },
  { id: "CC|10", code: "CC10", label: "Virgil van Dijk",   sub: "Holanda" },
  { id: "CC|11", code: "CC11", label: "Alphonso Davies",   sub: "Canadá" },
  { id: "CC|12", code: "CC12", label: "Emiliano Martínez", sub: "Argentina" },
  { id: "CC|13", code: "CC13", label: "Raúl Jiménez",      sub: "México" },
  { id: "CC|14", code: "CC14", label: "Lautaro Martínez",  sub: "Argentina" },
];

/* ─── GROUPS ─────────────────────────────────────────────────── */
// players = 18 names: slots 2–12 (first 11) then 14–20 (next 7)
const GROUPS_RAW = [
  { id: "A", teams: [
    { abv: "MEX", name: "México",          flag: "🇲🇽", players: [
      "Luis Malagón","Johan Vásquez","Jorge Sánchez","César Montes","Jesús Gallardo",
      "Israel Reyes","Diego Lainez","Carlos Rodríguez","Edson Álvarez","Orbelín Pineda","Marcel Ruiz",
      "Érick Sánchez","Hirving Lozano","Santiago Giménez","Raúl Jiménez","Alexis Vega","Roberto Alvarado","César Huerta",
    ]},
    { abv: "RSA", name: "África do Sul",   flag: "🇿🇦", players: [
      "Ronwen Williams","Sipho Chaine","Aubrey Modiba","Samukele Kabini","Mbekezeli Mbokazi",
      "Khulumani Ndamane","Siyabonga Ngezana","Khuliso Mudau","Nkosinathi Sibisi","Teboho Mokoena","Thalente Mbatha",
      "Bathuisi Aubaas","Yaya Sithole","Sipho Mbule","Lyle Foster","Ioraam Rayners","Mohau Nkota","Oswin Appolis",
    ]},
    { abv: "KOR", name: "Coreia do Sul",   flag: "🇰🇷", players: [
      "Hyeon-woo Jo","Seung-Gyu Kim","Min-jae Kim","Yu-min Cho","Young-woo Seol",
      "Han-beom Lee","Tae-seok Lee","Myung-jae Lee","Jae-sung Lee","In-beom Hwang","Kang-in Lee",
      "Seung-ho Paik","Jens Castrop","Dong-gyeong Lee","Gue-sung Cho","Heung-min Son","Hee-chan Hwang","Hyeon-Gyu Oh",
    ]},
    { abv: "CZE", name: "Rep. Tcheca",     flag: "🇨🇿", players: [
      "Matěj Kovář","Jindřich Staněk","Ladislav Krejčí","Vladimír Coufal","Jaroslav Zelený",
      "Tomáš Holeš","David Zima","Michal Sadílek","Lukáš Provod","Lukáš Červ","Tomáš Souček",
      "Pavel Šulc","Matěj Vydra","Vasil Kušej","Tomáš Chorý","Václav Černý","Adam Hložek","Patrik Schick",
    ]},
  ]},
  { id: "B", teams: [
    { abv: "CAN", name: "Canadá",          flag: "🇨🇦", players: [
      "Dayne St. Clair","Alphonso Davies","Alistair Johnston","Samuel Adekugbe","Richie Laryea",
      "Derek Cornelius","Moïse Bombito","Kamal Miller","Stephen Eustáquio","Ismaël Koné","Jonathan Osorio",
      "Jacob Shaffelburg","Mathieu Choinière","Niko Sigur","Tajon Buchanan","Liam Millar","Cyle Larin","Jonathan David",
    ]},
    { abv: "BIH", name: "Bósnia e Herz.", flag: "🇧🇦", players: [
      "Nikola Vasilj","Amar Dedić","Sead Kolašinac","Tarik Muharemović","Nihad Mujakić",
      "Nikola Katić","Amir Hadžiahmetović","Benjamin Tahirović","Armin Gigović","Ivan Šunjić","Ivan Bašić",
      "Dženis Burnić","Esmir Bajraktarević","Amar Memić","Ermedin Demirović","Edin Džeko","Samed Baždar","Haris Tabaković",
    ]},
    { abv: "QAT", name: "Catar",           flag: "🇶🇦", players: [
      "Meshaal Barsham","Sultan Albrake","Lucas Mendes","Homam Ahmed","Boualem Khoukhi",
      "Pedro Miguel","Tarek Salman","Mohamed Al-Mannai","Karim Boudiaf","Assim Madibo","Ahmed Fatehi",
      "Mohammed Waad","Abdulaziz Hatem","Hassan Al-Haydos","Edmilson Junior","Akram Hassan Afif","Ahmed Al Ganehi","Almoez Ali",
    ]},
    { abv: "SUI", name: "Suíça",           flag: "🇨🇭", players: [
      "Gregor Kobel","Yvon Mvogo","Manuel Akanji","Ricardo Rodriguez","Nico Elvedi",
      "Aurèle Amenda","Silvan Widmer","Granit Xhaka","Denis Zakaria","Remo Freuler","Fabian Rieder",
      "Ardon Jashari","Johan Manzambi","Michel Aebischer","Breel Embolo","Ruben Vargas","Dan Ndoye","Zeki Amdouni",
    ]},
  ]},
  { id: "C", teams: [
    { abv: "BRA", name: "Brasil",          flag: "🇧🇷", players: [
      "Alisson","Bento","Marquinhos","Éder Militão","Gabriel Magalhães",
      "Danilo","Wesley","Lucas Paquetá","Casemiro","Bruno Guimarães","Luiz Henrique",
      "Vinícius Júnior","Rodrygo","João Pedro","Matheus Cunha","Gabriel Martinelli","Raphinha","Estêvão",
    ]},
    { abv: "MAR", name: "Marrocos",        flag: "🇲🇦", players: [
      "Yassine Bounou","Munir El Kajoui","Achraf Hakimi","Noussair Mazraoui","Nayef Aguerd",
      "Romain Saïss","Jawad El Yamiq","Adam Masina","Sofyan Amrabat","Azzedine Ounahi","Eliesse Ben Seghir",
      "Bilal El Khannouss","Ismael Saibari","Youssef En-Nesyri","Abde Ezzalzouli","Soufiane Rahimi","Brahim Díaz","Ayoub El Kaabi",
    ]},
    { abv: "HAI", name: "Haiti",           flag: "🇭🇹", players: [
      "Johny Placide","Carlens Arcus","Martin Expérience","Jean-Kevin Duverne","Ricardo Adé",
      "Duke Lacroix","Garven Metusala","Hannes Delcroix","Leverton Pierre","Danley Jean Jacques","Jean-Ricner Bellegarde",
      "Christopher Attys","Derrick Etienne Jr.","Josué Casimir","Ruben Providence","Duckens Nazon","Louicius Deedson","Frantzdy Pierrot",
    ]},
    { abv: "SCO", name: "Escócia",         flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", players: [
      "Angus Gunn","Jack Hendry","Kieran Tierney","Aaron Hickey","Andrew Robertson",
      "Scott McKenna","John Souttar","Anthony Ralston","Grant Hanley","Scott McTominay","Billy Gilmour",
      "Lewis Ferguson","Ryan Christie","Kenny McLean","John McGinn","Lyndon Dykes","Che Adams","Ben Doak",
    ]},
  ]},
  { id: "D", teams: [
    { abv: "USA", name: "Estados Unidos",  flag: "🇺🇸", players: [
      "Matt Freese","Chris Richards","Tim Ream","Mark McKenzie","Alex Freeman",
      "Antonee Robinson","Tyler Adams","Tanner Tessmann","Weston McKennie","Christian Roldan","Timothy Weah",
      "Diego Luna","Malik Tillman","Christian Pulisic","Brenden Aaronson","Ricardo Pepi","Haji Wright","Folarin Balogun",
    ]},
    { abv: "PAR", name: "Paraguai",        flag: "🇵🇾", warn: true, players: [
      "Roberto Fernández","Orlando Gill","Gustavo Gómez","Fabián Balbuena","Juan José Cáceres",
      "Omar Alderete","Junior Alonso","Mathías Villasanti","Diego Gómez","Damián Bobadilla","Andrés Cubas",
      "Matías Galarza","Julio Enciso","Jogador 13","Jogador 14","Jogador 15","Jogador 16","Jogador 17",
    ]},
    { abv: "AUS", name: "Austrália",       flag: "🇦🇺", players: [
      "Mathew Ryan","Joe Gauci","Harry Souttar","Alessandro Circati","Jordan Bos",
      "Aziz Behich","Cameron Burgess","Lewis Miller","Milos Degenek","Jackson Irvine","Riley McGree",
      "Aiden O'Neill","Connor Metcalfe","Patrick Yazbek","Craig Goodwin","Kusini Yengi","Nestory Irankunda","Mohamed Touré",
    ]},
    { abv: "TUR", name: "Turquia",         flag: "🇹🇷", players: [
      "Ugurcan Cakir","Mert Muldur","Zeki Celik","Abdulkerim Bardakci","Caglar Soyuncu",
      "Merih Demiral","Ferdi Kadioglu","Kaan Ayhan","Ismail Yuksek","Hakan Calhanoglu","Orkun Kokcu",
      "Arda Güler","Irfan Can Kahveci","Yunus Akgun","Can Uzun","Baris Alper Yilmaz","Kerem Akturkoglu","Kenan Yildiz",
    ]},
  ]},
  { id: "E", teams: [
    { abv: "GER", name: "Alemanha",        flag: "🇩🇪", players: [
      "Marc-André ter Stegen","Jonathan Tah","David Raum","Nico Schlotterbeck","Antonio Rüdiger",
      "Waldemar Anton","Ridle Baku","Maximilian Mittelstädt","Joshua Kimmich","Florian Wirtz","Felix Nmecha",
      "Leon Goretzka","Jamal Musiala","Serge Gnabry","Kai Havertz","Leroy Sané","Karim Adeyemi","Nick Woltemade",
    ]},
    { abv: "CUW", name: "Curaçao",         flag: "🇨🇼", players: [
      "Eloy Room","Armando Obispo","Sherel Floranus","Jurien Gaari","Joshua Brenet",
      "Roshon Van Eijma","Shurandy Sambo","Livano Comenencia","Godfried Roemeratoe","Juninho Bacuna","Leandro Bacuna",
      "Tahith Chong","Kenji Gorré","Jearl Margaritha","Jurgen Locadia","Jeremy Antonisse","Gervane Kastaneer","Sontje Hansen",
    ]},
    { abv: "CIV", name: "Costa do Marfim", flag: "🇨🇮", players: [
      "Yahia Fofana","Ghislain Konan","Wilfried Singo","Odilon Kossounou","Evan Ndicka",
      "Willy Boly","Emmanuel Agbadou","Ousmane Diomande","Franck Kessié","Seko Fofana","Ibrahim Sangaré",
      "Jean-Philippe Gbamin","Amad Diallo","Sébastien Haller","Simon Adingra","Yan Diomande","Evann Guessand","Oumar Diakité",
    ]},
    { abv: "ECU", name: "Equador",         flag: "🇪🇨", players: [
      "Hernán Galíndez","Gonzalo Valle","Piero Hincapié","Pervis Estupiñán","Willian Pacho",
      "Ángelo Preciado","Joel Ordóñez","Moisés Caicedo","Alan Franco","Kendry Páez","Pedro Vite",
      "John Yeboah","Leonardo Campana","Gonzalo Plata","Nilson Angulo","Alan Minda","Kevin Rodríguez","Enner Valencia",
    ]},
  ]},
  { id: "F", teams: [
    { abv: "NED", name: "Holanda",         flag: "🇳🇱", players: [
      "Bart Verbruggen","Virgil van Dijk","Micky van de Ven","Jurriën Timber","Denzel Dumfries",
      "Nathan Aké","Jeremie Frimpong","Jan Paul van Hecke","Tijjani Reijnders","Ryan Gravenberch","Teun Koopmeiners",
      "Frenkie de Jong","Xavi Simons","Justin Kluivert","Memphis Depay","Donyell Malen","Wout Weghorst","Cody Gakpo",
    ]},
    { abv: "JPN", name: "Japão",           flag: "🇯🇵", players: [
      "Zion Suzuki","Henry Heroki Mochizuki","Ayumu Seko","Junnosuke Suzuki","Shogo Taniguchi",
      "Tsuyoshi Watanabe","Kaishu Sano","Yuki Soma","Ao Tanaka","Daichi Kamada","Takefusa Kubo",
      "Ritsu Doan","Keito Nakamura","Takumi Minamino","Shuto Machino","Junya Ito","Koki Ogawa","Ayase Ueda",
    ]},
    { abv: "SWE", name: "Suécia",          flag: "🇸🇪", players: [
      "Victor Johansson","Isak Hien","Gabriel Gudmundsson","Emil Holm","Victor Nilsson Lindelöf",
      "Gustaf Lagerbielke","Lucas Bergvall","Hugo Larsson","Jesper Karlström","Yasin Ayari","Mattias Svanberg",
      "Daniel Svensson","Ken Sema","Roony Bardghji","Dejan Kulusevski","Anthony Elanga","Alexander Isak","Viktor Gyökeres",
    ]},
    { abv: "TUN", name: "Tunísia",         flag: "🇹🇳", players: [
      "Bechir Ben Said","Aymen Dahmen","Van Valery","Montassar Talbi","Yassine Meriah",
      "Ali Abdi","Dylan Bronn","Ellyes Skhiri","Aissa Laidouni","Ferjani Sassi","Mohamed Ali Ben Romdhane",
      "Hannibal Mejbri","Elias Achouri","Elias Saad","Hazem Mastouri","Ismael Gharbi","Sayfallah Ltaief","Naim Sliti",
    ]},
  ]},
  { id: "G", teams: [
    { abv: "BEL", name: "Bélgica",         flag: "🇧🇪", players: [
      "Thibaut Courtois","Arthur Theate","Timothy Castagne","Zeno Debast","Brandon Mechele",
      "Maxim De Cuyper","Thomas Meunier","Youri Tielemans","Amadou Onana","Nicolas Raskin","Alexis Saelemaekers",
      "Hans Vanaken","Kevin De Bruyne","Jérémy Doku","Charles De Ketelaere","Leandro Trossard","Loïs Openda","Romelu Lukaku",
    ]},
    { abv: "EGY", name: "Egito",           flag: "🇪🇬", players: [
      "Mohamed El Shenawy","Mohamed Hany","Mohamed Hamdy","Yasser Ibrahim","Khaled Sobhi",
      "Ramy Rabia","Hossam Abdelmaguid","Ahmed Fatouh","Marwan Attia","Zizo","Hamdy Fathy",
      "Mohamed Lasheen","Emam Ashour","Osama Faisal","Mohamed Salah","Mostafa Mohamed","Trezeguet","Omar Marmoush",
    ]},
    { abv: "IRN", name: "Irã",             flag: "🇮🇷", players: [
      "Alireza Beiranvand","Morteza Pouraliganji","Ehsan Hajsafi","Milad Mohammadi","Shoja Khalilzadeh",
      "Ramin Rezaeian","Hossein Kanaani","Sadegh Moharrami","Saleh Hardani","Saeed Ezatolahi","Saman Ghoddos",
      "Omid Noorafkan","Roozbeh Cheshmi","Mohammad Mohebi","Sardar Azmoun","Mehdi Taremi","Alireza Jahanbakhsh","Ali Gholizadeh",
    ]},
    { abv: "NZL", name: "Nova Zelândia",   flag: "🇳🇿", players: [
      "Max Crocombe-Payne","Alex Paulsen","Michael Boxall","Liberato Cacace","Tim Payne",
      "Tyler Bindon","Francis de Vries","Finn Surman","Joe Bell","Sarpreet Singh","Ryan Thomas",
      "Matthew Garbett","Marko Stamenić","Ben Old","Chris Wood","Elijah Just","Callum McCowatt","Kosta Barbarouses",
    ]},
  ]},
  { id: "H", teams: [
    { abv: "ESP", name: "Espanha",         flag: "🇪🇸", players: [
      "Unai Simón","Robin Le Normand","Aymeric Laporte","Dean Huijsen","Pedro Porro",
      "Dani Carvajal","Marc Cucurella","Martín Zubimendi","Rodri","Pedri","Fabián Ruiz",
      "Mikel Merino","Lamine Yamal","Dani Olmo","Nico Williams","Ferran Torres","Álvaro Morata","Mikel Oyarzabal",
    ]},
    { abv: "CPV", name: "Cabo Verde",      flag: "🇨🇻", players: [
      "Vozinha","Logan Costa","Pico","Diney","Steven Moreira",
      "Wagner Pina","João Paulo","Yannick Semedo","Kevin Pina","Patrick Andrade","Jamiro Monteiro",
      "Deroy Duarte","Garry Rodrigues","Jovane Cabral","Ryan Mendes","Dailon Livramento","Willy Semedo","Bebé",
    ]},
    { abv: "KSA", name: "Arábia Saudita",  flag: "🇸🇦", players: [
      "Nawaf Alaqidi","Abdulrahman Al-Sanbi","Saud Abdulhamid","Nawaf Boushal","Jihad Thakri",
      "Moteb Al-Harbi","Hassan Altambakti","Musab Aljuwayr","Ziyad Aljohani","Abdullah Alkhaibari","Nasser Aldawsari",
      "Saleh Abu Alshamat","Marwan Alsahafi","Salem Aldawsari","Abdulrahman Al-Aboud","Feras Albrikan","Saleh Alshehri","Abdullah Al-Hamdan",
    ]},
    { abv: "URU", name: "Uruguai",         flag: "🇺🇾", players: [
      "Sergio Rochet","Santiago Mele","Ronald Araujo","José María Giménez","Sebastian Caceres",
      "Mathias Olivera","Guillermo Varela","Nahitan Nandez","Federico Valverde","Giorgian De Arrascaeta","Rodrigo Bentancur",
      "Manuel Ugarte","Nicolás de la Cruz","Maxi Araujo","Darwin Núñez","Federico Viñas","Rodrigo Aguirre","Facundo Pellistri",
    ]},
  ]},
  { id: "I", teams: [
    { abv: "FRA", name: "França",          flag: "🇫🇷", players: [
      "Mike Maignan","Theo Hernández","William Saliba","Jules Koundé","Ibrahima Konaté",
      "Dayot Upamecano","Lucas Digne","Aurélien Tchouaméni","Eduardo Camavinga","Manu Koné","Adrien Rabiot",
      "Michael Olise","Ousmane Dembélé","Bradley Barcola","Désiré Doué","Kingsley Coman","Hugo Ekitike","Kylian Mbappé",
    ]},
    { abv: "SEN", name: "Senegal",         flag: "🇸🇳", players: [
      "Eduardo Mendy","Yehvann Diouf","Moussa Niakhaté","Abdoulaye Seck","Ismail Jakobs",
      "El Hadji Malick Diouf","Kalidou Koulibaly","Idrissa Gana Gueye","Pape Matar Sarr","Pape Gueye","Habib Diarra",
      "Lamine Camara","Sadio Mane","Ismaïla Sarr","Boulaye Dia","Iliman Ndiaye","Nicolas Jackson","Krepin Diatta",
    ]},
    { abv: "IRQ", name: "Iraque",          flag: "🇮🇶", players: [
      "Jalal Hassan","Rebin Sulaka","Hussein Ali","Akam Hashem","Merchas Doski",
      "Zaid Tahseen","Manaf Younis","Zidane Iqbal","Amir Al-Ammari","Ibrahim Bayesh","Ali Jasim",
      "Youssef Amyn","Aimar Sher","Marko Farji","Osama Rashid","Ali Al-Hamadi","Aymen Hussein","Mohanad Ali",
    ]},
    { abv: "NOR", name: "Noruega",         flag: "🇳🇴", players: [
      "Ørjan Nyland","Julian Ryerson","Leo Østigård","Kristoffer Ajer","Marcus Holmgren Pedersen",
      "David Møller Wolfe","Torbjørn Heggem","Morten Thorsby","Martin Ødegaard","Sander Berge","Andreas Schjelderup",
      "Patrick Berg","Erling Haaland","Alexander Sørloth","Aron Dønnum","Jørgen Strand Larsen","Antonio Nusa","Oscar Bobb",
    ]},
  ]},
  { id: "J", teams: [
    { abv: "ARG", name: "Argentina",       flag: "🇦🇷", players: [
      "Emiliano Martínez","Nahuel Molina","Cristian Romero","Nicolás Otamendi","Nicolás Tagliafico",
      "Leonardo Balerdi","Enzo Fernández","Alexis Mac Allister","Rodrigo De Paul","Exequiel Palacios","Leandro Paredes",
      "Nico Paz","Franco Mastantuono","Nico González","Lionel Messi","Lautaro Martínez","Julián Álvarez","Giuliano Simeone",
    ]},
    { abv: "ALG", name: "Argélia",         flag: "🇩🇿", players: [
      "Alexis Guendouz","Ramy Bensebaini","Youcef Atal","Rayan Aït-Nouri","Mohamed Amine Tougai",
      "Aïssa Mandi","Ismael Bennacer","Houssem Aouar","Hicham Boudaoui","Ramiz Zerrouki","Nabil Bentaleb",
      "Farés Chaibi","Riyad Mahrez","Said Benrahma","Anis Hadj Moussa","Amine Gouiri","Baghdad Bounedjah","Mohammed Amoura",
    ]},
    { abv: "AUT", name: "Áustria",         flag: "🇦🇹", players: [
      "Alexander Schlager","Patrick Pentz","David Alaba","Kevin Danso","Philipp Lienhart",
      "Stefan Posch","Phillipp Mwene","Alexander Prass","Xaver Schlager","Marcel Sabitzer","Konrad Laimer",
      "Florian Grillitsch","Nicolas Seiwald","Romano Schmid","Patrick Wimmer","Christoph Baumgartner","Michael Gregoritsch","Marko Arnautović",
    ]},
    { abv: "JOR", name: "Jordânia",        flag: "🇯🇴", players: [
      "Yazeed Abulaila","Ihsan Haddad","Mohammad Abu Hashish","Yazan Al-Arab","Abdallah Nasib",
      "Saleem Obaid","Mohammad Abualnadi","Ibrahim Saadeh","Nizar Al-Rashdan","Noor Al-Rawabdeh","Mohannad Abu Taha",
      "Amer Jamous","Musa Al-Taamari","Yazan Al-Naimat","Mahmoud Al-Mardi","Ali Olwan","Mohammad Abu Zrayq","Ibrahim Sabra",
    ]},
  ]},
  { id: "K", teams: [
    { abv: "POR", name: "Portugal",        flag: "🇵🇹", players: [
      "Diogo Costa","José Sá","Rúben Dias","João Cancelo","Diogo Dalot",
      "Nuno Mendes","Gonçalo Inácio","Bernardo Silva","Bruno Fernandes","Rúben Neves","Vitinha",
      "João Neves","Cristiano Ronaldo","Francisco Trincão","João Félix","Gonçalo Ramos","Pedro Neto","Rafael Leão",
    ]},
    { abv: "COD", name: "RD Congo",        flag: "🇨🇩", players: [
      "Lionel Mpasi","Aaron Wan-Bissaka","Axel Tuanzebe","Arthur Masuaku","Chancel Mbemba",
      "Joris Kayembe","Charles Pickel","Ngal'ayel Mukau","Edo Kayembe","Samuel Moutoussamy","Noah Sadiki",
      "Théo Bongonda","Meschack Elia","Yoane Wissa","Brian Cipenga","Fiston Mayele","Cédric Bakambu","Nathanaël Mbuku",
    ]},
    { abv: "UZB", name: "Uzbequistão",     flag: "🇺🇿", warn: true, players: [
      "Utkir Yusupov","Farrukh Savfiev","Sherzod Nasrullaev","Umar Eshmurodov","Husniddin Aliqulov",
      "Rustamjon Ashurmatov","Khojiakbar Alijonov","Abdukodir Khusanov","Odiljon Hamrobekov","Otabek Shukurov","Jamshid Iskanderov",
      "Azizbek Turgunboev","Khojimat Erkinov","Eldor Shomurodov","Oston Urunov","Jaloliddin Masharipov","Igor Sergeev","Eldor Shomurodov",
    ]},
    { abv: "COL", name: "Colômbia",        flag: "🇨🇴", warn: true, players: [
      "Camilo Vargas","Kevin Mier","Dávinson Sánchez","Carlos Cuesta","Daniel Muñoz",
      "Jhon Lucumí","Johan Mojica","Richard Ríos","Mateus Uribe","Jefferson Lerma","Jhon Arias",
      "James Rodríguez","Juan Cuadrado","Yaser Asprilla","Jhon Córdoba","Rafael Santos Borré","Radamel Falcao","Luis Díaz",
    ]},
  ]},
  { id: "L", teams: [
    { abv: "ENG", name: "Inglaterra",      flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", warn: true, players: [
      "Jordan Pickford","Dean Henderson","Trent Alexander-Arnold","John Stones","Levi Colwill",
      "Reece James","Dan Burn","Jordan Henderson","Declan Rice","Jude Bellingham","Cole Palmer",
      "Morgan Rogers","Anthony Gordon","Phil Foden","Bukayo Saka","Harry Kane","Marcus Rashford","Ollie Watkins",
    ]},
    { abv: "CRO", name: "Croácia",         flag: "🇭🇷", players: [
      "Dominik Livaković","Duje Caleta-Car","Josko Gvardiol","Josip Stanišić","Luka Vušković",
      "Josip Sutalo","Kristijan Jakić","Luka Modrić","Mateo Kovačić","Martin Baturina","Lovro Majer",
      "Mario Pašalić","Petar Sučić","Ivan Perišić","Marco Pašalić","Ante Budimir","Andrej Kramarić","Franjo Ivanović",
    ]},
    { abv: "GHA", name: "Gana",            flag: "🇬🇭", warn: true, players: [
      "Lawrence Ati-Zigi","Ibrahim Danlad","Alexander Djiku","Daniel Amartey","Tariq Lamptey",
      "Baba Rahman","Alidu Seidu","Thomas Partey","Salis Abdul Samed","Mohammed Kudus","Antoine Semenyo",
      "Kamaldeen Sulemana","Inaki Williams","Jordan Ayew","Andre Ayew","Felix Afena-Gyan","Ernest Nuamah","Osman Bukari",
    ]},
    { abv: "PAN", name: "Panamá",          flag: "🇵🇦", warn: true, players: [
      "Luis Mejía","José Calderón","Eric Davis","Harold Cummings","Fidel Escobar",
      "Roderick Miller","Adalberto Carrasquilla","Anibal Godoy","Cecilio Waterman","Alberto Quintero","Édgar Yoel Bárcenas",
      "Ismael Díaz","Rolando Blackburn","Freddy Góndola","Christofer Gonzalez","Romario Williams","Abdiel Arroyo","Gabriel Torres",
    ]},
  ]},
];

/* ─── STICKER BUILDER ────────────────────────────────────────── */
function buildTeamStickers(abv, players) {
  const out = [];
  out.push({ id: `${abv}|1`, code: `${abv}1`, label: "Emblema ✦", foil: true });
  for (let i = 0; i < 11; i++) {
    out.push({ id: `${abv}|${i + 2}`, code: `${abv}${i + 2}`, label: players[i] || "A confirmar" });
  }
  out.push({ id: `${abv}|13`, code: `${abv}13`, label: "Time Perfilado 📸" });
  for (let i = 0; i < 7; i++) {
    out.push({ id: `${abv}|${i + 14}`, code: `${abv}${i + 14}`, label: players[11 + i] || "A confirmar" });
  }
  return out;
}

export const GROUPS = GROUPS_RAW.map((g) => ({
  ...g,
  teams: g.teams.map((t) => ({ ...t, stickers: buildTeamStickers(t.abv, t.players) })),
}));

export const ALL_IDS = [
  ...FWC_ABERTURA.map((s) => s.id),
  ...FWC_MUSEU.map((s) => s.id),
  ...CC_SERIES.map((s) => s.id),
  ...GROUPS.flatMap((g) => g.teams.flatMap((t) => t.stickers.map((s) => s.id))),
];

export const TOTAL = ALL_IDS.length;

/* ─── NAV ────────────────────────────────────────────────────── */
export const NAV = [
  { id: "home",      icon: "🏆", label: "Início"    },
  { id: "album",     icon: "📋", label: "Álbum"     },
  { id: "especiais", icon: "⭐", label: "Especiais"  },
  { id: "trocas",    icon: "🔄", label: "Trocas"    },
  { id: "busca",     icon: "🔍", label: "Busca"     },
];
