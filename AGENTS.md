# AGENTS.md — NS Web (ns-web.com) · Fáze 2: „Quiet Luxury" redesign

Návod pro AI agenta. Přečti celý soubor, než začneš cokoliv měnit. Cílem této fáze je posunout vizuál a obsah webu na **prémiovou, luxusní úroveň** — web studia musí sám být nejlepší referencí studia.

## Co je to za projekt

Statická one-page prezentace webového studia NS Web. Žádný build systém, žádné npm závislosti — jen tři soubory:

- `index.html` — celá stránka (hero, služby, portfolio, tým, skills, proces, FAQ, kontakt, footer)
- `style.css` — tmavý monochromatický design, CSS proměnné v `:root`
- `script.js` — vanilla JS: i18n (CS/EN, objekty `translations.cs`/`translations.en`), scroll animace (`.blur-reveal` + IntersectionObserver), rotující hero fráze, custom kurzor, FAQ akordeon, Formspree formulář

Stav po fázi 1 (už hotovo, neopravuj znovu): obrázky ve WebP (~300 kB celkem), ikony inline SVG (Lucide odstraněno), Devicon zafixován na 2.16.0, web funguje bez JS (`.js` class gating), `prefers-reduced-motion` respektováno, a11y (skip link, `<main>`, aria-expanded/controls, `:focus-visible`), FAQ grid-rows animace, JSON-LD s FAQPage.

Externí služby: **Formspree endpoint `https://formspree.io/f/mlgpbwbj` — NIKDY neměnit**, Google Fonts (Inter — viz úkol T1), Devicon CDN (viz úkol T7).

## Jak testovat

```bash
python3 -m http.server 8000
# otevři http://localhost:8000
```

Po každém logickém celku zkontroluj:
1. Oba jazyky — přepni CZ/EN, projdi celou stránku (rotující hero fráze, footer, FAQ).
2. Mobil (DevTools, 390 px) — hero, karty, menu, formulář.
3. Konzole bez chyb, žádný failed request.
4. České znaky (č ř ě ů) se správně vykreslují v novém display fontu — **kritické, viz T1**.
5. `prefers-reduced-motion: reduce` — obsah viditelný, žádné animace.

Pozn.: headless screenshot s `--virtual-time-budget` neaktivuje IntersectionObserver (`.blur-reveal` zůstane skrytý) — není to bug webu; testuj Puppeteerem se skutečným scrollem, nebo v reálném prohlížeči.

## Pevná pravidla

- **Žádné frameworky, žádný build step, žádné npm závislosti.** Vanilla HTML/CSS/JS.
- **i18n:** Každý viditelný text má `data-i18n` a klíč v OBOU objektech `translations.cs` i `translations.en`. Přidáváš text → přidej oba klíče. Mažeš element → smaž oba klíče.
- **Čeština:** důsledně **vykat** klientům. Nadpisy v češtině **sentence case** („Co přesně děláme", ne „Co Přesně Děláme") — Title Case je anglicismus. V angličtině Title Case zůstává.
- **Formspree endpoint neměnit.** **Ceny a kontaktní údaje neměnit** (e-mail, telefon).
- Neměnit kotvy `#services`, `#portfolio`, `#process`, `#team`, `#faq`, `#contact` ani mazat sekce.
- Design měnit **jen v rámci direction níže** — monochrom zůstává základ, změny jsou v typografii, detailech a mikrointerakcích, ne v layoutu od nuly.
- Commituj po logických celcích (1 úkol ≈ 1 commit), ne jeden mega-commit.

---

## Design direction: „Quiet luxury"

Web je dnes čistý, ale **generický** — vypadá jako tisíc jiných dark-mode portfolií (jeden sans font, ploché karty, pure-white na pure-black). Prémiovost = typografický kontrast, teplo v paletě, řemeslné detaily. Konkrétně:

1. **Typografický kontrast** — párování: display serif (kurzíva jako akcent) + Inter na všechno ostatní. To je jediná největší změna vzhledu.
2. **Teplá monochromie** — pure white `#ffffff` na pure black působí levně a svítí. Krémová bílá + hlubší černá + šampaňský mikro-akcent.
3. **Detaily řemesla** — číslované sekce, hairline linky, jemný grain, mikrointerakce na hover. Nic nekřičí, vše sedí na milimetr.
4. **Přirozená čeština** — sentence case, žádné kalky z angličtiny.

### Nové design tokeny (T2 je zavádí, ostatní úkoly je používají)

```css
:root {
    --bg-dark: #060607;            /* hlubší než současné #0a0a0c */
    --bg-card: #0b0b0d;
    --card-border: rgba(255, 255, 255, 0.07);
    --card-border-hover: rgba(255, 255, 255, 0.16);

    --text-primary: #f2efe9;       /* krémová bílá místo #ffffff */
    --text-muted: #8a8781;         /* teplý šedý tón místo #888888 */
    --text-faint: #45433f;

    --accent: #c8b995;             /* šampaňská — POUZE mikro-akcenty, viz níže */
    --accent-soft: rgba(200, 185, 149, 0.08);

    --font-display: 'Instrument Serif', Georgia, 'Times New Roman', serif;
    --font-body: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    --font-mono: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
}
```

**Pravidlo pro `--accent`:** šampaňská se smí objevit jen v: číslech sekcí/kroků, kurzívních serif akcentech, tečce za nadpisy, hover podtržení odkazů. Nikdy na plochách, pozadích ani tlačítkách. Když si nejsi jistý — nech to bílé/šedé. Přesycení akcentem = konec luxusu.

---

## Úkoly (v tomto pořadí — T1/T2 jsou základ pro všechno ostatní)

### T1 — Typografie: display serif + self-host fontů

- Přidej font **Instrument Serif** (řezy: `regular` a `italic`, 400) — má latin-ext, takže umí č/ř/ě/ů. **Ověř diakritiku vizuálně hned po nasazení.**
- **Self-hostuj oba fonty** (Instrument Serif + Inter 400/500/600) jako woff2 v `assets/fonts/`:
  - Stáhni z Google Fonts API s moderním User-Agentem, ať dostaneš woff2 + latin-ext, např.:
    `curl -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120 Safari/537.36" "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap"` → z CSS vytáhni woff2 URL pro latin a latin-ext subsety a stáhni je.
  - Napiš `@font-face` bloky s `font-display: swap` a `unicode-range` podle staženého CSS.
  - Smaž `<link>` na fonts.googleapis.com + oba `preconnect` z `index.html`.
  - Přidej `<link rel="preload" as="font" type="font/woff2" crossorigin>` pro 2 kritické soubory: Inter 400 latin-ext a Instrument Serif italic latin-ext.
  - Fallback: pokud stažení selže, nech Google Fonts CDN a jen přidej Instrument Serif do stávajícího `<link>` — ale self-host preferuj.
- Fluidní škála: H1 `clamp(3rem, 7.5vw, 5.75rem)`, section title `clamp(2.25rem, 4.5vw, 3.5rem)`, `letter-spacing: -0.02em` na display velikostech, `line-height: 1.05` u H1.
- Akceptace: žádný request na fonts.googleapis.com/gstatic.com (při self-hostu), diakritika OK v obou fontech, CLS bez viditelného skoku.

### T2 — Paleta: teplá monochromie

- Přepiš `:root` v `style.css` na tokeny z Design direction výše (hodnoty přesně).
- Zkontroluj místa s natvrdo zapsanou `#fff`/`#ffffff`/`rgba(255,255,255,…)` v `style.css` — texty a plochy převeď na proměnné; čistě dekorativní alpha-bordery můžou zůstat.
- `::selection { background: var(--accent); color: var(--bg-dark); }`.
- `<meta name="theme-color" content="#060607">` do `<head>`.
- Akceptace: web nemá nikde pure white text, kontrast textů ≥ 4.5:1 (krémová #f2efe9 na #060607 má ~17:1, OK).

### T3 — Hero: typografický moment

Hero je první dojem a dnes je to jen levně nasázený text v prázdném prostoru.

- **Rotující fráze** (`hero_rotate_words`): vykresli ji v `--font-display`, kurzívou, ve stejné velikosti jako H1, barva `--text-primary` (případně poslední slovo `--accent`... ne — celá fráze krémová, žádný accent tady). Serif kurzíva vedle Inter H1 = podpis celého redesignu.
- Za statickou část H1 přidej tečku v `--accent` (jen pokud to typograficky sedí — jinak vynech).
- Jemná záře za nadpisem: na `.hero` přidej `::before` s `background: radial-gradient(ellipse 55% 45% at 28% 38%, rgba(242,239,233,0.05), transparent 70%); pointer-events: none;`.
- Stats řádek (7+ projektů / 2 lidé / týdny do spuštění): čísla v `--font-display` (větší, např. 2.5rem), popisky mono uppercase `--text-faint`, oddělené hairline `border-left: 1px solid var(--card-border)`. Nad celým řádkem hairline linka.
- Tlačítka: primary — při hover jemné `translateY(-1px)` + shadow `0 8px 24px rgba(242,239,233,0.08)`; u „Napsat" nech šipku/ikonu posunout o 3 px doprava (`transition transform`). Border-radius tlačítek sjednoť na 2 px (ostré = prémiové, pill nechceme).
- Respektuj `prefers-reduced-motion` (rotace frází už je ošetřená — zachovej).

### T4 — Číslované sekce + sentence case

- Nad každý `.section-title` přidej eyebrow řádek: `<span class="section-num">(01)</span> <span class="section-label" data-i18n="…">Služby</span>` — mono font, uppercase, `letter-spacing: 0.18em`, `font-size: 0.75rem`; číslo v `--accent`, label v `--text-faint`. Pod eyebrow hairline linka přes celou šířku containeru. Číslování: 01 Služby, 02 Portfolio, 03 Tým, 04 Dovednosti, 05 Proces, 06 FAQ, 07 Kontakt.
- Přepiš CS nadpisy do sentence case + přirozenější znění (uprav klíče v `translations.cs`, EN nech Title Case):
  - `services_title`: „Co přesně děláme"
  - `portfolio_title`: „Naše práce", `portfolio_sub`: „Vybrané projekty, které fungují v praxi"
  - `team_title`: „Kdo za tím stojí"
  - `skills_title`: „Co umíme"
  - `process_title`: „Jak to probíhá"
  - `faq_title`: „Časté otázky"
- V každém section title můžeš JEDNO slovo obalit `<em>` se stylem `font-family: var(--font-display); font-style: italic; font-weight: 400;` (např. „Co přesně <em>děláme</em>") — ale pak musí `updateLanguage()` umět HTML: buď dej `<em>` mimo `data-i18n` span, nebo použij `innerHTML` jen pro klíče s whitelistem. Nejjednodušší robustní řešení: rozdel title na dva spany s vlastními klíči (`…_title_a`, `…_title_em`). Udělej to u max 3–4 sekcí, ne u všech.
- Akceptace: obě jazykové verze konzistentní, žádný rozbitý překlad.

### T5 — Karty služeb: řemeslný detail

- Do rohu každé karty mono číslo `01 / 02 / 03` v `--text-faint`.
- Zvětši padding karet (~3rem), ikonu zvětši na 28 px.
- Hover: `border-color: var(--card-border-hover)`, `transform: translateY(-4px)`, `transition 0.4s var(--ease-smooth)`; uvnitř nech ikonu přejít na `--accent`.
- Podtituly karet přepiš z hovorového „Pro ty, co…" na: `card1_sub`: „Pro nové projekty", `card2_sub`: „Pro weby, které už běží", `card3_sub`: „Pro maximální výkon" (+ EN ekvivalenty).

### T6 — Portfolio: galerie místo mřížky screenshotů

- **Monochrom browser chrome:** tři barevné puntíky (červená/žlutá/zelená) jsou jediná barevná věc na webu a rozbíjejí paletu — změň na `rgba(255,255,255,0.14)` (všechny tři stejné). Lištu ztenči.
- Pod každý mockup přidej caption řádek: vlevo název projektu (`font-weight: 500`), vpravo kategorie v mono uppercase `--text-faint` (např. „Phero Bistro — Gastro / one-page", „AtomiQ — Agentura / kampaně", „FitJournal — Blog", „Streamline — SaaS landing", …dle skutečných projektů; texty přes i18n).
- Hover na kartě: obrázek `scale(1.03)` (rodič má `overflow: hidden` — už má), caption šipka `→` se posune doprava, border zesvětlí na `--card-border-hover`.
- Akceptace: žádná barva mimo paletu, hover plynulý, `prefers-reduced-motion` vypne scale.

### T7 — Skills: nahradit Devicon monochromem

Barevné Devicon ikony (React modrá, JS žlutá…) rozbíjejí monochromii a drží poslední CDN závislost.

- Nahraď všechny devicon `<i>` ikony (skills sekce + chips u týmu + social ikony GitHub/LinkedIn) **inline SVG v `currentColor`** (jednoduché obrysové varianty — simple-icons tvary nebo vlastní minimal glyf). Barva `--text-muted`, na hover `--text-primary`.
- Smaž `<link>` na devicon CDN z `<head>`.
- Akceptace: nula externích CSS závislostí; jediné externí requesty celého webu = Formspree POST (a Google Fonts, pokud selhal self-host v T1).

### T8 — Proces: editorial timeline

- Čísla kroků `01–04` vykresli velká (`--font-display`, ~3rem, `--text-faint`) vlevo od textu — typografický rytmus místo teček na lince. Linku můžeš zachovat tenčí (`1px`, `--card-border`).
- `step4_desc`: přepiš 'Váš „quiet luxury" web ožívá.' na „Finální testování, nasazení na doménu a předání. Váš web jde do světa." (+ EN). Uvozovkový claim v textu působí lacině.

### T9 — Kontakt & footer

- Kontaktní karta: nadpis `contact_title` („Začněme tvořit.") v `--font-display` kurzívě, tečka v `--accent`. Inputy: při focusu border `--text-muted` (jasnější než teď), placeholder `--text-faint`.
- Footer povýšit: velký wordmark `<ns/web>` v display fontu (~3rem) nad stávajícími odkazy, hairline nad ním, `© 2026 NS Web` (zkontroluj/oprav rok). Struktura: wordmark vlevo, sloupec odkazů vpravo, spodní řádek copyright + „Vyrobeno vlastníma rukama — žádná šablona" (mono, `--text-faint`; + EN klíč).

### T10 — Grain textura (volitelný detail, dělej až nakonec)

- Jemný filmový grain přes celou stránku: `body::after` s inline SVG `feTurbulence` data-URI, `position: fixed; inset: 0; opacity: 0.028; pointer-events: none; z-index: 1;` (pod obsahem s vyšším z-indexem — ověř, že nepřekrývá interakce ani cookie/kurzor vrstvy).
- Akceptace: na 4k i mobilu nenápadné (spíš „textura papíru" než šum), žádný dopad na scroll výkon (je to statické pozadí, ne animace). Pokud vypadá lacině, smaž — bez grainu se obejdeme.

### T11 — Odstranit cookie lištu

Web nepoužívá žádné tracking cookies — jen localStorage pro jazyk a samotný souhlas. Na to se podle ePrivacy souhlas nevyžaduje (nezbytné funkční úložiště). Lišta je tedy zbytečná a kazí první dojem.

- Smaž `.cookie-banner` blok z HTML, související CSS, JS logiku (`acceptCookies`, `cookieBanner`) a klíče `cookie_text`/`cookie_btn` z obou jazyků.

### T12 — Copy polish (CS i EN)

- Projdi všechny CS texty: sjednoť vykání, oprav hovorovost („najdeme společnou reč" → „řeč" — **je tam překlep**), sentence case v nadpisech.
- `team_sub` „Dva studenti s jedním cílem" → viz rozhodnutí D2 níže; bez rozhodnutí majitele nech.
- EN texty projdi na idiomatičnost (např. „Quiet Luxury for your" — zkontroluj, že věta po rotaci slov dává gramaticky smysl s každou frází).
- Meta description + og:description srovnej s novým tónem (bez změny klíčových slov „tvorba webových stránek").

---

## Motion design (úkoly A1–A8)

Pravidla pro všechny animace — luxus je v decentnosti, ne v množství:

- **Jen `transform` a `opacity`** (+ `clip-path` u reveal efektů). Nikdy neanimuj layout vlastnosti (width/height/top/margin).
- Easing tokeny: vše jede na existujících `--ease-smooth` / `--ease-slow`. Délky: mikrointerakce 0.3–0.4 s, reveal efekty 0.8–1.1 s, stagger krok 60–90 ms.
- **Každá animace musí mít vypínač přes `prefers-reduced-motion: reduce`** — obsah rovnou viditelný, bez pohybu. Bez výjimky.
- Jeden globální `IntersectionObserver` + max jeden `requestAnimationFrame` scroll handler pro celý web (dnes `initScrollLoop()` — nový scroll efekt se registruje přes `onScroll()`, nikdy vlastním listenerem). Žádné knihovny na scroll-jacking / smooth-scroll.
- **Setrvačný scroll: povolen, vlastní implementace** (rozhodnutí majitele 2026-08-10, viz M1 v `MOTION-PLAN.md`). `initSmoothScroll()` posouvá **nativní** `scrollTop` každý frame, ne transform wrapper — jen tak zůstane funkční `position: sticky` (potřebuje ho M2), kotvy, klávesnice i scrollbar. Odchytává se **pouze kolečko**; dotyk, klávesnice a kotvy zůstávají nativní. Vypnuto na dotykových zařízeních a při `prefers-reduced-motion`. Knihovna (Lenis apod.) je pořád zakázaná.
- Animace hrají **jednou** (`observer.unobserve` po aktivaci) — při scrollu zpět nahoru už nic nebliká.
- Po každé animaci ověř v DevTools Performance, že scroll drží 60 fps na mobilním throttlingu.

### A1 — Hero: maskovaný nástup po řádcích

Nahraď současný blur-reveal v heru (jen v heru — jinde blur-reveal zůstává) prémiovějším „line mask reveal":

- Každý řádek H1 + rotující fráze zabal do `<span class="line"><span class="line-inner">…</span></span>`; `.line { display: block; overflow: hidden; } .line-inner { display: inline-block; transform: translateY(110%); }`.
- Po loadu (a až po načtení fontů — `document.fonts.ready.then(...)`, ať se neanimuje fallback font) přidej třídu, která posune `.line-inner` na `translateY(0)` s `transition: transform 0.9s var(--ease-slow)` a staggerem 90 ms mezi řádky. Eyebrow → H1 řádek 1 → rotující fráze → subtitle → tlačítka → stats (subtitle/tlačítka/stats stačí fade + 20px posun, ne mask).
- Text „vyjíždějící zpoza neviditelné linky" je poznávací znak drahých studiových webů; blur je naopak všude.

### A2 — Rotující hero fráze: vertikální výměna

Současná výměna textu je skoková. Předělej na klouzavou:

- Wrapper s `overflow: hidden; display: inline-block;`, uvnitř span s frází. Při výměně: stará fráze `translateY(-105%)` + `opacity: 0` (0.5 s), pak obsah vyměň a nová nastoupí z `translateY(105%)` na `0`. Nejjednodušší: dva spany nad sebou a přepínat.
- Interval rotace zpomal na ~3,5 s — luxus nespěchá. Šířku wrapperu neanimuj — nech ji na `auto`, zarovnání doleva skok šířky schová.
- Při `prefers-reduced-motion` fráze nerotují vůbec (zůstane první) — zkontroluj, že to tak už je, případně doplň.

### A3 — Hairline linky se kreslí

Sekční hairline linky z T4 (pod eyebrow číslováním) se při vstupu do viewportu „narýsují":

- `transform: scaleX(0); transform-origin: left;` → `.active { transform: scaleX(1); transition: transform 1.1s var(--ease-slow); }`.
- Napoj na stejný IntersectionObserver jako blur-reveal (stejná `.active` třída — žádný nový systém).

### A4 — Stats: počítadla

Čísla v hero stats řádku (7+, 2, …) při prvním zobrazení napočítají z 0 na cílovou hodnotu:

- Vanilla rAF counter, délka 1,2 s, easing ease-out (`1 - Math.pow(1 - t, 3)`), cílovou hodnotu čti z `data-count` atributu, sufix (`+`) nech ve zvláštním spanu.
- Spusť přes IntersectionObserver jednou. Při reduced-motion rovnou vypiš cílové číslo.
- Pozor na i18n: `updateLanguage()` nesmí počítadlo přepsat zpátky — čísla dej mimo `data-i18n` spany.

### A5 — Portfolio: clip-path reveal + jemný parallax

- **Reveal:** obrázky v mockupech nastupují `clip-path: inset(0 0 100% 0)` → `inset(0)` (0.9 s, `--ease-slow`) + vnitřní `<img>` současně `scale(1.12)` → `scale(1)`. Klasický „editorial image reveal". Napojit na `.active` z observeru, stagger 80 ms mezi kartami v řadě.
- **Parallax:** uvnitř `.browser-content` posouvej `<img>` o ±12 px podle pozice karty ve viewportu (jeden rAF handler, `transform: translateY(...)`, obrázek měj `scale(1.06)`, ať nevykukují okraje). Efekt má být na hraně vnímatelnosti — když je vidět na první pohled, je moc silný.

### A6 — Navigace: schovávání při scrollu + podtržení odkazů

- Nav lišta: při scrollu dolů sjede nahoru (`transform: translateY(-100%)`, 0.4 s), při scrollu nahoru se vrátí; po překročení ~80 px scrollu přidej `backdrop-filter: blur(12px)` + `background: rgba(6,6,7,0.7)` + spodní hairline. Threshold ~5 px proti třesení. Když je otevřené mobilní menu, nav se neschovává.
- Nav odkazy: animované podtržení — `::after` hairline `scaleX(0) → scaleX(1)` zleva při hoveru (0.3 s), v barvě `--text-primary`. Stejný efekt použij na textové odkazy v footeru.
- **Scroll-spy:** odkaz aktuální sekce má podtržení trvale (IntersectionObserver na sekce, `rootMargin: "-40% 0px -55% 0px"`).

### A7 — Mikrointerakce dosloužit

- **FAQ ikona plus:** při otevření plynulá rotace na 45° (`transform: rotate(45deg)`, 0.4 s) → vizuálně se z plus stane ×. Ověř, že se rotuje ikona, ne celý button.
- **Tlačítka se šipkou:** šipka na hover `translateX(4px)`; u portfolio captions šipka `→` totéž.
- **Custom kurzor:** nad interaktivními prvky (odkazy, buttony, FAQ) se zvětší ~2,5× a zprůhlední na obrys — pokud už to dělá, jen dolaď plynulost (`transition: transform 0.25s, opacity 0.25s`). Nad portfolio kartami může kurzor ukázat mono text „VIEW →" (malý, `--text-primary` na `--bg-dark` kolečku ~64 px). Kurzor nesmí existovat na touch zařízeních (`@media (pointer: fine)` — ověř stávající implementaci).
- **Inputy formuláře:** label se při focusu/vyplnění jemně posune nahoru + zmenší (pokud layout labelů nad inputy zůstává, stačí barevný přechod labelu na `--text-primary` při focusu, 0.3 s).

### A8 — Vstup stránky (restrained, žádný preloader)

- Žádné fake loading obrazovky. Jen: `body` startuje s `opacity: 0` a po `document.fonts.ready` (s fallback timeoutem 800 ms, kdyby fonty selhaly) přejde na `opacity: 1` za 0.5 s — kryje FOUT a působí záměrně. Musí fungovat i bez JS (gating přes `.js` třídu jako u blur-reveal — bez JS je opacity 1 okamžitě!).
- Volitelný detail: logo `<ns/web>` v nav při loadu „napíše" lomítko a písmena postupně (mono type-in, ~0.6 s, jen jednou za session — `sessionStorage` flag). Pokud působí hravě místo prémiově, vynech.

---

## Rozhodnutí pro majitele (NEIMPLEMENTUJ bez potvrzení — jen připomeň v závěrečném reportu)

- **D1 — E-mail:** `nutiljkb@gmail.com` v kontaktu/JSON-LD podkopává prémiovost. Doporučení: zřídit `studio@ns-web.com` (forwarding na gmail stačí) a vyměnit všude.
- **D2 — „Dva studenti":** upřímné, ale snižuje vnímanou hodnotu. Alternativa: „Malé studio. Plná pozornost každému projektu." Studentská identita může zůstat v bio textech.
- **D3 — Portfolio domény:** projekty běží na netlify.app/github.io subdoménách — nepodporuje claim o vlastních doménách. Doporučení: aspoň vlajkový projekt přesunout na vlastní doménu.
- **D4 — OG image:** po redesignu vygenerovat nový `og-image.png` s novou typografií (1200×630), ať sdílené náhledy ladí s webem.

## Co NEDĚLAT

- Neměnit ceny, telefon, e-maily, Formspree endpoint.
- Nepřidávat analytics, tracking, cookies.
- Nepřidávat další barvy mimo definované tokeny (accent jen dle pravidla výše).
- Neměnit layout/pořadí sekcí, kotvy, strukturu navigace.
- Nemazat `og-image.png`, `robots.txt`, `sitemap.xml`, `assets/favicon.png` (používá ho JSON-LD logo).
- Žádné JS knihovny, žádný build step.
