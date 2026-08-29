/* Navegación móvil, idioma y año del footer */

(function () {
  var STORAGE_KEY = "crisv-lang";
  var FIVERR = {
    es: "https://es.fiverr.com/s/0D9P3Qv",
    en: "https://www.fiverr.com/s/0D9P3Qv",
  };
  var FLAGS = {
    es: "assets/flag-es.jpg",
    en: "assets/flag-en.png",
  };

  var i18n = {
    es: {
      metaTitle: "Cris.V | Convierto Figma y PSD en HTML/CSS/JS pixel-perfect",
      metaDesc:
        "Maquetadora Front-End especializada en convertir diseños de Figma, PSD y XD a HTML, CSS y JavaScript pixel-perfect, limpio y responsive. Encarga tu proyecto en Fiverr.",
      ogTitle: "Cris.V — Figma / PSD a HTML, CSS y JS",
      langToggle: "Seleccionar idioma",
      navOpen: "Abrir menú",
      navClose: "Cerrar menú",
      navLabel: "Principal",
      navHome: "Inicio",
      navServices: "Servicios",
      navProcess: "Proceso",
      navContact: "Contacto",
      navCta: "Contratar en Fiverr",
      heroEyebrow: "Maquetación Front-End · Pixel-perfect",
      heroTitle:
        "Convierto tus diseños de Figma en código HTML/CSS limpio, rápido y responsive",
      heroLead:
        "Soy maquetadora Front-End especializada en llevar mockups de Figma, Adobe XD, Sketch o PSD a código escrito a mano: semántico, pixel-perfect y listo para publicar.",
      heroCta: "Pedir proyecto en Fiverr",
      heroSecondary: "Ver cómo trabajo",
      heroPillsLabel: "Stack y entregables",
      pillSeo: "SEO técnico",
      pillZip: "Entrega en ZIP",
      servicesEyebrow: "Servicio en Fiverr",
      servicesTitle: "De diseño a código, sin sorpresas",
      servicesLead:
        "Un gig claro: entregas HTML5, CSS3 y JavaScript de alta calidad a partir de tu diseño. Un clic te lleva al pedido.",
      gigKicker: "Landing page · HTML / CSS / JavaScript",
      gigTitle: "Desarrollo web limpio, rápido y 100% responsive",
      gigIntro:
        "¿Buscas desarrollo web limpio, rápido y totalmente responsive? Convertiré tus diseños (Figma, Adobe XD, Sketch, PSD o imágenes) en código HTML5, CSS3 y JavaScript de alta calidad, pixel-perfect.",
      gigIncludes: "Lo que incluye este servicio",
      gigInc1:
        "Código HTML5, CSS3 y JavaScript limpio, bien estructurado y escrito a mano.",
      gigInc2: "Diseño 100% responsive (escritorio, tablet y móvil).",
      gigInc3:
        "Compatibilidad entre navegadores (Chrome, Safari, Firefox, Edge).",
      gigInc4: "Carga rápida, marcado limpio y optimizado para SEO.",
      gigInc5:
        "CSS moderno (Flexbox, Grid) y componentes interactivos en JavaScript.",
      gigInc6: "Código fuente organizado, entregado en una carpeta ZIP.",
      gigWhy: "Por qué trabajar conmigo",
      gigWhy1: "Sólido conocimiento técnico en desarrollo web Front-End.",
      gigWhy2:
        "Atención al detalle visual: alineación, espaciado y responsividad.",
      gigWhy3: "Comunicación clara y tiempos de respuesta rápidos.",
      gigNote:
        "¿Dudas sobre alcance o plazos? Escríbeme por mensaje directo en Fiverr antes de hacer el pedido.",
      asideType: "Tipo de sitio",
      asideTypeVal: "Landing page · Portfolio · Marketing",
      asideFeatures: "Funciones",
      tagForm: "Formulario",
      tagGallery: "Galería",
      asideLangs: "Lenguajes",
      gigCta: "Ver gig y contratar",
      gigHint: "Se abre tu pedido en Fiverr",
      processEyebrow: "Cómo trabajo",
      processTitle: "Tres pasos. Sin fricción.",
      processLead:
        "Del archivo de diseño al ZIP listo para subir a hosting o conectar con tu stack.",
      step1Title: "Envías tu diseño",
      step1Text:
        "Figma, PSD, Adobe XD, Sketch o capturas. Lo reviso y confirmo alcance, breakpoints y animaciones.",
      step2Title: "Maqueto el código",
      step2Text:
        "HTML semántico, CSS con Flexbox/Grid y JS solo donde aporta. Pixel-perfect y responsive de verdad.",
      step3Title: "Recibes el ZIP",
      step3Text:
        "Carpeta organizada, lista para publicar. Comentarios claros y estructura que otro developer puede mantener. Además de una guía gratuita.",
      ctaTitle: "¿Listo para pasar de diseño a código?",
      ctaText:
        "Encarga el proyecto en Fiverr o escríbeme allí si quieres alinear alcance antes del pedido.",
      footerCopy: "Cris.V — Maquetación Front-End.",
      footerFiverr: "Ir a Fiverr",
    },
    en: {
      metaTitle: "Cris.V | I turn Figma and PSD into pixel-perfect HTML/CSS/JS",
      metaDesc:
        "Front-End developer converting Figma, PSD and XD designs into clean, fast, pixel-perfect HTML, CSS and JavaScript. Hire me on Fiverr.",
      ogTitle: "Cris.V — Figma / PSD to HTML, CSS & JS",
      langToggle: "Select language",
      navOpen: "Open menu",
      navClose: "Close menu",
      navLabel: "Primary",
      navHome: "Home",
      navServices: "Services",
      navProcess: "Process",
      navContact: "Contact",
      navCta: "Hire on Fiverr",
      heroEyebrow: "Front-End development · Pixel-perfect",
      heroTitle:
        "I turn your Figma designs into clean, fast, responsive HTML/CSS",
      heroLead:
        "I'm a Front-End developer who takes Figma, Adobe XD, Sketch or PSD mockups into hand-written code: semantic, pixel-perfect and ready to ship.",
      heroCta: "Start a project on Fiverr",
      heroSecondary: "See how I work",
      heroPillsLabel: "Stack and deliverables",
      pillSeo: "Technical SEO",
      pillZip: "ZIP delivery",
      servicesEyebrow: "Fiverr gig",
      servicesTitle: "From design to code, no surprises",
      servicesLead:
        "One clear gig: high-quality HTML5, CSS3 and JavaScript from your design. One click takes you to the order.",
      gigKicker: "Landing page · HTML / CSS / JavaScript",
      gigTitle: "Clean, fast and fully responsive web development",
      gigIntro:
        "Looking for clean, fast and fully responsive web development? I'll convert your designs (Figma, Adobe XD, Sketch, PSD or images) into high-quality, pixel-perfect HTML5, CSS3 and JavaScript.",
      gigIncludes: "What's included",
      gigInc1:
        "Clean, well-structured, hand-written HTML5, CSS3 and JavaScript.",
      gigInc2: "100% responsive layout (desktop, tablet and mobile).",
      gigInc3: "Cross-browser support (Chrome, Safari, Firefox, Edge).",
      gigInc4: "Fast load, clean markup and SEO-friendly structure.",
      gigInc5:
        "Modern CSS (Flexbox, Grid) and interactive JavaScript components.",
      gigInc6: "Organized source code delivered in a ZIP folder.",
      gigWhy: "Why work with me",
      gigWhy1: "Solid technical knowledge in Front-End web development.",
      gigWhy2: "Sharp eye for visual detail: alignment, spacing and responsiveness.",
      gigWhy3: "Clear communication and fast response times.",
      gigNote:
        "Questions about scope or timelines? Message me on Fiverr before placing the order.",
      asideType: "Website type",
      asideTypeVal: "Landing page · Portfolio · Marketing",
      asideFeatures: "Features",
      tagForm: "Form",
      tagGallery: "Gallery",
      asideLangs: "Languages",
      gigCta: "View gig and hire",
      gigHint: "Opens your order on Fiverr",
      processEyebrow: "How I work",
      processTitle: "Three steps. No friction.",
      processLead:
        "From your design file to a ZIP ready to upload to hosting or plug into your stack.",
      step1Title: "You send the design",
      step1Text:
        "Figma, PSD, Adobe XD, Sketch or screenshots. I review and confirm scope, breakpoints and motion.",
      step2Title: "I build the code",
      step2Text:
        "Semantic HTML, Flexbox/Grid CSS and JS only where it helps. Truly pixel-perfect and responsive.",
      step3Title: "You get the ZIP",
      step3Text:
        "An organized folder, ready to publish. Clear comments and a structure another developer can maintain. Plus a free guide.",
      ctaTitle: "Ready to go from design to code?",
      ctaText:
        "Order on Fiverr, or message me there first if you want to align on scope.",
      footerCopy: "Cris.V — Front-End development.",
      footerFiverr: "Go to Fiverr",
    },
  };

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector("#site-nav");
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
    document.body.style.overflow = open ? "hidden" : "";
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
    document.title = t.metaTitle;

    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t.metaDesc);
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", t.ogTitle);
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", t.metaDesc);
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
      el.setAttribute("href", FIVERR[currentLang]);
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
})();
