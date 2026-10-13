// ─────────────────────────────────────────────────────────────
// CONTENIDO DE LA WEB
// Para actualizar la web solo hace falta tocar este archivo.
// Mira README.md para ver cómo añadir un proyecto o una entrada.
//
// Cada texto va en los dos idiomas: { es: "...", en: "..." }.
// Si no pones la versión "en", en inglés sale el texto en español.
// Las fechas van como "AAAA-MM-DD" o "AAAA-MM" (la web las escribe sola en cada idioma).
// ─────────────────────────────────────────────────────────────

// Lo que estás haciendo ahora mismo (sale arriba). Mejor de 1 a 3 frases cortas.
const AHORA = [
  { es: "Estudiando el ciclo superior de Desarrollo de Aplicaciones Web.",
    en: "Studying Web Application Development (vocational degree)." },
  { es: "Construyendo y probando proyectos propios.",
    en: "Building and testing my own projects." },
  { es: "Aceptando encargos de webs a medida.",
    en: "Taking on custom website work." }
];

// Servicios que ofreces ahora mismo (página Servicios y resumen en la portada).
// Quita o añade bloques según lo que ofrezcas en cada momento.
// enlace (opcional): dónde contratarlo, por ejemplo tu servicio en Fiverr.
// precio (opcional): por ejemplo { es: "Desde 50 €", en: "From €50" }.
const SERVICIOS = [
  {
    nombre: { es: "De Figma a web", en: "Figma to web" },
    resumen: {
      es: "Tienes el diseño en Figma, XD o PSD y lo paso a una web que funciona, fiel al detalle y adaptada a móvil.",
      en: "You have the design in Figma, XD or PSD and I turn it into a working website, true to the detail and mobile-ready."
    },
    incluye: [
      { es: "HTML, CSS y JavaScript escritos a mano, sin plantillas", en: "Hand-written HTML, CSS and JavaScript, no templates" },
      { es: "Probada en móvil, tablet y ordenador", en: "Tested on phone, tablet and desktop" },
      { es: "Código ligero que carga rápido", en: "Lightweight code that loads fast" },
      { es: "Archivos ordenados y una guía para publicarla", en: "Tidy files and a guide to publish it" }
    ],
    enlace: "https://es.fiverr.com/s/0D9P3Qv"
  },
  {
    nombre: { es: "Landing pages y webs sencillas", en: "Landing pages and simple websites" },
    resumen: {
      es: "No tienes diseño y necesitas una web de una o pocas páginas para tu negocio. La diseño y la construyo desde cero.",
      en: "You don't have a design and need a one-page or small website for your business. I design and build it from scratch."
    },
    incluye: [
      { es: "Diseño a medida según lo que quieres conseguir", en: "Custom design based on what you want to achieve" },
      { es: "Secciones pensadas para que te contacten", en: "Sections planned so people get in touch" },
      { es: "Formularios de contacto que funcionan", en: "Contact forms that work" },
      { es: "Archivos ordenados y una guía para publicarla", en: "Tidy files and a guide to publish it" }
    ],
    enlace: "https://es.fiverr.com/s/9d2Bxdj"
  }
];

// Proyectos. El que lleva destacado: true sale grande arriba (pon solo uno).
// tipo: "Proyecto propio" o "Concepto de web" (webs de ejemplo, sin cliente real).
// estado: "En marcha", "Publicado" o "Terminado".
// (tipo y estado se traducen solos, no hace falta ponerlos en inglés).
const PROYECTOS = [
  {
    nombre: "A Tiempo",
    tipo: "Proyecto propio",
    estado: "En marcha",
    fecha: "2026",
    resumen: {
      es: "Avisos para que los jóvenes que alquilan no se queden sin el Bono Alquiler Joven por un plazo de tres semanas. Ahora mismo, en fase de lista de espera.",
      en: "Alerts so young renters in Spain don't miss the youth rent grant because of a three-week application window. Currently collecting a waiting list."
    },
    enlace: "https://a-tiempo-web.vercel.app/",
    destacado: true
  },
  {
    nombre: { es: "Calendario del alquiler joven", en: "Youth rent calendar" },
    tipo: "Proyecto propio",
    estado: "Publicado",
    fecha: "2026",
    resumen: {
      es: "El estado de la ayuda al alquiler para jóvenes en las 19 comunidades y ciudades autónomas, con plazos y enlaces oficiales.",
      en: "Where the youth rent grant stands in each of Spain's 19 regions, with deadlines and official links (in Spanish)."
    },
    enlace: "https://calendario-alquiler-joven.vercel.app/"
  },
  {
    nombre: "Ámbar",
    tipo: "Concepto de web",
    estado: "Terminado",
    fecha: "2026",
    resumen: {
      es: "Web para una pastelería de autor: carta con precios, proceso del obrador y reservas por WhatsApp.",
      en: "Website for an artisan pastry shop: priced menu, how the bakery works and bookings over WhatsApp."
    },
    enlace: "https://ambar-pasteleria.vercel.app/"
  },
  {
    nombre: "VLC Homes",
    tipo: "Concepto de web",
    estado: "Terminado",
    fecha: "2026",
    resumen: {
      es: "Inmobiliaria boutique en Valencia, con filtro de viviendas en venta y alquiler y formulario de contacto validado.",
      en: "Boutique real estate agency in Valencia, with a filter for homes to buy or rent and a validated contact form."
    },
    enlace: "https://vlc-homes.vercel.app/"
  },
  {
    nombre: "Aura Studio",
    tipo: "Concepto de web",
    estado: "Terminado",
    fecha: "2026",
    resumen: {
      es: "Estudio de fotografía de arquitectura: una web sobria donde mandan las imágenes a pantalla completa.",
      en: "Architectural photography studio: a quiet website where full-screen images do the talking."
    },
    enlace: "https://aura-fotografia.vercel.app/"
  }
];

// Bitácora: lo que vas haciendo, de lo más nuevo a lo más antiguo.
// enlace es opcional.
const BITACORA = [
  { fecha: "2026-10-13",
    texto: { es: "Estreno esta web.", en: "Launched this website." } },
  { fecha: "2026-10-13",
    texto: { es: "Publico A Tiempo con su lista de espera.", en: "Launched A Tiempo with its waiting list." },
    enlace: "https://a-tiempo-web.vercel.app/" },
  { fecha: "2026-10-12",
    texto: { es: "Publico el Calendario del alquiler joven y una encuesta sobre las ayudas.", en: "Published the youth rent calendar and a survey about the grants." },
    enlace: "https://calendario-alquiler-joven.vercel.app/" },
  { fecha: "2026-09",
    texto: { es: "Termino tres conceptos de web: Ámbar, VLC Homes y Aura Studio.", en: "Finished three web concepts: Ámbar, VLC Homes and Aura Studio." } }
];

// Contacto y enlaces.
const CONTACTO = {
  email: "crisvillarrealgarcia@gmail.com",
  github: "https://github.com/carm-freelance",
  fiverr: "https://es.fiverr.com/s/61bAjrw"
};
