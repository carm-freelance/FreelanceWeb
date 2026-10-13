// Pinta la web a partir de datos.js y gestiona el idioma.
// No hace falta tocar este archivo para cambiar el contenido.
(function () {
  const $ = (id) => document.getElementById(id);
  const el = (tag, attrs = {}, text) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
    if (text != null) n.textContent = text;
    return n;
  };
  const page = document.body.dataset.page || "home";

  // ── Textos fijos en inglés. El español está escrito en cada .html ──
  const EN = {
    skip: "Skip to content",
    markLabel: "Cristina Villarreal, home",
    navLabel: "Main",
    navProjects: "Projects",
    navServices: "Services",
    navContact: "Contact",
    langBtn: "Language: English",
    hello: "Hi, I'm Cristina.",
    intro1: "I live in Valencia, Spain, and I make websites. I write them by hand in HTML, CSS and JavaScript, and I publish them myself.",
    intro2: "Besides websites for other people, I sometimes build things on my own: if I have an idea I think could be useful, I make a small version and test it with real people before going further.",
    nowTitle: "Right now",
    allProjects: "All projects, with screenshots",
    allServices: "What each one includes and how I work",
    logTitle: "Log",
    contactLead: "For work, projects or anything else, email me at:",
    copyBtn: "Copy",
    copied: "Copied.",
    copyFallback: "Select the address and copy it with Ctrl+C.",
    privacy: "Privacy",
    servicesLead: "This is what I can do right now. If you need something else, ask me.",
    fiverrOff: "I'm not active on Fiverr right now. If you're interested in a service, email me.",
    noServices: "I'm not taking on new work right now.",
    includes: "Includes:",
    orderFiverr: "Order on Fiverr",
    orderMail: "Ask me by email",
    howTitle: "How I work",
    how1t: "You tell me what you need.",
    how1: "You send me the design or explain the idea, and before I start we agree on what's included and what it costs.",
    how2t: "I build it.",
    how2: "I show you how it's going while I work, so you can tell me what to change in time.",
    how3t: "I hand it over.",
    how3: "You get tidy files and a guide to publish it.",
    projectsLead: "What I've made so far. Web concepts are sample websites for businesses that don't exist: I made them to practise and to show how I work.",
    ownTitle: "My own projects",
    conceptsTitle: "Web concepts",
    wantOne: "Want a website like these?",
    seeServices: "See the services",
    visit: "Visit",
    fiverrPaused: "Fiverr (not active right now)",
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
    p5: "If you've written to me, you can ask at any time to see, correct or delete the data from our conversation by emailing the address above. You can also file a complaint with the Spanish Data Protection Agency at",
    nfTitle: "This page doesn't exist.",
    nfText: "The link may be mistyped or the page may have moved.",
    back: "Back to home"
  };
  // Textos que solo aparecen desde el script, en español.
  const ES_JS = {
    langBtn: "Idioma: español",
    copied: "Copiado.",
    copyFallback: "Selecciona el correo y cópialo con Ctrl+C.",
    includes: "Incluye:",
    orderFiverr: "Encargar en Fiverr",
    orderMail: "Pedírmelo por correo",
    visit: "Visitar",
    fiverrPaused: "Fiverr (ahora no estoy activa)"
  };
  const META = {
    home: { es: ["Cristina Villarreal", "Cristina Villarreal, desarrolladora web en Valencia. Hago webs a medida y proyectos propios."],
            en: ["Cristina Villarreal", "Cristina Villarreal, web developer in Valencia, Spain. Custom websites and my own projects."] },
    servicios: { es: ["Servicios · Cristina Villarreal", "Los servicios de desarrollo web que ofrece ahora Cristina Villarreal y cómo trabaja."],
                 en: ["Services · Cristina Villarreal", "The web development services Cristina Villarreal offers right now and how she works."] },
    proyectos: { es: ["Proyectos · Cristina Villarreal", "Proyectos propios y webs de ejemplo de Cristina Villarreal."],
                 en: ["Projects · Cristina Villarreal", "Cristina Villarreal's own projects and sample websites."] },
    privacy: { es: ["Privacidad · Cristina Villarreal"], en: ["Privacy · Cristina Villarreal"] },
    "404": { es: ["Página no encontrada · Cristina Villarreal"], en: ["Page not found · Cristina Villarreal"] }
  };
  // Estados y tipos de datos.js: traducción y color.
  const PALABRAS = {
    "En curso": ["In progress", "on"], "Publicado": ["Live", "on"], "Terminado": ["Finished", "done"],
    "En pausa": ["On hold", "off"], "Abandonado": ["Dropped", "done"],
    "Disponible": ["Available", "on"], "No disponible": ["Not available", "off"],
    "Proyecto propio": ["Own project"], "Concepto de web": ["Web concept"]
  };

  // Español original del HTML, para poder volver a él.
  const ES = {};
  document.querySelectorAll("[data-i18n]").forEach((n) => (ES[n.dataset.i18n] ??= n.textContent.trim()));
  document.querySelectorAll("[data-i18n-aria]").forEach((n) => (ES[n.dataset.i18nAria] ??= n.getAttribute("aria-label")));

  let lang = "es";
  const t = (k) => (lang === "en" ? EN[k] : ES_JS[k] ?? ES[k]) ?? ES[k] ?? "";
  const tx = (v) => (v && typeof v === "object" ? v[lang] || v.es || "" : v ?? "");
  const palabra = (v) => (lang === "en" && PALABRAS[v] ? PALABRAS[v][0] : v || "");
  const fecha = (f) => {
    const m = /^(\d{4})(?:-(\d{2}))?(?:-(\d{2}))?$/.exec(String(f || ""));
    if (!m) return f || "";
    if (!m[2]) return m[1];
    const d = new Date(+m[1], +m[2] - 1, +(m[3] || 1));
    const mes = d.toLocaleDateString(lang === "en" ? "en-GB" : "es-ES", { month: "short" }).replace(".", "");
    return (m[3] ? +m[3] + " " : "") + mes + " " + m[1];
  };
  const fiverrUrl = (u) => (u && lang === "en" ? u.replace("://es.fiverr.com", "://www.fiverr.com") : u);
  const externo = (url) => /^https?:\/\//.test(url || "") && !url.includes("crisvillarreal.com");
  const enlace = (href, text) => {
    const a = el("a", { href }, text);
    if (externo(href)) { a.target = "_blank"; a.rel = "noopener"; }
    return a;
  };
  const estado = (v) => {
    const s = el("span", { class: "estado " + ((PALABRAS[v] && PALABRAS[v][1]) || "done") }, palabra(v));
    return s;
  };
  const visibles = (lista) => (Array.isArray(lista) ? lista : []).filter((x) => x && x.mostrar !== false);

  const D = {
    AHORA: typeof AHORA !== "undefined" ? AHORA : [],
    SERVICIOS: visibles(typeof SERVICIOS !== "undefined" ? SERVICIOS : []),
    PROYECTOS: visibles(typeof PROYECTOS !== "undefined" ? PROYECTOS : []),
    BITACORA: visibles(typeof BITACORA !== "undefined" ? BITACORA : []),
    CONTACTO: typeof CONTACTO !== "undefined" ? CONTACTO : {}
  };
  const fiverr = (() => {
    const f = D.CONTACTO.fiverr;
    if (!f) return { enlace: "", activa: false };
    if (typeof f === "string") return { enlace: f, activa: true };
    return { enlace: f.enlace || "", activa: f.activa !== false };
  })();
  const disponible = (s) => (s.estado || "Disponible") === "Disponible";
  const mailto = (asunto) => "mailto:" + (D.CONTACTO.email || "") + (asunto ? "?subject=" + encodeURIComponent(asunto) : "");

  // ── Pintado ──
  function pintar() {
    if (page === "home") {
      const ahora = $("ahora"); ahora.replaceChildren();
      D.AHORA.forEach((x) => ahora.append(el("li", {}, tx(x))));
      ahora.closest("section").hidden = D.AHORA.length === 0;

      const pr = $("proyectos-resumen"); pr.replaceChildren();
      D.PROYECTOS.filter((p) => p.tipo !== "Concepto de web").forEach((p) => {
        const li = el("li");
        const linea = el("div", { class: "meta" });
        const a = enlace(p.enlace, tx(p.nombre)); a.className = "item-name";
        linea.append(a, estado(p.estado));
        li.append(linea, el("p", {}, tx(p.resumen)));
        pr.append(li);
      });

      const sr = $("servicios-resumen"); sr.replaceChildren();
      D.SERVICIOS.forEach((s) => {
        const li = el("li");
        const linea = el("div", { class: "meta" });
        const nombre = el("span", { class: "item-name" }, tx(s.nombre));
        linea.append(nombre, estado(s.estado || "Disponible"));
        li.append(linea, el("p", {}, tx(s.resumen)));
        sr.append(li);
      });
      sr.closest("section").hidden = D.SERVICIOS.length === 0;

      const log = $("lista-bitacora"); log.replaceChildren();
      D.BITACORA.forEach((b) => {
        const li = el("li");
        const time = el("time", {}, fecha(b.fecha));
        if (/^\d{4}(-\d{2}){0,2}$/.test(b.fecha || "")) time.setAttribute("datetime", b.fecha);
        li.append(time, b.enlace ? enlace(b.enlace, tx(b.texto)) : el("span", {}, tx(b.texto)));
        log.append(li);
      });
      log.closest("section").hidden = D.BITACORA.length === 0;

      const en = $("enlaces"); en.replaceChildren();
      if (D.CONTACTO.github) en.append(enlace(D.CONTACTO.github, "GitHub"));
      if (fiverr.enlace) {
        if (fiverr.activa) en.append(enlace(fiverrUrl(fiverr.enlace), "Fiverr"));
        else en.append(el("span", {}, t("fiverrPaused")));
      }
    }

    if (page === "servicios") {
      $("aviso-fiverr").hidden = !fiverr.enlace || fiverr.activa || !D.SERVICIOS.some(disponible);
      $("sin-servicios").hidden = D.SERVICIOS.some(disponible);
      const caja = $("servicios-lista"); caja.replaceChildren();
      D.SERVICIOS.forEach((s) => {
        const on = disponible(s);
        const art = el("article", { class: "svc" + (on ? "" : " is-off") });
        const cab = el("div", { class: "svc-head" });
        cab.append(el("h2", {}, tx(s.nombre)), estado(s.estado || "Disponible"));
        art.append(cab, el("p", {}, tx(s.resumen)));
        if (s.incluye && s.incluye.length) {
          const ul = el("ul", { class: "bullets" });
          s.incluye.forEach((x) => ul.append(el("li", {}, tx(x))));
          art.append(el("p", { class: "muted" }, t("includes")), ul);
        }
        if (s.precio) art.append(el("p", { class: "price" }, tx(s.precio)));
        if (on) {
          const porFiverr = fiverr.activa && s.fiverr;
          const a = porFiverr
            ? el("a", { class: "btn", href: fiverrUrl(s.fiverr), target: "_blank", rel: "noopener" }, t("orderFiverr"))
            : el("a", { class: "btn", href: mailto(tx(s.nombre)) }, t("orderMail"));
          art.append(a);
        }
        caja.append(art);
      });
    }

    if (page === "proyectos") {
      const tarjetas = (ol, lista) => {
        ol.replaceChildren();
        lista.forEach((p) => {
          const li = el("li", { class: "card" });
          if (p.imagen) {
            const a = enlace(p.enlace, "");
            a.className = "shot"; a.setAttribute("tabindex", "-1"); a.setAttribute("aria-hidden", "true");
            a.append(el("img", { src: "/" + String(p.imagen).replace(/^\//, ""), alt: "", loading: "lazy", width: "960", height: "600" }));
            li.append(a);
          }
          const h = el("h3"); h.append(enlace(p.enlace, tx(p.nombre)));
          const meta = el("div", { class: "meta" });
          meta.append(estado(p.estado));
          if (p.fecha) meta.append(el("span", {}, fecha(p.fecha)));
          li.append(h, meta, el("p", { class: "sum" }, tx(p.resumen)));
          ol.append(li);
        });
        ol.closest("section").hidden = lista.length === 0;
      };
      tarjetas($("lista-propios"), D.PROYECTOS.filter((p) => p.tipo !== "Concepto de web"));
      tarjetas($("lista-conceptos"), D.PROYECTOS.filter((p) => p.tipo === "Concepto de web"));
    }

    if ($("mail") && D.CONTACTO.email) $("mail").textContent = D.CONTACTO.email;
  }

  // ── Idioma ──
  const FLAGS = { es: "/assets/flag-es.jpg", en: "/assets/flag-en.jpg" };
  function aplicarIdioma(nuevo, guardar) {
    lang = nuevo === "en" ? "en" : "es";
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((n) => (n.textContent = t(n.dataset.i18n)));
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

  let inicial = "";
  try { inicial = localStorage.getItem("cv-idioma") || ""; } catch {}
  if (!inicial) inicial = /^(es|ca|gl|eu)/i.test(navigator.language || "es") ? "es" : "en";
  aplicarIdioma(inicial, false);

  const sw = $("lang");
  if (sw) {
    const btn = sw.querySelector(".lang-btn");
    const abrir = (si) => { sw.classList.toggle("open", si); btn.setAttribute("aria-expanded", si ? "true" : "false"); };
    btn.addEventListener("click", (e) => { e.stopPropagation(); abrir(!sw.classList.contains("open")); });
    sw.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => { aplicarIdioma(b.dataset.lang, true); abrir(false); btn.focus(); }));
    document.addEventListener("click", (e) => { if (!sw.contains(e.target)) abrir(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && sw.classList.contains("open")) { abrir(false); btn.focus(); } });
  }

  // ── Copiar correo ──
  const copiar = $("copiar"), msg = $("copiado");
  if (copiar) copiar.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText($("mail").textContent.trim()); msg.textContent = t("copied"); }
    catch {
      const r = document.createRange(); r.selectNodeContents($("mail"));
      const s = getSelection(); s.removeAllRanges(); s.addRange(r);
      msg.textContent = t("copyFallback");
    }
    clearTimeout(copiar._t); copiar._t = setTimeout(() => (msg.textContent = ""), 3000);
  });
})();
