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
        "prod_specs_title": "Especificaciones Técnicas",
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
        "prod_ki_spec_1": "Procesador Industrial i5/i7 para rendimiento 24/7.",
        "prod_ki_spec_2": "Pantalla 4K Ultra HD con 10 puntos de contacto.",
        "prod_ki_spec_3": "Gabinete de acero laminado en frío con pintura electrostática.",
        "prod_nc_title": "Networking y Cómputo",
        "prod_nc_hook": "Infraestructura tecnológica de alto rendimiento.",
        "prod_nc_desc": "Proveemos las bases para su transformación digital: desde servidores robustos y estaciones de trabajo hasta soluciones de networking de última generación.",
        "prod_nc_feat_1": "Servidores escalables para todo tipo de carga.",
        "prod_nc_feat_2": "Networking avanzado de HPE Aruba y Cisco.",
        "prod_nc_feat_3": "Soporte técnico especializado y garantía.",
        "prod_dp_title": "Digital Poster & LED Banner",
        "prod_dp_hook": "Modernice sus espacios con formatos ultra-delgados.",
        "prod_dp_desc": "Nuestros pósters digitales de alta gama (Serie FS) ofrecen una resolución P2.5 nativa y un diseño plegable único que facilita el transporte y almacenamiento, ideal para retail de lujo y eventos.",
        "prod_dp_feat_2": "Dimensiones: 640 mm x 1920 mm de superficie visual impactante.",
        "prod_dp_feat_3": "Diseño Plegable: Reduce el volumen de guardado en un 50%.",

        // --- Nuevos Textos (Showcase & DissNet Line) ---
        "showcase_led_tag": "Tecnología LED",
        "showcase_led_title": "Diss<span class='gradient-text'>LED</span>",
        "showcase_led_desc": "Pantallas de alta resolución y brillo superior para exteriores e interiores.",
        "showcase_led_btn": "Explorar DissLED",
        "showcase_touch_tag": "Soluciones Interactivas",
        "showcase_touch_title": "Diss<span class='gradient-text'>Touch</span>",
        "showcase_touch_desc": "Interactividad de precisión para educación, retail y entornos corporativos.",
        "showcase_touch_btn": "Explorar DissTouch",

        "line_hero_tag": "Innovación Visual Total",
        "line_hero_title": "Elevando el <br><span class='gradient-text'>Borde Digital</span>",
        "line_hero_subtitle": "Soluciones visuales de vanguardia para transformar espacios físicos en experiencias digitales inmersivas de alta fidelidad.",
        "line_hero_btn_led": "Ver DissLED",
        "line_hero_btn_touch": "Ver DissTouch",

        "line_led_title": "Soluciones <span class='gradient-text'>DissLED</span>",
        "line_led_subtitle": "Pantallas de alta resolución y brillo superior para exteriores e interiores, diseñadas para captar cada mirada.",
        "line_prod1_title": "Indoor & Outdoor DissLED",
        "line_prod1_desc": "Pixel Pitch: 2.5mm (P2.5). Alta Definición. Brillo: ≥ 5000 Nits/m² ideal para visibilidad diurna. Tasa de Refresco: ≥ 3840 Hz. Grado de Protección: IP65.",
        "line_prod2_title": "Rental DissLED",
        "line_prod2_desc": "Panel LED de alquiler (P1.9 a P4.8). Excelente disipación de calor, IP65 y gabinetes serie RR con esquinas protectoras. Conexión rápida por cables.",
        "line_prod3_title": "Transparent Flex DissLED",
        "line_prod3_desc": "Pantalla LED de cristal de alta claridad. Solución curva, transparente y modular ideal para arquitectura y vitrinas visualmente impactantes en retail y eventos.",
        
        "line_touch_title": "Soluciones <span class='gradient-text'>DissTouch</span>",
        "line_touch_subtitle": "Interactividad de precisión. Pantallas táctiles capacitivas e infrarrojas para educación, retail y entornos corporativos.",
        "line_prod4_title": "Kiosk DissTouch",
        "line_prod4_desc": "Dimensiones: 22\" a 65\" | FHD | 2500 nits. Ideal para puntos de venta autónomos (Retail), compra de boletos (Transporte) y turnos (Salud y Gobierno).",
        "line_prod5_title": "Totem DissTouch",
        "line_prod5_desc": "Resolución 4K UHD | Multi-touch alta precisión (10+ puntos). Diseño elegante y robusto desde 10\". Perfecto para probadores virtuales corporativos y retail.",
        "line_prod6_title": "DissTouch Drive-Thru",
        "line_prod6_desc": "Tamaño: 55\" | FHD | 4000/6000 nits. Full Array Local Dimming LED automático, vida operativa operativa de 50,000h y amplio ángulo de visión (178°).",

        "line_cta_title": "¿Listo para <span class='gradient-text'>transformar tu espacio?</span>",
        "line_cta_desc": "Nuestro equipo de expertos en tecnología visual está listo para asesorarte en el diseño, instalación y mantenimiento de tu proyecto.",
        "line_cta_btn1": "Agendar Consultoría Gratuita",

        // --- Generated Products ---
        "p_indoor_title": "Indoor & Outdoor DissLED",
        "p_indoor_hook": "Visibilidad Diurna Superior",
        "p_indoor_desc": "Perfecto para mostrar precios de combustible, promociones de la tienda y logos con total nitidez. Captura la atención de los conductores desde la calle, incluso en los días más soleados.",
        "p_indoor_feat_1": "Pixel Pitch: 2.5mm (P2.5) para Alta Definición.",
        "p_indoor_feat_2": "Brillo ultra alto: ≥ 5000 Nits/m².",
        "p_indoor_feat_3": "Tasa de Refresco: ≥ 3840 Hz para video fluido.",
        "p_indoor_feat_4": "Grado de Protección: IP65 contra intemperie.",
        "p_indoor_ideal_1": "Estaciones de Combustible: Información clara.",
        "p_indoor_ideal_2": "Fachadas Retail: Atraer clientes desde el exterior.",
        "p_indoor_ideal_3": "Vías Públicas: Anuncios dinámicos en movimiento.",
        
        "p_rental_title": "Rental DissLED",
        "p_rental_hook": "Versatilidad y Montaje Rápido",
        "p_rental_desc": "Panel LED de alquiler para interior y exterior. Diseñado con excelente disipación de calor, bajo aumento de temperatura e impermeabilidad.",
        "p_rental_feat_1": "Opciones de Pixel Pitch: P1.9, P2.6, P2.9, P3.9, P4.8.",
        "p_rental_feat_2": "Integración sencilla: Conexión mediante cables.",
        "p_rental_feat_3": "Gabinetes Serie RR con esquinas protectoras.",
        "p_rental_feat_4": "Grado de protección IP65.",
        "p_rental_ideal_1": "Eventos Corporativos: Escenarios temporales.",
        "p_rental_ideal_2": "Conciertos y Festivales: Montaje y desmontaje ágil.",
        "p_rental_ideal_3": "Exposiciones: Stand visualmente impactantes.",

        "p_transparent_title": "Transparent Flex DissLED",
        "p_transparent_hook": "Innovación Visual sin Bloquear la Luz",
        "p_transparent_desc": "Pantalla LED de cristal de alta claridad. Solución curva, transparente y ligera para exhibiciones de retail y arquitectura.",
        "p_transparent_feat_1": "Transparencia excepcional que no bloquea la visión.",
        "p_transparent_feat_2": "Diseño curvo y flexible.",
        "p_transparent_feat_3": "Estructura ligera y montaje estético.",
        "p_transparent_feat_4": "Alta claridad y brillo en contenido multimedia.",
        "p_transparent_ideal_1": "Vitrinas de Retail: Exhibición de fondo holográfico.",
        "p_transparent_ideal_2": "Arquitectura Corporativa: Fachadas de cristal.",
        "p_transparent_ideal_3": "Activaciones de Marca: Experiencias premium.",

        "p_kiosk_title": "Kiosk DissTouch",
        "p_kiosk_hook": "Interacción Autónoma al Alcance del Cliente",
        "p_kiosk_desc": "Kioscos interactivos con alto brillo y resolución. La solución perfecta para autoservicio, check-in y navegación interactiva.",
        "p_kiosk_feat_1": "Dimensiones versátiles: 22\" a 65\".",
        "p_kiosk_feat_2": "Resolución FHD (1920×1080) para detalles finos.",
        "p_kiosk_feat_3": "Alto brillo de 2500 nits.",
        "p_kiosk_feat_4": "Interfaz táctil altamente responsiva.",
        "p_kiosk_ideal_1": "Retail: Endless Aisle y catálogos virtuales.",
        "p_kiosk_ideal_2": "Transporte y Salud: Venta de boletos y gestión de turnos.",
        "p_kiosk_ideal_3": "Gobierno y Educación: Puntos de información.",

        "p_totem_title": "Totem DissTouch",
        "p_totem_hook": "Elegancia y Precisión Multi-Touch",
        "p_totem_desc": "Tótems interactivos con diseño sofisticado, ideales para entornos que demandan tanto estética como funcionalidad avanzada.",
        "p_totem_feat_1": "Resolución 4K UHD para imágenes vibrantes.",
        "p_totem_feat_2": "Multi-touch de alta precisión (10+ puntos).",
        "p_totem_feat_3": "Diseño elegante y minimalista desde los 10\".",
        "p_totem_feat_4": "Cristal protector y robustez corporativa.",
        "p_totem_ideal_1": "Retail de Moda: Probadores virtuales.",
        "p_totem_ideal_2": "Centros Comerciales: Directorios interactivos (Wayfinding).",
        "p_totem_ideal_3": "Lobbies: Branding e información interactiva.",

        "p_drivethru_title": "DissTouch Drive-Thru",
        "p_drivethru_hook": "Resistencia Extrema y Visibilidad 24/7",
        "p_drivethru_desc": "Pantallas interactivas especialmente diseñadas para operación en exteriores, soportando condiciones extremas con legibilidad impecable bajo el sol.",
        "p_drivethru_feat_1": "Tamaño imponente de 55\" en Resolución FHD.",
        "p_drivethru_feat_2": "Brillo ultra alto: hasta 6000 nits con FALD automático.",
        "p_drivethru_feat_3": "Sensor de luz ambiental y amplio ángulo de visión (178°).",
        "p_drivethru_feat_4": "Vida útil operativa > 50,000 horas (Operación 24/7).",
        "p_drivethru_ideal_1": "Restaurantes Drive-Thru: Menús dinámicos exteriores.",
        "p_drivethru_ideal_2": "Farmacias y Bancos: Auto-servicio vehicular.",
        "p_drivethru_ideal_3": "Peajes y Accesos: Pantallas informativas resistentes."
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
        "prod_specs_title": "Technical Specifications",
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
        "prod_ki_spec_1": "Industrial i5/i7 Processor for 24/7 performance.",
        "prod_ki_spec_2": "4K Ultra HD display with 10-point touch.",
        "prod_ki_spec_3": "Cold-rolled steel cabinet with electrostatic paint.",
        "prod_nc_title": "Networking & Computing",
        "prod_nc_hook": "High-performance technological infrastructure.",
        "prod_nc_desc": "We provide the foundations for your digital transformation: from robust servers to next-generation networking solutions.",
        "prod_nc_feat_1": "Scalable servers for all workloads.",
        "prod_nc_feat_2": "Advanced networking from HPE Aruba and Cisco.",
        "prod_nc_feat_3": "Specialized technical support and warranty.",
        "prod_dp_title": "Digital Poster & LED Banner",
        "prod_dp_hook": "Modernize your spaces with ultra-slim formats.",
        "prod_dp_desc": "Our high-end digital posters (FS Series) feature native P2.5 resolution and a unique foldable design for easy transport and storage, ideal for luxury retail and events.",
        "prod_dp_feat_2": "Dimensions: 640 mm x 1920 mm of impactful visual surface.",
        "prod_dp_feat_3": "Foldable Design: Reduces storage volume by 50%.",

        // --- New Texts (Showcase & DissNet Line) ---
        "showcase_led_tag": "LED Technology",
        "showcase_led_title": "Diss<span class='gradient-text'>LED</span>",
        "showcase_led_desc": "High resolution and superior brightness displays for outdoor and indoor use.",
        "showcase_led_btn": "Explore DissLED",
        "showcase_touch_tag": "Interactive Solutions",
        "showcase_touch_title": "Diss<span class='gradient-text'>Touch</span>",
        "showcase_touch_desc": "Precision interactivity for education, retail, and corporate environments.",
        "showcase_touch_btn": "Explore DissTouch",

        "line_hero_tag": "Total Visual Innovation",
        "line_hero_title": "Elevating the <br><span class='gradient-text'>Digital Edge</span>",
        "line_hero_subtitle": "Cutting-edge visual solutions to transform physical spaces into high-fidelity immersive digital experiences.",
        "line_hero_btn_led": "View DissLED",
        "line_hero_btn_touch": "View DissTouch",

        "line_led_title": "<span class='gradient-text'>DissLED</span> Solutions",
        "line_led_subtitle": "High-resolution and superior brightness displays for outdoor and indoor environments, designed to catch every eye.",
        "line_prod1_title": "Indoor & Outdoor DissLED",
        "line_prod1_desc": "Pixel Pitch: 2.5mm (P2.5). High Definition. Brightness: ≥ 5000 Nits/m² ideal for daylight visibility. Refresh Rate: ≥ 3840 Hz. Protection Grade: IP65.",
        "line_prod2_title": "Rental DissLED",
        "line_prod2_desc": "Rental LED panel (P1.9 to P4.8). Excellent heat dissipation, IP65 and RR series cabinets with protective corners. Fast cable connection.",
        "line_prod3_title": "Transparent Flex DissLED",
        "line_prod3_desc": "High clarity glass LED display. Curved, transparent and modular solution ideal for cutting-edge architecture and visually stunning retail displays.",
        
        "line_touch_title": "<span class='gradient-text'>DissTouch</span> Solutions",
        "line_touch_subtitle": "Precision interactivity. Capacitive and infrared touch screens for education, retail, and corporate environments.",
        "line_prod4_title": "Kiosk DissTouch",
        "line_prod4_desc": "Dimensions: 22\" to 65\" | FHD | 2500 nits. Ideal for self-service points (Retail), ticketing (Transport) and queues (Health & Govt).",
        "line_prod5_title": "Totem DissTouch",
        "line_prod5_desc": "4K UHD Resolution | High-precision Multi-touch (10+ points). Elegant and robust design from 10\". Perfect for corporate lobbies and retail virtual fitting rooms.",
        "line_prod6_title": "DissTouch Drive-Thru",
        "line_prod6_desc": "Size: 55\" | FHD | 4000/6000 nits. Automatic Full Array Local Dimming LED, 50,000h operational lifespan and wide viewing angle (178°).",

        "line_cta_title": "Ready to <span class='gradient-text'>transform your space?</span>",
        "line_cta_desc": "Our team of visual technology experts is ready to advise you on the design, installation, and maintenance of your project.",
        "line_cta_btn1": "Schedule a Free Consultation",
        
        // --- Generated Products ---
        "p_indoor_title": "Indoor & Outdoor DissLED",
        "p_indoor_hook": "Superior Daytime Visibility",
        "p_indoor_desc": "Perfect for displaying fuel prices, store promotions, and logos with total clarity. Captures the attention of drivers from the street, even on the sunniest days.",
        "p_indoor_feat_1": "Pixel Pitch: 2.5mm (P2.5) for High Definition.",
        "p_indoor_feat_2": "Ultra-high brightness: ≥ 5000 Nits/m².",
        "p_indoor_feat_3": "Refresh Rate: ≥ 3840 Hz for smooth video.",
        "p_indoor_feat_4": "Protection Grade: IP65 against weather.",
        "p_indoor_ideal_1": "Gas Stations: Clear information display.",
        "p_indoor_ideal_2": "Retail Facades: Attract customers from the outside.",
        "p_indoor_ideal_3": "Public Roads: Dynamic advertising on the move.",
        
        "p_rental_title": "Rental DissLED",
        "p_rental_hook": "Versatility and Quick Assembly",
        "p_rental_desc": "Rental LED panel for indoor and outdoor. Designed with excellent heat dissipation, low temperature rise, and waterproofing.",
        "p_rental_feat_1": "Pixel Pitch Options: P1.9, P2.6, P2.9, P3.9, P4.8.",
        "p_rental_feat_2": "Simple integration: Cable connection.",
        "p_rental_feat_3": "RR Series Cabinets with protective corners.",
        "p_rental_feat_4": "IP65 protection grade.",
        "p_rental_ideal_1": "Corporate Events: Temporary stages.",
        "p_rental_ideal_2": "Concerts and Festivals: Agile assembly and disassembly.",
        "p_rental_ideal_3": "Exhibitions: Visually impactful stands.",

        "p_transparent_title": "Transparent Flex DissLED",
        "p_transparent_hook": "Visual Innovation without Blocking Light",
        "p_transparent_desc": "High clarity glass LED display. Curved, transparent, and lightweight solution for retail and architecture exhibitions.",
        "p_transparent_feat_1": "Exceptional transparency that does not block vision.",
        "p_transparent_feat_2": "Curved and flexible design.",
        "p_transparent_feat_3": "Lightweight structure and aesthetic mounting.",
        "p_transparent_feat_4": "High clarity and brightness in multimedia content.",
        "p_transparent_ideal_1": "Retail Showcases: Holographic background display.",
        "p_transparent_ideal_2": "Corporate Architecture: Glass facades.",
        "p_transparent_ideal_3": "Brand Activations: Premium experiences.",

        "p_kiosk_title": "Kiosk DissTouch",
        "p_kiosk_hook": "Autonomous Interaction at the Customer's Fingertips",
        "p_kiosk_desc": "Interactive kiosks with high brightness and resolution. The perfect solution for self-service, check-in, and interactive navigation.",
        "p_kiosk_feat_1": "Versatile dimensions: 22\" to 65\".",
        "p_kiosk_feat_2": "FHD Resolution (1920×1080) for fine details.",
        "p_kiosk_feat_3": "High brightness of 2500 nits.",
        "p_kiosk_feat_4": "Highly responsive touch interface.",
        "p_kiosk_ideal_1": "Retail: Endless Aisle and virtual catalogs.",
        "p_kiosk_ideal_2": "Transport and Health: Ticketing and queue management.",
        "p_kiosk_ideal_3": "Government and Education: Information points.",

        "p_totem_title": "Totem DissTouch",
        "p_totem_hook": "Elegance and Multi-Touch Precision",
        "p_totem_desc": "Interactive totems with a sophisticated design, ideal for environments that demand both aesthetics and advanced functionality.",
        "p_totem_feat_1": "4K UHD Resolution for vibrant images.",
        "p_totem_feat_2": "High-precision multi-touch (10+ points).",
        "p_totem_feat_3": "Elegant and minimalist design from 10\".",
        "p_totem_feat_4": "Protective glass and corporate robustness.",
        "p_totem_ideal_1": "Fashion Retail: Virtual fitting rooms.",
        "p_totem_ideal_2": "Shopping Centers: Interactive directories (Wayfinding).",
        "p_totem_ideal_3": "Lobbies: Branding and interactive information.",

        "p_drivethru_title": "DissTouch Drive-Thru",
        "p_drivethru_hook": "Extreme Resistance and 24/7 Visibility",
        "p_drivethru_desc": "Interactive displays specially designed for outdoor operation, withstanding extreme conditions with impeccable legibility under the sun.",
        "p_drivethru_feat_1": "Impressive 55\" size in FHD Resolution.",
        "p_drivethru_feat_2": "Ultra-high brightness: up to 6000 nits with auto FALD.",
        "p_drivethru_feat_3": "Ambient light sensor and wide viewing angle (178°).",
        "p_drivethru_feat_4": "Operational lifespan > 50,000 hours (24/7 Operation).",
        "p_drivethru_ideal_1": "Drive-Thru Restaurants: Dynamic outdoor menus.",
        "p_drivethru_ideal_2": "Pharmacies and Banks: Vehicular self-service.",
        "p_drivethru_ideal_3": "Tolls and Accesses: Resistant informational displays."
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
