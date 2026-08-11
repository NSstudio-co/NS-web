# MOTION-PLAN.md — NS Web · Fáze 3: pohyb jako podpis studia

Návod pro AI agenta i pro člověka. Navazuje na `AGENTS.md` (fáze 2 „Quiet luxury") — **pravidla z AGENTS.md platí beze změny**, tenhle soubor je jen rozšíření sekce „Motion design" o konkrétní úkoly.

Cíl fáze: web dnes umí spoustu efektů, ale žádný z nich není jeho. Fáze 3 = **ubrat generické, přidat jeden nezaměnitelný moment.**

---

## Diagnóza současného stavu

Na webu běží 11 samostatných pohybových systémů:

| Efekt | Kde | Hodnocení |
|---|---|---|
| `.blur-reveal` | 44 elementů | ⚠️ generické, nahradit (M3) |
| Hero word-mask reveal | hero H1 | ✅ nejlepší efekt na webu — rozšířit jinam |
| Rotující fráze | hero | ✅ nechat |
| Section hairline `scaleX` | všechny sekce | ✅ nechat |
| Stats counters | hero | ✅ nechat |
| Portfolio clip-path reveal | portfolio | ✅ nechat |
| Portfolio parallax ±12 px | portfolio | ✅ nechat |
| Spotlight karty | služby, ceník | ✅ nechat |
| Magnetická tlačítka | `.btn`, `.logo`, `.nav-links a`, `.portfolio-item` | ⚠️ zúžit (M0) |
| Timeline fill | proces | ⚠️ nahradit scroll-kinem (M2) |
| Scroll progress bar | globálně | ✅ nechat |

**Problém není počet, ale to, že každý z nich vidíte na tisíci jiných webů.** Prémiovost referencí stojí na opaku: málo efektů, jeden signature moment, plynulý scroll.

### Hotovo (2026-08-10) — M1 (majitel odsouhlasil, plán původně nedoporučoval)

- **Setrvačný scroll vlastní implementací**, ~50 řádků, žádná knihovna. Odchytává se **jen `wheel`**; dotyk (nativní momentum je lepší), klávesnice a kotvy zůstávají nativní — kvůli přístupnosti.
- **Klíčový detail: hýbe se nativní `scrollTop`** (`window.scrollTo({behavior:'instant'})` každý frame), ne transform wrapper. Proto **nepadá `position: sticky`** (M2 na něm stojí), kotvy, klávesnice, scrollbar ani hledání ve stránce. **Opravuje to předpoklad v původním M1** — „rozbíjí sticky" platí pro transform wrapper (tak to dělá gptagency), ne pro tenhle přístup.
- `behavior: 'instant'` je nutné: `html` má `scroll-behavior: smooth` kvůli kotvám a bez toho by si každý frame spustil vlastní easing přes náš.
- Běží **uvnitř jediného rAF** ze scroll smyčky (nový registr `onFrame()`), ne vlastním `requestAnimationFrame` — pravidlo „max jeden rAF handler" z `AGENTS.md` platí dál.
- Cokoliv posune stránku mimo nás (tažení scrollbaru, klávesnice, kotva, focus) resynchronizuje cíl, takže další otočka kolečka navazuje tam, kde stránka skutečně je.
- **Cena, měřeno 3× s a 3× bez, 4× CPU throttling:** bez M1 avg 16.8–16.9 ms/frame a 0–2 framy přes 33 ms; s M1 avg 17.2–17.8 ms a 5–13 framů přes 33 ms. Reálně (bez throttlingu) jsou to nejhorší framy kolem 12 ms. Vypnutí = zakomentovat `initSmoothScroll()`.
- `AGENTS.md` řádek o smooth-scrollu upraven, aby seděl se skutečností. Knihovny (Lenis, GSAP) zůstávají zakázané.

### Hotovo (2026-08-11) — M9 + M10

**M9 — tlačítka.** Label se při hoveru odroluje nahoru a zespoda nastoupí jeho kopie; u `.btn-outline` navíc odspoda vyjede výplň.

- Kopie je `::after` čtoucí `data-label`, ne druhý element. Maska (`.btn-label`) + posouvaná vrstva (`.btn-label-in`) staví `wrapButtonLabels()` v JS — **do markupu to nešlo**: je to ~150 tlačítek ve 24 souborech a `updateLanguage()` navíc přepisuje `innerHTML` každého `[data-i18n]`, takže by strukturu při každém přepnutí jazyka smazal. Po `updateLanguage()` se proto volá znovu (stejný vzorec jako `resplitLineReveals()`). Funkce je idempotentní.
- **Wipe jen na `.btn-outline`.** `.btn-primary` je už vyplněné, takže výplň najíždějící do výplně nic neudělá. Koncové barvy jsou přesně ty, co `.btn-outline:hover` měl i předtím — mění se jak to dojede, ne kam.
- **Diakritika:** `.btn-label` má `padding-top: 0.14em` + `margin-top: -0.14em`, jinak `overflow: hidden` ukrojí háčky (stejná oprava jako `.line` v M3).
- **Opraven starší bug:** `initContactForm()` si po odeslání obnovoval tlačítko přes `innerText`, což smazalo šipkové SVG (a teď i label) — po prvním odeslání se šipka už nikdy nevrátila. Nahrazeno `innerHTML`.
- Ověřeno: 8/8 tlačítek zabaleno, `label === data-label`, SVG na místě, CZ→EN→CZ round-trip drží, odeslání formuláře vrátí šipku i label.

**M10 — grain reaguje na rychlost scrollu.** 0.028 v klidu → ~0.05 při rychlém scrollu.

- **Nejde přes custom property.** Grain je `body::after`; zapsat proměnnou na `body` znamená invalidovat computed style celého dokumentu každý frame — tedy přesně ta cena, kterou M0 naměřil na `:root` (16.8 → 19.6 ms/frame). Místo toho přibyla druhá, identická vrstva `.grain-boost` jako **vlastní bezdětný div**, kterému JS píše přímo `style.opacity`. Statický grain na `body::after` zůstal beze změny, takže bez JS je vzhled původní.
- Konzumuje `scrollState.velocity` z M0 — **do teď ji nic nepoužívalo**, M0 ji počítal právě pro M7/M10. Je už lerpovaná, syrová delta by grain rozblikala.
- Hodnota se zaokrouhluje na 3 desetinná místa, aby ocas lerpu nepsal nový string každý frame.
- Naměřeno: v klidu 0, při v=129 px/frame 0.022 (tj. celkem 0.05), po zastavení zpátky na 0.

**Perf po M9 + M10 + M11 + kontaktní stránce**, prokládané A/B proti stavu před M11 (4× CPU throttling, 60× wheel, 3 běhy): **před avg 16.7 ms / 0 framů přes 33 ms — po avg 16.7 ms / 0 framů přes 33 ms.**

### Hotovo (2026-08-11) — pin je zpátky (finální stav hera)

Majitel si po vyzkoušení verze bez připíchnutí vyžádal **M11 zpátky 1:1**. Obnoveno z gitu včetně původního časování vrstev (nadpis 0–0.50, podnadpis 0.10–0.60, stats 0.55–0.90, tlačítka 0.70–1.00, šipka 0–0.18), pinu 150vh a glow, který dojede na 0.4.

Naměřeno: track 2250 px, scéna 900 px, pin **1350 px = přesně 150vh**, `heroTop` drží na 0 po celé p=0→1, pak se uvolní a Služby nastoupí. Mimo pin nula zápisů, `will-change` zpátky na `auto`, žádné vodorovné přetečení. Perf: **avg 16,7 ms / 0 framů přes 33 ms**, stejně jako před M11.

Zachováno z mezikroku: `.hero { overflow: hidden }` (kvůli škálujícímu glow), `#hero::before { content: none }` + `.hero-glow` jako skutečný element, easing in-out sine.

**Dva známé kompromisy** (obojí bylo v M11 od začátku, majitel je viděl a chtěl 1:1):

1. Po odepnutí je 100vh, kdy se prázdné hero odroluje — geometrické minimum pro 100vh sticky hero. Nese to ztlumený glow. Zkrátit lze přes `--hero-pin` (1 = 100vh).
2. Mezi p≈0.6 a 0.85 zůstávají na ploše jen tlačítka (drží do 0.70) a doznívající stats bar. Pokud mají odejít s textem, `cta.from` na ~0.45.

#### Mezikrok (2026-08-11) — verze bez připíchnutí, nahrazena výše

Po revertu M11 si majitel vyžádal, ať horní část zůstane animovaná — **ale bez připíchnutí**. To je ten správný závěr z celé té zápletky: vadilo zastavení stránky, ne pohyb.

- **Žádný sticky, žádný track.** Hero je pořád `position: relative` a odscrolluje normálně. Progress je prostě `scrollY / výška hera` — 0 nahoře, 1 když hero projede. Stránka se nikde nezastaví.
- **Vrstvy `.hero-layer` se vrátily** (z commitu `d54b6f6`, bez `.hero-track`). Pořád platí důvod, proč existují: vstupní animace drží transform na samotných elementech přes 0.8s transition, takže zápis scroll offsetu na tentýž element by ji přepsal a zároveň protáhl každý frame tím easingem.
- **Choreografie překryvem, ne po sobě:** nadpis 0–0.55, podnadpis 0.08–0.62, tlačítka 0.16–0.70, stats 0.30–0.80, šipka dolů 0–0.16 (odejde hned, jakmile začneš scrollovat). Naměřeno na p=0.30: nadpis 0.43, podnadpis 0.64, tlačítka 0.83, stats 1.00 — postupné, ne skokové.
- Posuny jsou **záporné** (obsah se zvedá rychleji než stránka), takže nemůže přetéct do další sekce.
- Easing pořád in-out sine `[0.33, 0, 0.67, 1]`, ne `--ease-slow` — důvod viz níž u M11.
- `.hero` má `overflow: hidden` kvůli škálujícímu glow (jinak roste `scrollWidth` dokumentu, viz oprava u M6).
- **Pod 480 px a při reduced motion** se nezapisuje vůbec; 481–768 px má kratší posun (−22 px). Bez JS beze změny.
- Perf: prokládané A/B proti stavu před M11 — **avg 16,7 ms / 0 framů přes 33 ms** na obou stranách. Mimo hero nula zápisů, `will-change` zpátky na `auto`.

### Hotovo (2026-08-11) — M4 ⭐ + čísla sekcí pryč

**Čísla sekcí `(01)`–`(07)` zrušená** (rozhodnutí majitele) — 95 výskytů ve 23 souborech, plus pravidlo `.section-num`. Odstavec v `AGENTS.md`, který je předepisoval, je přeškrtnutý a označený jako neplatný, jinak je příští session vrátí zpátky.

**M4 — mockup se sám prochází.** Odblokováno tím, že jsem si full-page screenshoty **nasnímal sám** headless prohlížečem ze čtyř živých adres (1280 px viewport, `reducedMotion` ať jsou vstupní animace dojeté, projití celé stránky kvůli lazy obrázkům), pak zmenšil na 1024 px a uložil jako WebP q72. **490 kB celkem** — těsně pod stropem 500 kB z plánu.

- **Vrstvení:** `.portfolio-drift` (scroll drift) → `.browser-frame` → `.portfolio-img-wrap` (parallax + clip reveal) → `.portfolio-page` (odjezd při hoveru) → `img`. Každá vrstva má právě jeden transform. Bez toho by se vstupní `.blur-reveal` na `.portfolio-item` a scroll drift přepisovaly navzájem — stejný problém jako u heru.
- **Reveal se přesunul z `<img>` na `.portfolio-img-wrap`.** Obrázek je teď celá stránka (4293 px u Phera) a `clip-path` hnaný přes *tuhle* výšku by viditelné okno 16/10 odkryl v prvních pár procentech — reveal by vypadal jako skok.
- **Vzdálenost i doba odjezdu jsou per karta**, zapsané jako custom properties z `initPortfolioScroll()`: Phero −1791 px / 7,5 s, AtomiQ −966 px / 4,0 s, Docs Writer −1587 px / 6,6 s, PromptForge −2314 px / 9,6 s. Pevná doba by krátký web hnala a dlouhý plazila. **Návrat je 0,9 s eased** — rozdílná délka dopředu a zpátky je to, proč to působí jako přehrávání, ne jako přepnutí stavu.
- **Overlay → štítek v rohu.** Původní overlay rozmazával celý mockup právě ve chvíli, kdy se pod ním stránka roluje.
- **Adresní řádek** je v markupu (ne z JS), na hover se přepíše znak po znaku a zesvětlí. Odchod ho vrátí skokem, ne přetáčením — jinak přejetí myší přes mřížku spustí čtyři rewindy.
- **Název projektu roluje na adresu** — recyklovaná mechanika M9 (`rollLabel()` zobecněný o druhý řádek). Maska je široká podle názvu, takže delší adresa se ořezávala („pherobistro." místo celé) — dorovnává to nulová skrytá rozpěrka, scopnutá na `(hover: hover)`, ať na dotyku nemačká kategorii vedle.
- **D — sloupce se míjejí:** `.portfolio-drift` ±26 px proti sobě. Jedno čtení rozměrů na kartu, ne na každý pohyblivý prvek — karta sama se netransformuje, takže je stabilní referencí pro obojí.

**Opraven zděděný bug:** `clip-path` reveal nebyl podmíněný `.js`, takže **bez JavaScriptu byly všechny čtyři náhledy neviditelné** (`.active` nikdy nepřibylo). Teď je gated a bez JS se ukáže horní výřez skutečné stránky.

**Perf:** prokládané A/B proti stavu před M11, 4× CPU throttling — před avg 16,7 ms / 0 framů přes 33 ms, po **avg 16,7 ms / 0 framů přes 33 ms**.

### ❌ VRÁCENO (2026-08-11) — M6 i M11, rozhodnutí majitele

**Obojí je ze stránky pryč.** Sticky hero (M11) i stackování sekcí (M6) se majiteli nelíbily — „karty", které se na sebe vrství, a chybějící normální scrollování. Kód je odstraněný, `.hero` i jeho CSS jsou bajt po bajtu zpátky ve stavu před M11, jediné sticky prvky na homepage jsou zase jen `.manifest-sticky` (M8) a `.beat-stage` (M2).

Zůstalo: kontaktní stránka a spouštěče, M9 (tlačítka), M10 (grain), a oprava `initContactForm()`, která si mazala šipku z tlačítka. Ty se scrollu netýkají.

**Poučení pro další fáze — plán počítá s jiným webem, než jaký existuje.** Dvakrát po sobě:

- **M7** předpokládá mřížku log. Sekce Dovednosti jsou karty s odstavci textu.
- **M6** předpokládá sekce vysoké jako obrazovka. Osm z deseti je vyšších, takže `top: 0` by schoval spodky sekcí a muselo se to obcházet záporným `top`.

Když se efekt musí takhle ohýbat, aby vůbec šel udělat, je to signál, že na tenhle web nepatří — ne že se má ohnout víc. **Před dalším motion úkolem si nejdřív ověřit předpoklady proti skutečnému markupu a rozměrům, teprve pak psát kód.** Popis obou efektů níž zůstává jako záznam, co se zkoušelo a proč to nevyšlo.

#### Co se u M6 zjistilo (pro případ, že by se k tomu někdo vracel)

- **Stackují se tři sekce: Služby → Balíčky → Portfolio**, closer je Manifest. Krátký běh záměrně: kdyby se stackovalo všechno, přestane to být efekt. Proces (M2) a jeho sticky scéna zůstávají nedotčené.
- **Připíchnutí je na ZÁPORNÉM `top`, ne `top: 0`.** Všechny tři sekce jsou vyšší než viewport (Služby 1168 px proti 900 px) — při `top: 0` by se posledních 268 px nedalo nikdy zobrazit, což je ztráta obsahu, ne animace. `top = (viewport − výška)` sekci připíchne až ve chvíli, kdy její spodek dojede na spodek obrazovky, takže se nejdřív celá přečte. CSS to neumí (procento se počítá z containing blocku, ne z elementu), takže to per sekci píše `initSectionStack()` při initu a resize. **Ověřeno: spodek všech tří sekcí je dosažitelný** (877 / 874 / 874 px při viewportu 900).
- **Ztmavení je opacity překryvu, ne `filter: brightness()`.** Filtr na elementu přes celý viewport ho překresluje každý frame; opacity zůstane na kompozitoru. Překryv je skutečný bezdětný div (`.stack-veil`), takže se píše inline opacity, ne custom property (ta by invalidovala celou sekci).
- **Sekce, která najíždí přes jinou, musí být neprůhledná**, jinak spodní prosvítá. Padne tím v těch třech sekcích fixní mřížka teček — vizuálně to nevadí, jsou plné obsahu a tečky mají alfu 0.098. Alternativa (dokreslit tečky do sekce a držet je v kroku s globální mřížkou) by stála zápis `background-position` na tři velké elementy každý frame.
- **Pod 900 px a při reduced motion** se stackování vypíná úplně (`position: static`, průhledné pozadí, překryv `display: none`); JS hlídá stejné dvě podmínky a přestane zapisovat.

**Opraven bug z M11 (nalezen při ověřování M6):** `.hero-glow` se zvětšuje na 1.15, takže z vrstvy široké 1440 px bylo 1656 px a `scrollWidth` dokumentu vyrostl na 1548. `overflow-x: hidden` na `body` to vizuálně ořízl, takže nebylo nic vidět, ale stránka se neměla rozšiřovat. `.hero` dostal `overflow: hidden` — glow vyhasne do průhledna dávno před svým okrajem, takže ořez nic nestojí. Na sticky elementu samotném je to bezpečné; sticky by rozbil až `overflow` na **předkovi**.

### M7 — nejde udělat, jak je zadané (nahrazeno M6)

Plán počítá se „statickou mřížkou log". Sekce Dovednosti ale žádná loga nemá — je to 6 karet, každá ikona + `<h4>` + odstavec popisu s `data-i18n`. Udělat z nich dva jedoucí pásy znamená ten popisný text buď smazat, nebo ho nechat vodorovně ujíždět, což je nečitelné. Obojí je ztráta obsahu, ne animace. Pokud se k M7 vrátíme, chce to **samostatný pás se skutečnými logy technologií** (self-hosted SVG — Devicon CDN je podle `AGENTS.md` pryč) nad nebo pod stávající mřížkou, ne přestavbu karet.

#### Co se u M11 zjistilo (vráceno, viz výš)

- **Hero je připíchnutý a jeho části odcházejí po vlastních úsecích scrollu.** `.hero-track` je o jednu scénu vyšší než pin, takže se hero odepne samo a další sekce nastupuje bez překryvu — žádné `z-index` ani neprůhledné pozadí na `.services` nebylo potřeba. Změřeno: track 2250 px, scéna 900 px, pin **1350 px = přesně 150vh**, `heroTop=0` drží po celé p=0→1.
- **Klíčový detail: `.hero-layer` wrappery.** Vstupní animace (`.hero-fade`, `.word-mask`) drží transform na samotných elementech, a to **přes 0.8s transition**. Zápis scroll offsetu na tentýž element by vstupní animaci přepsal a zároveň protáhl každý scroll frame tím easingem. Wrapper drží scroll transform, vnitřek si nechá vstup. Wrappery nemají **žádné vlastní styly** — jinak by uvnitř přestaly kolabovat marginy a posunula by se vertikální rytmika hera.
- **Easing NENÍ `--ease-slow`.** Expo-out je křivka pro pohyb v čase; při scrubování spotřebuje skoro celý pohyb v první desetině vstupu. Naměřeno s `--ease-slow`: nadpis (rozsah 0→0.5) měl opacity 0.25 už na p=0.10 a 0.03 na p=0.25 — 97 % pryč 338 px do 1350px pinu, což působí jako teleport a zbytek pinu je prázdný. Použita symetrická in-out sine `[0.33, 0, 0.67, 1]`, knob je `HERO_MOTION.ease`.
- **Registrováno do smyčky z M0**, ne vlastní listener. Nativní `animation-timeline: view()` by muselo bojovat s CSS transitions, které na těch elementech už jedou.
- **Perf: nulová cena.** Prokládané A/B proti `HEAD` (4× CPU throttling, 60× wheel): **před avg 16.7 ms, 0 framů přes 33 ms — po avg 16.7 ms, 0 framů přes 33 ms.** Mimo pin nula zápisů na vrstvy (guard na nezměněné `p`), `will-change` se vrací na `auto`.
- **Přístupnost:** vrstvy s odkazy (`cta`, `cue`) dostanou po dofadování `visibility: hidden`, aby klávesnice nikdy nepřistála na neviditelném odkazu. Zapisuje se jen na hraně, ne každý frame.
- **Bez JS / reduced motion / ≤480 px:** track nemá vlastní výšku, hero je `position: static`, nula transformů — JS na stejné dvě podmínky přestane zapisovat a uklidí, co už zapsal. 481–768 px: pin zkrácen na 100vh, glow parallax vypnutý, posun jen −24 px.
- Ověřeno: 50/50 reveal elementů, rotující fráze jede, CZ→EN→CZ round-trip, podstránka 27/27 revealů, **nula chyb v konzoli**. Podstránky nedotčené (`.subpage-hero` má vlastní `min-height: 60vh`, `::before` glow jim zůstal).
- **Zbývá zvážit:** po odepnutí je 100vh, kdy se prázdné hero odroluje — je to geometrické minimum pro 100vh sticky hero, nese to ztlumený glow (0.4). Zkrátit lze přes `--hero-pin`. A mezi p≈0.6 a 0.75 zůstávají na prázdné ploše jen tlačítka + stats bar (CTA drží do 0.7); pokud má odejít s textem, `cta.from` na ~0.45.

### Hotovo (2026-08-10) — M2 ⭐

- **Sekce Proces je scroll-kino.** `.beat-track` 400vh, uvnitř `.beat-stage` sticky 100vh. Jeden mockup prohlížeče se staví ve 4 beatech: prázdný rámeček s mřížkou → drátěnka (bloky staggerem po `--i`) → obsah + URL v liště → hotový web se stoupajícím grafem.
- **Scrubované, ne jen spouštěné.** JS zapisuje na `.beat-stage` dvě proměnné: `--p` (0–1 přes celou sekci) a `--sub` (0–1 uvnitř beatu). `--p` posouvá mockup i levý sloupec a plní pravou lištu, `--sub` táhne sloupce grafu — takže se s kolečkem hýbe průběžně, ne skokem. Hrubý stav (který beat) je `data-beat` na stage, ne interpolace.
- **Proměnné jdou na `.beat-stage`, ne na `:root`** — jinak by se každý frame invalidoval style celého dokumentu (viz M0).
- **Guard proti přepočtu mimo sekci:** nad a pod sekcí je `p` napevno 0/1, ale zápis stejné hodnoty pořád invaliduje podstrom. Bez guardu to stálo 12 framů přes 33 ms při průchodu celou stránkou. S guardem: avg 16.7 ms/frame, nejhorší 17.8 ms, **nula** přes 33 ms — i když se měří jen průchod samotnou připíchnutou sekcí.
- Stará timeline zůstala v CSS i v `initTimeline()` — **používá ji 22 podstránek**, homepage ji jen přestala mít v markupu.
- Copy beze změny, recyklované klíče `step1..4_title/_desc` → CS i EN sedí bez nových překladů.
- **Pod 900 px a při reduced motion** se sticky vypíná úplně a scéna se skryje: 4 bloky pod sebou. **Bez JS** se track složí (výška `400vh` je za `.js`) a drátěnka je rovnou vidět.

### Hotovo (2026-08-10) — M3

- **Řádkový mask reveal** na `.section-title` a `.section-subtitle` (homepage 10 elementů, podstránka 7). Splitter jede přes `Range` + `getBoundingClientRect()` po slovech, ne přes stringy — vnitřní markup (`<em>` akcenty, `data-i18n` spany) přežije i uprostřed zalomení. Měří se až po `document.fonts.ready` (+ 800 ms pojistka).
- `.section-header` **ztratil** `.blur-reveal` (blur přes celý blok by rozmazal řádkový posun uvnitř), místo něj ho dostal malý `.section-eyebrow`. Je to výměna 1:1, takže **celkový počet blur elementů zůstal 44** — plánovaná „polovina" nejde bez sundání blur z karet/obrázků/mřížek, což plán naopak zakazuje. Co se změnilo: nadpisy už blur nepoužívají.
- **i18n:** `updateLanguage()` nejdřív vrátí nerozsekaný markup (`restoreLineReveals()`), pak přeloží, pak resplituje. `.active` zůstává → nové uzly se rovnou spočítají do finální pozice a animace se nepřehraje znovu. Ověřen round-trip CS → EN → CS, 10 elementů pořád sedí.
- **Diakritika:** `.line` má `padding-top: 0.14em` + `margin-top: -0.14em`, jinak maska ořízne háčky nad velkými písmeny (Č, Ř, Ů). Ověřeno na „Časté otázky" — háček i dolní dotah „y" celé.
- Mezera na konci řádku se do `.line-inner` dopisuje zpátky, jinak `textContent` slepí „webu" + „po".
- **Reduced motion / bez JS:** text se vůbec neseká, zůstane jak je v HTML.
- Perf beze změny: avg 16.7 ms/frame, nula framů přes 33 ms (4× CPU throttling).

### Hotovo (2026-08-10) — M0

- **Jeden scroll handler.** Pět listenerů (tři bez rAF) → jeden `passive` listener + jeden rAF tik. Efekty se registrují přes `onScroll(fn)` a dostanou `scrollY` / `innerHeight` / scroll rozsah změřené jednou na začátku framu; callbacky už jen zapisují.
- `initTimeline()` si `offsetTop`/`offsetHeight` počítá při initu a na `resize`, ne při scrollu. Timeline fill jede `transform: scaleY()`, progress bar `transform: scaleX()` — obojí bylo layout vlastností.
- **`--scroll-v` se záměrně NEPUBLIKUJE na `:root`.** Custom properties se dědí, takže přepis na rootu invaliduje computed style celého dokumentu každý frame — naměřeno na homepage při 4× CPU throttlingu: avg 16.8 → 19.6 ms/frame a 1 → 25 framů přes 33 ms. Velocity je proto jen v JS (`scrollState.velocity`). **M7 si ji vezme z JS. M10 musí proměnnou zapsat na svůj vlastní element, ne na `:root`** (a přeměřit).
- Magnetická tlačítka zúžena na `.btn` a `.logo`.
- Naměřeno po M0 (homepage, 4× CPU throttling): avg 16.7 ms/frame, nejhorší frame 17.6 ms, **nula** framů přes 33 ms (před: nejhorší 33.3 ms). 51/51 reveal elementů naskočí, nula chyb v konzoli, ověřeno i `prefers-reduced-motion` a šířka 360 px.

### Hotovo (2026-08-09)

- **Custom kurzor odstraněn** — `.cursor-dot` markup pryč z 23 HTML souborů, všechny `cursor: none` nahrazeny nativním `pointer`, `initCursor()` → `initPointerAmbience()`. Zůstal jen pointer-following glow + rozsvícená mřížka teček na pozadí (`.cursor-glow`, `.grid-reveal`) — to není kurzor, to je osvětlení pozadí. Ověřeno headless: 44/44 reveal elementů naskočí, nula chyb v konzoli.

---

## Analýza referencí

Co skutečně pohání weby, které se líbí (zjištěno z jejich zdrojáků, 2026-08-09):

| Web | Stack | Poznávací znak |
|---|---|---|
| ricardochance.com | Next.js + Three.js/WebGL + GSAP + **Lenis** | WebGL scéna, setrvačný scroll |
| grainient.supply | Framer + **Lenis** | grain jako identita, setrvačný scroll |
| jingjinghan.com | Next.js, atributy `data-reveal`, `data-cursor-hover` | deklarativní reveal systém |
| gptagency.io | Next.js, třídy `akt`, `beat`, `beat-buehne`, `stage-morph`, `chart-kino`, `dashboard-kino` | **scroll jako filmové dějství** |
| prolibu.com | vlastní `iso-player.js` (zero-dependency, MIT) | `mouseOverStop` — na hover se animace přehraje po stop-frame, na odjezd doběhne |
| haoqi.design | React, ze zdrojáku nic nedetekovatelné | — |

Dva takeaways, které jdou udělat vanilla bez jediné knihovny:

1. **gptagency staví sekci jako dějství** (`akt` → `beat` → `stage-morph`) — sticky scéna, která se mění podle scroll pozice. To je M2.
2. **prolibu má hover animaci s dopřednou i zpětnou fází** — ne „stav A/stav B", ale přehrávání. To je M4.

---

## Pravidla (platí pro všechny úkoly níže)

Doplňují — nenahrazují — pravidla z `AGENTS.md`:

- **Žádné knihovny, žádný build step.** Vanilla HTML/CSS/JS. Platí i pro Lenis, GSAP, Three.js.
- **Jen `transform`, `opacity`, `clip-path`.** Nikdy width/height/top/margin.
- **Jeden globální rAF scroll handler** (viz M0) — každý nový scroll efekt se registruje do něj, ne jako vlastní listener.
- **Každá animace má vypínač přes `prefers-reduced-motion: reduce`.** Bez výjimky. Obsah rovnou viditelný.
- Animace vstupu hrají **jednou** (`observer.unobserve`), hover animace samozřejmě opakovaně.
- Po každém úkolu ověřit 60 fps v DevTools Performance na mobilním throttlingu (4× CPU slowdown).
- Testování: `python3 -m http.server 8000`. Headless QA **jen** přes playwright-core s `page.mouse.wheel()` — `scrollTo()` ani `--virtual-time-budget` u tohohle webu nefungují (IntersectionObserver nenaskočí).

---

## M0 — Základ: sloučit scroll handlery (dělat PRVNÍ)

Bez tohohle bude cokoliv dalšího sekat na mobilu.

Dnes je v `script.js` **5 samostatných `scroll` listenerů**, tři z nich úplně bez rAF throttlingu:

| Funkce | rAF? |
|---|---|
| `initPortfolioParallax()` | ✅ |
| `initBackgroundParallax()` | ✅ |
| `initNavbar()` | ❌ |
| `initTimeline()` | ❌ — navíc čte `offsetTop`/`offsetHeight` při každém scrollu (layout thrashing) |
| `initScrollProgress()` | ❌ — zapisuje `bar.style.width`, což je layout vlastnost |

**Co udělat:**

- Vytvořit `initScrollLoop()` s jedním `window.addEventListener('scroll', …, { passive: true })`, jedním `ticking` flagem a registrem callbacků: `onScroll(fn)` → pole, které se v rAF projde.
- Všech 5 efektů přepsat na `onScroll(fn)`. Odstranit jejich vlastní listenery.
- V rAF tiku číst rozměry **jednou** do lokálních proměnných (`scrollY`, `innerHeight`) a předat je callbackům — ne aby si každý sahal na `window` zvlášť.
- `initTimeline()`: `offsetTop`/`offsetHeight` sekce si spočítat jednou při initu a při `resize`, ne při scrollu.
- Scroll progress bar: `width` → `transform: scaleX()` s `transform-origin: left`.
- Do smyčky rovnou přidat výpočet **scroll velocity** (`Math.abs(scrollY - lastY)`, vyhlazeno lerpem) a zapsat ji jako CSS proměnnou `--scroll-v` na `:root` — potřebují ji M7 a M10.

**Zúžit magnetická tlačítka.** `initMagneticButtons()` teď bere `.btn, .logo, .nav-links a, .portfolio-item`:
- `.portfolio-item` **odstranit** — magnet na velké kartě působí rozklepaně a inline `transform` si koliduje s `.blur-reveal` transformací, když uživatel najede dřív, než karta doreveluje.
- `.nav-links a` **odstranit** — magnet na malých odkazech v liště je nervózní; podtržení stačí.
- Nechat jen `.btn` a `.logo`.

**Akceptace:** jeden `addEventListener('scroll')` v celém `script.js`, žádné čtení `offsetTop` ve scroll cestě, 60 fps na 4× CPU throttlingu.

---

## M1 — Plynulý (setrvačný) scroll · ROZHODNUTÍ MAJITELE

To, po čem se vám líbí ricardochance a grainient, je z 80 % **Lenis** — setrvačnost celé stránky. Jde napsat vanilla (~40 řádků: lerp `scrollY` → `transform: translate3d` na wrapperu, `body` má výšku obsahu).

**Ale kolidují dvě věci:**

1. `AGENTS.md` to výslovně zakazuje: *„Žádné scroll-jacking / smooth-scroll knihovny."*
2. Reálné náklady: rozbíjí `position: sticky` (což potřebuje M2 a M6), rozbíjí kotvy `#services` atd., na mobilu se vypíná, komplikuje a11y (klávesnice, `scroll-into-view` u focusu).

**Doporučení: neimplementovat.** M7 (reakce na scroll velocity) a M8 (progresivní reveal textu) dají 70 % stejného pocitu za 10 % rizika a bez konfliktu s M2/M6.

Pokud to majitel přesto chce: nejdřív M2 a M6 (obojí na `sticky`), pak vyhodnotit, jestli je vůbec nutné. Neimplementovat bez explicitního odsouhlasení.

---

## M2 — Scroll-kino v sekci Proces ⭐ SIGNATURE

**Tohle je ten jeden nezaměnitelný moment.** Přesně princip, na kterém stojí gptagency (`beat` / `stage-morph`), ale s vaším obsahem a vaší monochromií.

Sekce Proces se přilepí na obrazovku a jak uživatel scrolluje, **jeden mockup prohlížeče projde čtyřmi stavy** — od drátěnky po výsledky:

| Beat | Levý sloupec (text) | Pravý sloupec (scéna) |
|---|---|---|
| 01 | Konzultace | prázdný rámeček prohlížeče, jen mřížka |
| 02 | Návrh | drátěnka — šedé bloky nabíhají staggerem |
| 03 | Vývoj | bloky se plní obsahem, naskočí typografie |
| 04 | Spuštění | hotový web + stoupající sloupcový graf |

**Technika:**

- Sekce dostane výšku `400vh` (4 beaty × 100vh). Uvnitř `.beat-stage` s `position: sticky; top: 0; height: 100vh`.
- Levý sloupec: 4 textové bloky nad sebou, aktivní má `opacity: 1`, ostatní `0.25`.
- Pravý sloupec: scéna s absolutně napozicovanými vrstvami; každý beat = jedna vrstva, přepínají se třídou.
- Progress: z registru M0 `(scrollY - sectionTop) / (sectionHeight - innerHeight)` → 0–1, z toho `Math.floor(progress * 4)` = index beatu. **Přepínat třídy, ne interpolovat každý pixel** — je to levnější a čitelnější.
- Přechod mezi beaty: `opacity` + `translateY(12px)`, 0.5 s `--ease-slow`. Žádný scroll-jacking, scroll běží nativně.
- Scéna kreslená **inline SVG + divy**, žádné obrázky — musí být ostrá na retině a měnitelná bez exportu.

**Reduced motion:** sticky vypnout, vypsat 4 beaty pod sebou jako statické karty (dnešní timeline layout).

**Mobil:** pod 900 px sticky vypnout úplně, zobrazit jako 4 karty pod sebou. Sticky scéna na 390 px nedává smysl.

**i18n:** všechny popisky beatů přes `data-i18n`, klíče do `translations.cs` i `translations.en`.

**Akceptace:** sekce jede plynule oběma směry, žádné poskakování na hranicích beatů, funguje bez JS (bez JS = 4 karty pod sebou), 60 fps na throttlingu.

---

## M3 — Řádkový mask reveal místo blur ⭐

`.blur-reveal` na 44 elementech je nejgeneričtější efekt na webu. Nahradit tím, co už v heru máte a co funguje nejlíp.

- Napsat malý splitter: element s `data-reveal="lines"` se **po `document.fonts.ready`** změří, jeho text se rozseká po vizuálních řádcích (porovnáním `getClientRects()` u `Range` přes jednotlivá slova) a každý řádek se zabalí do `<span class="line"><span class="line-inner">…</span></span>`.
- `.line { display: block; overflow: hidden; }`, `.line-inner { display: block; transform: translateY(105%); }` → `.active .line-inner { transform: translateY(0); transition: transform 0.9s var(--ease-slow); }`, stagger 70 ms mezi řádky.
- Napojit na **existující** IntersectionObserver v `initBlurReveals()` — stejná třída `.active`, žádný nový systém.
- Použít na: všechny `.section-title`, `.section-subtitle`, perex odstavce. **Ne** na dlouhé odstavce (postupně nabíhající 8řádkový text je otravný) a ne na karty.
- `.blur-reveal` **nechat** na kartách, obrázcích a mřížkách — tam blur funguje. Cílem je snížit 44 elementů zhruba na polovinu.
- Bez JS / při reduced motion: text rovnou viditelný, žádné rozsekání.

**Pozor na i18n:** `updateLanguage()` přepisuje `textContent`, což rozseká strukturu `<span class="line">`. Řešení: po každém přepnutí jazyka splitter na dotčených elementech spustit znovu, nebo si u `data-reveal` elementů držet originální text v `dataset` a resplitovat.

**Akceptace:** české znaky (č ř ě ů) se neořezávají o `overflow: hidden` (pozor na diakritiku nad velkými písmeny — `.line` možná potřebuje `padding-top` + záporný `margin-top`), přepnutí jazyka reveal nerozbije.

---

## M4 — Portfolio hover: web se v mockupu sám scrolluje ⭐

Dnes hover jen ztmaví a ukáže tlačítko. Cíl: **mockup ožije, jako by v něm běžel skutečný web.**

- Nahradit výřezy 16:10 za **full-page screenshoty** (dlouhý obrázek celé stránky). Bez nich to nejde udělat.
- `.browser-content` má pevný poměr a `overflow: hidden`, obrázek uvnitř má `height: auto` (tedy je mnohem vyšší než rámeček).
- Hover: `transform: translateY(calc(-100% + 100cqh))` — obrázek odjede na svůj konec, `transition: transform 3.5s linear`. Mouseleave: zpátky na `translateY(0)`, `transition: transform 0.9s var(--ease-slow)` (návrat rychlejší než odjezd — princip z prolibu `iso-player`: dopředná a zpětná fáze mají různou délku).
- Doba odjezdu podle výšky obrázku, ne fixní — jinak krátký web sviští a dlouhý se plazí. Spočítat v JS: `duration = height / 240` sekund, zapsat jako inline `transition-duration`.
- Overlay s tlačítkem „Zobrazit web" **ztlumit** — dnes překrývá celý mockup blurem, což by novou animaci schovalo. Změnit na malý štítek v rohu, který nabíhá zdola.
- Do lišty prohlížeče přidat **URL adresu projektu** v mono fontu (`--text-faint`), na hover se přebarví na `--text-muted`.
- Reduced motion + touch: žádný scroll, statický výřez shora (dnešní chování).

**Akceptace:** hover plynulý i na 4k, obrázky nesmí zvednout stránku nad ~500 kB celkem (WebP, quality ~72), na dotyku beze změny.

---

## M5 — Služby jako index-list s plovoucím náhledem

Máte 11 podstránek služeb, ale na homepage jsou jen 3 karty. Udělat z nich **editorial seznam** — to je typický „drahý studiový" pattern (haoqi, ricardochance).

- Řádky oddělené hairline linkami: `(01)` mono číslo · název služby (velký, `--font-display`) · kategorie mono uppercase vpravo · šipka `→`.
- Hover řádku: text se posune o 12 px doprava, ostatní řádky ztlumí na `opacity: 0.35`, hairline pod řádkem se rozsvítí.
- **Plovoucí náhled:** u kurzoru se objeví obrázek ~320×200 px, sleduje pointer s lagem (lerp 0.12 — stejný princip jako `initPointerAmbience()`, dá se navěsit na tentýž rAF), lehká rotace `rotate(-3deg)` a `scale(0.9) → scale(1)` při nájezdu.
- Náhledy **pouze** `@media (pointer: fine)` a jen když jsou obrázky už načtené (`loading="lazy"` + `decoding="async"`).
- Na dotyku: čistý seznam bez náhledů, celý řádek je klikací.

**Akceptace:** náhled nikdy nevyjede mimo viewport (clampovat pozici), na mobilu se nenačítá vůbec.

---

## M6 — Sekce se stackují

Levný trik s velkým dopadem na hloubku: každá sekce `position: sticky; top: 0`, následující najíždí přes ni, odcházející se zmenší a ztmaví.

- `.section { position: sticky; top: 0; }` + na odcházející sekci přes IntersectionObserver třída, která dá `transform: scale(0.96)` a `filter: brightness(0.6)`, 0.6 s `--ease-slow`.
- Následující sekce musí mít neprůhledné pozadí (`background: var(--bg-dark)`), jinak prosvítá.
- **Pozor na kolizi s M2** — sekce Proces má vlastní sticky scénu; tu ze stackování vyjmout.
- Aplikovat jen na 3–4 sekce, ne na všechny. Když se stackuje všechno, přestane to být efekt.

**Reduced motion:** `position: static`, žádné scale.

---

## M7 — Skills jako pás reagující na scroll

Statická mřížka log → dva nekonečné pásy jedoucí proti sobě.

- Dva `.marquee-track`, každý obsah 2× duplikovaný, `transform: translateX()` posouvaný v rAF (ne CSS `animation` — potřebujeme měnit rychlost za běhu).
- **Rychlost a směr reaguje na `--scroll-v` z M0**: v klidu pás jede pomalu (~20 px/s), při scrollu dolů zrychlí, při scrollu nahoru se otočí. Rychlost lerpovat, ne skokem.
- Fade na okrajích přes `mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)`.
- Hover nad pásem: zpomalí na ~20 %.

**Reduced motion:** pás stojí, zobrazí se jako statická mřížka (dnešní stav).

---

## M8 — Manifest, který se rozsvěcuje slovo po slovu

Jedna velká věta mezi sekcemi jako dechová pauza. Např. *„Neděláme šablony. Děláme weby, které vydělávají."*

- Věta rozsekaná po slovech, každé slovo `opacity: 0.14`.
- Podle scroll progressu sekce (z registru M0) se slova **postupně rozsvěcují** na `opacity: 1` — index slova mapovaný na progress 0–1.
- Text v `--font-display`, `clamp(2rem, 4vw, 3.25rem)`, max šířka ~18 slov. Delší věta efekt zabije.
- Sekce vysoká ~180vh, samotný text sticky vycentrovaný.

**i18n:** slova se sekají z `data-i18n` textu → po přepnutí jazyka resplitovat (stejný problém jako M3).

**Reduced motion:** všechna slova rovnou `opacity: 1`.

---

## M9 — Tlačítka: výměna textu + wipe

15 řádků CSS, okamžitě to působí dražeji než současné `translateY(-1px)`.

- Label zabalit do `<span class="btn-label"><span>Text</span><span aria-hidden="true">Text</span></span>`, wrapper `overflow: hidden`, spany nad sebou.
- Hover: oba spany `translateY(-100%)` — první odjede nahoru, druhý nastoupí zdola. 0.4 s `--ease-smooth`.
- Zároveň pozadí zalité odspoda: `::before` se `transform: scaleY(0)` → `scaleY(1)`, `transform-origin: bottom`.
- Šipka: dnešní `translateX(4px)` nechat.
- Stejný princip na `.pricing-cta` a `.form-submit`.

**Reduced motion:** jen barevný přechod, žádný posun.

---

## M10 — Grain reaguje na rychlost scrollu

Máte statický grain na `opacity: 0.028`. Navázat ho na `--scroll-v` z M0: v klidu 0.028, při rychlém scrollu až 0.05.

- `body.clean-theme::after { opacity: calc(0.028 + var(--scroll-v, 0) * 0.00012); }`, hodnotu clampovat.
- `--scroll-v` musí být **lerpovaná**, jinak grain bliká.
- Musí zůstat na hraně vnímatelnosti — když si toho uživatel všimne vědomě, je to moc silné.

**Reduced motion:** konstantní 0.028.

---

## Doporučené pořadí a dávkování

Neimplementovat všechno. Deset efektů navíc = stejný problém jako dnes, jen dražší.

| Pořadí | Úkol | Proč |
|---|---|---|
| 1 | **M0** | předpoklad všeho ostatního |
| 2 | **M2** | signature moment, zároveň prodává službu |
| 3 | **M4** | přímo odpovídá na „ať se s tím něco děje na hover" |
| 4 | **M3** | odstraní nejgeneričtější efekt na webu |
| 5 | M9 | nejlepší poměr efekt/práce |
| 6 | M5 nebo M8 | jedno z nich, ne obojí |
| — | M6, M7, M10 | až když první čtyři sedí |
| — | M1 | jen po rozhodnutí majitele, viz výše |

Commit po každém úkolu (1 úkol ≈ 1 commit), ne jeden mega-commit.

---

## Co potřebuje rozhodnutí nebo podklad

- **M1 (setrvačný scroll)** — koliduje s pravidlem v `AGENTS.md`. Doporučení: neimplementovat.
- **M4 potřebuje nové screenshoty** — full-page zachycení všech 4 projektů (Phero Bistro, AtomiQ, Docs Writer, PromptForge). Bez nich úkol nejde udělat.
- **M2 potřebuje texty beatů** v CS i EN — 4 nadpisy + 4 popisky.
- **M8 potřebuje schválenou větu manifestu** — copy je u tohohle efektu půlka výsledku.
- **Pointer glow** (`.cursor-glow`, `.grid-reveal`) zůstal po odstranění kurzoru. Pokud má jít pryč taky: smazat `initPointerAmbience()`, dva divy v 23 HTML souborech a příslušné CSS bloky.

## Co NEDĚLAT

- Nepřidávat knihovny (Lenis, GSAP, Three.js) — ani jako „jen jeden malý soubor".
- Neanimovat layout vlastnosti (width, height, top, margin).
- Nepřidávat další scroll listenery mimo registr z M0.
- Nedělat efekt, který nejde vypnout přes `prefers-reduced-motion`.
- Neměnit kotvy, ceny, kontakty ani Formspree endpoint (viz `AGENTS.md`).
