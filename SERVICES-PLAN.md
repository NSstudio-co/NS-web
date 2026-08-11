# NS Web — Expansion to Full-Service Digital Agency

**Status:** Plan approved, ready for implementation.
**Goal:** Expand NS Web from "just web development" into 11 services, each with its own standalone HTML page, all sharing the existing design language. Update the homepage, footer, sitemap and structured data to match.

This document is the single source of truth for the implementation. Content (Czech copy, service lists, FAQs) is drafted below — refine wording freely but keep meaning and scope.

---

## 1. The 11 services & URLs

Pages live in a new `/sluzby/` folder. Czech slugs (Czech market = Czech SEO keywords in URLs).

| # | Service | File | Nav label (CZ) |
|---|---------|------|----------------|
| 1 | Web design & development | `sluzby/tvorba-webu.html` | Tvorba webu |
| 2 | SEO | `sluzby/seo.html` | SEO |
| 3 | FB / IG / TikTok ads | `sluzby/reklama-na-socialnich-sitich.html` | Reklama na sítích |
| 4 | Video & drone production | `sluzby/video-a-dron.html` | Video & dron |
| 5 | AI chatbot for websites | `sluzby/ai-chatbot.html` | AI chatbot |
| 6 | Hosting & care | `sluzby/hosting.html` | Hosting & správa |
| 7 | Booking systems | `sluzby/rezervacni-system.html` | Rezervační systém |
| 8 | Social media management | `sluzby/sprava-socialnich-siti.html` | Správa sítí |
| 9 | Branding | `sluzby/branding.html` | Branding |
| 10 | Missed-call automation | `sluzby/automatizace-zmeskanych-hovoru.html` | Zmeškané hovory |
| 11 | Google Business Profile | `sluzby/google-firemni-profil.html` | Google profil |

---

## 2. Architecture decisions (already made — follow these)

1. **Asset paths:** subpages use **root-absolute paths** (`/style.css`, `/script.js`, `/assets/...`). Test with a local server (`python3 -m http.server`), not `file://`.
2. **Shared CSS:** keep using `style.css`. Append a new clearly-marked section `/* Service subpages */` at the end for subpage-only components (subpage hero, breadcrumb, checklist, CTA banner). Do **not** fork the stylesheet.
3. **Shared JS:** subpages load the same `/script.js`. Add null-guards to every init function that assumes homepage elements exist (`initRotatingWords`, `initStatsCounter`, `initScrollSpy`, `initTimeline`, `initHeroReveal`, etc. — anything using `getElementById`/`querySelector` without a check). `forEach` over empty NodeLists is already safe.
4. **Language:** subpages are **Czech-only for now**. Hide the CZ/EN switcher on subpages (simply don't include the `<li class="lang-switcher">` in their nav). EN versions of subpages are a later phase. Homepage keeps its existing CZ/EN behavior untouched.
5. **Design language:** every subpage keeps the full homepage atmosphere — dark theme (`body.clean-theme`), custom cursor, dot-grid background + cursor glow, film grain, scroll progress bar, blur-reveal animations, section numbering `(01)`, mono eyebrow labels, Instrument Serif italic `<em>` accents in headings.
6. **Leads tagging:** each subpage embeds the same Formspree form (`https://formspree.io/f/mlgpbwbj`) with an extra hidden field: `<input type="hidden" name="sluzba" value="SEO">` (per page) so inquiries arrive labeled.
7. **Known repo gotcha:** never attach IntersectionObserver to a clip-path-collapsed element — observe an unclipped ancestor (this already bit us with portfolio images; pattern is in `script.js`).

---

## 3. Shared subpage template

Every page follows the same skeleton. Build it once (as the first page, `sluzby/tvorba-webu.html`), verify it pixel-matches the homepage feel, then clone for the other 10.

```
<head>
  — unique <title>: "{Služba} | NS Web"
  — unique meta description (140–160 chars, Czech, includes the service keyword)
  — canonical: https://ns-web.com/sluzby/{slug}.html
  — OG + Twitter tags mirroring title/description, same og-image.png
  — JSON-LD: Service + BreadcrumbList (see §5)
  — favicon links, /style.css, font preloads — same as homepage
</head>
<body class="clean-theme">
  skip-link, scroll progress, cursor dot, background grid, grid-reveal, cursor glow  ← identical to homepage

  NAV — same navbar, but:
    - logo links to "/"
    - links: Služby → /#services, Práce → /#portfolio, Kontakt → #kontakt (on-page CTA), no lang switcher

  MAIN:
  ① SUBPAGE HERO (new component .subpage-hero — smaller than homepage hero, ~60vh)
     - breadcrumb: Domů / Služby / {Služba}   (mono font, faint)
     - eyebrow: "Služba (0X)"
     - H1 with serif-italic <em> accent, e.g. "Weby, které <em>prodávají</em>"
     - 1–2 sentence subtitle
     - CTA row: [Nezávazná poptávka →] (#kontakt) + [Zavolat] (tel:+420603931900)

  ② CO NABÍZÍME — "(01) Co nabízíme"
     - grid of .spotlight-card items (reuse existing component incl. spotlight hover),
       one card per sub-service from §4, with inline SVG icon (same 24px stroke-1.5 style)

  ③ PRO KOHO / PŘÍNOSY — "(02) K čemu vám to bude"
     - 3–4 short benefit rows (reuse .skill-item layout) — outcomes, not features

  ④ JAK TO PROBÍHÁ — "(03) Průběh"
     - compact 3-step version of the homepage timeline (reuse timeline styles)

  ⑤ FAQ — "(04) Časté otázky" — 3 items per service (drafted in §4), reuse .faq-item + JS

  ⑥ CTA / KONTAKT — id="kontakt"
     - reuse .contact-box with the Formspree form + hidden `sluzba` field
     - alt line: "nebo napište přímo: nutiljkb@gmail.com"

  FOOTER — same as homepage + new "Služby" link column listing all 11 subpages
  <script src="/script.js">
</body>
```

New CSS needed (append to `style.css`): `.breadcrumb`, `.subpage-hero` (reduced height, same radial glow), `.subpage-hero .hero-title` size clamp slightly smaller, a `.services-index-grid` for the homepage (§6), and a `.footer-services` column. Everything else reuses existing classes.

---

## 4. Per-page content (Czech copy draft)

Format per page: **H1 / subtitle → sub-service list (card title + one-line desc) → benefits → FAQ**. Prices only where noted; otherwise "cena dle rozsahu".

### 4.1 Tvorba webu — `sluzby/tvorba-webu.html`
- **H1:** Weby, které *prodávají* · **Sub:** Moderní, rychlý web na míru — od návrhu po spuštění na vaší doméně.
- **Nabízíme:** Weby od nuly (návrh → kód → spuštění) · Redesign stávajícího webu · Landing pages pro kampaně · Responzivní design (mobil first) · Výkon & Core Web Vitals · Napojení CMS (např. Sanity) pro vlastní správu obsahu · E-shopy po domluvě
- **Přínosy:** web do 2–3 týdnů · žádné šablony, vlastní kód · SEO-ready od prvního dne
- **FAQ:** Kolik stojí web? (od 5 000 Kč landing / od 10 000 Kč prezentační) · Jak dlouho to trvá? (2–3 týdny, větší 4–6) · Můžu si pak web měnit sám? (CMS po domluvě)

### 4.2 SEO — `sluzby/seo.html`
- **H1:** Ať vás Google *najde* · **Sub:** Technické i obsahové SEO, které přivádí zákazníky z vyhledávání — bez kouzel, s daty.
- **Nabízíme:** SEO audit webu (technika, rychlost, indexace) · Analýza klíčových slov · On-page optimalizace (titulky, popisky, struktura) · Lokální SEO (obce, okresy, "poblíž mě") · Obsahová strategie & copy · Měření: Search Console + Analytics, měsíční report
- **Přínosy:** dlouhodobý zdroj poptávek bez placení za klik · srozumitelné reporty · napojení na náš web-dev (technické opravy rovnou provedeme)
- **FAQ:** Za jak dlouho se SEO projeví? (první posuny 2–3 měsíce, plný efekt 6+) · Garantujete první místo? (ne — nikdo seriózní negarantuje) · Funguje SEO i pro malou firmu? (lokální SEO právě pro ně)

### 4.3 Reklama na sociálních sítích — `sluzby/reklama-na-socialnich-sitich.html`
- **H1:** Reklama, která se *zaplatí* · **Sub:** Facebook, Instagram a TikTok kampaně — od strategie přes kreativu po vyhodnocení.
- **Nabízíme:** Strategie a nastavení kampaní · Meta Business Suite + pixel/měření konverzí · Tvorba kreativ (grafika, video, texty) · A/B testování · Retargeting (návrat návštěvníků) · Správa rozpočtu a optimalizace · Měsíční reporting v lidské řeči
- **Přínosy:** platíte jen za výsledky, které vidíte v reportu · kreativy vyrábíme sami (viz Video & dron) · rychlé škálování toho, co funguje
- **FAQ:** Jaký minimální rozpočet? (doporučujeme od ~5 000 Kč/měs na kredit + správa) · Jak měříte úspěch? (konverze, ne lajky) · Za jak dlouho výsledky? (první data 2 týdny, optimalizace 1–2 měsíce)

### 4.4 Video & dron — `sluzby/video-a-dron.html`
- **H1:** Záběry, co *zaujmou* · **Sub:** Reklamní videa a dronové záběry vaší provozovny — natočíme, sestříháme, dodáme ve formátech pro web i sítě.
- **Nabízíme:** Reklamní spoty pro sociální sítě (reels/shorts formáty) · Dronové záběry exteriérů a areálů · Natáčení provozovny / produktů · Střih a postprodukce (barvy, hudba, titulky) · Balíčky obsahu pro dlouhodobé kampaně
- **Přínosy:** video zvyšuje výkon reklam i webu · vše od jednoho týmu (natočíme → nasadíme do kampaní) · moderní vertikální formáty
- **FAQ:** Kde všude létáte dronem? (dle legislativy a lokality — probereme předem) · Jak dlouhé video? (pro sítě 15–60 s) · Dodáte i fotky? (ano, záběry lze dodat i jako fotografie)

### 4.5 AI chatbot — `sluzby/ai-chatbot.html`
- **H1:** Web, který *odpovídá* · **Sub:** AI chatbot vytrénovaný na vašem obsahu odpovídá zákazníkům 24/7 a sbírá poptávky, i když spíte.
- **Nabízíme:** Chatbot na míru trénovaný na vašich stránkách a dokumentech · Odpovědi 24/7 v češtině (i dalších jazycích) · Sběr kontaktů a poptávek z konverzace · Předání složitých dotazů na e-mail · Vzhled sladěný s vaším webem · Průběžné doučování a aktualizace znalostí
- **Přínosy:** žádná zmeškaná poptávka mimo otevírací dobu · méně opakujících se dotazů na telefon · nasazení na jakýkoli web (nejen od nás)
- **FAQ:** Co když bot nezná odpověď? (řekne to a předá kontakt na vás) · Jak dlouho trvá nasazení? (dny až ~2 týdny dle rozsahu) · Kolik to stojí? (jednorázové nasazení + malý měsíční provoz, dle rozsahu)

### 4.6 Hosting & správa — `sluzby/hosting.html`
- **H1:** Web, o který se *nestaráte* · **Sub:** Rychlý hosting, doména, zálohy a pravidelná údržba. Vy podnikáte, my držíme web online.
- **Nabízíme:** Rychlý a bezpečný hosting · Doména a DNS správa · SSL certifikát (https) · Automatické zálohy · Monitoring dostupnosti · Pravidelné aktualizace (bezpečnostní i funkční) · E-mail na vlastní doméně
- **Přínosy:** jedna měsíční platba, žádné starosti · web online do 24 h od předání · reakce na výpadek řešíme my, ne vy
- **FAQ:** Musím mít web od vás? (ne, převezmeme i cizí) · Co když web spadne? (monitoring nás upozorní, řešíme obratem) · Kolik to stojí? (měsíční paušál dle rozsahu — od stovek korun)

### 4.7 Rezervační systém — `sluzby/rezervacni-system.html`
- **H1:** Rezervace *bez telefonu* · **Sub:** Online rezervační systém přímo na vašem webu — zákazník si vybere termín, vy jen přijdete.
- **Nabízíme:** Rezervace na míru vašemu provozu (salon, ordinace, restaurace, kurty…) · Přehledný kalendář obsazenosti · E-mailová/SMS připomínka zákazníkovi · Napojení na Google Kalendář · Správa kapacit a služeb · Platby předem po domluvě
- **Přínosy:** méně telefonování a no-show · rezervace 24/7 · vše ladí s designem vašeho webu
- **FAQ:** Jde napojit na můj stávající web? (ano) · Zvládne to obsluha? (rozhraní děláme jednoduché + zaškolíme) · SMS připomínky? (ano, po domluvě dle ceníku operátora)

### 4.8 Správa sociálních sítí — `sluzby/sprava-socialnich-siti.html`
- **H1:** Sítě, co *žijí* · **Sub:** Obsah, publikace i komunikace s fanoušky — postaráme se o Instagram, Facebook i TikTok za vás.
- **Nabízíme:** Obsahový plán na míru · Tvorba příspěvků (grafika + texty) · Reels / stories / krátká videa · Pravidelná publikace · Odpovídání na komentáře a zprávy · Měsíční přehled výsledků
- **Přínosy:** konzistentní prezentace bez vaší práce · propojení s placenou reklamou i videem od nás · růst sledujících, kteří jsou skuteční zákazníci
- **FAQ:** Kolik příspěvků měsíčně? (balíčky dle domluvy, obvykle 8–16) · Musím dodávat podklady? (stačí občas fotky z provozu, zbytek vyrobíme) · Kdy to má smysl? (když na sítě nemáte čas, ale zákazníci vás tam hledají)

### 4.9 Branding — `sluzby/branding.html`
- **H1:** Značka, která *sedí* · **Sub:** Logo, barvy a vizuální styl, které dávají vaší firmě tvář — a všem materiálům jednotný řád.
- **Nabízíme:** Návrh loga (včetně variant a formátů) · Barevná paleta a typografie · Mini brand guide (pravidla použití) · Vizitky a tiskoviny · Šablony pro sociální sítě · Redesign zastaralé identity
- **Přínosy:** profesionální dojem od prvního kontaktu · konzistence webu, sítí i tiskovin · podklady připravené pro tiskárnu i pro web
- **FAQ:** Co dostanu na konci? (balík souborů: loga ve všech formátech, paleta, fonty, guide) · Kolik návrhů loga uvidím? (2–3 směry, pak iterace vybraného) · Přebíráte existující logo? (ano, umíme jen dopracovat systém okolo)

### 4.10 Automatizace zmeškaných hovorů — `sluzby/automatizace-zmeskanych-hovoru.html`
- **H1:** Zmeškaný hovor ≠ *ztracený zákazník* · **Sub:** Když nestihnete telefon, zákazníkovi automaticky odejde SMS nebo WhatsApp — a poptávka nespadne pod stůl.
- **Nabízíme:** Automatická SMS/WhatsApp odpověď na zmeškaný hovor · Text na míru (odkaz na rezervace, web, ceník) · Napojení na rezervační systém · Přehled zmeškaných hovorů a odpovědí · Nastavení pro pracovní dobu i mimo ni
- **Přínosy:** zákazník dostane odpověď do vteřin, i když máte plné ruce · typicky zachrání jednotky poptávek měsíčně — zaplatí se samo · funguje bez změny vašeho čísla
- **FAQ:** Jak to technicky funguje? (napojení na vaše číslo/ústřednu, probereme na callu) · Co když zákazník odpoví? (odpověď vám přijde, dál komunikujete vy) · Kolik to stojí? (nastavení + malý měsíční paušál)

### 4.11 Google firemní profil — `sluzby/google-firemni-profil.html`
- **H1:** Buďte vidět *na mapě* · **Sub:** Optimalizovaný Google firemní profil = zákazníci z okolí vás najdou dřív než konkurenci.
- **Nabízíme:** Založení nebo převzetí profilu · Kompletní optimalizace (kategorie, popis, otevírací doba, služby) · Profesionální fotky provozovny (i s dronem) · Správa a odpovídání na recenze · Pravidelné příspěvky a novinky · Měsíční statistiky (zobrazení, volání, trasy)
- **Přínosy:** první, co zákazník vidí při hledání "…poblíž" · více volání a návštěv provozovny · recenze pod kontrolou
- **FAQ:** Nemám profil vůbec — vadí to? (založíme od nuly) · Někdo mi vložil špatné údaje/recenze? (převezmeme a vyčistíme, ohlásíme podvodné recenze) · Jak rychle se to projeví? (úpravy do dnů, pozice v mapách postupně)

---

## 5. SEO & structured data

- **Per page:** unique `<title>`, meta description, `canonical`, OG/Twitter tags (reuse `og-image.png` for now), `lang="cs"`.
- **Per page JSON-LD:** `Service` (name, description, provider → `@id: https://ns-web.com/#organization`, areaServed ČR) + `BreadcrumbList` (Domů → Služby → {page}).
- **Homepage JSON-LD:** replace the single `makesOffer` entry with an `OfferCatalog` of all 11 services, each linking its `url`.
- **`sitemap.xml`:** add all 11 URLs (priority 0.8, homepage stays 1.0). Update `lastmod`.
- **`robots.txt`:** no change needed.

---

## 6. Homepage changes (`index.html`)

1. **Services section rework:** keep the section header "(01) Služby / Co přesně děláme". Replace the current 3-card grid with a **grid of all 11 services** — compact cards (icon + name + one-liner + arrow), each linking to its subpage. Reuse `.spotlight-card` at a smaller padding (new modifier `.spotlight-card--compact`). Suggested one-liners = the card subtitles from §4. Keep spotlight hover + blur-reveal stagger.
2. **i18n:** the 11 card titles/one-liners on the homepage DO get `data-i18n` keys with CZ+EN values added to `translations` in `script.js` (homepage stays bilingual). Keys: `svc_web`, `svc_seo`, `svc_ads`, `svc_video`, `svc_chatbot`, `svc_hosting`, `svc_booking`, `svc_social`, `svc_brand`, `svc_calls`, `svc_google` (+ `_sub` variants).
3. **Hero rotate words** (`translations.*.hero_rotate_words`): extend with the new offering, e.g. add "reklamy, které vydělávají", "SEO, co vás najde", "chatboty, co odpovídají" (CZ) and EN equivalents.
4. **Footer (homepage + all subpages):** add a "Služby" column with links to all 11 pages.
5. **Meta description + OG description:** widen from "weby" to full-service wording, e.g. "Weby, SEO, reklamy, video i AI chatboty…".

---

## 7. Implementation order (for the executor)

1. **Guards + shared prep:** add null-guards in `script.js`; append subpage CSS section to `style.css`.
2. **Template page:** build `sluzby/tvorba-webu.html` fully; verify against homepage (cursor, grid bg, reveals, FAQ toggle, form, mobile nav, reduced-motion).
3. **Clone the remaining 10 pages** with content from §4 — unique icons per sub-service card (inline SVG, 24px, stroke 1.5, matching existing set).
4. **Homepage services grid** + i18n keys + hero rotate words + footer services column.
5. **SEO pass:** per-page meta + JSON-LD, homepage OfferCatalog, `sitemap.xml`.
6. **QA checklist:**
   - every internal link resolves (run a local server)
   - mobile menu works on subpages; lang switcher absent on subpages, functional on homepage
   - `prefers-reduced-motion` shows content instantly on all pages
   - forms submit with correct hidden `sluzba` value
   - no horizontal scroll on 360px width
   - Lighthouse: perf ≥ 90, a11y ≥ 95 on a sample subpage
7. **Commit in logical chunks** (prep / template / pages / homepage / SEO), don't push without asking.

---

## 8. Out of scope (later phases)

- EN versions of subpages
- Per-service OG images
- Case studies per service / pricing tables
- Netlify pretty-URL redirects (`/sluzby/seo` → `/sluzby/seo.html`)
