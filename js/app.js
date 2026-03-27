/**
 * DissNet App Logic
 * Handles i18n (English/Spanish), Theme toggle (Light/Dark), and Scroll reveals.
 */

// 1. Translations Dictionary
const translations = {
    "es": {
        "nav_brand": "DissNet",
        "nav_comercial": "Corporativo",
        "nav_retail": "Retail",
        "nav_marcas": "Marcas Aliadas",
        "nav_contacto": "Contacto",
        
        "hero_title": "Innovación Visual para <br><span class='gradient-text'>Empresas Líderes</span>",
        "hero_subtitle": "Distribución confiable de tecnología. Equipamos su negocio para el futuro con soluciones de última generación y gadgets increíbles.",
        "btn_comercial": "Corporativo",
        "btn_retail": "Retail",
        
        "comercial_title": "Corporativo",
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
        
        "footer_rights": "© 2026 DissNet LLC. Todos los derechos reservados.",
        
        "prod_led_title": "LED Signage",
        "prod_status": "Con disponibilidad",
        "prod_led_hook": "Impacto visual a gran escala para Indoor y Outdoor.",
        "prod_led_desc": "Nuestras soluciones LED de alta definición son perfectas para mostrar precios de combustible, promociones y logos con total claridad, capturando la atención incluso en los días más soleados.",
        "prod_features_title": "Especificaciones Técnicas",
        "prod_feat_1": "Pixel Pitch: 2.5mm (P2.5) para una nitidez superior en logos y textos.",
        "prod_feat_2": "Brillo: ≥ 5000 Nits/m² con visibilidad diurna superior bajo sol directo.",
        "prod_feat_3": "Tasa de Refresco: ≥ 3840 Hz para video fluido y sin parpadeos.",
        "prod_feat_4": "Grado de Protección: IP65 totalmente resistente a la intemperie.",
        "prod_ideal_title": "Ideal para",
        "prod_ideal_1": "Centros Comerciales: Publicidad de alto impacto.",
        "prod_ideal_2": "Lobbies Corporativos: Branding y ambientación.",
        "prod_ideal_3": "Eventos y Ferias: Escenarios memorables.",
        "btn_consultar_wsp": "Consultar vía WhatsApp",
        "prod_ds_title": "Digital Signage",
        "prod_ds_hook": "Comunicación visual de alto impacto para negocios modernos.",
        "prod_ds_desc": "Transforme la forma en que interactúa con sus clientes mediante pantallas digitales dinámicas diseñadas para captar la atención en cualquier entorno.",
        "prod_ds_feat_1": "Gestión de contenido remota (Cloud Based).",
        "prod_ds_feat_2": "Pantallas de alto brillo para visibilidad 24/7.",
        "prod_ds_feat_3": "Formatos ultra-delgados y marcos mínimos.",
        "prod_id_title": "Pantallas Interactivas",
        "prod_id_hook": "Fomente el engagement con tecnología táctil de alta precisión.",
        "prod_id_desc": "Soluciones interactivas 4K ideales para directorios, salas de colaboración y entornos educativos que demandan la máxima respuesta táctil.",
        "prod_id_feat_1": "Tecnología táctil infrarroja de 20 puntos.",
        "prod_id_feat_2": "Resolución 4K Ultra HD con cristal anti-reflejo.",
        "prod_id_feat_3": "Integración nativa con sistemas de videoconferencia.",
        "prod_ki_title": "Kioskos Interactivos",
        "prod_ki_hook": "Optimice procesos con soluciones de autoservicio robustas.",
        "prod_ki_desc": "Nuestros kioscos interactivos, disponibles en tamaños de 21.5 a 32 pulgadas, están diseñados para mejorar la eficiencia con opciones de sistema operativo Android o Windows 10 LTS, ofreciendo una experiencia fluida y moderna.",
        "prod_ki_feat_1": "Diseño ergonómico y resistente para alto tráfico.",
        "prod_ki_feat_2": "Compatibilidad con periféricos (impresoras, scanners).",
        "prod_ki_feat_3": "Pantallas táctiles capacitivas de alta respuesta.",
        "prod_nc_title": "Networking y Cómputo",
        "prod_nc_hook": "Infraestructura tecnológica de alto rendimiento.",
        "prod_nc_desc": "Proveemos las bases para su transformación digital: desde servidores robustos y estaciones de trabajo hasta soluciones de networking de última generación.",
        "prod_nc_feat_1": "Servidores escalables para todo tipo de carga.",
        "prod_nc_feat_2": "Networking avanzado de HPE Aruba y Cisco.",
        "prod_nc_feat_3": "Soporte técnico especializado y garantía.",
        "prod_dp_title": "Digital Poster & LED Banner",
        "prod_dp_hook": "Modernice sus espacios con formatos ultra-delgados.",
        "prod_dp_desc": "Nuestros pósters digitales de alta gama (Serie FS) ofrecen una resolución P2.5 nativa y un diseño plegable único que facilita el transporte y almacenamiento, ideal para retail de lujo y eventos.",
        "prod_dp_feat_1": "Pixel Pitch: 2.5 mm para visuales nítidos a corta distancia.",
        "prod_dp_feat_2": "Dimensiones: 640 mm x 1920 mm de superficie visual impactante.",
        "prod_dp_feat_3": "Diseño Plegable: Reduce el volumen de guardado en un 50%."
    },
    "en": {
        "nav_brand": "DissNet",
        "nav_comercial": "Corporate",
        "nav_retail": "Retail",
        "nav_marcas": "Partner Brands",
        "nav_contacto": "Contact",
        
        "hero_title": "Visual Innovation for <br><span class='gradient-text'>Leading Companies</span>",
        "hero_subtitle": "Reliable technology distribution. We equip your business for the future with next-generation solutions and incredible gadgets.",
        "btn_comercial": "Corporate",
        "btn_retail": "Retail",
        
        "comercial_title": "Corporate Sector",
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
        
        "footer_rights": "© 2026 DissNet LLC. All rights reserved.",
        
        "prod_led_title": "LED Signage",
        "prod_status": "Available",
        "prod_led_hook": "High-impact visual for Indoor and Outdoor.",
        "prod_led_desc": "Our high-definition LED solutions are perfect for showing fuel prices, promotions, and logos with total clarity, capturing attention even on the sunniest days.",
        "prod_features_title": "Technical Specifications",
        "prod_feat_1": "Pixel Pitch: 2.5mm (P2.5) for superior sharpness in logos and text.",
        "prod_feat_2": "Brightness: ≥ 5000 Nits/m² with superior daylight visibility under direct sun.",
        "prod_feat_3": "Refresh Rate: ≥ 3840 Hz for smooth, flicker-free video.",
        "prod_feat_4": "Protection Grade: IP65 fully weather-resistant.",
        "prod_ideal_title": "Ideal for",
        "prod_ideal_1": "Shopping Malls: High-impact advertising.",
        "prod_ideal_2": "Corporate Lobbies: Branding and ambiance.",
        "prod_ideal_3": "Events & Fairs: Memorable stages.",
        "btn_consultar_wsp": "Consult via WhatsApp",
        "prod_ds_title": "Digital Signage",
        "prod_ds_hook": "High-impact visual communication for modern businesses.",
        "prod_ds_desc": "Transform how you interact with your customers using dynamic digital displays designed to capture attention in any environment.",
        "prod_ds_feat_1": "Remote content management (Cloud Based).",
        "prod_ds_feat_2": "High brightness displays for 24/7 visibility.",
        "prod_ds_feat_3": "Ultra-slim formats and minimal bezels.",
        "prod_id_title": "Interactive Displays",
        "prod_id_hook": "Boost engagement with high-precision touch technology.",
        "prod_id_desc": "4K interactive solutions ideal for directories, collaboration rooms, and educational environments that demand maximum touch response.",
        "prod_id_feat_1": "20-point infrared touch technology.",
        "prod_id_feat_2": "4K Ultra HD resolution with anti-glare glass.",
        "prod_id_feat_3": "Native integration with video conferencing systems.",
        "prod_ki_title": "Interactive Kiosks",
        "prod_ki_hook": "Optimize processes with robust self-service solutions.",
        "prod_ki_desc": "Our interactive kiosks, available in sizes from 21.5 to 32 inches, are designed to improve efficiency with Android or Windows 10 LTS operating system options, offering a smooth and modern user experience.",
        "prod_ki_feat_1": "Ergonomic and durable design for high-traffic areas.",
        "prod_ki_feat_2": "Compatibility with peripherals (printers, scanners).",
        "prod_ki_feat_3": "High-responsiveness capacitive touch screens.",
        "prod_nc_title": "Networking & Computing",
        "prod_nc_hook": "High-performance technological infrastructure.",
        "prod_nc_desc": "We provide the foundations for your digital transformation: from robust servers to next-generation networking solutions.",
        "prod_nc_feat_1": "Scalable servers for all workloads.",
        "prod_nc_feat_2": "Advanced networking from HPE Aruba and Cisco.",
        "prod_nc_feat_3": "Specialized technical support and warranty.",
        "prod_dp_title": "Digital Poster & LED Banner",
        "prod_dp_hook": "Modernize your spaces with ultra-slim formats.",
        "prod_dp_desc": "Our high-end digital posters (FS Series) feature native P2.5 resolution and a unique foldable design for easy transport and storage, ideal for luxury retail and events.",
        "prod_dp_feat_1": "Pixel Pitch: 2.5 mm for sharp visuals at close range.",
        "prod_dp_feat_2": "Dimensions: 640 mm x 1920 mm of impactful visual surface.",
        "prod_dp_feat_3": "Foldable Design: Reduces storage volume by 50%."
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

// 7. Lógica de Interactividad (Hover effects)
function initCustomCursor() {
    // Detección de Hover en elementos interactivos para efectos CSS
    const interactiveElements = document.querySelectorAll('a, button, .glass-card, .icon-btn, .mobile-menu-btn, .thumbnail');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            document.body.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
            document.body.classList.remove('cursor-hover');
        });
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
