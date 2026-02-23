import type {
  NavLink,
  StatCard,
  PainPoint,
  ValueProp,
  Module,
  Testimonial,
  FAQItem,
  BeforeAfterItem,
} from "./types";

// ========================
// NAVIGATION
// ========================
export const NAV_LINKS: NavLink[] = [
  { label: "Miről szól", href: "#mirol-szol" },
  { label: "Modulok", href: "#modulok" },
  { label: "Kinek szól", href: "#kinek-szol" },
  { label: "GYIK", href: "#gyik" },
];

// ========================
// HERO
// ========================
export const HERO_STATS: StatCard[] = [
  { value: "10", label: "hét, 10 modul" },
  { value: "0", label: "kód, 0 tech tudás kell" },
  { value: "1", label: "rendszer, ami működik" },
];

// ========================
// PROBLEM SECTION
// ========================
export const PAIN_POINTS: PainPoint[] = [
  {
    icon: "😰",
    title: "Információ-cunami",
    description:
      "Százféle AI eszköz, ezer vélemény, nulla kapaszkodó. YouTube-videók, amik 3 hónap múlva elavulnak. ChatGPT, amit megnyitsz, beírsz valamit, és nem tudod, jól csinálod-e.",
  },
  {
    icon: "⏰",
    title: "Időd nincs, energiád sincs",
    description:
      "Reggeltől estig dolgozol az ügyfeleidnek. Mikor tanulj AI-t? Hétvégén? Éjszaka? Még egy kurzus, ami a polcon végzi?",
  },
  {
    icon: "😔",
    title: "Lemaradás érzése",
    description:
      "A konkurenciád már posztolja, hogy 'AI-val dolgozom'. Te meg nem tudod, nekik tényleg működik-e, vagy csak flexelnek. De a bizonytalanság őröl belülről.",
  },
];

// ========================
// SOLUTION SECTION
// ========================
export const VALUE_PROPS: ValueProp[] = [
  {
    icon: "target",
    title: "Heti 1 fókusz, semmi más",
    description:
      "Nem kell mindent egyszerre megtanulnod. Minden héten egyetlen, jól körülhatárolt feladatra koncentrálsz. A végére 10 működő rendszered lesz.",
  },
  {
    icon: "bot",
    title: "AI, ami dolgozik helyetted",
    description:
      "Nem eszközöket mutogatunk — működő rendszereket építesz. Automatikus email válaszolót, tartalomgyártó folyamatot, ügyfélkezelő rendszert. Ami a kurzus után is dolgozik.",
  },
  {
    icon: "users",
    title: "Közösség, nem magány",
    description:
      "Zárt Facebook-csoport, heti online találkozók, és társak, akik ugyanezt az utat járják. Ha elakadsz, nem vagy egyedül.",
  },
  {
    icon: "shield",
    title: "Nem kell tech-zseni legyél",
    description:
      "Ha tudsz emailt írni és Google-ben keresni, elég tudásod van ehhez. Minden lépést úgy mutatunk meg, mintha mellettéd ülnénk.",
  },
];

// ========================
// MODULES
// ========================
export const MODULES: Module[] = [
  {
    number: "01",
    title: "Digitális Identitás",
    subtitle: "Ki vagy a neten? Építsd fel a profi alapot.",
    content:
      "Mielőtt bármit automatizálnál, tudnod kell, ki vagy a piacon. Ebben a modulban felépíted a digitális identitásodat: hogyan mutatod be magad, mi a pozicionálásod, és hogyan talál rád az ideális ügyfeled. AI-val segítünk megfogalmazni az egyedi értékajánlatodat és elindítjuk a személyes márkádat.",
    result: "✅ Kész pozicionálás, bio, és profi online profil",
  },
  {
    number: "02",
    title: "AI Szövegírás Alapok",
    subtitle: "Tanítsd meg az AI-t a te hangodra írni.",
    content:
      "A ChatGPT mindenkinek tud írni — de senkire nem hasonlít. Megtanulod, hogyan adj promptokat, amelyek a TE hangodon, a TE célközönségednek szólnak. Nem sablonszövegeket kapsz, hanem a saját szövegírói rendszeredet építed fel.",
    result: "✅ Prompt könyvtár és saját hangú AI szövegírás",
  },
  {
    number: "03",
    title: "Tartalomgyártás Rendszer",
    subtitle: "Heti 5 poszt, napi 20 perc munkával.",
    content:
      "Nem kell minden nap kiizzadnod, mit posztolj. Felépítesz egy tartalomgyártó rendszert, ahol az AI segít az ötleteléstől a végleges szövegig. Tartalomoszlopokat, sablonokat és újrahasznosítási stratégiát kapsz.",
    result: "✅ Működő tartalomgyártó rendszer, 30 napos tartalomnaptár",
  },
  {
    number: "04",
    title: "Vizuális Identitás és Design",
    subtitle: "Profi megjelenés, dizájner nélkül.",
    content:
      "Canva + AI = profi vizuális megjelenés. Megtanulod a design alapjait (kompozíció, színek, tipográfia), és AI eszközökkel készítesz social media grafikákat, bemutatkozó anyagokat és brandelt sablonokat.",
    result: "✅ Teljes vizuális brand kit és social media sablonok",
  },
  {
    number: "05",
    title: "Landing Oldal Építés",
    subtitle: "Egy oldal, ami éjjel-nappal értékesít.",
    content:
      "Felépíted a saját landing oldaladat (értékesítési céloldal) — nem kell programozni. Megmutatjuk a landing oldal anatómiáját, az egyes szekciók célját, és AI-val megírod a szövegeket. A végére egy kész, publikált oldalad lesz.",
    result: "✅ Kész, élő landing oldal a szolgáltatásodhoz",
  },
  {
    number: "06",
    title: "Értékesítési Tölcsér",
    subtitle: "Érdeklődőből fizető ügyfél — automatikusan.",
    content:
      "Felépítesz egy automatizált értékesítési folyamatot: lead magnet (csali anyag, amiért emailt adnak), automatikus email sorozat, és fizetési rendszer. Nem kell értékesítőnek lenned — a rendszer dolgozik helyetted.",
    result: "✅ Működő értékesítési tölcsér: lead magnet → email → eladás",
  },
  {
    number: "07",
    title: "AI Ügynökök és Automatizáció",
    subtitle: "Digitális munkatársak, akik sosem alszanak.",
    content:
      "Ez a modul a legizgalmasabb. AI ügynököket állítasz munkába: ügyfélszolgálati chatbotot, GYIK-válaszolót, időfoglaló rendszert. Összekapcsoljuk az eszközeidet, hogy egy rendszerként működjenek.",
    result: "✅ Működő AI ügynök(ök) a vállalkozásodban",
  },
  {
    number: "08",
    title: "Mérés és Analitika",
    subtitle: "Tudni fogod, mi működik — és mi nem.",
    content:
      "Beállítod a Google Analytics-et, megtanulod, mely számok fontosak (és melyiket felejtsd el), és AI-val generálsz heti riportokat. Adatok alapján döntesz, nem megérzés alapján.",
    result: "✅ Beállított analitika és heti AI-riport rendszer",
  },
  {
    number: "09",
    title: "Ügyfélkezelés és CRM",
    subtitle: "Soha többé ne felejts el egy érdeklődőt.",
    content:
      "Felépíted a saját ügyfélkezelő rendszeredet (CRM). Egyszerű, áttekinthető, és az AI segít a követésben: automatikus emlékeztetők, utókövetés, és ügyfél-elégedettség mérés. Nem bonyolult szoftver — hanem a te méretedre szabott rendszer.",
    result: "✅ Működő CRM rendszer automatikus utókövetéssel",
  },
  {
    number: "10",
    title: "Összekötés és Stratégia",
    subtitle: "Minden rendszered egyben. Jövőálló vállalkozás.",
    content:
      "Az utolsó héten összekötöd az összes korábbi modult egyetlen rendszerré. Kapod a működési kézikönyvedet, a karbantartási tervedet, és a fejlesztési útitervedet. A kurzus véget ér — de a rendszered ettől kezdve dolgozik.",
    result: "✅ Komplett, összekapcsolt rendszer és fejlesztési útiterv",
  },
];

// ========================
// WHO IS IT FOR
// ========================
export const WHO_YES: string[] = [
  "Szolgáltatás-alapú egyéni vállalkozó vagy (bármilyen iparágban)",
  "Érzed, hogy az AI megváltoztatja a piacodat",
  "Nyitott vagy a tanulásra, de nem tudod, hol kezdd",
  "Hajlandó vagy heti 3-5 órát erre szánni",
  "Gyakorlati eredményeket akarsz, nem elméletet",
  "Egyedül dolgozol, és nincs IT-s a háttérben",
];

export const WHO_NO: string[] = [
  "Gyors meggazdagodást keresel",
  "Nem vagy hajlandó heti 3-5 órát befektetni",
  "Már profi szinten használsz AI-eszközöket",
  "Programozást akarsz tanulni (ez nem az a kurzus)",
  "Csapatnak keresed (ez egyéni vállalkozóknak szól)",
];

// ========================
// INSTRUCTOR
// ========================
export const INSTRUCTOR = {
  name: "Nagy Attila",
  title: "Expert Flow alapító · AI automatizációs tanácsadó",
  bio: [
    "15 évet dolgoztam építőipari projektmenedzserként. Tudom, milyen az, amikor egyedül csinálsz mindent, és éjjel is azon jár az agyad, mit felejtettél el.",
    "Az AI-ban nem a technológiát láttam meg először, hanem a szabadságot. Azt, hogy a gépek átvehetik az ismétlődő munkát — és neked marad az, amit igazán szeretsz csinálni.",
    "Az Expert Flow-t azért hoztam létre, hogy ezt a szabadságot neked is megmutassam. Nem vagyok programozó. Nem vagyok tech-guru. Egy gyakorlatias ember vagyok, aki működő rendszereket épít — és segít neked is felépíteni a sajátodat.",
  ],
  quote: "Új eszközök. Örök értékek.",
};

// ========================
// TESTIMONIALS
// ========================
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Már harmadszorra ülök le egy AI-kurzushoz, de mindig feladom, mert senki nem magyarázza el érthetően. Végre valami, ami nem programozóknak szól.",
    name: "— Szolgáltatás-alapú vállalkozó, Budapest",
  },
  {
    quote:
      "A konkurenciám már AI-val dolgozik, én meg még mindig kézzel írom az emaileket. Nem akarok lemaradni, de fogalmam sincs, hol kezdjem.",
    name: "— Egyéni vállalkozó, vidéki város",
  },
  {
    quote:
      "Nem egy újabb elméleti kurzust keresek. Olyat akarok, ahol a végén TÉNYLEG működik valami a vállalkozásomban.",
    name: "— Szabadúszó, online szolgáltató",
  },
];

// ========================
// BEFORE / AFTER
// ========================
export const BEFORE_ITEMS: string[] = [
  "Órákat töltesz social media posztok írásával",
  "Kézzel válaszolsz minden emailre",
  "Nincs rendszered az érdeklődők követésére",
  "Fogalmad sincs, melyik AI-eszközt használd",
  "Az adminisztráció elviszi az egész napodat",
  "Éjszaka is azon jár az agyad, kit felejtettél el",
];

export const AFTER_ITEMS: string[] = [
  "Heti tartalom 20 perc alatt elkészül",
  "AI válaszol az emailekre, te csak jóváhagyod",
  "CRM automatikusan követi az érdeklődőket",
  "3-5 AI-eszközöd van, amiket magabiztosan használsz",
  "Napi 2-3 órát nyersz az automatizációval",
  "A rendszered éjjel is dolgozik helyetted",
];

// ========================
// FAQ
// ========================
export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Mennyibe kerül az AI Ready?",
    answer:
      "A pontos árat az indulás előtt hozzuk nyilvánosságra. A várólista tagjai minimum 20% kedvezményt kapnak. A havi részletfizetés is elérhető lesz. Iratkozz fel a várólistára, hogy elsőként értesülj.",
  },
  {
    question: "Kell-e bármilyen technikai előismeret?",
    answer:
      "Nem. Ha tudsz emailt írni, böngészőt használni és Google-ben keresni, minden szükséges tudásod megvan. Minden lépést úgy mutatunk meg, mintha mellettéd ülnénk. A kurzus kifejezetten nem-technikai embereknek készül.",
  },
  {
    question: "Heti mennyi időt kell rá szánni?",
    answer:
      "Heti 3-5 órát. Ez tartalmazza a videó anyag megnézését, a heti feladat elvégzését és az opcionális közösségi találkozókat. Úgy terveztük, hogy elfér egy elfoglalt vállalkozó életében.",
  },
  {
    question: "Mi van, ha lemaradok egy hétről?",
    answer:
      "Semmi baj — az anyagok korlátlanul visszanézhetők. A saját tempódban is végezheted, bár a legjobb eredményt a csoporttal együtt haladva éred el. A közösségben bármikor kérdezhetsz.",
  },
  {
    question: "Milyen AI-eszközöket fogunk használni?",
    answer:
      "Elsősorban a ChatGPT-t, Canvát, és néhány ingyenes vagy kedvező árú eszközt. A kurzus nem egy eszközhöz köt — az alapelveket tanulod meg, amiket bármelyik eszközzel alkalmazni tudsz. Az eszközök változnak, a tudás marad.",
  },
  {
    question: "Van pénzvisszafizetési garancia?",
    answer:
      "Igen. 14 napos, kérdés nélküli pénzvisszafizetési garanciát adunk. Ha az első két hét után úgy érzed, nem neked való, visszaadjuk a teljes összeget.",
  },
  {
    question: "Mikor indul a kurzus?",
    answer:
      "2026 októberében. A várólista tagjai 2 héttel korábban kapnak hozzáférést a bevezető anyagokhoz. Iratkozz fel, hogy ne maradj le.",
  },
];

// ========================
// WAITLIST BENEFITS
// ========================
export const WAITLIST_BENEFITS = [
  { icon: "🎁", text: "Korai hozzáférést a kurzushoz" },
  { icon: "💰", text: "Minimum 20% kedvezményt az induló árból" },
  { icon: "📧", text: "Heti AI-tippeket még az indulás előtt" },
  { icon: "🔒", text: "Garantált helyet — a létszám limitált" },
];
