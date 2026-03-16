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
        hero_eyebrow: "Rychlé a moderní weby",
        hero_h1_pt1: "Rychlé a moderní weby",
        hero_h1_pt2: "bez kompromisů.",
        hero_desc: "Jsme malé webové studio zaměřené na tvorbu moderních, minimalistických webů. Navrhujeme a vyvíjíme digitální prezentace s důrazem na výkon, typografii a čistý kód.",
        hero_btn: "Prozkoumat služby",
        services_title: "Co Přesně Děláme",
        card1_title: "Weby Od Nuly",
        card1_sub: "Pro ty, co začínají",
        card1_desc: "Navrhujeme a vyvíjíme moderní weby od základu. Čistý design, rychlý výkon a řešení na míru vašemu projektu.",
        card2_title: "Redesigny",
        card2_sub: "Pro ty, co už web mají",
        card2_desc: "Modernizujeme zastaralé weby a zjednodušujeme jejich strukturu. Výsledkem je přehlednější design a lepší uživatelský zážitek.",
        card3_title: "Optimalizace & Správa",
        card3_sub: "Pro ty, co chtějí výkon",
        card3_desc: "Zlepšíme rychlost, SEO a technickou kvalitu vašeho webu. Postaráme se o stabilní provoz a dlouhodobou správu.",
        portfolio_title: "Naše Práce",
        portfolio_sub: "Ověřené koncepty fungující v praxi",
        process_title: "Jak To Probíhá",
        step1_title: "01 / Discovery Call",
        step1_desc: "Probereme vaši vizi a najdeme společnou řeč. Jednoduché a k věci.",
        step2_title: "02 / Design & Wireframing",
        step2_desc: "Vytvoříme precizní návrh zaměřený na obsah a čistotu rozhraní.",
        step3_title: "03 / Development",
        step3_desc: "Píšeme čistý kód. Důraz na ohromující výkon a plynulé interakce.",
        step4_title: "04 / Launch",
        step4_desc: "Finální testování a spuštění. Váš \"quiet luxury\" web ožívá.",
        contact_title: "Začněme tvořit.",
        contact_subtitle: "Hledáte design, který nekřičí, ale rezonuje?",
        contact_btn: "hello@nsstudio.tech",
        team_title: "Kdo Za Tím Stojí",
        team_sub: "Dva studenti s jedním cílem",
        team_photo_soon: "Foto brzy",
        team1_role: "Design & Frontend",
        team1_bio: "Zaměřený na vizuální preciznost a čistý kód. Designuje systémy, které vypadají prémiově a fungují perfektně.",
        team2_role: "Development & Strategy",
        team2_bio: "Staví rychlé, optimalizované weby od základů. Řeší technickou stránku věci, aby výsledek byl vždy spolehlivý.",
        skills_title: "Co Umíme",
        skill1_desc: "Sémantický kód, čisté styly. Žádné zbytečné knihovny — jen základ, co létá.",
        skill2_desc: "Animace, interakce, logika. Vanilla JS i moderní frameworky bez zbytečné složitosti.",
        skill3_desc: "Komponenty, state management a rychlé SPA. Vite + React pro moderní projekty.",
        skill4_desc: "Verzování, pull requesty a CI/CD pipeline. Kód je vždy pod kontrolou a dohledatelný.",
        skill5_desc: "DNS, SSL certifikát a nasazení na vlastní doménu. Váš web je online do 24 hodin.",
        skill6_desc: "Wireframy, prototypy a handoff. Design systém domluvený ještě před napsáním prvního řádku kódu.",
        faq_title: "Časté Otázky",
        faq1_q: "Kolik stojí nový web?",
        faq1_a: "Cenu vždy nastavujeme individuálně podle rozsahu projektu. Základní landing page začíná od 5 000 Kč, komplexnější prezentační weby od 10 000 Kč. Ozvi se a domluvíme se.",
        faq2_q: "Jak dlouho trvá výroba webu?",
        faq2_a: "Jednoduchý web zpravidla do 2–3 týdnů od prvního callu. U větších projektů počítej se 4–6 týdny. Záleží na rozsahu a rychlosti tvé zpětné vazby.",
        faq3_q: "Děláte e-shopy?",
        faq3_a: "E-shopy řešíme po domluvě. Kontaktuj nás a popište rozsah projektu — rádi se domluvíme.",
        faq4_q: "Co potřebuji mít připravené?",
        faq4_a: "Stačí mít představu o tom, co chcete sdělit, a ideálně logo nebo brand guide. Vše ostatní vyřešíme společně.",

        faq6_q: "Můžu si web po spuštění sám měnit?",
        faq6_a: "Záleží na vybraném řešení. Preferujeme výkonné weby, o které se staráme plně my, ale umíme nasadit i spolehlivé CMS (např. Sanity), pokud je správa obsahu pro vás prioritní.",
        faq7_q: "Jak je to s údržbou?",
        faq7_a: "Zajišťujeme občasné bezpečnostní i funkční aktualizace v rámci měsíční údržby tak, abyste web opravdu nemuseli řešit, a mohli se věnovat byznysu.",
        trust_badge: "100% Custom Coded. No Templates.",
        cookie_text: "Používáme cookies pouze pro nezbytný chod webu. Žádné nevyžádané sledování.",
        cookie_btn: "Rozumím",
        form_name: "Jméno",
        form_email: "E-mail",
        form_msg: "Zpráva",
        form_send: "Odeslat zprávu",
        form_success: "Zpráva byla úspěšně odeslána! Ozveme se vám brzy.",
        form_error: "Omlouváme se, při odesílání došlo k chybě. Zkuste to prosím znovu."
    },
    en: {
        stat_projects: "Projects",
        stat_founders: "Students",
        stat_weeks: "Weeks to launch",
        nav_services: "Services",
        nav_portfolio: "Work",
        nav_process: "Process",
        nav_contact: "Contact",
        hero_eyebrow: "Engineering Elegance",
        hero_h1_pt1: "Quiet Luxury for your",
        hero_h1_pt2: "Digital Presence.",
        hero_desc: "Two students. Endless ideas. We build sharp, minimalist websites that let your content breathe. No unnecessary noise—just clean code, perfect typography, and design that speaks for itself.",
        hero_btn: "Explore Services",
        services_title: "What We Do",
        card1_title: "Websites from Scratch",
        card1_sub: "For those starting out",
        card1_desc: "We design and build clean, fast, and modern websites from the ground up. Maximum use of negative space and sharp typography.",
        card2_title: "Redesigns",
        card2_sub: "For those who already have a site",
        card2_desc: "We strip your presentation of unnecessary layers. Transforming an outdated look into a premium, technologically polished experience.",
        card3_title: "Optimization & Care",
        card3_sub: "For those who want performance",
        card3_desc: "We speed up your current site, improve SEO, and ensure smooth operation. Reliable background maintenance.",
        portfolio_title: "Our Work",
        portfolio_sub: "Proven concepts working in practice",
        process_title: "How It Works",
        step1_title: "01 / Discovery Call",
        step1_desc: "We discuss your vision and find common ground. Simple and straight to the point.",
        step2_title: "02 / Design & Wireframing",
        step2_desc: "We create a precise design focused on content and interface clarity.",
        step3_title: "03 / Development",
        step3_desc: "We write clean code. Emphasis on stunning performance and smooth interactions.",
        step4_title: "04 / Launch",
        step4_desc: "Final testing and deployment. Your \"quiet luxury\" website comes to life.",
        contact_title: "Let's start building.",
        contact_subtitle: "Looking for a design that resonates without shouting?",
        contact_btn: "hello@nsstudio.tech",
        team_title: "Who's Behind It",
        team_sub: "Two students, one goal",
        team_photo_soon: "Photo soon",
        team1_role: "Design & Frontend",
        team1_bio: "Focused on visual precision and clean code. Designs systems that look premium and work flawlessly.",
        team2_role: "Development & Strategy",
        team2_bio: "Builds fast, optimized sites from the ground up. Handles the technical side so the result is always reliable.",
        skills_title: "What We Know",
        skill1_desc: "Semantic code, clean styles. No unnecessary libraries — just the foundation that flies.",
        skill2_desc: "Animations, interactions, logic. Vanilla JS and modern frameworks without unnecessary complexity.",
        skill3_desc: "Components, state management and fast SPAs. Vite + React for modern projects.",
        skill4_desc: "Versioning, pull requests and CI/CD pipeline. Code is always under control and traceable.",
        skill5_desc: "DNS, SSL certificate and deployment to a custom domain. Your site is online within 24 hours.",
        skill6_desc: "Wireframes, prototypes and handoff. Design system agreed before the first line of code is written.",
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
        trust_badge: "100% Custom Coded. No Templates.",
        cookie_text: "We use cookies only for essential site functions. No tracking.",
        cookie_btn: "Got it",
        form_name: "Name",
        form_email: "Email",
        form_msg: "Message",
        form_send: "Send message",
        form_success: "Message sent successfully! We\'ll get back to you soon.",
        form_error: "Sorry, there was an error sending your message. Please try again."
    }
};

let currentLang = localStorage.getItem('ns-studio-clean-lang') || 'cs';

document.addEventListener("DOMContentLoaded", () => {
    updateLanguage(currentLang);
    initLanguageSwitcher();
    initBlurReveals();
    initSpotlightEffect();
    initNavbar();
    initMobileMenu();
    initTimeline();
    initCurvedLoop();
    initCursor();
    initFAQ();
    initCookieBanner();
    initContactForm();
    initScrollProgress();
    initMagneticButtons();
    initParticles();
});

/* ==========================================================================
   Language Switcher
   ========================================================================== */
function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('ns-studio-clean-lang', lang);

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Check if el has innerHTML we want to keep structure for, usually just text 
            el.innerHTML = translations[lang][key];
        }
    });

    // Handle Contact btn which contains an icon
    const contactBtn = document.querySelector('[data-i18n="contact_btn"]');
    if (contactBtn) {
        contactBtn.innerHTML = translations[lang]['contact_btn'] + ' <i data-lucide="arrow-right"></i>';
        if (window.lucide) lucide.createIcons();
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
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
    const revealElements = document.querySelectorAll('.blur-reveal');

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
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/* ==========================================================================
   Mobile Menu Toggle
   ========================================================================== */
function initMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (!btn || !navLinks) return;

    btn.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('mobile-open');
        btn.innerHTML = isOpen
            ? '<i data-lucide="x"></i>'
            : '<i data-lucide="menu"></i>';
        if (window.lucide) lucide.createIcons();
    });

    // Close menu when a nav link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('mobile-open');
            btn.innerHTML = '<i data-lucide="menu"></i>';
            if (window.lucide) lucide.createIcons();
        });
    });
}

/* ==========================================================================
   Full Custom "Antigravity" Effect Port (Vanilla JS Physics)
   ========================================================================== */
function initAntigravity() {
    const containers = document.querySelectorAll('.antigravity-container');

    containers.forEach((container) => {
        const elements = container.querySelectorAll('.antigravity-item');
        if (!elements.length) return;

        let mouseX = -1000;
        let mouseY = -1000;
        let isHovering = false;

        // Physics State representing each element
        const state = Array.from(elements).map(el => {
            // mass affects spring and float phase
            const mass = 1 + Math.random() * 1.5;
            return {
                el,
                x: 0, y: 0,
                vx: 0, vy: 0,
                mass,
                // store rect so we don't query DOM every frame
                rect: { cx: 0, cy: 0 },
                needsRectUpdate: true
            };
        });

        const updateRects = () => {
            state.forEach(item => {
                const r = item.el.getBoundingClientRect();
                item.rect.cx = r.left + r.width / 2;
                item.rect.cy = r.top + r.height / 2;
                item.needsRectUpdate = false;
            });
        };

        // Spring / Physics settings — absolute minimum
        const springStrength = 0.1;
        const friction = 0.92;
        const repulsionRadius = 60;
        const repulsionStrength = 1.5;

        const updatePhysics = (timestamp) => {
            const time = timestamp * 0.001 || 0; // seconds

            state.forEach((item) => {
                // Return to origin (spring)
                let fx = -item.x * springStrength;
                let fy = -item.y * springStrength;

                if (isHovering) {
                    // Repel from cursor
                    const dx = item.rect.cx - mouseX;
                    const dy = item.rect.cy - mouseY;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < repulsionRadius && distance > 0) {
                        const force = Math.pow((repulsionRadius - distance) / repulsionRadius, 2) * repulsionStrength;
                        fx += (dx / distance) * force / item.mass;
                        fy += (dy / distance) * force / item.mass;
                    }
                }

                // Apply forces
                item.vx = (item.vx + fx) * friction;
                item.vy = (item.vy + fy) * friction;

                item.x += item.vx;
                item.y += item.vy;

                // Float: barely noticeable breathing
                const floatY = Math.sin(time * 0.8 + item.mass * 6) * 1;
                const floatX = Math.cos(time * 0.6 + item.mass * 6) * 0.6;

                const finalX = item.x + floatX;
                const finalY = item.y + floatY;

                // Rotational tilting mapped to actual position
                const tiltX = finalY * 0.15;
                const tiltY = -finalX * 0.15;

                // Apply transform
                item.el.style.transform = `translate3d(${finalX}px, ${finalY}px, 0) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
            });

            requestAnimationFrame(updatePhysics);
        };

        container.addEventListener('mousemove', (e) => {
            if (state[0].needsRectUpdate) updateRects();
            mouseX = e.clientX;
            mouseY = e.clientY;
            isHovering = true;
        });

        container.addEventListener('mouseleave', () => {
            isHovering = false;
            mouseX = -1000;
            mouseY = -1000;
        });

        container.addEventListener('mouseenter', () => {
            // Flag rects for update on next hover to account for scroll
            state.forEach(item => item.needsRectUpdate = true);
        });

        // Start animation loop
        requestAnimationFrame(updatePhysics);
    });
}
function initTimeline() {
    const processSection = document.getElementById('process');
    const timelineFill = document.getElementById('timeline-fill');
    const timelineSteps = document.querySelectorAll('.timeline-step');

    if (!processSection || !timelineFill || !timelineSteps.length) return;

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        const sectionTop = processSection.offsetTop;
        const sectionHeight = processSection.offsetHeight;

        const startPoint = sectionTop - windowHeight + (windowHeight * 0.4);
        const endPoint = sectionTop + sectionHeight - (windowHeight * 0.6);

        if (scrollPosition > startPoint && scrollPosition < endPoint) {
            let percentage = ((scrollPosition - startPoint) / (endPoint - startPoint)) * 100;
            percentage = Math.max(0, Math.min(percentage, 100)); // clamp
            timelineFill.style.height = `${percentage}%`;

            timelineSteps.forEach((step, index) => {
                const stepThreshold = (index / timelineSteps.length) * 100;
                if (percentage > stepThreshold + 5) {
                    step.classList.add('active');
                } else {
                    step.classList.remove('active');
                }
            });
        } else if (scrollPosition <= startPoint) {
            timelineFill.style.height = '0%';
            timelineSteps.forEach(step => step.classList.remove('active'));
        } else if (scrollPosition >= endPoint) {
            timelineFill.style.height = '100%';
            timelineSteps.forEach(step => step.classList.add('active'));
        }
    });
}

/* ==========================================================================
   Curved Loop — Full Width Infinite Marquee
   ========================================================================== */
function initCurvedLoop() {
    const track = document.getElementById('curved-loop-track');
    if (!track) return;

    const items = [
        'Weby od nuly',
        'Redesigny',
        'UI & UX Design',
        'Clean Code',
        'Česká Studia',
        'Quiet Luxury',
        'Fast Delivery',
        'Modern Stack',
    ];

    // Duplicate 4x for seamless infinite scroll
    const allItems = [...items, ...items, ...items, ...items];

    allItems.forEach(text => {
        const el = document.createElement('span');
        el.className = 'curved-loop-item';
        el.innerHTML = `${text}<span class="separator">&mdash;</span>`;
        track.appendChild(el);
    });
}

/* ==========================================================================
   Custom Cursor
   ========================================================================== */
function initCursor() {
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    let ringX = 0, ringY = 0;
    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        // Dot snaps instantly
        dot.style.left = mouseX + 'px';
        dot.style.top = mouseY + 'px';
    });

    // Ring lags behind slightly for a smooth trailing effect
    const animateRing = () => {
        ringX += (mouseX - ringX) * 0.12;
        ringY += (mouseY - ringY) * 0.12;
        ring.style.left = ringX + 'px';
        ring.style.top = ringY + 'px';
        requestAnimationFrame(animateRing);
    };
    animateRing();

    // Enlarge ring when hovering interactive elements
    const interactiveEls = document.querySelectorAll('a, button, input, textarea, .faq-question, .spotlight-card');
    interactiveEls.forEach(el => {
        el.addEventListener('mouseenter', () => {
            dot.style.width = '0px';
            dot.style.height = '0px';
            ring.style.width = '50px';
            ring.style.height = '50px';
            ring.style.borderColor = 'rgba(255,255,255,0.4)';
        });
        el.addEventListener('mouseleave', () => {
            dot.style.width = '5px';
            dot.style.height = '5px';
            ring.style.width = '32px';
            ring.style.height = '32px';
            ring.style.borderColor = 'rgba(255,255,255,0.25)';
        });
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
        const originalBtnText = submitBtn.innerText;

        // Visual feedback
        submitBtn.disabled = true;
        submitBtn.innerText = '...';

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
            submitBtn.innerText = originalBtnText;

            // Auto hide after 6s
            setTimeout(() => {
                msgEl.classList.remove('active');
                msgEl.className = 'form-message';
            }, 6000);
        }
    });
}

/* ==========================================================================
   Scroll Progress Bar
   ========================================================================== */
function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        bar.style.width = scrolled + "%";
    });
}

/* ==========================================================================
   Magnetic Buttons Effect
   ========================================================================== */
function initMagneticButtons() {
    // List of classes that should exhibit magnetic behavior
    const magneticEls = document.querySelectorAll('.btn, .logo, .nav-links a, .portfolio-item');

    magneticEls.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Move the element slightly towards the cursor (30% pull)
            el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            el.style.transition = 'transform 0.1s ease-out';
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = 'translate(0, 0)';
            el.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
        });
    });
}

/* ==========================================================================
   Cookie Banner logic
   ========================================================================== */
function initCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    const btn = document.getElementById('acceptCookies');
    if (!banner || !btn) return;

    if (!localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => {
            banner.classList.add('show');
        }, 1500);
    }

    btn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        banner.classList.remove('show');
    });
}

/* ==========================================================================
   Particle Background
   ========================================================================== */
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let mouseX = -9999, mouseY = -9999;
    let width, height;

    const resize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    const COUNT = 90;
    const CONNECT_DIST = 120;
    const REPEL_RADIUS = 140;
    const REPEL_STRENGTH = 0.7;
    const FRICTION = 0.96;
    const BASE_SPEED = 0.3;

    const particles = Array.from({ length: COUNT }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * BASE_SPEED,
        vy: (Math.random() - 0.5) * BASE_SPEED,
        size: Math.random() * 2 + 1.2,
        opacity: Math.random() * 0.7 + 0.15,
    }));

    const animate = () => {
        ctx.clearRect(0, 0, width, height);

        for (const p of particles) {
            // Cursor repulsion
            const dx = p.x - mouseX;
            const dy = p.y - mouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < REPEL_RADIUS && dist > 0) {
                const force = ((REPEL_RADIUS - dist) / REPEL_RADIUS) * REPEL_STRENGTH;
                p.vx += (dx / dist) * force;
                p.vy += (dy / dist) * force;
            }

            p.vx *= FRICTION;
            p.vy *= FRICTION;
            p.x += p.vx;
            p.y += p.vy;

            // Wrap edges
            if (p.x < 0) p.x = width;
            else if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            else if (p.y > height) p.y = 0;

            // Draw dot
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
            ctx.fill();
        }

        // Draw connecting lines between close particles
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < CONNECT_DIST) {
                    const alpha = (1 - dist / CONNECT_DIST) * 0.12;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    };

    animate();
}
