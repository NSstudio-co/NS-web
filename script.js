/**
 * NS STUDIO - Clean Minimalist Script
 * Handles blur reveal animations, spotlight hover effects, and minimal timeline logic.
 */

const translations = {
    cs: {
        stat_projects: "Projektů",
        stat_founders: "Studenti",
        stat_weeks: "Týdny do spuštění",
        nav_services: "Služby",
        nav_portfolio: "Práce",
        nav_process: "Proces",
        nav_contact: "Kontakt",
        nav_team: "Tým",
        nav_faq: "FAQ",
        hero_eyebrow: "Design & Development",
        hero_h1_pt1: "Rychlé a moderní weby",
        hero_h1_pt2: "bez kompromisů.",
        hero_rotate_words: ["bez kompromisů.", "s čistým kódem.", "šité na míru.", "co prodávají.", "s důrazem na detail.", "s reklamou, co vydělává.", "se SEO, co je vidět.", "s chatbotem, co odpovídá."],
        hero_desc: "Jsme malé webové studio zaměřené na tvorbu moderních, minimalistických webů. Navrhujeme a vyvíjíme digitální prezentace s důrazem na výkon, typografii a čistý kód.",
        hero_btn: "Prozkoumat služby",
        hero_btn_write: "Napsat",
        hero_btn_call: "Zavolat",
        services_label: "Služby",
        services_title_a: "Co přesně",
        services_title_em: "děláme",
        svc_web: "Tvorba webu",
        svc_web_sub: "Moderní, rychlý web na míru — od návrhu po spuštění.",
        svc_seo: "SEO",
        svc_seo_sub: "Ať vás zákazníci najdou na Googlu — bez kouzel, s daty.",
        svc_ads: "Reklama na sítích",
        svc_ads_sub: "Facebook, Instagram a TikTok kampaně, které se zaplatí.",
        svc_video: "Video & dron",
        svc_video_sub: "Reklamní spoty a dronové záběry, které zaujmou.",
        svc_chatbot: "AI chatbot",
        svc_chatbot_sub: "Odpovídá zákazníkům 24/7 a sbírá poptávky, i když spíte.",
        svc_hosting: "Hosting & správa",
        svc_hosting_sub: "Hosting, zálohy a údržba — web, o který se nestaráte.",
        svc_booking: "Rezervační systém",
        svc_booking_sub: "Zákazník si vybere termín online, vy jen přijdete.",
        svc_social: "Správa sítí",
        svc_social_sub: "Obsah, publikace i komunikace — sítě, které žijí.",
        svc_brand: "Branding",
        svc_brand_sub: "Logo, barvy a vizuální styl, které dávají firmě tvář.",
        svc_calls: "Zmeškané hovory",
        svc_calls_sub: "Automatická SMS odpověď — žádná ztracená poptávka.",
        svc_google: "Google profil",
        svc_google_sub: "Buďte první, koho zákazníci z okolí najdou na mapě.",
        portfolio_label: "Naše práce",
        portfolio_title_a: "Naše",
        portfolio_title_em: "práce",
        portfolio_sub: "Vybrané projekty, které fungují v praxi",
        manifest_text: "Neděláme šablony. Děláme weby, které vydělávají.",
        portfolio_cat_1: "Gastro · One-page",
        portfolio_cat_2: "Marketing · Kampaně",
        portfolio_cat_3: "Aplikace · Automatizace",
        portfolio_cat_4: "AI · Webová aplikace",
        portfolio_cat_5: "Portfolio · Osobní web",
        portfolio_cat_6: "Gastro · Prezentace",
        portfolio_view_btn: "Zobrazit web",
        process_label: "Proces",
        process_title_a: "Jak to",
        process_title_em: "probíhá",
        step1_title: "Discovery Call",
        step1_desc: "Probereme vaši vizi a najdeme společnou řeč. Jednoduché a k věci.",
        step2_title: "Design & Wireframing",
        step2_desc: "Vytvoříme precizní návrh zaměřený na obsah a čistotu rozhraní.",
        step3_title: "Development",
        step3_desc: "Píšeme čistý kód. Důraz na ohromující výkon a plynulé interakce.",
        step4_title: "Launch",
        step4_desc: "Finální testování, nasazení na doménu a předání. Váš web jde do světa.",
        pricing_label: "Balíčky",
        pricing_title_a: "Kolik toho",
        pricing_title_em: "necháte na nás",
        pricing_sub: "Tři úrovně spolupráce, od samotného webu po kompletní péči o celou online prezentaci. Kliknutím na balíček nám rovnou napíšete.",
        pricing_cta: "Chci tento balíček",
        pack1_name: "Základní",
        pack1_desc: "Moderní web na míru. Navrhneme, naprogramujeme a spustíme na vaší doméně.",
        pack1_f1: "Web na míru od návrhu po spuštění",
        pack1_f2: "Responzivní design (mobil first)",
        pack1_f3: "Základní SEO od prvního dne",
        pack1_f4: "Nasazení na vaši doménu",
        pack2_name: "Pokročilý",
        pack2_desc: "Web plus viditelnost. Postaráme se, aby vás zákazníci opravdu našli.",
        pack2_f1: "Vše ze Základního balíčku",
        pack2_f2: "Hosting, zálohy a pravidelná údržba",
        pack2_f3: "SEO optimalizace",
        pack2_f4: "Google firemní profil",
        pack2_f5: "AI chatbot nebo rezervační systém",
        pack3_name: "Kompletní",
        pack3_desc: "Celá online prezentace se vším všudy, včetně sociálních sítí a reklamy.",
        pack3_f1: "Vše z Pokročilého balíčku",
        pack3_f2: "Obsah i publikace na sociálních sítích",
        pack3_f3: "Reklama na Facebooku, Instagramu a TikToku",
        pack3_f4: "Video a dronové záběry",
        pack3_f5: "Branding a jednotný vizuál",
        form_package_msg: "Dobrý den, mám zájem o balíček {name}.",
        form_service_msg: "Dobrý den, mám zájem o službu {name}.",
        form_chip_package: "Vybraný balíček",
        form_chip_service: "Vybraná služba",
        faq_tail: "Nenašli jste svou odpověď?",
        faq_tail_cta: "Zeptejte se nás",
        footer_contact: "Kontakt",
        footer_write: "Napsat nám",
        contact_title: "Začněme tvořit",
        contact_subtitle: "Hledáte design, který nekřičí, ale rezonuje?",
        team_label: "Tým",
        team_title: "Kdo za tím stojí",
        team_sub: "Dva studenti s jedním cílem",
        team1_bio: "Zaměřený na vizuální preciznost a čistý kód. Designuje systémy, které vypadají prémiově a fungují perfektně.",
        team2_bio: "Staví rychlé, optimalizované weby od základů. Řeší technickou stránku věci, aby výsledek byl vždy spolehlivý.",
        skills_label: "Dovednosti",
        skills_title: "Co umíme",
        skill1_desc: "Sémantický kód, čisté styly. Žádné zbytečné knihovny — jen základ, co létá.",
        skill2_desc: "Animace, interakce, logika. Vanilla JS i moderní frameworky bez zbytečné složitosti.",
        skill3_desc: "Komponenty, state management a rychlé SPA. Vite + React pro moderní projekty.",
        skill4_desc: "Verzování, pull requesty a CI/CD pipeline. Kód je vždy pod kontrolou a dohledatelný.",
        skill5_desc: "DNS, SSL certifikát a nasazení na vlastní doménu. Váš web je online do 24 hodin.",
        skill6_desc: "Wireframy, prototypy a handoff. Design systém domluvený ještě před napsáním prvního řádku kódu.",
        faq_label: "FAQ",
        faq_title: "Časté otázky",
        faq1_q: "Kolik stojí nový web?",
        faq1_a: "Cenu vždy nastavujeme individuálně podle rozsahu projektu. Základní landing page začíná od 5 000 Kč, komplexnější prezentační weby od 10 000 Kč. Ozvěte se a domluvíme se.",
        faq2_q: "Jak dlouho trvá výroba webu?",
        faq2_a: "Jednoduchý web zpravidla do 2–3 týdnů od prvního callu. U větších projektů počítejte se 4–6 týdny. Záleží na rozsahu a rychlosti vaší zpětné vazby.",
        faq3_q: "Děláte e-shopy?",
        faq3_a: "E-shopy řešíme po domluvě. Kontaktujte nás a popište rozsah projektu — rádi se domluvíme.",
        faq4_q: "Co potřebuji mít připravené?",
        faq4_a: "Stačí mít představu o tom, co chcete sdělit, a ideálně logo nebo brand guide. Vše ostatní vyřešíme společně.",

        faq6_q: "Můžu si web po spuštění sám měnit?",
        faq6_a: "Záleží na vybraném řešení. Preferujeme výkonné weby, o které se staráme plně my, ale umíme nasadit i spolehlivé CMS (např. Sanity), pokud je správa obsahu pro vás prioritní.",
        faq7_q: "Jak je to s údržbou?",
        faq7_a: "Zajišťujeme občasné bezpečnostní i funkční aktualizace v rámci měsíční údržby tak, abyste web opravdu nemuseli řešit, a mohli se věnovat byznysu.",
        form_name: "Jméno",
        form_email: "E-mail",
        form_msg: "Zpráva",
        form_send: "Odeslat zprávu",
        form_success: "Zpráva byla úspěšně odeslána! Ozveme se vám brzy.",
        form_error: "Omlouváme se, při odesílání došlo k chybě. Zkuste to prosím znovu.",
        footer_menu: "Menu",
        footer_tagline: "Vyrobeno vlastníma rukama — žádná šablona."
    },
    en: {
        stat_projects: "Projects",
        stat_founders: "Students",
        stat_weeks: "Weeks to launch",
        nav_services: "Services",
        nav_portfolio: "Work",
        nav_process: "Process",
        nav_contact: "Contact",
        nav_team: "Team",
        nav_faq: "FAQ",
        hero_eyebrow: "Engineering Elegance",
        hero_h1_pt1: "Quiet Luxury for your",
        hero_h1_pt2: "Digital Presence.",
        hero_rotate_words: ["Digital Presence.", "Clean Code.", "Bold Ideas.", "Real Results.", "Fine Details.", "Marketing.", "Brand.", "Growth."],
        hero_desc: "Two students. Endless ideas. We build sharp, minimalist websites that let your content breathe. No unnecessary noise—just clean code, perfect typography, and design that speaks for itself.",
        hero_btn: "Explore Services",
        hero_btn_write: "Write us",
        hero_btn_call: "Call us",
        services_label: "Services",
        services_title_a: "What We",
        services_title_em: "Do",
        svc_web: "Web Development",
        svc_web_sub: "A modern, fast custom website — from design to launch.",
        svc_seo: "SEO",
        svc_seo_sub: "Get found on Google — no magic, just data.",
        svc_ads: "Social Media Ads",
        svc_ads_sub: "Facebook, Instagram & TikTok campaigns that pay off.",
        svc_video: "Video & Drone",
        svc_video_sub: "Promo videos and drone footage that grab attention.",
        svc_chatbot: "AI Chatbot",
        svc_chatbot_sub: "Answers customers 24/7 and collects leads while you sleep.",
        svc_hosting: "Hosting & Care",
        svc_hosting_sub: "Hosting, backups and maintenance — a site you never worry about.",
        svc_booking: "Booking System",
        svc_booking_sub: "Customers pick a slot online, you just show up.",
        svc_social: "Social Media Management",
        svc_social_sub: "Content, publishing and community — profiles that live.",
        svc_brand: "Branding",
        svc_brand_sub: "Logo, colors and a visual style that give your brand a face.",
        svc_calls: "Missed-call Automation",
        svc_calls_sub: "Automatic SMS reply — no lead left behind.",
        svc_google: "Google Business Profile",
        svc_google_sub: "Be the first local business customers find on the map.",
        portfolio_label: "Portfolio",
        portfolio_title_a: "Our",
        portfolio_title_em: "Work",
        portfolio_sub: "Proven concepts working in practice",
        manifest_text: "We don't do templates. We build sites that earn.",
        portfolio_cat_1: "Restaurant · One-page",
        portfolio_cat_2: "Marketing · Campaigns",
        portfolio_cat_3: "App · Automation",
        portfolio_cat_4: "AI · Web app",
        portfolio_cat_5: "Portfolio · Personal site",
        portfolio_cat_6: "Restaurant · Presentation site",
        portfolio_view_btn: "View website",
        process_label: "Process",
        process_title_a: "How It",
        process_title_em: "Works",
        step1_title: "Discovery Call",
        step1_desc: "We discuss your vision and find common ground. Simple and straight to the point.",
        step2_title: "Design & Wireframing",
        step2_desc: "We create a precise design focused on content and interface clarity.",
        step3_title: "Development",
        step3_desc: "We write clean code. Emphasis on stunning performance and smooth interactions.",
        step4_title: "Launch",
        step4_desc: "Final testing, domain deployment, and handover. Your website goes live.",
        pricing_label: "Packages",
        pricing_title_a: "How much we",
        pricing_title_em: "take off your plate",
        pricing_sub: "Three levels of collaboration, from a standalone website to full care of your entire online presence. Click a package to write to us.",
        pricing_cta: "I want this package",
        pack1_name: "Starter",
        pack1_desc: "A modern custom website, designed, coded and launched on your domain.",
        pack1_f1: "Custom website from design to launch",
        pack1_f2: "Responsive, mobile-first design",
        pack1_f3: "SEO-ready from day one",
        pack1_f4: "Deployed to your domain",
        pack2_name: "Advanced",
        pack2_desc: "Website plus visibility. We make sure customers actually find you.",
        pack2_f1: "Everything in Starter",
        pack2_f2: "Hosting, backups & regular maintenance",
        pack2_f3: "SEO optimization",
        pack2_f4: "Google Business Profile",
        pack2_f5: "AI chatbot or booking system",
        pack3_name: "Complete",
        pack3_desc: "Your entire online presence, social media and ads included.",
        pack3_f1: "Everything in Advanced",
        pack3_f2: "Social media content and publishing",
        pack3_f3: "Facebook, Instagram & TikTok ads",
        pack3_f4: "Video & drone footage",
        pack3_f5: "Branding & unified visuals",
        form_package_msg: "Hi, I'm interested in the {name} package.",
        form_service_msg: "Hi, I'm interested in your {name} service.",
        form_chip_package: "Selected package",
        form_chip_service: "Selected service",
        faq_tail: "Didn't find your answer?",
        faq_tail_cta: "Ask us",
        footer_contact: "Contact",
        footer_write: "Write to us",
        contact_title: "Let's start building",
        contact_subtitle: "Looking for a design that resonates without shouting?",
        team_label: "Team",
        team_title: "Who's Behind It",
        team_sub: "Two students, one goal",
        team1_bio: "Focused on visual precision and clean code. Designs systems that look premium and work flawlessly.",
        team2_bio: "Builds fast, optimized sites from the ground up. Handles the technical side so the result is always reliable.",
        skills_label: "Skills",
        skills_title: "What We Know",
        skill1_desc: "Semantic code, clean styles. No unnecessary libraries — just the foundation that flies.",
        skill2_desc: "Animations, interactions, logic. Vanilla JS and modern frameworks without unnecessary complexity.",
        skill3_desc: "Components, state management and fast SPAs. Vite + React for modern projects.",
        skill4_desc: "Versioning, pull requests and CI/CD pipeline. Code is always under control and traceable.",
        skill5_desc: "DNS, SSL certificate and deployment to a custom domain. Your site is online within 24 hours.",
        skill6_desc: "Wireframes, prototypes and handoff. Design system agreed before the first line of code is written.",
        faq_label: "FAQ",
        faq_title: "FAQ",
        faq1_q: "How much does a website cost?",
        faq1_a: "We price each project individually based on scope. A basic landing page starts from 5,000 CZK, more complex presentation sites from 10,000 CZK. Get in touch and we'll work it out.",
        faq2_q: "How long does a website take?",
        faq2_a: "A simple site is usually done in 2–3 weeks from the first call. For larger projects count on 4–6 weeks. It depends on scope and how fast you can give feedback.",
        faq3_q: "Do you build e-shops?",
        faq3_a: "E-commerce projects are handled by arrangement. Contact us and describe your project scope — we'll be happy to discuss what makes sense for your business.",
        faq4_q: "What do I need to have ready?",
        faq4_a: "Just an idea of what you want to say, and ideally a logo or brand guide. Everything else — copy, photos, structure — we sort out together on the discovery call.",

        faq6_q: "Can I edit the site myself?",
        faq6_a: "It depends on the solution. We prefer performant bespoke sites maintained fully by us, but we can deploy a reliable CMS (e.g. Sanity) if content management is a priority.",
        faq7_q: "What about maintenance?",
        faq7_a: "We handle occasional security and functional updates within our monthly maintenance plan, so you don't have to worry about the website and can focus on your business.",
        form_name: "Name",
        form_email: "Email",
        form_msg: "Message",
        form_send: "Send message",
        form_success: "Message sent successfully! We\'ll get back to you soon.",
        form_error: "Sorry, there was an error sending your message. Please try again.",
        footer_menu: "Menu",
        footer_tagline: "Handmade — no template."
    }
};

let currentLang = localStorage.getItem('ns-studio-clean-lang') || 'cs';

/* ==========================================================================
   Page entrance (A8) — standalone, runs independently of DOMContentLoaded
   so a later init error can never leave the page stuck invisible. Three
   redundant triggers (fonts.ready, timeout, window load) all reveal it.
   ========================================================================== */
(function initPageEntrance() {
    let shown = false;
    const reveal = () => {
        if (shown) return;
        shown = true;
        document.body.classList.add('page-loaded');
    };

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(reveal);
    }
    setTimeout(reveal, 800);
    window.addEventListener('load', reveal);
})();

/* ==========================================================================
   Scroll loop (M0) — the ONLY scroll listener on the page. Every scroll-driven
   effect registers through onScroll(); callbacks run inside a single rAF tick
   that reads scrollY / innerHeight once and hands them over, so no effect
   touches the layout on its own. The tick also keeps a smoothed scroll
   velocity in scrollState.velocity (px per frame) for effects that react to
   how fast the page is moving.

   Rule: never add another window scroll listener — register here instead.

   Deliberately NOT published as a CSS variable on :root: custom properties
   inherit, so rewriting one on the root element invalidates the computed
   style of the whole document every frame. Measured on the homepage at 4x CPU
   throttling that alone cost avg 16.8 -> 19.6 ms/frame and 1 -> 25 frames
   over 33 ms. A CSS consumer must get the variable written onto its own
   element, not onto :root.
   ========================================================================== */
const scrollCallbacks = [];
// Drivers run at the top of the frame and may MOVE the page (M1's inertial
// scroll is one). They return true while they still have work, which keeps
// the loop ticking. Effects registered with onScroll() only read and write
// their own elements, and always run after the drivers.
const scrollDrivers = [];
let requestScrollFrame = () => { };

const scrollState = {
    y: window.scrollY,
    vh: window.innerHeight,
    max: 0, // scrollable distance — document height minus one viewport
    velocity: 0
};

function onScroll(fn) {
    scrollCallbacks.push(fn);
    fn(scrollState); // prime the effect with the current position
}

function onFrame(fn) {
    scrollDrivers.push(fn);
}

function initScrollLoop() {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let lastY = window.scrollY;
    let smoothV = 0;
    let queued = false;

    const schedule = () => {
        if (queued) return;
        queued = true;
        requestAnimationFrame(tick);
    };

    const tick = () => {
        queued = false;

        // Drivers first: they set the scroll position for this frame, so the
        // effects below see it immediately instead of one frame late.
        let driving = false;
        for (let i = 0; i < scrollDrivers.length; i++) {
            if (scrollDrivers[i]()) driving = true;
        }

        // All layout reads happen here, at the top of the frame and once —
        // callbacks below only write. Anything that needs a measurement takes
        // it from scrollState instead of asking the DOM again.
        scrollState.y = window.scrollY;
        scrollState.vh = window.innerHeight;
        scrollState.max = Math.max(0, root.scrollHeight - root.clientHeight);

        // Velocity in px/frame, lerped — a raw delta makes anything bound to
        // it (grain, marquee speed) flicker. Snap to 0 once it's negligible so
        // the loop can stop instead of ticking forever on a tiny remainder.
        const raw = Math.abs(scrollState.y - lastY);
        lastY = scrollState.y;
        smoothV += (raw - smoothV) * 0.18;
        if (smoothV < 0.1 || reduceMotion) smoothV = 0;
        scrollState.velocity = smoothV;

        for (let i = 0; i < scrollCallbacks.length; i++) {
            scrollCallbacks[i](scrollState);
        }

        // Keep ticking while a driver is still moving the page, and while the
        // velocity settles back to zero — otherwise the last frame of a scroll
        // would leave it stuck mid-value.
        if (driving || smoothV > 0) schedule();
    };

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    requestScrollFrame = schedule;

    tick();
}

document.addEventListener("DOMContentLoaded", () => {
    // JS-driven i18n only applies to the homepage (data-i18n spans there get
    // swapped on the fly). Service subpages are static per-language HTML
    // with real CZ/EN links in .lang-switcher, so running updateLanguage()
    // there would find no [data-i18n] to translate — just force Czech for
    // JS-generated strings (form feedback) and skip the switcher wiring.
    if (document.querySelector('[data-i18n]')) {
        updateLanguage(currentLang);
        initLanguageSwitcher();
    } else {
        currentLang = document.documentElement.lang === 'en' ? 'en' : 'cs';
    }
    wrapButtonLabels(); // before anything reads button markup
    initScrollLoop(); // must come first — everything scroll-driven hangs off it
    initSmoothScroll();
    initLineReveals(); // before initBlurReveals — it moves .blur-reveal around
    initBlurReveals();
    initSpotlightEffect();
    initNavbar();
    initMobileMenu();
    initTimeline(); // subpages only — the homepage now runs initBeatStage()
    initBeatStage();
    initManifest();
    initPointerAmbience();
    initFAQ();
    initContactForm();
    initContactPrefill();
    initPageTransitions();
    initFloatingContact();
    initGrainVelocity();
    initScrollProgress();
    initMagneticButtons();
    initRotatingWords();
    initHeroReveal();
    initPortfolioParallax();
    initPortfolioScroll();
    initBrowserUrl();
    initStatsCounter();
    initScrollSpy();
    initBackgroundParallax();
});

/* ==========================================================================
   Language Switcher
   ========================================================================== */
function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('ns-studio-clean-lang', lang);

    document.documentElement.lang = lang;

    restoreLineReveals(); // un-split first, so [data-i18n] spans are intact

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Check if el has innerHTML we want to keep structure for, usually just text
            el.innerHTML = translations[lang][key];
        }
    });

    resplitLineReveals(); // the new text wraps differently — measure again
    resplitManifest();

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Service links (grid + footer) point at the CZ subpage by default —
    // repoint them at the EN subpage tree while the homepage is in English.
    document.querySelectorAll('[data-href-cs]').forEach(el => {
        const href = el.getAttribute(lang === 'en' ? 'data-href-en' : 'data-href-cs');
        if (href) el.setAttribute('href', href);
    });

    // Keep the rotating hero word in the active language
    renderRotateWord();

    // The innerHTML rewrite above wiped the rolled label out of every
    // translated button — rebuild it, same as the line reveals above.
    wrapButtonLabels();
}

/* ==========================================================================
   Hero rotating words (slides through a list of phrases)
   ========================================================================== */
const rotateState = { el: null, i: 0 };

function renderRotateWord() {
    if (!rotateState.el) return;
    const words = translations[currentLang].hero_rotate_words || [];
    if (!words.length) return;
    rotateState.el.textContent = words[rotateState.i % words.length];
}

function initRotatingWords() {
    rotateState.el = document.querySelector('[data-rotate]');
    if (!rotateState.el) return;
    renderRotateWord();

    // Respect users who prefer no motion — show a static phrase only
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    setInterval(() => {
        rotateState.el.classList.add('swap-out');
        setTimeout(() => {
            rotateState.i++;
            renderRotateWord();
            rotateState.el.classList.remove('swap-out');
            rotateState.el.classList.add('swap-in');
            setTimeout(() => rotateState.el.classList.remove('swap-in'), 550);
        }, 500);
    }, 3500);
}

function initLanguageSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            updateLanguage(btn.getAttribute('data-lang'));
        });
    });
}

/* ==========================================================================
   Blur Reveal via Intersection Observer
   ========================================================================== */
function initBlurReveals() {
    const revealElements = document.querySelectorAll('.blur-reveal, .section-hairline');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   M3 — line mask reveal. Section headings and subtitles are split into their
   visual lines; each line slides up from behind its own mask, the same move
   the hero headline makes. Replaces the generic blur on those elements —
   blur stays where it still works (cards, images, grids).
   ========================================================================== */
const LINE_REVEAL_SELECTOR = '.section-title, .section-subtitle';
const lineReveals = []; // { el, html } — html is the un-split markup, for i18n

function initLineReveals() {
    const targets = Array.from(document.querySelectorAll(LINE_REVEAL_SELECTOR));
    if (!targets.length) return;

    // The whole .section-header used to blur in as one block, which would
    // muddy the line slide happening inside it. Move the blur onto the small
    // eyebrow and let the heading carry the section's entrance instead.
    // Runs before initBlurReveals() so the observer picks up the new element.
    targets.forEach(el => {
        const header = el.closest('.section-header');
        if (!header || !header.classList.contains('blur-reveal')) return;
        header.classList.remove('blur-reveal');
        const eyebrow = header.querySelector('.section-eyebrow');
        if (eyebrow) eyebrow.classList.add('blur-reveal');
    });

    // Reduced motion: no splitting at all, the text just stays as authored.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('active');
            obs.unobserve(entry.target);
        });
    }, { threshold: 0.2 });

    const run = () => {
        targets.forEach(el => {
            const html = el.innerHTML;
            if (!splitIntoLines(el)) return;
            lineReveals.push({ el, html });
            observer.observe(el);
        });
    };

    // Lines can only be measured once the real fonts are in — measuring
    // against the fallback breaks at different widths. Same belt-and-braces
    // pair of triggers the page entrance uses.
    let done = false;
    const runOnce = () => { if (!done) { done = true; run(); } };
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(runOnce);
        setTimeout(runOnce, 800);
    } else {
        runOnce();
    }
}

/* Wraps every visual line of `el` in <span class="line"><span class="line-inner">.
   Works off Ranges rather than string splitting, so inline markup inside the
   heading (the <em> accents, the [data-i18n] spans) survives intact — even
   when a line break falls in the middle of one. */
function splitIntoLines(el) {
    const doc = el.ownerDocument;
    const walker = doc.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const words = [];

    let node;
    while ((node = walker.nextNode())) {
        const re = /\S+/g;
        let m;
        while ((m = re.exec(node.nodeValue))) {
            words.push({ node, start: m.index, end: m.index + m[0].length });
        }
    }
    if (!words.length) return false;

    const lineHeight = parseFloat(getComputedStyle(el).lineHeight) || 0;
    const range = doc.createRange();
    const lines = [];
    let current = null;
    let lineTop = 0;

    words.forEach(word => {
        range.setStart(word.node, word.start);
        range.setEnd(word.node, word.end);
        const rect = range.getBoundingClientRect();
        if (!rect.height) return; // not rendered (hidden branch) — ignore

        // A word starts a new line once it sits more than half a line below
        // the first word of the current one. The tolerance keeps italic serif
        // <em> accents, whose metrics differ from the sans, on their own line.
        const step = Math.min(rect.height, lineHeight || rect.height) * 0.5;
        if (!current || rect.top - lineTop > step) {
            current = { first: word, last: word };
            lines.push(current);
            lineTop = rect.top;
        } else {
            current.last = word;
        }
    });
    if (!lines.length) return false;

    // Clone every line before touching the DOM — the ranges point into the
    // nodes we are about to replace.
    const base = el.classList.contains('section-subtitle') ? 120 : 0;
    const frag = doc.createDocumentFragment();

    lines.forEach((line, i) => {
        range.setStart(line.first.node, line.first.start);
        range.setEnd(line.last.node, line.last.end);

        const inner = doc.createElement('span');
        inner.className = 'line-inner';
        inner.style.transitionDelay = `${base + i * 70}ms`;
        inner.appendChild(range.cloneContents());
        // The clone stops at the last word, dropping the space that separated
        // the lines — put it back so the text still reads as words when
        // copied or announced. Trailing whitespace collapses, so it draws
        // nothing.
        if (i < lines.length - 1) inner.appendChild(doc.createTextNode(' '));

        const wrap = doc.createElement('span');
        wrap.className = 'line';
        wrap.appendChild(inner);
        frag.appendChild(wrap);
    });

    el.textContent = '';
    el.appendChild(frag);
    el.classList.add('line-reveal');
    return true;
}

/* updateLanguage() writes innerHTML into [data-i18n] elements, which would
   shred the line structure — and the new text wraps differently anyway. So
   put the un-split markup back before translating and re-split after. The
   .active class stays on throughout: fresh nodes then compute straight to
   their final position instead of replaying the slide. */
function restoreLineReveals() {
    lineReveals.forEach(rec => { rec.el.innerHTML = rec.html; });
}

function resplitLineReveals() {
    lineReveals.forEach(rec => {
        rec.html = rec.el.innerHTML;
        splitIntoLines(rec.el);
    });
}

/* ==========================================================================
   Portfolio parallax (A5) — nudges each mockup image ±12px against scroll
   position. Subtle on purpose; skipped entirely for reduced motion.
   ========================================================================== */
const PORTFOLIO_MOTION = {
    imgShift: -12, // the existing drift of the shot inside its frame
    cardDrift: 26, // M4/D — how far the two columns slide past each other
    speed: 240     // px of page travel per second on hover
};

function initPortfolioParallax() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // One rect per card, not one per moving element: the drift wrapper and the
    // image wrap are both inside the item, and the item itself is never
    // transformed here, so its rect is a stable reference for both. Reading
    // the children instead would be measuring something we just moved.
    const items = Array.from(document.querySelectorAll('.portfolio-item')).map((el, i) => ({
        el,
        wrap: el.querySelector('.portfolio-img-wrap'),
        drift: el.querySelector('.portfolio-drift'),
        // Cards alternate columns, so odd ones travel against the even ones.
        dir: i % 2 === 0 ? -1 : 1
    })).filter(it => it.wrap || it.drift);
    if (!items.length) return;

    onScroll(({ vh }) => {
        for (let i = 0; i < items.length; i++) {
            const it = items[i];
            const rect = it.el.getBoundingClientRect();
            const center = rect.top + rect.height / 2;
            const progress = Math.max(-1, Math.min(1, (center - vh / 2) / (vh / 2)));
            if (it.wrap) it.wrap.style.transform = `translateY(${(progress * PORTFOLIO_MOTION.imgShift).toFixed(1)}px)`;
            if (it.drift) it.drift.style.transform = `translateY(${(progress * PORTFOLIO_MOTION.cardDrift * it.dir).toFixed(1)}px)`;
        }
    });
}

/* ==========================================================================
   M4 — the mockup scrolls itself on hover. The <img> is now the whole page,
   overflowing the 16/10 window, and the hover state slides it to its end.

   Travel and forward duration are written per card as custom properties
   rather than fixed in CSS: distance depends on the screenshot's real height,
   and a fixed duration would make a short site sprint and a long one crawl.
   The return is the CSS default (0.9s eased) — forward and back having
   different lengths is what makes it read as playback, not a state swap.
   ========================================================================== */
function initPortfolioScroll() {
    const items = document.querySelectorAll('.portfolio-item');
    if (!items.length) return;

    const measure = () => {
        items.forEach(item => {
            const win = item.querySelector('.browser-content');
            const page = item.querySelector('.portfolio-page');
            if (!win || !page) return;
            const travel = Math.max(0, page.offsetHeight - win.clientHeight);
            item.style.setProperty('--page-travel', `${-Math.round(travel)}px`);
            item.style.setProperty('--page-duration', `${(travel / PORTFOLIO_MOTION.speed).toFixed(2)}s`);
        });
    };

    measure();
    window.addEventListener('resize', measure, { passive: true });

    // The shots are loading="lazy", so their height is 0 until they arrive.
    items.forEach(item => {
        const img = item.querySelector('.portfolio-reveal-img');
        if (img && !img.complete) img.addEventListener('load', measure, { once: true });
    });
}

/* ==========================================================================
   M4 — the address bar. The URL sits there dimmed at rest so the frame reads
   as a browser rather than a decoration; on hover it retypes itself.

   Only forward: leaving snaps the full address back instead of erasing it,
   so sweeping the pointer across the grid doesn't set off four rewinds.
   ========================================================================== */
const URL_TYPE_MS = 18; // per character

function initBrowserUrl() {
    const items = document.querySelectorAll('.portfolio-item[data-url]');
    if (!items.length) return;

    const still = window.matchMedia('(prefers-reduced-motion: reduce), (hover: none), (pointer: coarse)');

    items.forEach(item => {
        const bar = item.querySelector('.browser-url');
        if (!bar) return;
        // The address is already in the markup so a no-JS visit shows it too;
        // this only animates it.
        const url = item.dataset.url;
        if (still.matches) return;

        let timer = null;
        const stop = () => {
            if (timer) clearInterval(timer);
            timer = null;
            bar.classList.remove('typing');
        };

        const type = () => {
            stop();
            bar.classList.add('typing');
            bar.textContent = '';
            let i = 0;
            timer = setInterval(() => {
                bar.textContent = url.slice(0, ++i);
                if (i >= url.length) stop();
            }, URL_TYPE_MS);
        };

        const reset = () => { stop(); bar.textContent = url; };

        item.addEventListener('mouseenter', type);
        item.addEventListener('focus', type);
        item.addEventListener('mouseleave', reset);
        item.addEventListener('blur', reset);
    });
}

/* ==========================================================================
   Background parallax — the dot grid drifts upward much slower than the
   page scrolls, giving the background a sense of depth. Purely decorative,
   so it's skipped entirely under reduced motion.
   ========================================================================== */
function initBackgroundParallax() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const dots = document.querySelector('.background-grid-dots');
    if (!dots) return;

    // The cursor-reveal layer paints the SAME 40px grid (just brighter, lit
    // around the cursor) — it must shift identically or its lit dots stay
    // frozen and stop lining up with the base grid. Its mask tracks the
    // cursor via CSS vars, so we shift background-position, not transform.
    const reveal = document.querySelector('.grid-reveal');

    const SPEED = 0.18;
    const PATTERN = 40; // dot grid period — offsets wrap seamlessly

    onScroll(({ y }) => {
        const offset = (y * SPEED) % PATTERN;
        dots.style.transform = `translateY(${-offset}px)`;
        if (reveal) reveal.style.backgroundPosition = `0 ${-offset}px`;
    });
}

/* ==========================================================================
   Stats counters (A4) — count up from 0 to the target once, first time the
   hero stats bar is visible.
   ========================================================================== */
function initStatsCounter() {
    const nums = document.querySelectorAll('.stat-num[data-count]');
    if (!nums.length) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const animateCount = (el) => {
        const target = parseInt(el.getAttribute('data-count'), 10);
        if (reduceMotion) {
            el.textContent = target;
            return;
        }
        const duration = 1200;
        const start = performance.now();
        const step = (now) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            el.textContent = Math.round(eased * target);
            if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCount(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    nums.forEach(el => observer.observe(el));
}

/* ==========================================================================
   Hero entrance — masked word reveal for the headline (A1) + fade-in for
   eyebrow/subtitle/actions/stats (A2 handles the rotating phrase itself).
   Waits for fonts to load so the reveal doesn't animate a fallback font.
   ========================================================================== */
function initHeroReveal() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const eyebrow = document.querySelector('.hero .eyebrow');
    const line1 = document.querySelector('.hero-line-1');
    const rotateWrap = document.querySelector('.hero-rotate-wrap');
    const subtitle = document.querySelector('.hero-subtitle');
    const actions = document.querySelector('.hero-actions');
    const statsBar = document.querySelector('.stats-bar');
    const fadeEls = [eyebrow, rotateWrap, subtitle, actions, statsBar].filter(Boolean);

    if (reduceMotion) {
        fadeEls.forEach(el => el.classList.add('active'));
        return;
    }

    let wordSpans = [];
    if (line1) {
        const words = line1.textContent.trim().split(/\s+/);
        line1.innerHTML = words
            .map(w => `<span class="word-mask"><span class="word-inner">${w}</span></span>`)
            .join(' ');
        wordSpans = Array.from(line1.querySelectorAll('.word-mask'));
    }

    const start = () => {
        wordSpans.forEach((w, i) => {
            w.querySelector('.word-inner').style.transitionDelay = `${120 + i * 70}ms`;
        });
        if (eyebrow) eyebrow.style.transitionDelay = '0ms';
        if (rotateWrap) rotateWrap.style.transitionDelay = `${120 + wordSpans.length * 70 + 80}ms`;
        if (subtitle) subtitle.style.transitionDelay = '650ms';
        if (actions) actions.style.transitionDelay = '750ms';
        if (statsBar) statsBar.style.transitionDelay = '850ms';

        requestAnimationFrame(() => {
            wordSpans.forEach(w => w.classList.add('active'));
            fadeEls.forEach(el => el.classList.add('active'));
        });
    };

    let started = false;
    const startOnce = () => {
        if (started) return;
        started = true;
        start();
    };

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(startOnce);
        setTimeout(startOnce, 800);
    } else {
        startOnce();
    }
}

/* ==========================================================================
   M10 — grain reacts to scroll speed. The static grain on body::after stays
   exactly as it was; this fades a second identical layer in on top of it, so
   the texture goes from 0.028 at rest to about 0.05 at a fast scroll.

   It has to stay on the edge of perceptible — the moment a visitor notices it
   consciously it is too strong.

   scrollState.velocity is already lerped by the M0 loop; a raw delta here
   would make the grain flicker. Nothing else on the site consumed velocity
   until now, which is why M0 computed it.
   ========================================================================== */
const GRAIN = {
    perPx: 0.00022, // extra opacity per px/frame of scroll
    max: 0.022      // 0.028 base + this = ~0.05 at speed
};

function initGrainVelocity() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const layer = document.createElement('div');
    layer.className = 'grain-boost';
    layer.setAttribute('aria-hidden', 'true');
    document.body.appendChild(layer);

    let last = -1;
    onScroll(({ }) => {
        const v = Math.min(scrollState.velocity * GRAIN.perPx, GRAIN.max);
        // 3dp is well past what the eye can see at these values, and it stops
        // the tail of the lerp writing a new string every frame.
        const next = Math.round(v * 1000) / 1000;
        if (next === last) return;
        last = next;
        layer.style.opacity = next;
    });
}

/* ==========================================================================
   M9 — button labels. Each label becomes a tight mask around one line of text
   so it can roll up on hover while a copy rolls in from below (the copy is a
   ::after reading data-label, so it needs no second element).

   Built here rather than written into the markup: that would mean editing
   ~150 buttons across 24 files, and updateLanguage() rewrites innerHTML on
   every [data-i18n] element, which would destroy the structure on every
   language switch anyway. Re-running after a switch is the same pattern the
   line reveals already use.

   Idempotent — an already-wrapped button is skipped, so it is safe to call
   as often as needed.
   ========================================================================== */
const BUTTON_LABEL_SELECTOR = '.btn, .pricing-cta, .form-submit';

/* Turns an element's own text into a mask + mover pair. `alt` is the line that
   rolls in from below — the same words for a button, the project's address for
   a portfolio card. */
function rollLabel(host, alt) {
    if (!host || host.querySelector(':scope > .btn-label')) return; // already wrapped

    // Text nodes only: an <svg> stays exactly where it was in the flow.
    const nodes = Array.from(host.childNodes)
        .filter(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim());
    if (!nodes.length) return;

    const text = nodes.map(n => n.textContent).join(' ').replace(/\s+/g, ' ').trim();
    if (!text) return;

    const mask = document.createElement('span');
    mask.className = 'btn-label';
    // Only when the two lines differ: the mask is sized by `text`, so CSS
    // needs the other string to widen it or the longer line gets clipped.
    if (alt && alt !== text) mask.setAttribute('data-alt', alt);
    const inner = document.createElement('span');
    inner.className = 'btn-label-in';
    inner.setAttribute('data-label', alt || text);
    inner.textContent = text;
    mask.appendChild(inner);

    host.insertBefore(mask, nodes[0]);
    nodes.forEach(n => n.remove());
}

function wrapButtonLabels() {
    document.querySelectorAll(BUTTON_LABEL_SELECTOR).forEach(el => {
        // The words may sit in a child span (next to an icon) or directly in
        // the button. An icon-only span has no text and must not be picked.
        const host = Array.from(el.children)
            .find(c => c.tagName === 'SPAN' && c.textContent.trim());
        rollLabel(host || el);
    });

    // Same machinery on the portfolio, but the second line is the project's
    // address rather than a copy of the name.
    document.querySelectorAll('.portfolio-item[data-url] .portfolio-name').forEach(name => {
        rollLabel(name, name.closest('[data-url]').dataset.url);
    });
}

/* ==========================================================================
   Spotlight Hover Effect
   ========================================================================== */
function initSpotlightEffect() {
    const cards = document.querySelectorAll(".spotlight-card");

    cards.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        });
    });
}

/* ==========================================================================
   Navbar Scroll Transparency
   ========================================================================== */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelector('.nav-links');
    if (!navbar) return;

    const BG_THRESHOLD = 80;
    const HIDE_DELTA = 5;
    let lastScrollY = window.scrollY;

    onScroll(({ y }) => {
        const menuOpen = navLinks && navLinks.classList.contains('mobile-open');

        navbar.classList.toggle('scrolled', y > BG_THRESHOLD);

        if (!menuOpen) {
            if (y < BG_THRESHOLD || y < lastScrollY - HIDE_DELTA) {
                navbar.classList.remove('nav-hidden');
            } else if (y > lastScrollY + HIDE_DELTA) {
                navbar.classList.add('nav-hidden');
            }
        }

        lastScrollY = y;
    });
}

/* ==========================================================================
   Scroll-spy (A6) — keeps the current section's nav link underlined
   ========================================================================== */
function initScrollSpy() {
    const navLinkMap = new Map();
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(a => {
        navLinkMap.set(a.getAttribute('href').slice(1), a);
    });
    if (!navLinkMap.size) return;

    const sections = Array.from(navLinkMap.keys())
        .map(id => document.getElementById(id))
        .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            navLinkMap.forEach(link => link.classList.remove('active-link'));
            const link = navLinkMap.get(entry.target.id);
            if (link) link.classList.add('active-link');
        });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   Mobile Menu Toggle
   ========================================================================== */
const MENU_ICON = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>';
const CLOSE_ICON = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';

function initMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (!btn || !navLinks) return;

    btn.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('mobile-open');
        btn.setAttribute('aria-expanded', String(isOpen));
        btn.innerHTML = isOpen ? CLOSE_ICON : MENU_ICON;
    });

    // Close menu when a nav link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('mobile-open');
            btn.setAttribute('aria-expanded', 'false');
            btn.innerHTML = MENU_ICON;
        });
    });
}

function initTimeline() {
    const processSection = document.getElementById('process');
    const timelineFill = document.getElementById('timeline-fill');
    const timelineSteps = document.querySelectorAll('.timeline-step');

    if (!processSection || !timelineFill || !timelineSteps.length) return;

    // Section geometry is measured once (and on resize) — reading offsetTop /
    // offsetHeight inside the scroll path forces a layout on every frame.
    let sectionTop = 0;
    let sectionHeight = 0;

    const measure = () => {
        sectionTop = processSection.offsetTop;
        sectionHeight = processSection.offsetHeight;
    };

    const setFill = (ratio) => {
        timelineFill.style.transform = `scaleY(${ratio})`;
    };

    measure();
    window.addEventListener('resize', measure, { passive: true });

    onScroll(({ y, vh }) => {
        const startPoint = sectionTop - vh + (vh * 0.4);
        const endPoint = sectionTop + sectionHeight - (vh * 0.6);

        if (y > startPoint && y < endPoint) {
            const percentage = Math.max(0, Math.min(((y - startPoint) / (endPoint - startPoint)) * 100, 100));
            setFill(percentage / 100);

            timelineSteps.forEach((step, index) => {
                const stepThreshold = (index / timelineSteps.length) * 100;
                step.classList.toggle('active', percentage > stepThreshold + 5);
            });
        } else if (y <= startPoint) {
            setFill(0);
            timelineSteps.forEach(step => step.classList.remove('active'));
        } else {
            setFill(1);
            timelineSteps.forEach(step => step.classList.add('active'));
        }
    });
}

/* ==========================================================================
   M1 — Inertial scroll. The glide that ricardochance / grainient / jingjinghan
   all get from Lenis, written out here because the house rule is no libraries.

   The important detail: this drives the REAL scroll position every frame
   (window.scrollTo) instead of translating a wrapper. That is what keeps
   position: sticky, #anchors, keyboard scrolling, find-in-page and the
   scrollbar working — a transform wrapper breaks all of them, and the beat
   stage in M2 is sticky.

   Only the wheel is intercepted. Touch keeps native momentum (better than
   anything we would write), keyboard and anchors keep the browser's own
   smooth behaviour, and both are left alone on purpose for accessibility.
   ========================================================================== */
function initSmoothScroll() {
    // Touch devices already have momentum, and reduced motion means no glide.
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const LERP = 0.135;       // higher = tighter to the wheel, lower = floatier
    const LINE_HEIGHT = 16;   // deltaMode 1 is in lines, not pixels

    let target = window.scrollY;
    let current = target;
    let running = false;

    const maxScroll = () =>
        Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    // Don't steal the wheel from something that can scroll on its own.
    const overNestedScroller = (node) => {
        for (let el = node; el && el !== document.body; el = el.parentElement) {
            if (el.hasAttribute && el.hasAttribute('data-native-scroll')) return true;
            const style = getComputedStyle(el);
            if (/(auto|scroll)/.test(style.overflowY) && el.scrollHeight > el.clientHeight + 1) return true;
        }
        return false;
    };

    // Runs inside the one scroll-loop rAF (house rule: a single rAF for the
    // whole site), before the effects, so they see this frame's position.
    onFrame(() => {
        if (!running) return false;
        current += (target - current) * LERP;
        if (Math.abs(target - current) < 0.4) {
            current = target;
            running = false;
        }
        // 'instant' matters: html has scroll-behavior: smooth for anchors, and
        // without this every frame would start its own easing on top of ours.
        window.scrollTo({ top: current, left: 0, behavior: 'instant' });
        return running;
    });

    const start = () => {
        running = true;
        requestScrollFrame();
    };

    window.addEventListener('wheel', (e) => {
        if (e.ctrlKey) return;                    // pinch zoom
        if (overNestedScroller(e.target)) return;
        e.preventDefault();

        const unit = e.deltaMode === 1 ? LINE_HEIGHT : e.deltaMode === 2 ? window.innerHeight : 1;
        target = Math.max(0, Math.min(target + e.deltaY * unit, maxScroll()));
        start();
    }, { passive: false });

    // Anything that moves the page without us — scrollbar drag, keyboard,
    // an #anchor, focus, find-in-page — resyncs the target so the next wheel
    // tick continues from where the page actually is.
    onScroll(({ y }) => {
        if (!running) {
            target = y;
            current = y;
        }
    });

    // A same-page anchor hands control to the browser's own smooth scroll;
    // stepping aside avoids two animations pulling at the same position.
    document.addEventListener('click', (e) => {
        const link = e.target.closest && e.target.closest('a[href^="#"]');
        if (link) running = false;
    }, true);
}

/* ==========================================================================
   M8 — Manifest. One sentence between sections, split into words that light
   up one after another as the section scrolls past. The word index and a
   single --lit counter do the whole thing in CSS: opacity per word is
   clamp(dim, (lit - index) * k, 1), so the lit edge sweeps across the line
   in step with the wheel. --lit lands on the sentence element, not :root.
   ========================================================================== */
const manifestState = { el: null };

function initManifest() {
    const section = document.querySelector('.manifest');
    const text = section && section.querySelector('.manifest-text');
    if (!section || !text) return;

    manifestState.el = text;
    splitManifestWords(text);

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    let top = 0;
    let travel = 1;
    let lastP = -1;

    const measure = () => {
        top = section.getBoundingClientRect().top + window.scrollY;
        travel = Math.max(1, section.offsetHeight - window.innerHeight);
    };

    measure();
    window.addEventListener('resize', measure, { passive: true });

    onScroll(({ y }) => {
        if (reduce.matches) return;
        const p = Math.max(0, Math.min((y - top) / travel, 1));
        if (p === lastP) return; // same guard as the beat stage
        lastP = p;
        // +2 so the last word is fully lit before the sentence scrolls off
        const words = text.querySelectorAll('.mword').length;
        text.style.setProperty('--lit', (p * (words + 2)).toFixed(3));
    });
}

function splitManifestWords(el) {
    const words = (el.textContent || '').trim().split(/\s+/).filter(Boolean);
    if (!words.length) return;

    el.textContent = '';
    words.forEach((word, i) => {
        const span = document.createElement('span');
        span.className = 'mword';
        span.style.setProperty('--wi', String(i));
        span.textContent = word;
        el.appendChild(span);
        if (i < words.length - 1) el.appendChild(document.createTextNode(' '));
    });
}

/* updateLanguage() overwrites the sentence with plain text — split it again. */
function resplitManifest() {
    if (manifestState.el) splitManifestWords(manifestState.el);
}

/* ==========================================================================
   M2 — Process scroll stage. The section pins itself for four viewport
   heights and one browser mockup is built up beat by beat as you scroll:
   empty frame -> wireframe -> content -> live site with a rising chart.

   Two custom properties carry the state, both written onto .beat-stage so
   the style invalidation stays inside this one section (writing them on
   :root would re-style the whole document every frame — see initScrollLoop):
     --p    0..1 through the whole pinned section
     --sub  0..1 within the current beat, which is what scrubs the chart
   The coarse state (which beat) is a data attribute rather than an
   interpolation: cheaper, and the CSS reads like the storyboard.
   ========================================================================== */
function initBeatStage() {
    const track = document.querySelector('.beat-track');
    const stage = track && track.querySelector('.beat-stage');
    if (!track || !stage) return;

    const items = Array.from(stage.querySelectorAll('.beat-item'));
    if (!items.length) return;

    // Below 900px the stage is not pinned (a sticky scene on a phone is just
    // a small picture that refuses to leave), and reduced motion gets the
    // same plain list. CSS already lays both out — JS just stops driving it.
    const flat = window.matchMedia('(max-width: 900px), (prefers-reduced-motion: reduce)');

    let trackTop = 0;
    let travel = 1;
    let beat = -1;

    const measure = () => {
        trackTop = track.getBoundingClientRect().top + window.scrollY;
        // The stage is pinned from the moment the track's top reaches the top
        // of the viewport until its bottom does — that span is the travel.
        travel = Math.max(1, track.offsetHeight - window.innerHeight);
    };

    const setBeat = (i) => {
        if (i === beat) return;
        beat = i;
        stage.dataset.beat = String(i + 1);
        items.forEach((item, n) => item.classList.toggle('active', n === i));
    };

    const flatten = () => {
        stage.style.removeProperty('--p');
        stage.style.removeProperty('--sub');
        stage.dataset.beat = String(items.length);
        items.forEach(item => item.classList.add('active'));
        beat = -1;
    };

    measure();
    window.addEventListener('resize', measure, { passive: true });

    let lastP = -1;

    onScroll(({ y }) => {
        if (flat.matches) return;
        const p = Math.max(0, Math.min((y - trackTop) / travel, 1));
        // Above and below the section p is pinned at 0 / 1. Writing the same
        // value again would still invalidate the whole stage subtree every
        // frame — which cost 12 frames over 33ms across a full-page scroll at
        // 4x throttling before this guard.
        if (p === lastP) return;
        lastP = p;

        const i = Math.min(items.length - 1, Math.floor(p * items.length));
        stage.style.setProperty('--p', p.toFixed(4));
        stage.style.setProperty('--sub', (p * items.length - i).toFixed(4));
        setBeat(i);
    });

    const sync = () => {
        if (flat.matches) flatten();
        else measure();
    };
    flat.addEventListener('change', sync);
    sync();
}

/* ==========================================================================
   Pointer ambience — the native cursor is back; this only feeds the soft
   glow + lit dot grid that trail the pointer across the background.
   ========================================================================== */
function initPointerAmbience() {
    // Touch-only devices have no pointer to follow (CSS hides the layers too).
    // Note: 'ontouchstart'/maxTouchPoints give false positives on laptops
    // (esp. Chromium/Brave on macOS), so use a pointer media query instead.
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;
    let running = false;
    const root = document.documentElement;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        document.body.classList.add('cursor-active');
        if (!running) {
            running = true;
            requestAnimationFrame(animateGlow);
        }
    });

    // Smooth trailing — the light lags slightly behind the pointer
    const animateGlow = () => {
        glowX += (mouseX - glowX) * 0.2;
        glowY += (mouseY - glowY) * 0.2;
        root.style.setProperty('--mx', glowX + 'px');
        root.style.setProperty('--my', glowY + 'px');
        requestAnimationFrame(animateGlow);
    };

    document.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-active');
    });
    document.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-active');
    });
}

/* ==========================================================================
   FAQ Accordion
   ========================================================================== */
function initFAQ() {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(btn => {
        btn.addEventListener('click', () => {
            const answer = btn.nextElementSibling;
            const isOpen = btn.getAttribute('aria-expanded') === 'true';

            // Close all others
            questions.forEach(other => {
                other.setAttribute('aria-expanded', 'false');
                other.nextElementSibling.classList.remove('open');
            });

            // Toggle clicked
            if (!isOpen) {
                btn.setAttribute('aria-expanded', 'true');
                answer.classList.add('open');
            }
        });
    });
}

/* ==========================================================================
   Contact Form Handling (Formspree)
   ========================================================================== */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const msgEl = document.getElementById('form-message');
    if (!form || !msgEl) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const submitBtn = form.querySelector('button[type="submit"]');
        // innerHTML, not innerText: the button holds an arrow SVG (and, since
        // M9, a rolled label), and restoring innerText would replace both with
        // a bare text node — the arrow never came back after a submit.
        const originalBtnHTML = submitBtn.innerHTML;

        // Visual feedback
        submitBtn.disabled = true;
        submitBtn.textContent = '...';

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                msgEl.innerText = translations[currentLang].form_success || "Success!";
                msgEl.classList.add('success');
                msgEl.classList.add('active'); // Show it
                form.reset();
            } else {
                throw new Error();
            }
        } catch (err) {
            msgEl.innerText = translations[currentLang].form_error || "Error!";
            msgEl.classList.add('error');
            msgEl.classList.add('active'); // Show it
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnHTML;

            // Auto hide after 6s
            setTimeout(() => {
                msgEl.classList.remove('active');
                msgEl.className = 'form-message';
            }, 6000);
        }
    });
}

/* ==========================================================================
   Pricing package cards — the anchor scrolls to #contact, we tag the
   Formspree submission and pre-fill the message with the chosen package
   ========================================================================== */
/* Slugs that may arrive on the contact page as ?balicek= / ?sluzba=.
   They are language-stable on purpose: the display name changes between CS
   and EN (Základní / Starter), so putting the name in the URL would break
   the moment a visitor switched language or shared the link. The values are
   existing translation keys, so no new copy is needed for the names. */
const CONTACT_PACKAGES = {
    zakladni: 'pack1_name',
    pokrocily: 'pack2_name',
    kompletni: 'pack3_name'
};

const CONTACT_SERVICES = {
    'tvorba-webu': 'svc_web',
    'seo': 'svc_seo',
    'reklama-na-socialnich-sitich': 'svc_ads',
    'video-a-dron': 'svc_video',
    'ai-chatbot': 'svc_chatbot',
    'hosting': 'svc_hosting',
    'rezervacni-system': 'svc_booking',
    'sprava-socialnich-siti': 'svc_social',
    'branding': 'svc_brand',
    'automatizace-zmeskanych-hovoru': 'svc_calls',
    'google-firemni-profil': 'svc_google'
};

/* ==========================================================================
   Contact page prefill — replaces the old initPricingCards(), which existed
   only to fill the homepage form that a pricing card scrolled down to. The
   cards now link to /kontakt.html?balicek=<slug>, so the selection arrives in
   the URL and is resolved here: hidden field for Formspree, a visible chip so
   the visitor can see what carried over (and drop it if it was a misclick),
   and a message the visitor can overwrite.
   ========================================================================== */
function initContactPrefill() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const params = new URLSearchParams(window.location.search);
    const t = translations[currentLang] || translations.cs;

    // A package wins over a service if somebody hand-crafts a URL with both.
    const sources = [
        { slug: params.get('balicek'), map: CONTACT_PACKAGES, field: 'form-balicek', msg: 'form_package_msg', label: 'form_chip_package' },
        { slug: params.get('sluzba'), map: CONTACT_SERVICES, field: 'form-sluzba', msg: 'form_service_msg', label: 'form_chip_service' }
    ];
    const hit = sources.find(s => s.slug && s.map[s.slug]);
    if (!hit) return;

    const name = t[hit.map[hit.slug]];
    const field = document.getElementById(hit.field);
    if (!name || !field) return;

    field.value = name;

    const messageEl = document.getElementById('contact-msg');
    const prefill = (t[hit.msg] || '{name}').replace('{name}', name);
    // Never overwrite something the visitor already typed — on a bfcache
    // restore this runs again with the form still filled in.
    if (messageEl && messageEl.value.trim() === '') messageEl.value = prefill;

    const chip = document.getElementById('form-chip');
    const chipName = document.getElementById('form-chip-name');
    const chipLabel = document.getElementById('form-chip-label');
    const chipClear = document.getElementById('form-chip-clear');
    if (!chip || !chipName) return;

    if (chipLabel && t[hit.label]) chipLabel.textContent = t[hit.label];
    chipName.textContent = name;
    chip.hidden = false;
    requestAnimationFrame(() => chip.classList.add('active'));

    if (chipClear) {
        chipClear.addEventListener('click', () => {
            field.value = '';
            chip.classList.remove('active');
            // Clear the message too, but only if it is still ours untouched.
            if (messageEl && messageEl.value === prefill) messageEl.value = '';
            const drop = () => { chip.hidden = true; };
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) drop();
            else chip.addEventListener('transitionend', drop, { once: true });
            if (messageEl) messageEl.focus();
        });
    }
}

/* ==========================================================================
   Page transitions — the site already fades IN via .page-loaded; this is the
   matching fade OUT, so following a link reads as a transition instead of a
   hard cut. Only same-origin, unmodified, plain left-clicks on real page
   navigations are intercepted; anchors, mailto/tel, downloads, new tabs and
   modified clicks all keep native behaviour.
   ========================================================================== */
const PAGE_EXIT_MS = 180; // must stay <= the .page-leaving transition in CSS

function initPageTransitions() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Coming back via bfcache restores the DOM with .page-leaving still set,
    // which would leave the page invisible. Always clear it on show.
    window.addEventListener('pageshow', () => {
        document.body.classList.remove('page-leaving');
        document.body.classList.add('page-loaded');
    });

    document.addEventListener('click', (e) => {
        if (e.defaultPrevented || e.button !== 0) return;
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

        const link = e.target.closest('a[href]');
        if (!link || link.target === '_blank' || link.hasAttribute('download')) return;
        if (link.getAttribute('rel') === 'external') return;

        const url = new URL(link.href, window.location.href);
        if (url.origin !== window.location.origin) return;
        if (!/^https?:$/.test(url.protocol)) return; // mailto:, tel:

        // Same document — that's an in-page anchor, leave the scroll alone.
        if (url.pathname === window.location.pathname && url.search === window.location.search) return;

        e.preventDefault();
        document.body.classList.add('page-leaving');
        setTimeout(() => { window.location.href = link.href; }, PAGE_EXIT_MS);
    });
}

/* ==========================================================================
   Floating contact button — appears once the visitor is past the hero and
   steps aside again before the contact block, so it never sits on top of the
   form it duplicates.

   Built here rather than in 24 HTML files on purpose: without JS it would be
   a fixed button that can never hide, which is worse than no button, and
   generating it keeps the label and target derived from the page that is
   actually loaded. It carries data-i18n / data-href-cs so a language switch
   on the homepage updates it through updateLanguage() like everything else.
   ========================================================================== */
const FLOAT_CTA = {
    showAfter: 1.15, // viewport heights of scroll before it appears
    arrow: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>'
};

function initFloatingContact() {
    // Pointless on the contact page itself.
    if (/\/(en\/)?kontakt\.html$/.test(window.location.pathname)) return;

    // The block it must not cover: the on-page form, or the footer if a page
    // ever has no form.
    const target = document.querySelector('.contact') || document.querySelector('.footer');
    if (!target) return;

    const cta = document.createElement('a');
    cta.className = 'float-cta';
    cta.setAttribute('data-href-cs', '/kontakt.html');
    cta.setAttribute('data-href-en', '/en/kontakt.html');
    cta.href = currentLang === 'en' ? '/en/kontakt.html' : '/kontakt.html';

    const label = document.createElement('span');
    label.setAttribute('data-i18n', 'footer_write');
    label.textContent = (translations[currentLang] || translations.cs).footer_write;
    cta.appendChild(label);
    cta.insertAdjacentHTML('beforeend', FLOAT_CTA.arrow);

    // Starts hidden, and stays out of the tab order and the a11y tree while
    // it is — an invisible button a keyboard lands on is worse than none.
    cta.setAttribute('tabindex', '-1');
    cta.setAttribute('aria-hidden', 'true');
    document.body.appendChild(cta);

    let hideFrom = Infinity;
    const measure = () => {
        hideFrom = target.getBoundingClientRect().top + window.scrollY;
    };
    measure();
    window.addEventListener('resize', measure, { passive: true });

    let shown = false;
    onScroll(({ y, vh }) => {
        const visible = y > vh * FLOAT_CTA.showAfter && (y + vh) < hideFrom;
        if (visible === shown) return;
        shown = visible;
        cta.classList.toggle('visible', visible);
        if (visible) {
            cta.removeAttribute('tabindex');
            cta.removeAttribute('aria-hidden');
        } else {
            cta.setAttribute('tabindex', '-1');
            cta.setAttribute('aria-hidden', 'true');
        }
    });
}

/* ==========================================================================
   Scroll Progress Bar
   ========================================================================== */
function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;

    onScroll(({ y, max }) => {
        const scrolled = max > 0 ? Math.min(y / max, 1) : 0;
        // scaleX, not width — width is a layout property and repaints the bar
        // through layout on every frame.
        bar.style.transform = `scaleX(${scrolled})`;
    });
}

/* ==========================================================================
   Magnetic Buttons Effect
   ========================================================================== */
function initMagneticButtons() {
    // Respect users who prefer no motion — skip the pull effect entirely
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Buttons and the logo only. Nav links are too small — the pull reads as
    // nervous — and on .portfolio-item the inline transform fights the
    // .blur-reveal transform whenever a card is hovered mid-reveal.
    const magneticEls = document.querySelectorAll('.btn, .logo');
    const strength = 0.12;

    magneticEls.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
            el.style.transition = 'transform 0.2s ease-out';
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = 'translate(0, 0)';
            el.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        });
    });
}

