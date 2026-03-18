/**
 * Dissnet App Logic
 * Handles i18n (English/Spanish), Theme toggle (Light/Dark), and Scroll reveals.
 */

// 1. Translations Dictionary
const translations = {
    "es": {
        "nav_brand": "Dissnet",
        "nav_comercial": "Comercial",
        "nav_retail": "Retail",
        "nav_marcas": "Marcas Aliadas",
        "nav_contacto": "Contacto",
        
        "hero_title": "Innovación Visual para <br><span class='gradient-text'>Empresas Líderes</span>",
        "hero_subtitle": "Distribución confiable de tecnología. Equipamos su negocio para el futuro con soluciones de última generación y gadgets increíbles.",
        "btn_comercial": "Explorar Comercial",
        "btn_retail": "Explorar Retail",
        
        "comercial_title": "Sector Comercial",
        "comercial_subtitle": "Soluciones tecnológicas B2B diseñadas para optimizar operaciones y potenciar el crecimiento empresarial.",
        
        "sol_signage_title": "Digital Signage",
        "sol_signage_desc": "Asegure una comunicación de alto impacto en entornos interiores y exteriores con pantallas de brillo extremo.",
        "sol_interactive_title": "Pantallas Interactivas",
        "sol_interactive_desc": "Fomente el engagement del cliente con tecnología táctil 4K de alta precisión para directorios y colaboración.",
        "sol_kiosk_title": "Kioscos Interactivos",
        "sol_kiosk_desc": "Optimice procesos con soluciones de autoservicio robustas, ideales para retail, restaurante o atención al cliente.",
        "sol_led_title": "Soluciones LED",
        "sol_led_desc": "Experiencias inmersivas con videowalls modulares y Pixel Pitch fino. La mejor calidad visual para estadios y corporativos.",
        "sol_network_title": "Networking y Cómputo",
        "sol_network_desc": "Proveemos la infraestructura tecnológica que potencia sus operaciones, desde servidores y estaciones de trabajo hasta switches y routers.",
        "sol_poster_title": "Digital Poster & LED Banner",
        "sol_poster_desc": "Modernice sus espacios y dinamice sus promociones con formatos ultra-delgados y de fácil gestión.",
        
        "retail_title": "Sector Retail",
        "retail_subtitle": "Lo último en tecnología y conectividad para un estilo de vida digital sin límites.",
        
        "ret_consoles_title": "Consolas de Videojuegos",
        "ret_consoles_desc": "Las plataformas de última generación y accesorios gaming para liderar en ventas.",
        "ret_audio_title": "Speakers y Earbuds",
        "ret_audio_desc": "Dispositivos de audio con fidelidad superior, diseños modernos y de alta rotación.",
        "ret_gadgets_title": "Gadgets y Wearables",
        "ret_gadgets_desc": "Smartwatches de vanguardia integrando AI, ofreciendo un control de salud revolucionario.",
        
        "brands_title": "Marcas Aliadas",
        "brands_subtitle": "Las mejores asociaciones tecnológicas globales respaldando sus proyectos.",
        
        "contact_title": "Contacte a un Especialista",
        "contact_subtitle": "Nuestros asesores están listos para diseñar una solución a la medida de sus objetivos.",
        
        "contact_usa": "Estados Unidos",
        "contact_sv": "El Salvador",
        "btn_whatsapp": "WhatsApp",
        "btn_visit": "Visitar Web",
        
        "footer_rights": "© 2026 Dissnet LLC. Todos los derechos reservados."
    },
    "en": {
        "nav_brand": "Dissnet",
        "nav_comercial": "Commercial",
        "nav_retail": "Retail",
        "nav_marcas": "Partner Brands",
        "nav_contacto": "Contact",
        
        "hero_title": "Visual Innovation for <br><span class='gradient-text'>Leading Companies</span>",
        "hero_subtitle": "Reliable technology distribution. We equip your business for the future with next-generation solutions and incredible gadgets.",
        "btn_comercial": "Explore Commercial",
        "btn_retail": "Explore Retail",
        
        "comercial_title": "Commercial Sector",
        "comercial_subtitle": "B2B technology solutions designed to optimize operations and boost business growth.",
        
        "sol_signage_title": "Digital Signage",
        "sol_signage_desc": "Ensure high-impact communication in both indoor and outdoor environments with extreme brightness displays.",
        "sol_interactive_title": "Interactive Displays",
        "sol_interactive_desc": "Boost customer engagement with high-precision 4K touch technology for directories and collaboration.",
        "sol_kiosk_title": "Interactive Kiosks",
        "sol_kiosk_desc": "Optimize processes with robust self-service solutions, ideal for retail, restaurants, and customer care.",
        "sol_led_title": "LED Solutions",
        "sol_led_desc": "Immersive experiences with modular videowalls and fine Pixel Pitch. The best visual quality for stadiums and enterprises.",
        "sol_network_title": "Networking & Computing",
        "sol_network_desc": "We provide the technological infrastructure that powers your operations, from servers to switches and routers.",
        "sol_poster_title": "Digital Poster & LED Banner",
        "sol_poster_desc": "Modernize your spaces and energize your promotions with ultra-slim, easy-to-manage formats.",
        
        "retail_title": "Retail Sector",
        "retail_subtitle": "The latest in technology and connectivity for a limitless digital lifestyle.",
        
        "ret_consoles_title": "Video Game Consoles",
        "ret_consoles_desc": "Next-gen platforms and gaming accessories to drive your sales.",
        "ret_audio_title": "Speakers and Earbuds",
        "ret_audio_desc": "Audio devices with superior fidelity, modern designs, and high turnover.",
        "ret_gadgets_title": "Gadgets and Wearables",
        "ret_gadgets_desc": "Cutting-edge smartwatches integrating AI, offering a revolutionary health control.",
        
        "brands_title": "Partner Brands",
        "brands_subtitle": "The best global technological partnerships backing your projects.",
        
        "contact_title": "Contact a Specialist",
        "contact_subtitle": "Our advisors are ready to design a solution tailored to your goals.",
        
        "contact_usa": "United States",
        "contact_sv": "El Salvador",
        "btn_whatsapp": "WhatsApp",
        "btn_visit": "Visit Website",
        
        "footer_rights": "© 2026 Dissnet LLC. All rights reserved."
    }
};

// 2. State & Initialize
let currentLang = 'es';
let currentTheme = 'dark'; // Default theme

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLang();
    initScrollReveal();
    initMobileMenu();
    initCustomCursor(); // Inicializar el cursor futurista
});

// 7. Lógica del Cursor Personalizado (Antigravity Style)
function initCustomCursor() {
    const dot = document.getElementById('cursor-dot');
    const outline = document.getElementById('cursor-outline');
    
    // Variables para el suavizado (Efecto de inercia)
    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let outlineX = 0;
    let outlineY = 0;

    // Seguimiento del mouse
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // El punto central es instantáneo o casi instantáneo
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
    });

    // Bucle de animación para el suavizado del anillo exterior
    function animateCursor() {
        // Interpola la posición actual del anillo hacia la del mouse (0.15 = velocidad de seguimiento)
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;

        outline.style.left = `${outlineX}px`;
        outline.style.top = `${outlineY}px`;

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Detección de Hover en elementos interactivos
    const interactiveElements = document.querySelectorAll('a, button, .glass-card, .icon-btn, .mobile-menu-btn');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            document.body.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
            document.body.classList.remove('cursor-hover');
        });
    });

    // Ocultar cursor al salir de la ventana
    document.addEventListener('mouseleave', () => {
        dot.style.opacity = '0';
        outline.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
        dot.style.opacity = '1';
        outline.style.opacity = '0.5';
    });
}

// 3. Theme Toggle Logic
function initTheme() {
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const htmlEl = document.documentElement;
    
    // Check localStorage
    const savedTheme = localStorage.getItem('dissnet_theme');
    if (savedTheme) {
        currentTheme = savedTheme;
        htmlEl.setAttribute('data-theme', currentTheme);
    }
    
    updateThemeIcon();

    themeToggleBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlEl.setAttribute('data-theme', currentTheme);
        localStorage.setItem('dissnet_theme', currentTheme);
        updateThemeIcon();
    });

    function updateThemeIcon() {
        if (currentTheme === 'dark') {
            themeIcon.className = 'fa-solid fa-sun'; // Show sun when dark to switch to light
        } else {
            themeIcon.className = 'fa-solid fa-moon'; // Show moon when light to switch to dark
        }
    }
}

// 4. Language Translation Logic
function initLang() {
    const langToggleBtn = document.getElementById('langToggle');
    const currentLangLabel = document.getElementById('currentLang');
    
    // Check localStorage
    const savedLang = localStorage.getItem('dissnet_lang');
    if (savedLang) {
        currentLang = savedLang;
        currentLangLabel.innerText = currentLang.toUpperCase();
        applyTranslations(currentLang);
    }
    
    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        currentLangLabel.innerText = currentLang.toUpperCase();
        localStorage.setItem('dissnet_lang', currentLang);
        applyTranslations(currentLang);
    });
}

function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    const dict = translations[lang];
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            // Using innerHTML allowing us to have <br> and <span> in parsed text
            el.innerHTML = dict[key];
        }
    });
}

// 5. Scroll Reveal Intersection Observer
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
}

// 6. Mobile Menu Logic
function initMobileMenu() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
}
