const translations = {
    cs: {
        nav_about: "O nás",
        nav_lab: "Laboratoř",
        nav_projects: "Projekty",
        nav_socials: "Sociální sítě",
        hero_title: 'Budujeme moderní <span class="text-orange">digitální projekty</span>',
        hero_desc: "Studentský technologický projekt zaměřený na učení programování a experimentování s technologiemi.",
        hero_btn_projects: "Projekty",
        hero_btn_about: "O nás",
        about_title: "O nás",
        about_p1: "NS STUDIO je studentský technologický projekt vedený dvěma motivovanými studenty. Naším cílem je učit se programovat, experimentovat s novými technologiemi a stavět zajímavé projekty.",
        about_p2: "Nejsme komerční firma, ale prostor pro kreativitu a technické objevování. Vše, co tvoříme, vychází z našeho zájmu o moderní web a software.",
        about_feat1_title: "Vzdělávání",
        about_feat1_desc: "Soustředíme se na hluboké porozumění principům vývoje.",
        about_feat2_title: "Experimenty",
        about_feat2_desc: "Zkoušíme nové nástroje a postupy přímo v praxi.",
        lab_title: "Lab / Experimenty",
        lab_desc: "Zde testujeme naše nejdivočejší nápady. Od minimalistických frameworků až po automatizační skripty.",
        lab_item1_title: "JS Engine",
        lab_item1_desc: "Pokusy o optimalizaci vykreslování v prohlížeči.",
        lab_item2_title: "Automation",
        lab_item2_desc: "Skripty pro zjednodušení každodenních vývojářských úkolů.",
        opensource_title: "Open Source",
        opensource_desc: "Věříme v sílu sdílení. Naše experimenty a projekty publikujeme jako open-source, aby se z nich mohli učit i ostatní.",
        devlog_title: "Dev Log",
        devlog_1: "Spuštění nového webu a definice učebních cílů.",
        devlog_2: "První úspěšné experimenty s Node.js backendem.",
        tech_title: "Tech Stack",
        goals_title: "Cíle učení",
        goal1: "Zlepšování programátorských dovedností",
        goal2: "Průzkum nových technológii",
        goal3: "Tvorba kreativních nástrojů",
        projects_title: "Projekty",
        project1_desc: "Nástroj pro správu úkolů a týmovou koordinaci.",
        project2_desc: "Designový systém pro moderní webové aplikace.",
        team_title: "Tým",
        team_role_1: "Student Developer",
        team_desc_1: "Student developer zaměřený na programování a technologie.",
        team_role_2: "Student Developer",
        team_desc_2: "Student developer zaměřený na programování a technologie.",
        socials_title: "Sociální sítě",
        socials_card_text: "SPOJ<br><br>SE<br><br>S<br><br>NÁMI",
        contact_title: "Kontakt",
        contact_desc: "Chcete se zapojit nebo se na něco zeptat?",
        contact_btn: "Odeslat",
        placeholder_name: "Jméno",
        placeholder_email: "Email",
        placeholder_message: "Zpráva",
        footer_disclaimer: "NS STUDIO je studentský technologický projekt vytvořený pro učení a experimentování."
    },
    en: {
        nav_about: "About",
        nav_lab: "Lab",
        nav_projects: "Projects",
        nav_socials: "Socials",
        hero_title: 'Building modern <span class="text-orange">digital projects</span>',
        hero_desc: "A student technology project focused on learning programming and experimenting with technology.",
        hero_btn_projects: "Projects",
        hero_btn_about: "About Us",
        about_title: "About Us",
        about_p1: "NS STUDIO is a student technology project led by two motivated students. Our goal is to learn programming, experiment with new technologies, and build interesting projects.",
        about_p2: "We are not a commercial company, but a space for creativity and technical discovery. Everything we create comes from our interest in the modern web and software.",
        about_feat1_title: "Education",
        about_feat1_desc: "We focus on a deep understanding of development principles.",
        about_feat2_title: "Experiments",
        about_feat2_desc: "We try new tools and processes directly in practice.",
        lab_title: "Lab / Experiments",
        lab_desc: "Here we test our wildest ideas. From minimalist frameworks to automation scripts.",
        lab_item1_title: "JS Engine",
        lab_item1_desc: "Attempts to optimize browser rendering.",
        lab_item2_title: "Automation",
        lab_item2_desc: "Scripts to simplify everyday developer tasks.",
        opensource_title: "Open Source",
        opensource_desc: "We believe in the power of sharing. We publish our experiments and projects as open-source so others can learn from them.",
        devlog_title: "Dev Log",
        devlog_1: "Launch of the new website and definition of learning goals.",
        devlog_2: "First successful experiments with Node.js backend.",
        tech_title: "Tech Stack",
        goals_title: "Learning Goals",
        goal1: "Improving programming skills",
        goal2: "Exploring new technologies",
        goal3: "Building creative tools",
        projects_title: "Projects",
        project1_desc: "A tool for task management and team coordination.",
        project2_desc: "A design system for modern web applications.",
        team_title: "Team",
        team_role_1: "Student Developer",
        team_desc_1: "Student developer interested in programming and modern technologies.",
        team_role_2: "Student Developer",
        team_desc_2: "Student developer interested in programming and modern technologies.",
        socials_title: "Socials",
        socials_card_text: "CONNECT<br><br>WITH<br><br>US",
        contact_title: "Contact",
        contact_desc: "Want to get involved or ask something?",
        contact_btn: "Send",
        placeholder_name: "Name",
        placeholder_email: "Email",
        placeholder_message: "Message",
        footer_disclaimer: "NS STUDIO is a student technology project created for learning and experimentation."
    }
};

// Language logic
let currentLang = localStorage.getItem('ns-studio-lang') || 'cs';

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('ns-studio-lang', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    document.documentElement.lang = lang;
}

// Event listeners
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        updateLanguage(btn.getAttribute('data-lang'));
    });
});

// Scroll Reveal
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);

// Navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Form
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert(currentLang === 'cs' ? 'Zpráva odeslána!' : 'Message sent!');
        contactForm.reset();
    });
}

// Init
document.addEventListener("DOMContentLoaded", () => {
    updateLanguage(currentLang);
    reveal();
});