// Pinta la web a partir de datos.js y gestiona el idioma.
// No hace falta tocar este archivo para actualizar el contenido.
document.documentElement.classList.add("js");

(function () {
  const $ = (id) => document.getElementById(id);
  const el = (tag, attrs = {}, text) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
    if (text != null) n.textContent = text;
    return n;
  };
  const externo = (url) => /^https?:\/\//.test(url) && !url.includes("crisvillarreal.com");
  const page = document.body.dataset.page || "home";

  // ── Textos en inglés. El español está escrito directamente en el HTML. ──
  const EN = {
    skip: "Skip to content",
    markLabel: "Cristina Villarreal, home",
    navLabel: "Main",
    navProjects: "Projects",
    navServices: "Services",
    navLog: "Log",
    navContact: "Contact",
    langBtn: "Language: English",
    kicker: "Valencia · Web development",
    heroTitle: "I build custom websites and my own <em>side projects</em>.",
    nowTitle: "Right now",
    ctaServices: "See services",
    ctaProjects: "See projects",
    homeProjectsLead: "The latest one I'm working on. The rest, including sample websites, are on the projects page.",
    allProjects: "See all projects →",
    homeServicesLead: "If you have a design or an idea and need it working on the web, I'll build it.",
    allServices: "What each service includes and how I work →",
    kickerServices: "What I offer now",
    servicesLead: "Small, well-made websites, written by hand. Pick the service that fits what you have. If none does, email me and we'll see.",
    includes: "Includes",
    order: "Order on Fiverr",
    askMe: "Ask me about it",
    howTitle: "How we work",
    howLead: "The same for every job, from the first conversation to delivery.",
    how1t: "You tell me what you need",
    how1: "You send me the design or explain the idea, and we agree on what's included and the price before I start.",
    how2t: "I build it",
    how2: "I show you progress while I work so you can give feedback, not only at the end.",
    how3t: "I hand it over",
    how3: "You get tidy files and a guide to publish it.",
    svcContactTitle: "Something else in mind?",
    svcContactLead: "Tell me by email and I'll let you know if I can do it:",
    kickerProjects: "What I've published",
    projectsLead: "My own projects, tested with real people, and web concepts: complete designs with no real client, made to practise and to show how I work.",
    ownTitle: "My own projects",
    conceptsTitle: "Web concepts",
    conceptsLead: "Sample websites for made-up businesses. This is how I work when you hire me for one.",
    toServices: "Want one like these? See the services →",
    aboutTitle: "About me",
    about1: "I'm Cristina, from Valencia. I finished a vocational degree in IT Systems and Networks and I'm now studying Web Application Development.",
    about2: "I like the things I make to be useful for something specific. So besides websites for clients, I ship small projects of my own and test them with real people before going further. Everything I publish gets noted in the log on this page.",
    stackTitle: "What I work with",
    st1: "Web",
    st2: "Design",
    st3: "Shipping",
    st4: "Learning",
    st5: "Background",
    st5v: "Systems and networks",
    logLead: "What I've been doing, in order.",
    contactTitle: "Let's talk",
    contactLead: "For work, projects or anything else, email me at",
    copyBtn: "Copy email",
    copied: "Email copied.",
    copyFallback: "Select the address and copy it with Ctrl+C.",
    privacy: "Privacy",
    noCookies: "No cookies",
    seeProject: "See project →",
    back: "Back to home",
    nfTitle: "This page doesn't exist.",
    nfText: "The link may be mistyped or the page may have moved.",
    pTitle: "Privacy",
    pUpd: "Last updated: 13 October 2026",
    p1t: "Who is responsible",
    p1: "This website belongs to Cristina Villarreal García, based in Valencia, Spain. For any privacy question, write to",
    p2t: "What data is collected",
    p2: "This website has no forms and doesn't ask you for any data. If you email me, I use your address and what you tell me only to reply and, if we end up working together, for the job. I don't share it with anyone.",
    p3t: "Visit statistics",
    p3: "The site is hosted on Vercel (Vercel Inc., United States), which counts visits in an aggregated, anonymous way, without cookies and without identifying you. Vercel is certified under the EU-US Data Privacy Framework.",
    p4t: "Cookies",
    p4: "This website doesn't use cookies. If you switch language, your browser remembers that choice for your next visit; it never leaves your device and isn't used to track you. Fonts are hosted on the site itself.",
    p5t: "Your rights",
    p5: "If you've written to me, you can ask at any time to see, correct or delete the data from our conversation by emailing the address above. You can also file a complaint with the Spanish Data Protection Agency at"
  };
  const ES_EXTRA = {
    langBtn: "Idioma: español",
    copied: "Correo copiado.",
    copyFallback: "Selecciona y copia el correo con Ctrl+C.",
    seeProject: "Ver proyecto →",
    includes: "Incluye",
    order: "Encargar en Fiverr",
    askMe: "Pregúntame por él"
  };
  const META = {
    home: {
      es: ["Cristina Villarreal · Webs a medida", "Cristina Villarreal, desarrolladora web en Valencia. Hago webs a medida y proyectos propios."],
      en: ["Cristina Villarreal · Custom websites", "Cristina Villarreal, web developer in Valencia, Spain. Custom websites and my own side projects."]
    },
    servicios: {
      es: ["Servicios · Cristina Villarreal", "Servicios de desarrollo web de Cristina Villarreal: qué incluye cada uno y cómo trabajo."],
      en: ["Services · Cristina Villarreal", "Cristina Villarreal's web development services: what each one includes and how I work."]
    },
    proyectos: {
      es: ["Proyectos · Cristina Villarreal", "Proyectos propios y conceptos de web de Cristina Villarreal."],
      en: ["Projects · Cristina Villarreal", "Cristina Villarreal's own projects and web concepts."]
    },
    privacy: {
      es: ["Privacidad · Cristina Villarreal", "Qué datos recoge la web de Cristina Villarreal (casi ninguno) y cómo ejercer tus derechos."],
      en: ["Privacy · Cristina Villarreal", "What data Cristina Villarreal's website collects (almost none) and how to exercise your rights."]
    },
    "404": {
      es: ["Página no encontrada · Cristina Villarreal"],
      en: ["Page not found · Cristina Villarreal"]
    }
  };
  // Etiquetas de datos.js que se traducen solas.
  const ETIQUETAS = {
    "En marcha": "In progress", "Publicado": "Live", "Terminado": "Finished",
    "Proyecto propio": "Own project", "Concepto de web": "Web concept"
  };

  // Guarda el español original del HTML para poder volver a él.
  const ES = {};
  document.querySelectorAll("[data-i18n]").forEach((n) => (ES[n.dataset.i18n] ??= n.textContent.trim()));
  document.querySelectorAll("[data-i18n-html]").forEach((n) => (ES[n.dataset.i18nHtml] ??= n.innerHTML.trim()));
  document.querySelectorAll("[data-i18n-aria]").forEach((n) => (ES[n.dataset.i18nAria] ??= n.getAttribute("aria-label")));

  let lang = "es";
  const t = (key) => (lang === "en" ? EN[key] : ES_EXTRA[key] ?? ES[key]) ?? ES[key] ?? "";
  // Texto de datos.js: admite "texto" o { es, en }.
  const tx = (v) => (v && typeof v === "object" ? v[lang] || v.es || "" : v ?? "");
  const etq = (v) => (lang === "en" ? ETIQUETAS[v] || v : v);
  const fecha = (f) => {
    const m = /^(\d{4})(?:-(\d{2}))?(?:-(\d{2}))?$/.exec(f || "");
    if (!m) return f || "";
    if (!m[2]) return m[1];
    const d = new Date(+m[1], +m[2] - 1, +(m[3] || 1));
    const loc = lang === "en" ? "en-GB" : "es-ES";
    const mes = d.toLocaleDateString(loc, { month: "short" }).replace(".", "");
    return (m[3] ? +m[3] + " " : "") + mes + " " + m[1];
  };
  const fiverrUrl = (u) => (u && lang === "en" ? u.replace("://es.fiverr.com", "://www.fiverr.com") : u);

  // ── Contenido (sale de datos.js) ──
  const datos = {
    AHORA: typeof AHORA !== "undefined" ? AHORA : [],
    PROYECTOS: typeof PROYECTOS !== "undefined" ? PROYECTOS : [],
    SERVICIOS: typeof SERVICIOS !== "undefined" ? SERVICIOS : [],
    BITACORA: typeof BITACORA !== "undefined" ? BITACORA : [],
    CONTACTO: typeof CONTACTO !== "undefined" ? CONTACTO : {}
  };
  const enlazar = (a, url) => { if (externo(url)) { a.target = "_blank"; a.rel = "noopener"; } };

  function destacado(caja) {
    const p = datos.PROYECTOS.find((x) => x.destacado);
    caja.replaceChildren();
    if (!p) return;
    const a = el("a", { class: "feature reveal", href: p.enlace });
    enlazar(a, p.enlace);
    const txt = el("div", { class: "feature-text" });
    const meta = el("div", { class: "meta" });
    meta.append(el("span", { class: "chip" + (p.estado === "En marcha" ? " live" : "") }, etq(p.estado)));
    meta.append(el("span", { class: "chip" }, etq(p.tipo)));
    meta.append(el("span", {}, fecha(p.fecha)));
    txt.append(meta, el("h3", { class: "feature-name" }, tx(p.nombre)), el("p", {}, tx(p.resumen)), el("span", { class: "go" }, t("seeProject")));
    // Dibujo: plazos reales del bono en 2026 (mismo dato que A Tiempo).
    const art = el("div", { class: "feature-art", "aria-hidden": "true" });
    [["Andalucía", 3.3, 44.1, true], ["Cataluña", 49.0, 3.3], ["Extremadura", 53.4, 12.3, true], ["C. Valenciana", 64.4, 5.2], ["Canarias", 71.2, 5.8]]
      .forEach(([n, l, w, late], i) => {
        const row = el("div", { class: "art-row" });
        const track = el("div", { class: "art-track" });
        track.append(el("span", { class: "art-bar" + (late ? " late" : ""), style: `left:${l}%;width:${w}%;--i:${i}` }));
        row.append(el("span", {}, n), track); art.append(row);
      });
    a.append(txt, art);
    caja.append(a);
  }

  function filas(ol, proyectos, conTipo) {
    ol.replaceChildren();
    proyectos.forEach((p) => {
      const li = el("li", { class: "reveal" });
      const a = el("a", { class: "row", href: p.enlace });
      enlazar(a, p.enlace);
      const nm = el("span", { class: "nm" });
      nm.append(document.createTextNode(tx(p.nombre)));
      const meta = el("span", { class: "meta" });
      meta.append(el("span", { class: "chip" + (p.estado === "En marcha" ? " live" : "") }, conTipo ? etq(p.tipo) : etq(p.estado)));
      nm.append(meta);
      a.append(el("span", { class: "yr" }, fecha(p.fecha)), nm, el("p", { class: "ds" }, tx(p.resumen)), el("span", { class: "ar", "aria-hidden": "true" }, "↗"));
      li.append(a); ol.append(li);
    });
    // Si una lista se queda vacía, se oculta su sección entera.
    const sec = ol.closest("section");
    if (sec) sec.hidden = proyectos.length === 0;
  }

  function contacto() {
    const c = datos.CONTACTO;
    if ($("mail") && c.email) $("mail").textContent = c.email;
    [["fv", fiverrUrl(c.fiverr)], ["gh", c.github]].forEach(([id, url]) => {
      const a = $(id); if (!a) return;
      if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener"; } else a.hidden = true;
    });
  }

  let primeraVez = true;
  function pintar() {
    if (page === "home") {
      const ahora = $("ahora");
      ahora.replaceChildren();
      datos.AHORA.forEach((x) => ahora.append(el("li", {}, tx(x))));
      destacado($("destacado"));

      const dl = $("servicios-resumen");
      dl.replaceChildren();
      datos.SERVICIOS.forEach((sv) => {
        const d = el("div", { class: "reveal" });
        d.append(el("dt", {}, tx(sv.nombre)), el("dd", {}, tx(sv.resumen)));
        dl.append(d);
      });

      const log = $("lista-bitacora");
      log.replaceChildren();
      datos.BITACORA.forEach((b) => {
        const li = el("li", { class: "reveal" });
        const p = el("span");
        if (b.enlace) { const a = el("a", { href: b.enlace }, tx(b.texto)); enlazar(a, b.enlace); p.append(a); }
        else p.textContent = tx(b.texto);
        const time = el("time", {}, fecha(b.fecha));
        if (/^\d{4}(-\d{2}){0,2}$/.test(b.fecha || "")) time.setAttribute("datetime", b.fecha);
        li.append(time, p);
        log.append(li);
      });
      contacto();
    }

    if (page === "proyectos") {
      destacado($("destacado"));
      const resto = datos.PROYECTOS.filter((p) => !p.destacado);
      filas($("lista-propios"), resto.filter((p) => p.tipo !== "Concepto de web"), false);
      filas($("lista-conceptos"), resto.filter((p) => p.tipo === "Concepto de web"), false);
    }

    if (page === "servicios") {
      const caja = $("servicios-lista");
      caja.replaceChildren();
      datos.SERVICIOS.forEach((sv) => {
        const art = el("article", { class: "svc reveal" });
        const cab = el("div", { class: "svc-head" });
        cab.append(el("h2", {}, tx(sv.nombre)));
        if (sv.precio) cab.append(el("p", { class: "svc-price" }, tx(sv.precio)));
        const cuerpo = el("div", { class: "svc-body" });
        cuerpo.append(el("p", { class: "svc-sum" }, tx(sv.resumen)));
        if (sv.incluye && sv.incluye.length) {
          cuerpo.append(el("p", { class: "svc-inc" }, t("includes")));
          const ul = el("ul");
          sv.incluye.forEach((x) => ul.append(el("li", {}, tx(x))));
          cuerpo.append(ul);
        }
        const a = sv.enlace
          ? el("a", { class: "btn", href: fiverrUrl(sv.enlace), target: "_blank", rel: "noopener" }, /fiverr\.com/.test(sv.enlace) ? t("order") : t("askMe"))
          : el("a", { class: "btn ghost", href: "#con-t" }, t("askMe"));
        cuerpo.append(a);
        art.append(cab, cuerpo);
        caja.append(art);
      });
      contacto();
    }

    if (primeraVez) { primeraVez = false; animarEntradas(); }
    else document.querySelectorAll(".reveal").forEach((i) => i.classList.add("in"));
  }

  // ── Idioma ──
  const FLAGS = { es: "/assets/flag-es.jpg", en: "/assets/flag-en.jpg" };
  function aplicarIdioma(nuevo, guardar) {
    lang = nuevo === "en" ? "en" : "es";
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((n) => (n.textContent = t(n.dataset.i18n)));
    document.querySelectorAll("[data-i18n-html]").forEach((n) => (n.innerHTML = t(n.dataset.i18nHtml)));
    document.querySelectorAll("[data-i18n-aria]").forEach((n) => n.setAttribute("aria-label", t(n.dataset.i18nAria)));
    const m = (META[page] || META.home)[lang];
    document.title = m[0];
    const d = document.querySelector('meta[name="description"]');
    if (d && m[1]) d.setAttribute("content", m[1]);
    if ($("lang-flag")) $("lang-flag").src = FLAGS[lang];
    if ($("lang-code")) $("lang-code").textContent = lang.toUpperCase();
    document.querySelectorAll(".lang-menu [data-lang]").forEach((b) => b.setAttribute("aria-current", b.dataset.lang === lang ? "true" : "false"));
    if (guardar) { try { localStorage.setItem("cv-idioma", lang); } catch {} }
    pintar();
  }

  let inicial = "es";
  try { inicial = localStorage.getItem("cv-idioma") || ""; } catch {}
  if (!inicial) inicial = /^es|^ca|^gl|^eu/i.test(navigator.language || "es") ? "es" : "en";
  aplicarIdioma(inicial, false);

  const sw = $("lang");
  if (sw) {
    const btn = sw.querySelector(".lang-btn");
    const abrir = (si) => { sw.classList.toggle("open", si); btn.setAttribute("aria-expanded", si ? "true" : "false"); };
    btn.addEventListener("click", (e) => { e.stopPropagation(); abrir(!sw.classList.contains("open")); });
    sw.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => {
      aplicarIdioma(b.dataset.lang, true); abrir(false); btn.focus();
    }));
    document.addEventListener("click", (e) => { if (!sw.contains(e.target)) abrir(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && sw.classList.contains("open")) { abrir(false); btn.focus(); } });
  }

  // ── Copiar correo ──
  const copiar = $("copiar"), msg = $("copiado");
  if (copiar) copiar.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText($("mail").textContent.trim());
      msg.textContent = t("copied");
    } catch {
      const r = document.createRange(); r.selectNodeContents($("mail"));
      const s = getSelection(); s.removeAllRanges(); s.addRange(r);
      msg.textContent = t("copyFallback");
    }
    clearTimeout(copiar._t); copiar._t = setTimeout(() => (msg.textContent = ""), 3000);
  });

  // ── Entradas suaves al aparecer en pantalla ──
  function animarEntradas() {
    const items = document.querySelectorAll(".reveal");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) { items.forEach((i) => i.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    items.forEach((i) => io.observe(i));
  }
})();
