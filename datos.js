// ═════════════════════════════════════════════════════════════
//  COPIA DE SEGURIDAD DEL CONTENIDO
//  El contenido de verdad está en la hoja de Google
//  «Contenido de crisvillarreal.com». Lo que cambies allí sale en la web.
//  Este archivo solo se usa si la hoja no responde. Si quieres,
//  de vez en cuando puedes copiar aquí los cambios importantes.
// ═════════════════════════════════════════════════════════════


// ── AHORA MISMO ──────────────────────────────────────────────
// Sale en la portada. Mejor 1 a 3 frases cortas.
const AHORA = [
  { es: "Estudiando el ciclo superior de Desarrollo de Aplicaciones Web.",
    en: "Studying Web Application Development (vocational degree)." },
  { es: "Construyendo y probando proyectos propios.",
    en: "Building and testing my own projects." }
];


// ── SERVICIOS ────────────────────────────────────────────────
// fiverr (opcional): enlace al servicio en Fiverr. Solo se usa si
// en CONTACTO tienes Fiverr con activa: true.
// precio (opcional): { es: "Desde 50 €", en: "From €50" }
const SERVICIOS = [
  {
    mostrar: true,
    estado: "Disponible",
    nombre: { es: "Pasar tu diseño a web", en: "Turning your design into a website" },
    resumen: {
      es: "Tienes el diseño hecho en Figma, XD o Photoshop y necesitas que funcione en el navegador. Lo maqueto igual que el diseño y adaptado al móvil.",
      en: "You have the design in Figma, XD or Photoshop and need it working in the browser. I build it to match the design, mobile included."
    },
    incluye: [
      { es: "HTML, CSS y JavaScript escritos a mano", en: "Hand-written HTML, CSS and JavaScript" },
      { es: "Revisada en móvil, tablet y ordenador", en: "Checked on phone, tablet and desktop" },
      { es: "Los archivos ordenados y una guía para publicarla", en: "Tidy files and a guide to publish it" }
    ],
    fiverr: "https://es.fiverr.com/s/0D9P3Qv"
  },
  {
    mostrar: true,
    estado: "Disponible",
    nombre: { es: "Una web sencilla desde cero", en: "A simple website from scratch" },
    resumen: {
      es: "No tienes diseño y quieres una web de una o pocas páginas para tu negocio. Hablamos de lo que necesitas, la diseño y la construyo.",
      en: "You don't have a design and want a small website for your business. We talk about what you need, then I design and build it."
    },
    incluye: [
      { es: "Diseño hecho para tu negocio, sin plantillas", en: "A design made for your business, no templates" },
      { es: "Formulario de contacto que funciona", en: "A contact form that works" },
      { es: "Los archivos ordenados y una guía para publicarla", en: "Tidy files and a guide to publish it" }
    ],
    fiverr: "https://es.fiverr.com/s/9d2Bxdj"
  }
];


// ── PROYECTOS ────────────────────────────────────────────────
// tipo: "Proyecto propio" o "Concepto de web" (web de ejemplo, sin cliente real).
// imagen (opcional): captura en assets/proyectos/. Mejor en 16:10 (por ejemplo 960 × 600).
// Salen en el orden en que están aquí.
const PROYECTOS = [
  {
    mostrar: true,
    estado: "En curso",
    tipo: "Proyecto propio",
    nombre: "A Tiempo",
    fecha: "2026",
    resumen: {
      es: "Avisos para que la gente joven que alquila no se quede sin el Bono Alquiler Joven por no enterarse del plazo.",
      en: "Alerts so young renters in Spain don't miss the youth rent grant because they didn't hear about the deadline."
    },
    enlace: "https://a-tiempo-web.vercel.app/",
    imagen: "assets/proyectos/a-tiempo.jpg"
  },
  {
    mostrar: true,
    estado: "Publicado",
    tipo: "Proyecto propio",
    nombre: { es: "Calendario del alquiler joven", en: "Youth rent calendar" },
    fecha: "2026",
    resumen: {
      es: "En qué punto está la ayuda al alquiler para jóvenes en cada comunidad, con los plazos y los enlaces oficiales.",
      en: "Where the youth rent grant stands in each Spanish region, with deadlines and official links (in Spanish)."
    },
    enlace: "https://calendario-alquiler-joven.vercel.app/",
    imagen: "assets/proyectos/calendario.jpg"
  },
  {
    mostrar: true,
    estado: "Terminado",
    tipo: "Concepto de web",
    nombre: "Ámbar",
    fecha: "2026",
    resumen: {
      es: "Pastelería de autor: carta con precios, cómo trabaja el obrador y reservas por WhatsApp.",
      en: "An artisan pastry shop: priced menu, how the bakery works and bookings over WhatsApp."
    },
    enlace: "https://ambar-pasteleria.vercel.app/",
    imagen: "assets/proyectos/ambar.jpg"
  },
  {
    mostrar: true,
    estado: "Terminado",
    tipo: "Concepto de web",
    nombre: "VLC Homes",
    fecha: "2026",
    resumen: {
      es: "Inmobiliaria pequeña en Valencia, con buscador de pisos en venta y alquiler y formulario de contacto.",
      en: "A small estate agency in Valencia, with a search for homes to buy or rent and a contact form."
    },
    enlace: "https://vlc-homes.vercel.app/",
    imagen: "assets/proyectos/vlc-homes.jpg"
  },
  {
    mostrar: true,
    estado: "Terminado",
    tipo: "Concepto de web",
    nombre: "Aura Studio",
    fecha: "2026",
    resumen: {
      es: "Estudio de fotografía de arquitectura. Casi todo son fotos a pantalla completa.",
      en: "An architectural photography studio. It's mostly full-screen photos."
    },
    enlace: "https://aura-fotografia.vercel.app/",
    imagen: "assets/proyectos/aura-studio.jpg"
  }
];


// ── BITÁCORA ─────────────────────────────────────────────────
// Lo que vas haciendo, de lo más nuevo a lo más antiguo. enlace es opcional.
const BITACORA = [
  { mostrar: true, fecha: "2026-10-13",
    texto: { es: "Estreno esta web.", en: "Launched this website." } },
  { mostrar: true, fecha: "2026-10-13",
    texto: { es: "Publico A Tiempo con su lista de espera.", en: "Launched A Tiempo with its waiting list." },
    enlace: "https://a-tiempo-web.vercel.app/" },
  { mostrar: true, fecha: "2026-10-12",
    texto: { es: "Publico el Calendario del alquiler joven.", en: "Published the youth rent calendar." },
    enlace: "https://calendario-alquiler-joven.vercel.app/" },
  { mostrar: true, fecha: "2026-09",
    texto: { es: "Termino tres webs de ejemplo: Ámbar, VLC Homes y Aura Studio.", en: "Finished three sample websites: Ámbar, VLC Homes and Aura Studio." } }
];


// ── CONTACTO ─────────────────────────────────────────────────
// Fiverr: activa: false → la web avisa de que ahora no estás activa
//         y los servicios se piden por correo.
//         activa: true  → vuelven los botones de Fiverr.
const CONTACTO = {
  email: "crisvillarrealgarcia@gmail.com",
  github: "https://github.com/carm-freelance",
  fiverr: { enlace: "https://es.fiverr.com/s/61bAjrw", activa: false }
};
