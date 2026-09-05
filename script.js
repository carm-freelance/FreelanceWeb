/* Navegación móvil, idioma y año del footer */

(function () {
  var STORAGE_KEY = "crisv-lang";
  var CONSENT_KEY = "crisv-cookie-consent";
  var GA_ID = "G-G5F7N4THGC";
  var FIVERR_GIG1 = {
    es: "https://es.fiverr.com/s/0D9P3Qv",
    en: "https://www.fiverr.com/s/0D9P3Qv",
  };
  var FIVERR_GIG2 = {
    es: "https://es.fiverr.com/s/9d2Bxdj",
    en: "https://www.fiverr.com/s/9d2Bxdj",
  };
  var FIVERR_PROFILE = {
    es: "https://es.fiverr.com/s/61bAjrw",
    en: "https://www.fiverr.com/s/61bAjrw",
  };
  var FLAGS = {
    es: "assets/flag-es.jpg",
    en: "assets/flag-en.png",
  };

  /* Título/descripción por página, ya que cada página tiene sus propios
     metadatos y no deben sobrescribirse entre sí al cambiar de idioma. */
  var pageMeta = {
    home: {
      es: {
        title: "Cris.V | Desarrollo Web Front-End & Maquetación Figma a HTML",
        desc:
          "Desarrolladora Front-End especializada en maquetación de diseños Figma/PSD y creación de landing pages y webs a medida en HTML, CSS y JS. Contrata en Fiverr.",
        ogTitle: "Cris.V — Desarrollo Web & Maquetación Front-End",
      },
      en: {
        title: "Cris.V | Front-End Web Development & Figma to HTML Coding",
        desc:
          "Front-End developer specializing in Figma/PSD coding and custom static websites/landing pages built with HTML, CSS, and JS. Hire on Fiverr.",
        ogTitle: "Cris.V — Front-End Web Development & Coding",
      },
    },
    services: {
      es: {
        title: "Servicios de Desarrollo Web & Maquetación | Cris.V",
        desc:
          "Descubre todos mis servicios de Desarrollo Web Front-End, maquetación de diseños Figma/PSD y desarrollo de landing pages a medida. Elige tu gig en Fiverr.",
        ogTitle: "Servicios de Desarrollo Web & Maquetación — Cris.V",
      },
      en: {
        title: "Web Development & Coding Services | Cris.V",
        desc:
          "Explore my Front-End coding, Figma/PSD to HTML services, and custom landing page development. Choose your gig on Fiverr.",
        ogTitle: "Web Development & Coding Services — Cris.V",
      },
    },
    privacy: {
      es: {
        title: "Política de Privacidad y Cookies | Cris.V",
        desc:
          "Información sobre el uso de cookies de Google Analytics en esta web, qué datos se recogen, con qué finalidad y cómo gestionar tu consentimiento.",
        ogTitle: "Política de Privacidad y Cookies — Cris.V",
      },
      en: {
        title: "Privacy & Cookie Policy | Cris.V",
        desc:
          "Information about the use of Google Analytics cookies on this website, what data is collected, why, and how to manage your consent.",
        ogTitle: "Privacy & Cookie Policy — Cris.V",
      },
    },
  };

  var i18n = {
    es: {
      langToggle: "Seleccionar idioma",
      navOpen: "Abrir menú",
      navClose: "Cerrar menú",
      navLabel: "Principal",
      navHome: "Inicio",
      navServices: "Servicios",
      navProcess: "Proceso",
      navContact: "Contacto",
      navCta: "Contratar en Fiverr",

      /* Portada Hero */
      heroEyebrow: "Desarrollo Web Front-End · Soluciones a Medida",
      heroTitle:
        "Transformo tus diseños e ideas en sitios web profesionales, rápidos y responsive",
      heroLead:
        "Desarrolladora Front-End especializada en maquetar diseños de Figma, Adobe XD o PSD y crear landing pages a medida desde cero con código limpio, optimizado y sin plantillas pesadas.",
      heroCta: "Ver servicios",
      heroSecondary: "Ver cómo trabajo",
      heroPillsLabel: "Stack y entregables",
      pillSeo: "SEO técnico",
      pillZip: "Entrega en ZIP",

      /* Sección Servicios Portada */
      servicesEyebrow: "Mis Servicios",
      servicesTitle: "Soluciones de Desarrollo Web",
      servicesLead:
        "Elige el servicio que mejor se adapte a tu proyecto o consulta todos los detalles en la sección de servicios.",
      card1Badge: "Maquetación Front-End",
      card1Title: "Figma / PSD a HTML, CSS y JS",
      card1Desc:
        "¿Tienes un diseño en Figma, XD o PSD? Lo convierto en código limpio, semántico, pixel-perfect y 100% responsive listo para publicar.",
      card1Feat1: "Código semántico escrito a mano",
      card1Feat2: "Diseño responsive y pixel-perfect",
      card1Feat3: "Marcado optimizado para SEO y velocidad",
      card1Cta: "Encargar en Fiverr",
      card1Detail: "Ver detalles del servicio →",

      card2Badge: "Desarrollo a Medida",
      card2Title: "Landing Pages & Webs Estáticas",
      card2Desc:
        "Desarrollo tu página web completa o landing page desde cero sin plantillas pesadas, optimizada para captar clientes y comunicar tu marca.",
      card2Feat1: "Código nativo ultra rápido a medida",
      card2Feat2: "Estructura enfocada a la conversión",
      card2Feat3: "Formularios y componentes interactivos",
      card2Cta: "Encargar en Fiverr",
      card2Detail: "Ver detalles del servicio →",

      servicesViewAll: "Ver todos los servicios y cómo trabajo →",

      /* Página servicios.html */
      serviciosHeroTitle: "Servicios de Desarrollo Web & Maquetación",
      serviciosHeroLead:
        "Conoce a fondo mis servicios, qué incluye cada gig en Fiverr y el proceso paso a paso ('Cómo trabajo') con el que desarrollo cada proyecto.",

      servDetail1Title: "1. Maquetación Front-End (Figma / PSD / XD a HTML/CSS/JS)",
      servDetail1Intro:
        "¿Tienes ya un diseño creado en Figma, Adobe XD, Sketch o Photoshop? Lo transformo en un sitio web funcional con código limpio, ágil y totalmente fiel a tu visual.",
      servDetail1IncTitle: "Lo que incluye este servicio:",
      servDetail1Inc1: "Código HTML5 semántico, CSS3 moderno (Flexbox/Grid) y JavaScript.",
      servDetail1Inc2: "Diseño 100% responsive probado en móviles, tablets y escritorio.",
      servDetail1Inc3: "Compatibilidad garantizada con los principales navegadores.",
      servDetail1Inc4: "Marcado limpio, ligero y optimizado para SEO técnico y carga rápida.",
      servDetail1Inc5: "Código organizado entregado en carpeta ZIP lista para hosting.",
      servDetail1FlowTitle: "Cómo trabajo en Maquetación Front-End:",
      servDetail1Step1T: "Envías tu diseño",
      servDetail1Step1D:
        "Compartes tu enlace de Figma, XD o PSD. Analizo breakpoints, fuentes y animaciones para confirmar el alcance.",
      servDetail1Step2T: "Maqueto el código",
      servDetail1Step2D:
        "Escribo el código a mano respetando cada espaciado, colores y tipografía. Probado en todos los dispositivos.",
      servDetail1Step3T: "Recibes el ZIP + Guía",
      servDetail1Step3D:
        "Entrega de la carpeta con el código ordenado y una guía gratuita paso a paso sobre cómo subir tu web a internet.",

      servDetail2Title: "2. Desarrollo de Landing Pages y Webs Estáticas a Medida",
      servDetail2Intro:
        "¿Necesitas una página web o landing page profesional para tu negocio sin partir de un Figma previo? Construyo tu web desde cero con código optimizado para captar clientes.",
      servDetail2IncTitle: "Lo que incluye este servicio:",
      servDetail2Inc1: "Landing page o web estática diseñada a medida según los objetivos de tu marca.",
      servDetail2Inc2: "Estructura pensada para la conversión (Hero, Servicios, Sobre mí, Contacto).",
      servDetail2Inc3: "Formularios de contacto funcionales, galerías y botones de acción (CTA).",
      servDetail2Inc4: "Código nativo sin dependencias ni plantillas pesadas: carga rápida garantizada.",
      servDetail2Inc5: "Entrega organizada en ZIP con instrucciones para publicar tu sitio.",
      servDetail2FlowTitle: "Cómo trabajo en Desarrollo Web a Medida:",
      servDetail2Step1T: "Definición y Requisitos",
      servDetail2Step1D:
        "Analizamos los objetivos de tu negocio, secciones necesarias, paleta de colores y contenido a mostrar.",
      servDetail2Step2T: "Desarrollo a Medida",
      servDetail2Step2D:
        "Construyo la web desde cero en HTML5/CSS3/JS nativo, asegurando un diseño atractivo y adaptable a móviles.",
      servDetail2Step3T: "Revisión y Entrega",
      servDetail2Step3D:
        "Revisamos juntos la web, hacemos los ajustes finales y te entrego el proyecto en ZIP listo para lanzar con guía de ayuda.",

      /* Proceso index */
      processEyebrow: "Cómo trabajo",
      processTitle: "Tres pasos. Sin fricción.",
      processLead:
        "Desde tu idea o archivo de diseño hasta la entrega en ZIP lista para subir a tu hosting.",
      step1Title: "1. Envió de propuesta / diseño",
      step1Text:
        "Me envías tu archivo de Figma/PSD o los requisitos de tu landing page. Reviso todo y confirmamos alcance.",
      step2Title: "2. Desarrollo del código",
      step2Text:
        "Escribo HTML semántico, CSS limpio y JavaScript donde aporta. 100% responsive y adaptado a todos los navegadores.",
      step3Text:
        "Recibes una carpeta organizada lista para publicar y una guía gratuita sobre cómo subir tu web a internet.",

      ctaTitle: "¿Listo para impulsar tu proyecto web?",
      ctaText:
        "Escríbeme a mi correo o consulta mis servicios en Fiverr si tienes cualquier duda sobre tu proyecto.",
      ctaBtnEmail: "crisvillarrealgarcia@gmail.com",
      footerCopy: "Cris.V — Desarrollo Web & Maquetación Front-End.",
      footerFiverr: "Ir a mi perfil en Fiverr",
      footerPrivacy: "Privacidad y Cookies",
      footerCookieSettings: "Configurar cookies",

      /* Banner de cookies */
      cookieBannerText:
        "Usamos cookies de análisis (Google Analytics) para entender cómo se usa esta web y mejorarla. Puedes aceptarlas o rechazarlas cuando quieras.",
      cookieBannerLink: "Más información",
      cookieAccept: "Aceptar",
      cookieReject: "Rechazar",

      /* Página privacidad.html */
      privHeroEyebrow: "Legal",
      privHeroTitle: "Política de Privacidad y Cookies",
      privHeroLead:
        "Aquí explico qué datos se recogen en esta web, para qué se usan y cómo puedes gestionar tus preferencias de cookies.",
      privUpdated: "Última actualización: 5 de septiembre de 2026",

      privSection1Title: "1. Responsable del sitio web",
      privSection1Text:
        "Este sitio web es propiedad y está gestionado por Cristina Villarreal, desarrolladora Front-End freelance. Para cualquier consulta relacionada con esta política o tus datos, puedes escribir a crisvillarrealgarcia@gmail.com.",

      privSection2Title: "2. Qué datos se recogen",
      privSection2Text:
        "Esta web utiliza Google Analytics (Google LLC) para obtener estadísticas de uso y navegación. A través de esta herramienta se pueden recoger, de forma anónima o pseudonimizada, los siguientes datos:",
      privSection2List1: "Páginas visitadas y tiempo de permanencia en el sitio",
      privSection2List2: "Tipo de dispositivo, navegador y sistema operativo",
      privSection2List3:
        "Ubicación aproximada (país / ciudad), a partir de la dirección IP anonimizada",
      privSection2List4:
        "Origen del tráfico (buscador, enlace directo, redes sociales, etc.)",
      privSection2Note:
        "Esta web no recoge datos personales identificativos (nombre, email, teléfono) salvo que tú mismo me los facilites de forma voluntaria, por ejemplo al escribirme un correo electrónico.",

      privSection3Title: "3. Finalidad del tratamiento",
      privSection3Text:
        "Los datos recogidos mediante Google Analytics se usan únicamente para entender cómo se utiliza la web (páginas más visitadas, dispositivos, procedencia del tráfico) y así poder mejorar el contenido, el rendimiento y la experiencia de navegación. No se realiza publicidad ni se venden datos a terceros.",

      privSection4Title: "4. Base legal",
      privSection4Text:
        'El tratamiento de datos mediante cookies de análisis se basa en tu consentimiento expreso, que puedes otorgar o retirar en cualquier momento a través del banner de cookies o del botón "Configurar cookies" del pie de página, conforme al RGPD (Reglamento UE 2016/679) y la LOPDGDD.',

      privSection5Title: "5. Cookies utilizadas",
      privSection5Text:
        "Si aceptas las cookies de análisis, Google Analytics puede instalar las siguientes cookies en tu navegador:",
      privTableCookie: "Cookie",
      privTableProvider: "Proveedor",
      privTablePurpose: "Finalidad",
      privTableDuration: "Duración",
      privCookieGaPurpose: "Distingue usuarios únicos",
      privCookieGaSessionPurpose: "Mantiene el estado de la sesión",
      privCookieGidPurpose: "Distingue usuarios",
      privDuration2y: "2 años",
      privDuration24h: "24 horas",

      privSection6Title: "6. Terceros",
      privSection6Text:
        "El único tercero que recibe datos a través de esta web es Google LLC, como proveedor de Google Analytics. Puedes consultar su política de privacidad y sus condiciones de tratamiento de datos en los siguientes enlaces:",
      privGoogleGoogleprivacylink: "Política de Privacidad de Google",
      privGoogleOptoutLink: "Inhabilitar Google Analytics (complemento oficial)",

      privSection7Title: "7. Cómo gestionar o retirar tu consentimiento",
      privSection7Text:
        "Puedes cambiar tu decisión sobre las cookies de análisis en cualquier momento pulsando el botón de abajo, o eliminando las cookies desde la configuración de tu navegador.",

      privSection8Title: "8. Tus derechos",
      privSection8Text:
        "De acuerdo con el RGPD y la normativa española de protección de datos, tienes derecho a acceder, rectificar, suprimir, limitar u oponerte al tratamiento de tus datos, así como a la portabilidad de los mismos. Puedes ejercer estos derechos escribiendo a crisvillarrealgarcia@gmail.com.",

      privSection9Title: "9. Cambios en esta política",
      privSection9Text:
        "Esta política puede actualizarse para adaptarse a cambios legales o en las herramientas utilizadas. Se recomienda revisar esta página periódicamente.",
    },
    en: {
      langToggle: "Select language",
      navOpen: "Open menu",
      navClose: "Close menu",
      navLabel: "Primary",
      navHome: "Home",
      navServices: "Services",
      navProcess: "Process",
      navContact: "Contact",
      navCta: "Hire on Fiverr",

      /* Portada Hero */
      heroEyebrow: "Front-End Web Development · Custom Solutions",
      heroTitle:
        "I turn your designs and ideas into clean, fast, responsive websites",
      heroLead:
        "Front-End developer specializing in coding Figma/PSD mockups and building custom landing pages from scratch with clean, optimized code—no heavy bloat.",
      heroCta: "View services",
      heroSecondary: "See how I work",
      heroPillsLabel: "Stack and deliverables",
      pillSeo: "Technical SEO",
      pillZip: "ZIP delivery",

      /* Sección Servicios Portada */
      servicesEyebrow: "My Services",
      servicesTitle: "Web Development Solutions",
      servicesLead:
        "Choose the service that best fits your project or view all details on the services page.",
      card1Badge: "Front-End Coding",
      card1Title: "Figma / PSD to HTML, CSS & JS",
      card1Desc:
        "Got a Figma, XD or PSD design? I convert it into clean, semantic, pixel-perfect, 100% responsive web code ready to launch.",
      card1Feat1: "Hand-written semantic code",
      card1Feat2: "Pixel-perfect responsive design",
      card1Feat3: "Optimized for speed and SEO",
      card1Cta: "Order on Fiverr",
      card1Detail: "View service details →",

      card2Badge: "Custom Development",
      card2Title: "Landing Pages & Static Sites",
      card2Desc:
        "I build custom landing pages and static websites from scratch without heavy templates, engineered to showcase your brand.",
      card2Feat1: "Ultra-fast custom native code",
      card2Feat2: "Conversion-focused structure",
      card2Feat3: "Interactive contact forms & CTAs",
      card2Cta: "Order on Fiverr",
      card2Detail: "View service details →",

      servicesViewAll: "View all services & process →",

      /* Página servicios.html */
      serviciosHeroTitle: "Web Development & Coding Services",
      serviciosHeroLead:
        "Explore my services in detail, see what's included in each Fiverr gig, and learn how I work step-by-step.",

      servDetail1Title: "1. Front-End Coding (Figma / PSD / XD to HTML/CSS/JS)",
      servDetail1Intro:
        "Already have a completed design in Figma, Adobe XD, Sketch, or Photoshop? I will convert it into a real, functional website with exact visual fidelity.",
      servDetail1IncTitle: "What's included in this service:",
      servDetail1Inc1: "Semantic HTML5, modern CSS3 (Flexbox/Grid), and JavaScript.",
      servDetail1Inc2: "100% responsive design tested across desktop, tablet, and mobile.",
      servDetail1Inc3: "Cross-browser compatibility (Chrome, Safari, Firefox, Edge).",
      servDetail1Inc4: "Clean, lightweight markup optimized for technical SEO and fast load.",
      servDetail1Inc5: "Organized source code delivered in a ZIP folder ready for hosting.",
      servDetail1FlowTitle: "How I work for Front-End Coding:",
      servDetail1Step1T: "You send your design",
      servDetail1Step1D:
        "Share your Figma, XD, or PSD link. I analyze breakpoints, fonts, and motion to confirm scope.",
      servDetail1Step2T: "I build the code",
      servDetail1Step2D:
        "I hand-code the site matching every spacing, color, and typography detail across all screens.",
      servDetail1Step3T: "You get the ZIP + Guide",
      servDetail1Step3D:
        "Receive the organized ZIP file plus a free step-by-step guide on how to upload your website.",

      servDetail2Title: "2. Custom Landing Pages & Static Web Development",
      servDetail2Intro:
        "Need a professional website or landing page for your business without a pre-made Figma file? I build your site from scratch with clean code optimized to convert.",
      servDetail2IncTitle: "What's included in this service:",
      servDetail2Inc1: "Custom static website or landing page tailored to your brand goals.",
      servDetail2Inc2: "Conversion-focused layout (Hero, Services, About, Contact).",
      servDetail2Inc3: "Functional contact forms, galleries, and clear CTA buttons.",
      servDetail2Inc4: "Native code without heavy bloat: guaranteed ultra-fast page load.",
      servDetail2Inc5: "Organized ZIP delivery with clear instructions for publishing.",
      servDetail2FlowTitle: "How I work for Custom Web Development:",
      servDetail2Step1T: "Definition & Requirements",
      servDetail2Step1D:
        "We discuss your business goals, required sections, color scheme, and core message.",
      servDetail2Step2T: "Custom Development",
      servDetail2Step2D:
        "I construct your website from scratch with native HTML5/CSS3/JS, responsive on all devices.",
      servDetail2Step3T: "Review & Launch",
      servDetail2Step3D:
        "We review the site together, perform final adjustments, and deliver the launch-ready ZIP.",

      /* Proceso index */
      processEyebrow: "How I work",
      processTitle: "Three steps. No friction.",
      processLead:
        "From your design file or requirements to a launch-ready ZIP folder.",
      step1Title: "1. Send design / project details",
      step1Text:
        "Send your Figma/PSD link or landing page specifications. I review everything and confirm scope.",
      step2Title: "2. Coding & Development",
      step2Text:
        "I build semantic HTML, modern CSS, and lightweight JS. 100% responsive and cross-browser.",
      step3Title: "3. ZIP Delivery & Free Guide",
      step3Text:
        "Receive an organized folder ready to publish, along with a free guide on how to host your website.",

      ctaTitle: "Ready to launch your web project?",
      ctaText:
        "Send me a direct email or explore my services on Fiverr if you have any questions.",
      ctaBtnEmail: "crisvillarrealgarcia@gmail.com",
      footerCopy: "Cris.V — Front-End Web Development & Coding.",
      footerFiverr: "Visit my Fiverr Profile",
      footerPrivacy: "Privacy & Cookies",
      footerCookieSettings: "Cookie settings",

      /* Cookie banner */
      cookieBannerText:
        "We use analytics cookies (Google Analytics) to understand how this site is used and improve it. You can accept or reject them at any time.",
      cookieBannerLink: "Learn more",
      cookieAccept: "Accept",
      cookieReject: "Reject",

      /* privacidad.html page */
      privHeroEyebrow: "Legal",
      privHeroTitle: "Privacy & Cookie Policy",
      privHeroLead:
        "Here's what data this website collects, why, and how you can manage your cookie preferences.",
      privUpdated: "Last updated: September 5, 2026",

      privSection1Title: "1. Site owner",
      privSection1Text:
        "This website is owned and operated by Cristina Villarreal, freelance Front-End developer. For any question about this policy or your data, contact crisvillarrealgarcia@gmail.com.",

      privSection2Title: "2. What data is collected",
      privSection2Text:
        "This website uses Google Analytics (Google LLC) to gather usage and navigation statistics. Through this tool, the following data may be collected on an anonymous or pseudonymous basis:",
      privSection2List1: "Pages visited and time spent on the site",
      privSection2List2: "Device type, browser, and operating system",
      privSection2List3:
        "Approximate location (country / city), derived from an anonymized IP address",
      privSection2List4:
        "Traffic source (search engine, direct link, social media, etc.)",
      privSection2Note:
        "This website does not collect personally identifying data (name, email, phone) unless you provide it voluntarily yourself, for example by sending me an email.",

      privSection3Title: "3. Purpose of processing",
      privSection3Text:
        "Data collected through Google Analytics is used solely to understand how the site is used (most visited pages, devices, traffic origin) in order to improve content, performance, and browsing experience. No advertising is run and no data is sold to third parties.",

      privSection4Title: "4. Legal basis",
      privSection4Text:
        'Processing of data through analytics cookies is based on your explicit consent, which you can grant or withdraw at any time via the cookie banner or the "Cookie settings" button in the footer, in accordance with the GDPR (Regulation (EU) 2016/679).',

      privSection5Title: "5. Cookies used",
      privSection5Text:
        "If you accept analytics cookies, Google Analytics may set the following cookies in your browser:",
      privTableCookie: "Cookie",
      privTableProvider: "Provider",
      privTablePurpose: "Purpose",
      privTableDuration: "Duration",
      privCookieGaPurpose: "Distinguishes unique users",
      privCookieGaSessionPurpose: "Maintains session state",
      privCookieGidPurpose: "Distinguishes users",
      privDuration2y: "2 years",
      privDuration24h: "24 hours",

      privSection6Title: "6. Third parties",
      privSection6Text:
        "The only third party receiving data through this website is Google LLC, as the provider of Google Analytics. You can review its privacy policy and data processing terms here:",
      privGoogleGoogleprivacylink: "Google Privacy Policy",
      privGoogleOptoutLink: "Disable Google Analytics (official opt-out add-on)",

      privSection7Title: "7. How to manage or withdraw your consent",
      privSection7Text:
        "You can change your decision about analytics cookies at any time by clicking the button below, or by deleting cookies from your browser settings.",

      privSection8Title: "8. Your rights",
      privSection8Text:
        "Under the GDPR and applicable data protection law, you have the right to access, rectify, erase, restrict, or object to the processing of your data, as well as data portability. You can exercise these rights by writing to crisvillarrealgarcia@gmail.com.",

      privSection9Title: "9. Changes to this policy",
      privSection9Text:
        "This policy may be updated to reflect legal changes or changes to the tools used. Please review this page periodically.",
    },
  };

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector("#site-nav");
  var headerInner = document.querySelector(".header-inner");
  var headerTools = document.querySelector(".header-tools");
  var yearEl = document.querySelector("#year");
  var langSwitch = document.querySelector(".lang-switch");
  var langBtn = document.querySelector(".lang-btn");
  var langMenu = document.querySelector("#lang-menu");
  var langFlag = document.querySelector("#lang-flag");
  var langCode = document.querySelector("#lang-code");
  var currentLang = "es";

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function setNavOpen(open) {
    if (!toggle || !nav) return;
    toggle.classList.toggle("is-open", open);
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute(
      "aria-label",
      i18n[currentLang][open ? "navClose" : "navOpen"]
    );
    document.body.classList.toggle("nav-open", open);
    document.body.style.overflow = open ? "hidden" : "";
    if (open) setLangOpen(false);
  }

  function placeNav() {
    if (!nav || !headerInner || !headerTools) return;
    var mobile = window.matchMedia("(max-width: 959.98px)").matches;
    if (mobile) {
      document.body.appendChild(nav);
    } else {
      headerInner.insertBefore(nav, headerTools);
      setNavOpen(false);
    }
  }

  function setLangOpen(open) {
    if (!langSwitch || !langBtn || !langMenu) return;
    langSwitch.classList.toggle("is-open", open);
    langBtn.setAttribute("aria-expanded", open ? "true" : "false");
    langMenu.hidden = !open;
  }

  function applyLang(lang) {
    currentLang = lang === "en" ? "en" : "es";
    var t = i18n[currentLang];
    document.documentElement.lang = currentLang;

    var page = document.body.getAttribute("data-page") || "home";
    var meta = (pageMeta[page] || pageMeta.home)[currentLang];
    document.title = meta.title;

    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", meta.desc);
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.ogTitle);
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", meta.desc);
    var ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute("content", currentLang === "en" ? "en_US" : "es_ES");
    }

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (t[key]) el.setAttribute("aria-label", t[key]);
    });

    document.querySelectorAll("[data-fiverr]").forEach(function (el) {
      var gigType = el.getAttribute("data-fiverr");
      if (gigType === "gig2") {
        el.setAttribute("href", FIVERR_GIG2[currentLang]);
      } else if (gigType === "profile") {
        el.setAttribute("href", FIVERR_PROFILE[currentLang]);
      } else {
        el.setAttribute("href", FIVERR_GIG1[currentLang]);
      }
    });

    if (langFlag) langFlag.src = FLAGS[currentLang];
    if (langCode) langCode.textContent = currentLang.toUpperCase();

    document.querySelectorAll(".lang-option").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === currentLang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
    });

    if (toggle && nav) {
      var navIsOpen = nav.classList.contains("is-open");
      toggle.setAttribute(
        "aria-label",
        t[navIsOpen ? "navClose" : "navOpen"]
      );
    }

    try {
      localStorage.setItem(STORAGE_KEY, currentLang);
    } catch (err) {
      /* ignore */
    }
  }

  var saved = "es";
  try {
    saved = localStorage.getItem(STORAGE_KEY) || "es";
  } catch (err) {
    saved = "es";
  }
  applyLang(saved);
  placeNav();
  window.addEventListener("resize", placeNav);

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setNavOpen(!nav.classList.contains("is-open"));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setNavOpen(false);
      });
    });
  }

  if (langBtn && langSwitch) {
    langBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      setLangOpen(langMenu.hidden);
    });

    langSwitch.querySelectorAll(".lang-option").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang"));
        setLangOpen(false);
      });
    });
  }

  document.addEventListener("click", function (event) {
    if (langSwitch && !langSwitch.contains(event.target)) {
      setLangOpen(false);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setNavOpen(false);
      setLangOpen(false);
    }
  });

  /* ---------- Consentimiento de cookies (Google Analytics) ---------- */
  var cookieBanner = document.querySelector("#cookie-banner");
  var cookieAcceptBtn = document.querySelector("#cookie-accept");
  var cookieRejectBtn = document.querySelector("#cookie-reject");
  var cookieSettingsBtns = document.querySelectorAll("[data-cookie-settings]");

  function getConsent() {
    try {
      return localStorage.getItem(CONSENT_KEY);
    } catch (err) {
      return null;
    }
  }

  function setConsent(value) {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch (err) {
      /* ignore */
    }
  }

  function loadAnalytics() {
    if (window.__gaLoaded) return;
    window.__gaLoaded = true;
    window["ga-disable-" + GA_ID] = false;
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_ID);

    var script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(script);
  }

  function disableAnalytics() {
    window["ga-disable-" + GA_ID] = true;
  }

  function showCookieBanner() {
    if (cookieBanner) cookieBanner.hidden = false;
  }

  function hideCookieBanner() {
    if (cookieBanner) cookieBanner.hidden = true;
  }

  var existingConsent = getConsent();
  if (existingConsent === "accepted") {
    loadAnalytics();
  } else if (existingConsent === "rejected") {
    disableAnalytics();
  } else {
    showCookieBanner();
  }

  if (cookieAcceptBtn) {
    cookieAcceptBtn.addEventListener("click", function () {
      setConsent("accepted");
      loadAnalytics();
      hideCookieBanner();
    });
  }

  if (cookieRejectBtn) {
    cookieRejectBtn.addEventListener("click", function () {
      setConsent("rejected");
      disableAnalytics();
      hideCookieBanner();
    });
  }

  cookieSettingsBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      showCookieBanner();
    });
  });
})();
