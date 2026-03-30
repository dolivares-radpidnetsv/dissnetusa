const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, 'led-signage.html');
const templateContent = fs.readFileSync(templatePath, 'utf-8');

const products = [
    {
        filename: 'indoor-outdoor-dissled.html',
        id: 'indoor',
        title: 'Indoor & Outdoor DissLED',
        hook: 'Visibilidad Diurna Superior',
        description: 'Perfecto para mostrar precios de combustible, promociones de la tienda y logos con total nitidez. Captura la atención de los conductores desde la calle, incluso en los días más soleados.',
        features: [
            'Pixel Pitch: 2.5mm (P2.5) para Alta Definición.',
            'Brillo ultra alto: ≥ 5000 Nits/m².',
            'Tasa de Refresco: ≥ 3840 Hz para video fluido.',
            'Grado de Protección: IP65 contra intemperie.'
        ],
        idealFor: [
            'Estaciones de Combustible: Información clara.',
            'Fachadas Retail: Atraer clientes desde el exterior.',
            'Vías Públicas: Anuncios dinámicos en movimiento.'
        ],
        images: ['DissLED_Outdoor_5.png', 'DissLED_Outdoor_4.jpeg', 'DissLED_Outdoor_3.jpeg', 'DissLED_Outdoor.jpeg']
    },
    {
        filename: 'rental-dissled.html',
        id: 'rental',
        title: 'Rental DissLED',
        hook: 'Versatilidad y Montaje Rápido',
        description: 'Panel LED de alquiler para interior y exterior. Diseñado con excelente disipación de calor, bajo aumento de temperatura e impermeabilidad.',
        features: [
            'Opciones de Pixel Pitch: P1.9, P2.6, P2.9, P3.9, P4.8.',
            'Integración sencilla: Conexión mediante cables.',
            'Gabinetes Serie RR con esquinas protectoras.',
            'Grado de protección IP65.'
        ],
        idealFor: [
            'Eventos Corporativos: Escenarios temporales.',
            'Conciertos y Festivales: Montaje y desmontaje ágil.',
            'Exposiciones: Stand visualmente impactantes.'
        ],
        images: ['DissLED_rental3.png', 'DissLED_rental.png', 'DissLED_rental2.png']
    },
    {
        filename: 'transparent-flex-dissled.html',
        id: 'transparent',
        title: 'Transparent Flex DissLED',
        hook: 'Innovación Visual sin Bloquear la Luz',
        description: 'Pantalla LED de cristal de alta claridad. Solución curva, transparente y ligera para exhibiciones de retail y arquitectura.',
        features: [
            'Transparencia excepcional que no bloquea la visión.',
            'Diseño curvo y flexible.',
            'Estructura ligera y montaje estético.',
            'Alta claridad y brillo en contenido multimedia.'
        ],
        idealFor: [
            'Vitrinas de Retail: Exhibición de fondo holográfico.',
            'Arquitectura Corporativa: Fachadas de cristal.',
            'Activaciones de Marca: Experiencias premium.'
        ],
        images: ['DissLED_Transparent.jpg', 'DissLED_Transparent_2.jpg']
    },
    {
        filename: 'kiosk-disstouch.html',
        id: 'kiosk',
        title: 'Kiosk DissTouch',
        hook: 'Interacción Autónoma al Alcance del Cliente',
        description: 'Kioscos interactivos con alto brillo y resolución. La solución perfecta para autoservicio, check-in y navegación interactiva.',
        features: [
            'Dimensiones versátiles: 22" a 65".',
            'Resolución FHD (1920×1080) para detalles finos.',
            'Alto brillo de 2500 nits.',
            'Interfaz táctil altamente responsiva.'
        ],
        idealFor: [
            'Retail: Endless Aisle y catálogos virtuales.',
            'Transporte y Salud: Venta de boletos y gestión de turnos.',
            'Gobierno y Educación: Puntos de información.'
        ],
        images: ['DissTouch_kiosk.jpeg', 'DissTouch_kiosk_2.jpeg', 'kioskos_interactivos.png']
    },
    {
        filename: 'totem-disstouch.html',
        id: 'totem',
        title: 'Totem DissTouch',
        hook: 'Elegancia y Precisión Multi-Touch',
        description: 'Tótems interactivos con diseño sofisticado, ideales para entornos que demandan tanto estética como funcionalidad avanzada.',
        features: [
            'Resolución 4K UHD para imágenes vibrantes.',
            'Multi-touch de alta precisión (10+ puntos).',
            'Diseño elegante y minimalista desde los 10".',
            'Cristal protector y robustez corporativa.'
        ],
        idealFor: [
            'Retail de Moda: Probadores virtuales.',
            'Centros Comerciales: Directorios interactivos (Wayfinding).',
            'Lobbies: Branding e información interactiva.'
        ],
        images: ['DissTouch_Totem.png', 'DissTouch_Totem2.jpeg']
    },
    {
        filename: 'drivethru-disstouch.html',
        id: 'drivethru',
        title: 'DissTouch Drive-Thru',
        hook: 'Resistencia Extrema y Visibilidad 24/7',
        description: 'Pantallas interactivas especialmente diseñadas para operación en exteriores, soportando condiciones extremas con legibilidad impecable bajo el sol.',
        features: [
            'Tamaño imponente de 55" en Resolución FHD.',
            'Brillo ultra alto: hasta 6000 nits con FALD automático.',
            'Sensor de luz ambiental y amplio ángulo de visión (178°).',
            'Vida útil operativa > 50,000 horas (Operación 24/7).'
        ],
        idealFor: [
            'Restaurantes Drive-Thru: Menús dinámicos exteriores.',
            'Farmacias y Bancos: Auto-servicio vehicular.',
            'Peajes y Accesos: Pantallas informativas resistentes.'
        ],
        images: ['DriveThru.png', 'DissTouch_DriveTh.jpeg']
    }
];

function generateGalleryHTML(images) {
    let thumbsHTML = '';
    images.forEach((img, idx) => {
        const activeClass = idx === 0 ? ' active' : '';
        thumbsHTML += `
                    <div class="thumbnail${activeClass}" onclick="changeImage('assets/images/${img}', this)">
                        <img src="assets/images/${img}" alt="Thumbnail ${idx + 1}">
                    </div>`;
    });

    return `
            <div class="gallery-container reveal">
                <div class="main-image-container glass-card">
                    <img src="assets/images/${images[0]}" alt="Product Main Image" class="main-image" id="mainImg">
                </div>
                <div class="thumbnails">
${thumbsHTML}
                </div>
            </div>`;
}

function generateFeaturesHTML(prod) {
    return prod.features.map((f, i) => `
                        <li class="feature-item"><i class="fa-solid fa-check"></i> <span data-i18n="p_${prod.id}_feat_${i+1}">${f}</span></li>`).join('');
}

function generateIdealForHTML(prod) {
    return prod.idealFor.map((iFor, i) => `
                        <li class="feature-item"><i class="fa-solid fa-circle-dot"></i> <span data-i18n="p_${prod.id}_ideal_${i+1}">${iFor}</span></li>`).join('');
}

products.forEach(prod => {
    let newContent = templateContent;
    
    // Replace title tags
    newContent = newContent.replace(/<title>.*<\/title>/, `<title>${prod.title} - DissNet Solutions</title>`);
    
    // Replace gallery section (using regex to find the gallery-container block)
    const galleryRegex = /<div class="gallery-container reveal">[\s\S]*?<\/div>\s*<\/div>\s*<!-- Right: Info -->/;
    newContent = newContent.replace(galleryRegex, generateGalleryHTML(prod.images) + '\n\n            <!-- Right: Info -->');
    
    // Replace product info
    newContent = newContent.replace(/<h1 class="product-title[^>]*>[\s\S]*?<\/h1>/, `<h1 class="product-title gradient-text" data-i18n="p_${prod.id}_title">${prod.title}</h1>`);
    newContent = newContent.replace(/<p class="product-hook"[^>]*>[\s\S]*?<\/p>/, `<p class="product-hook" data-i18n="p_${prod.id}_hook">${prod.hook}</p>`);
    newContent = newContent.replace(/<p class="product-description"[^>]*>[\s\S]*?<\/p>/, `<p class="product-description" data-i18n="p_${prod.id}_desc">${prod.description}</p>`);
    
    // Replace Whatsapp button text with specific product name
    newContent = newContent.replace(/<a href="https:\/\/wa\.me\/[0-9]+\?text=[^"]+"/g, `<a href="https://wa.me/17864503099?text=Hola,%20estoy%20interesado%20en%20el%20producto:%20${encodeURIComponent(prod.title)}"`);
    
    // Replace feature lists
    const featureRegex1 = /<ul class="feature-list">[\s\S]*?<\/ul>/; // First is Características Clave
    newContent = newContent.replace(featureRegex1, `<ul class="feature-list">\n${generateFeaturesHTML(prod)}\n                    </ul>`);
    
    const featureRegex2 = /<ul class="feature-list">[\s\S]*?<\/ul>/g; // We need the second match
    let count = 0;
    newContent = newContent.replace(featureRegex2, match => {
        count++;
        if (count === 2) {
            return `<ul class="feature-list">\n${generateIdealForHTML(prod)}\n                    </ul>`;
        }
        return match;
    });

    fs.writeFileSync(path.join(__dirname, prod.filename), newContent, 'utf-8');
    console.log(`Created ${prod.filename}`);
});
