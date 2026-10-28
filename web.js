// Lee el contenido de la hoja de Google y pinta la web.
// Si la hoja no responde, usa la copia de datos.js.
// Para cambiar el contenido no hace falta tocar este archivo: se cambia en la hoja.

// Hoja publicada (Archivo > Compartir > Publicar en la web).
// HOJA_PUBLICADA es el trozo del enlace publicado que va entre /d/e/ y /pubhtml.
// PESTANAS: el número gid de cada pestaña (sale en la barra de direcciones al abrirla: #gid=...).
const HOJA_PUBLICADA = "2PACX-1vR6BKBD70qSPN19goKKZQ7GsP-LXYA7TXEt5J9eZQ2WI75t_ktf6fkSzCMHze0vKgrxjtH3LZmNS5yy";
const PESTANAS = { Proyectos: 0, Servicios: 1, Ahora: 2, "Bitácora": 3, Ajustes: 4 };

(function () {
  const $ = (id) => document.getElementById(id);
  const el = (tag, attrs = {}, text) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
    if (text != null) n.textContent = text;
    return n;
  };
  const page = document.body.dataset.page || "home";

  // ── Textos fijos en inglés. El español está en cada .html ──
  const EN = {
    skip: "Skip to content", markLabel: "Cristina Villarreal, home", navLabel: "Main",
    navProjects: "Projects", navServices: "Services", navLog: "Logs", navContact: "Contact",
    langBtn: "Language: English",
    kicker: "Valencia · Web development",
    heroTitle: "I build custom websites and <em>useful tools</em>.",
    nowTitle: "Right now", ctaProjects: "See projects", ctaServices: "See services",
    homeProjectsLead: "The latest things I've made. The rest, including sample websites, are on the projects page.",
    allProjects: "See all projects →",
    homeServicesLead: "If you have a design or an idea and need it working on the web, I'll build it.",
    allServices: "How I work →", toValencia: "Have a business in Valencia? →",
    aboutTitle: "About me",
    about1: "I'm Cristina, from Valencia. I finished a vocational degree in IT Systems and Networks and I'm now studying Web Application Development.",
    about2: "I like the things I make to be useful for something specific. So besides websites for clients, I ship small projects of my own and test them with real people before going further. Everything I publish gets noted in the logs on this page.",
    stackTitle: "What I work with", st1: "Web", st2: "Design", st3: "Shipping", st4: "Learning", st5: "Background", st5v: "Systems and networks",
    logLead: "What I've been doing, in order.",
    contactTitle: "Let's talk", contactLead: "For work, projects or anything else, email me at",
    copyBtn: "Copy email", copied: "Email copied.", copyFallback: "Select the address and copy it with Ctrl+C.",
    privacy: "Privacy and cookies", cookieSettings: "Cookie settings",
    cookieText: "I use analytics cookies (Google Analytics) to see how many people visit the site and which pages they read. They're only set if you accept.",
    themeToDark: "Switch to dark mode", themeToLight: "Switch to light mode",
    cookieMore: "More information", cookieAccept: "Accept", cookieReject: "Reject", cookieLabel: "Cookie notice",
    kickerServices: "What I offer now",
    servicesLead: "Small, well-made websites, written by hand. If what you need doesn't fit any of them, email me and we'll see.",
    fiverrOff: "I'm not active on Fiverr right now. If you're interested in a service, email me.",
    noServices: "I'm not taking on new work right now.",
    includes: "Includes", orderFiverr: "Order on Fiverr", orderMail: "Ask me by email", orderMailShort: "Order by email",
    howTitle: "How I work", howLead: "The same for every job, from the first conversation to delivery.",
    how1t: "You tell me what you need", how1: "You send me the design or explain the idea, and before I start we agree on what's included and what it costs.",
    how2t: "I build it", how2: "I show you how it's going while I work, so you can tell me what to change in time.",
    how3t: "I hand it over", how3: "You get tidy files and a guide to publish it.",
    svcContactTitle: "Sound right?", svcContactLead: "Tell me what you need by email:",
    kickerProjects: "What I've published",
    projectsLead: "My own projects, tested with real people, and web concepts: sample websites for businesses that don't exist, made to practise and to show how I work.",
    ownTitle: "My own projects", conceptsTitle: "Web concepts",
    conceptsLead: "Sample websites for made-up businesses. This is how I work when you hire me for one.",
    toServices: "Want one like these? See the services →",
    seeProject: "See project", fiverrPaused: "Fiverr (not active right now)",
    pTitle: "Privacy", pUpd: "Last updated: 14 October 2026",
    p1t: "Who is responsible", p1: "This website belongs to Cristina Villarreal García, based in Valencia, Spain. For any privacy question, write to",
    p2t: "What data is collected", p2: "This website has no forms and doesn't ask you for any data. If you email me, I use your address and what you tell me only to reply and, if we end up working together, for the job. I don't share it with anyone.",
    p3t: "Visit statistics", p3: "If you accept analytics cookies, the site uses Google Analytics (Google LLC) to see how many people visit it, which pages they view, what kind of device they use and where they come from (a search engine, a social network…). Google Analytics doesn't store your IP address: it only uses it to work out your approximate country or city. If you reject them, Google Analytics doesn't load. Vercel (Vercel Inc., United States), where the site is hosted, also counts visits in an aggregated way, without cookies and without identifying you.",
    p3bt: "Outside services", p3b: "The projects and services are loaded from a public Google spreadsheet, so your browser connects to Google to read it. Google and Vercel are certified under the EU-US Data Privacy Framework. The legal basis for measuring visits with Google Analytics is your consent, which you can withdraw at any time.",
    p4t: "Cookies", p4: "They're only set if you accept them in the notice. They're the Google Analytics cookies:",
    cName: "Cookie", cWho: "Set by", cWhat: "Purpose", cLong: "Duration", cGa: "Tell visitors apart", cGa2: "Keep track of the visit session", c2y: "2 years",
    p4b: "Your browser also remembers your language, your light or dark mode choice and your answer to the cookie notice, so you're not asked again. That never leaves your device and isn't used to track you.",
    p5t: "Your rights", p5: "If you've written to me, you can ask at any time to see, correct or delete the data from our conversation by emailing the address above. You can also file a complaint with the Spanish Data Protection Agency at",
    nfTitle: "This page doesn't exist.", nfText: "The link may be mistyped or the page may have moved.", back: "Back to home"
  };
  const ES_JS = {
    langBtn: "Idioma: español", themeToDark: "Cambiar a modo oscuro", themeToLight: "Cambiar a modo claro", copied: "Correo copiado.", copyFallback: "Selecciona el correo y cópialo con Ctrl+C.",
    includes: "Incluye", orderFiverr: "Encargar en Fiverr", orderMail: "Pedírmelo por correo", orderMailShort: "Encargar por correo",
    seeProject: "Ver proyecto", fiverrPaused: "Fiverr (ahora no estoy activa)"
  };
  const META = {
    home: { es: ["Cristina Villarreal · Webs a medida", "Cristina Villarreal, desarrolladora web en Valencia. Webs a medida para negocios y herramientas propias que resuelven problemas concretos."],
            en: ["Cristina Villarreal · Custom websites", "Cristina Villarreal, web developer in Valencia, Spain. Custom websites for businesses and my own tools that solve specific problems."] },
    servicios: { es: ["Servicios · Cristina Villarreal", "Los servicios de desarrollo web que ofrece ahora Cristina Villarreal y cómo trabaja."],
                 en: ["Services · Cristina Villarreal", "The web development services Cristina Villarreal offers right now and how she works."] },
    proyectos: { es: ["Proyectos · Cristina Villarreal", "Proyectos propios y webs de ejemplo de Cristina Villarreal."],
                 en: ["Projects · Cristina Villarreal", "Cristina Villarreal's own projects and sample websites."] },
    negocios: { es: ["Webs para negocios de Valencia · Cristina Villarreal", "¿Tu negocio de Valencia no tiene web o la tiene anticuada? Hago webs sencillas a medida, con formulario de contacto y adaptadas al móvil. Presupuesto cerrado antes de empezar."],
                en: ["Webs para negocios de Valencia · Cristina Villarreal", "¿Tu negocio de Valencia no tiene web o la tiene anticuada? Hago webs sencillas a medida, con formulario de contacto y adaptadas al móvil. Presupuesto cerrado antes de empezar."] },
    privacy: { es: ["Privacidad · Cristina Villarreal"], en: ["Privacy · Cristina Villarreal"] },
    "404": { es: ["Página no encontrada · Cristina Villarreal"], en: ["Page not found · Cristina Villarreal"] }
  };
  // Estados y tipos: traducción y color del chip.
  const PALABRAS = {
    "En curso": ["In progress", "live"], "Publicado": ["Live", "ok"], "Terminado": ["Finished", ""],
    "En pausa": ["On hold", "off"], "Abandonado": ["Dropped", "off"],
    "Disponible": ["Available", "ok"], "No disponible": ["Not available", "off"],
    "Proyecto propio": ["Own project", ""], "Concepto de web": ["Web concept", ""]
  };

  const ES = {};
  document.querySelectorAll("[data-i18n]").forEach((n) => (ES[n.dataset.i18n] ??= n.textContent.trim()));
  document.querySelectorAll("[data-i18n-html]").forEach((n) => (ES[n.dataset.i18nHtml] ??= n.innerHTML.trim()));
  document.querySelectorAll("[data-i18n-aria]").forEach((n) => (ES[n.dataset.i18nAria] ??= n.getAttribute("aria-label")));

  let lang = "es";
  const t = (k) => (lang === "en" ? EN[k] : ES_JS[k] ?? ES[k]) ?? ES[k] ?? "";
  const tx = (v) => (v && typeof v === "object" ? v[lang] || v.es || "" : v ?? "");
  const palabra = (v) => (lang === "en" && PALABRAS[v] ? PALABRAS[v][0] : v || "");
  const chip = (v) => el("span", { class: "chip " + ((PALABRAS[v] && PALABRAS[v][1]) || "") }, palabra(v));
  const fecha = (f) => {
    const m = /^(\d{4})(?:-(\d{1,2}))?(?:-(\d{1,2}))?$/.exec(String(f || "").trim());
    if (!m) return f || "";
    if (!m[2]) return m[1];
    const d = new Date(+m[1], +m[2] - 1, +(m[3] || 1));
    const mes = d.toLocaleDateString(lang === "en" ? "en-GB" : "es-ES", { month: "short" }).replace(".", "");
    return (m[3] ? +m[3] + " " : "") + mes + " " + m[1];
  };
  const fiverrUrl = (u) => (u && lang === "en" ? u.replace("://es.fiverr.com", "://www.fiverr.com") : u);
  const externo = (url) => /^https?:\/\//.test(url || "") && !url.includes("crisvillarreal.com");
  const abrirFuera = (a, url) => { if (externo(url)) { a.target = "_blank"; a.rel = "noopener"; } return a; };
  // Imagen: ruta de la web, enlace normal o enlace de Google Drive.
  const imagenUrl = (src) => {
    src = String(src || "").trim();
    if (!src) return "";
    const drive = /drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:export=\w+&)?id=)([\w-]{10,})/.exec(src);
    if (drive) return "https://drive.google.com/thumbnail?id=" + drive[1] + "&sz=w1200";
    if (/^https?:\/\//.test(src)) return src;
    return "/" + src.replace(/^\//, "");
  };

  // ── Datos ──
  let D = null;
  const copia = () => ({
    AHORA: typeof AHORA !== "undefined" ? AHORA : [],
    SERVICIOS: typeof SERVICIOS !== "undefined" ? SERVICIOS : [],
    PROYECTOS: typeof PROYECTOS !== "undefined" ? PROYECTOS : [],
    BITACORA: typeof BITACORA !== "undefined" ? BITACORA : [],
    CONTACTO: typeof CONTACTO !== "undefined" ? CONTACTO : {}
  });

  // CSV con comillas, comas y saltos de línea dentro de las celdas.
  function csv(texto) {
    const filas = []; let fila = [], campo = "", q = false;
    for (let i = 0; i < texto.length; i++) {
      const c = texto[i];
      if (q) {
        if (c === '"') { if (texto[i + 1] === '"') { campo += '"'; i++; } else q = false; }
        else campo += c;
      } else if (c === '"') q = true;
      else if (c === ",") { fila.push(campo); campo = ""; }
      else if (c === "\n" || c === "\r") {
        if (c === "\r" && texto[i + 1] === "\n") i++;
        fila.push(campo); filas.push(fila); fila = []; campo = "";
      } else campo += c;
    }
    if (campo !== "" || fila.length) { fila.push(campo); filas.push(fila); }
    return filas;
  }
  const clave = (s) => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/\(.*?\)/g, "").replace(/[^a-z]/g, "");
  function tabla(texto) {
    const [cab = [], ...resto] = csv(texto);
    const k = cab.map(clave);
    return resto.map((f) => Object.fromEntries(k.map((h, i) => [h, (f[i] ?? "").trim()])));
  }
  const si = (v) => /^(true|verdadero|si|sí|x|1)$/i.test(String(v || "").trim());
  const bi = (es, en) => ({ es: es || "", en: en || "" });
  const lineas = (s) => String(s || "").split(/\r?\n|;/).map((x) => x.trim()).filter(Boolean);

  async function leerHoja() {
    const pestana = (nombre) => fetch(`https://docs.google.com/spreadsheets/d/e/${HOJA_PUBLICADA}/pub?gid=${PESTANAS[nombre]}&single=true&output=csv`, { cache: "no-store", credentials: "omit" })
      .then((r) => { if (!r.ok) throw new Error(r.status); return r.text(); })
      .then((txt) => { if (/^\s*</.test(txt)) throw new Error("no publicada"); return tabla(txt); });
    const [pro, ser, aho, bit, aju] = await Promise.all(["Proyectos", "Servicios", "Ahora", "Bitácora", "Ajustes"].map(pestana));
    const a = aju[0] || {};
    return {
      PROYECTOS: pro.filter((r) => r.nombre).map((r) => ({
        mostrar: si(r.mostrar), estado: r.estado, tipo: r.tipo, nombre: bi(r.nombre, r.nombreeningles),
        resumen: bi(r.resumen, r.resumeneningles), fecha: r.fecha, enlace: r.enlace, imagen: r.imagen
      })),
      SERVICIOS: ser.filter((r) => r.nombre).map((r) => {
        const es = lineas(r.incluye), en = lineas(r.incluyeeningles);
        return {
          mostrar: si(r.mostrar), estado: r.disponibilidad || "Disponible", nombre: bi(r.nombre, r.nombreeningles),
          resumen: bi(r.resumen, r.resumeneningles), incluye: es.map((x, i) => bi(x, en[i])),
          precio: r.precio ? bi(r.precio, r.precioeningles) : null, fiverr: r.enlacedefiverr
        };
      }),
      AHORA: aho.filter((r) => r.texto).map((r) => ({ mostrar: si(r.mostrar), es: r.texto, en: r.textoeningles })),
      BITACORA: bit.filter((r) => r.texto).map((r) => ({ mostrar: si(r.mostrar), fecha: r.fecha, texto: bi(r.texto, r.textoeningles), enlace: r.enlace })),
      CONTACTO: { email: a.correo, github: a.github, fiverr: { enlace: a.perfildefiverr, activa: si(a.fiverractiva) } }
    };
  }

  const visibles = (l) => (Array.isArray(l) ? l : []).filter((x) => x && x.mostrar !== false);
  // Del más nuevo al más antiguo por fecha (2026, 2026-10 o 2026-10-17); con la misma fecha, el orden de la hoja.
  const claveFecha = (f) => { const m = /^(\d{4})(?:-(\d{1,2}))?(?:-(\d{1,2}))?$/.exec(String(f || "").trim()); return m ? +m[1] * 10000 + +(m[2] || 0) * 100 + +(m[3] || 0) : -1; };
  const porFecha = (l) => l.map((x, i) => ({ x, i, k: claveFecha(x.fecha) })).sort((a, b) => b.k - a.k || a.i - b.i).map((o) => o.x);
  const fiverr = () => {
    const f = D.CONTACTO.fiverr;
    if (!f) return { enlace: "", activa: false };
    if (typeof f === "string") return { enlace: f, activa: true };
    return { enlace: f.enlace || "", activa: f.activa !== false };
  };
  const disponible = (s) => (s.estado || "Disponible") === "Disponible";
  const mailto = (asunto) => "mailto:" + (D.CONTACTO.email || "") + (asunto ? "?subject=" + encodeURIComponent(asunto) : "");

  // ── Tarjetas ──
  function tarjetaProyecto(p) {
    const li = el("li");
    const a = abrirFuera(el("a", { class: "card", href: p.enlace || "#" }), p.enlace);
    const img = el("div", { class: "card-img" });
    const src = imagenUrl(p.imagen);
    if (src) img.append(el("img", { src, alt: "", loading: "lazy", width: "960", height: "600" }));
    else img.append(el("span", { class: "initial", "aria-hidden": "true" }, (tx(p.nombre) || "·").charAt(0)));
    const body = el("div", { class: "card-body" });
    const meta = el("div", { class: "meta" });
    if (p.estado) meta.append(chip(p.estado));
    if (p.tipo) meta.append(chip(p.tipo));
    if (p.fecha) meta.append(el("span", {}, fecha(p.fecha)));
    body.append(meta, el("h3", {}, tx(p.nombre)), el("p", {}, tx(p.resumen)));
    if (p.enlace) body.append(el("span", { class: "go" + (externo(p.enlace) ? " ext" : "") }, t("seeProject") + (externo(p.enlace) ? "" : " →")));
    a.append(img, body); li.append(a);
    return li;
  }
  function tarjetaServicio(s) {
    const on = disponible(s), f = fiverr();
    const li = el("li");
    const art = el("article", { class: "card svc" + (on ? "" : " is-off") });
    const body = el("div", { class: "card-body" });
    const meta = el("div", { class: "meta" }); meta.append(chip(s.estado || "Disponible"));
    body.append(meta, el("h3", {}, tx(s.nombre)), el("p", {}, tx(s.resumen)));
    if (s.incluye && s.incluye.length) {
      const ul = el("ul", { class: "inc" });
      s.incluye.forEach((x) => ul.append(el("li", {}, tx(x))));
      body.append(el("p", { class: "inc-t" }, t("includes")), ul);
    }
    if (s.precio && tx(s.precio)) body.append(el("p", { class: "price" }, tx(s.precio)));
    if (on) {
      // Fiverr activa y con enlace: Fiverr + correo. Si no: solo correo.
      const botones = el("div", { class: "svc-btns" });
      const porFiverr = f.activa && s.fiverr;
      if (porFiverr) botones.append(el("a", { class: "btn small", href: fiverrUrl(s.fiverr), target: "_blank", rel: "noopener" }, t("orderFiverr")));
      botones.append(el("a", { class: "btn small" + (porFiverr ? " ghost" : ""), href: mailto(tx(s.nombre)) }, t(porFiverr ? "orderMailShort" : "orderMail")));
      body.append(botones);
    }
    art.append(body); li.append(art);
    return li;
  }
  const llenar = (ul, lista, fn) => { if (!ul) return; ul.replaceChildren(...lista.map(fn)); const s = ul.closest("section"); if (s) s.hidden = lista.length === 0; };

  function pintar() {
    if (!D) return;
    const P = porFecha(visibles(D.PROYECTOS)), S = visibles(D.SERVICIOS), f = fiverr();

    if (page === "home") {
      const ah = visibles(D.AHORA);
      $("ahora").replaceChildren(...ah.map((x) => el("li", {}, tx(x))));
      $("ahora-caja").hidden = ah.length === 0;
      llenar($("proyectos-portada"), P.slice(0, 3), tarjetaProyecto);
      llenar($("servicios-portada"), S, tarjetaServicio);
      const log = $("lista-bitacora");
      // Los logs se ordenan solos por fecha, del más nuevo al más antiguo.
      const logs = porFecha(visibles(D.BITACORA));
      log.replaceChildren(...logs.map((b) => {
        const li = el("li");
        const time = el("time", {}, fecha(b.fecha));
        if (/^\d{4}(-\d{1,2}){0,2}$/.test(String(b.fecha || "").trim())) time.setAttribute("datetime", String(b.fecha).trim());
        li.append(time, b.enlace ? abrirFuera(el("a", { href: b.enlace }, tx(b.texto)), b.enlace) : el("span", {}, tx(b.texto)));
        return li;
      }));
      log.closest("section").hidden = !log.children.length;
      const en = $("enlaces"); en.replaceChildren();
      if (D.CONTACTO.github) en.append(abrirFuera(el("a", { href: D.CONTACTO.github }, "GitHub"), D.CONTACTO.github));
      if (f.enlace) en.append(f.activa ? abrirFuera(el("a", { href: fiverrUrl(f.enlace) }, "Fiverr"), f.enlace) : el("span", {}, t("fiverrPaused")));
    }

    if (page === "servicios") {
      $("aviso-fiverr").hidden = f.activa || !S.some(disponible) || !S.some((s) => s.fiverr);
      $("sin-servicios").hidden = S.some(disponible);
      const ul = $("servicios-lista");
      ul.replaceChildren(...S.map(tarjetaServicio));
    }

    if (page === "proyectos") {
      llenar($("lista-propios"), P.filter((p) => p.tipo !== "Concepto de web"), tarjetaProyecto);
      llenar($("lista-conceptos"), P.filter((p) => p.tipo === "Concepto de web"), tarjetaProyecto);
    }

    if ($("mail") && D.CONTACTO.email) $("mail").textContent = D.CONTACTO.email;
  }

  // ── Idioma ──
  const FLAGS = { es: "/assets/flag-es.jpg", en: "/assets/flag-en.jpg" };
  function aplicarIdioma(nuevo, guardar) {
    lang = nuevo === "en" ? "en" : "es";
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((n) => (n.textContent = t(n.dataset.i18n)));
    document.querySelectorAll("[data-i18n-html]").forEach((n) => (n.innerHTML = t(n.dataset.i18nHtml)));
    document.querySelectorAll("[data-i18n-aria]").forEach((n) => n.setAttribute("aria-label", t(n.dataset.i18nAria)));
    if (page !== "caso") {
      const m = (META[page] || META.home)[lang];
      document.title = m[0];
      const d = document.querySelector('meta[name="description"]');
      if (d && m[1]) d.setAttribute("content", m[1]);
    }
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

  // Carga: primero la hoja (con un límite de 6 s); si falla, la copia.
  const necesitaDatos = ["home", "servicios", "proyectos"].includes(page);
  if (necesitaDatos) {
    const limite = new Promise((_, no) => setTimeout(() => no(new Error("tiempo")), 6000));
    Promise.race([leerHoja(), limite])
      .then((datos) => { D = datos; window.contenidoHoja = datos; document.documentElement.dataset.fuente = "hoja"; })
      .catch((e) => { D = copia(); document.documentElement.dataset.fuente = "copia"; console.info("Contenido desde datos.js:", e && e.message); })
      .finally(() => { pintar(); document.documentElement.dataset.pintado = "si"; });
  }

  // ── Modo claro / oscuro ──
  const temaBtn = $("tema");
  const oscuroSistema = matchMedia("(prefers-color-scheme: dark)");
  const modoActual = () => document.documentElement.dataset.theme || (oscuroSistema.matches ? "dark" : "light");
  function marcarModo() {
    const m = modoActual();
    document.documentElement.dataset.modo = m;
    if (temaBtn) {
      const k = m === "dark" ? "themeToLight" : "themeToDark";
      temaBtn.dataset.i18nAria = k;
      temaBtn.setAttribute("aria-label", t(k));
    }
  }
  if (temaBtn) temaBtn.addEventListener("click", () => {
    const nuevo = modoActual() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nuevo;
    const meta = document.querySelector('meta[name="color-scheme"]');
    if (meta) meta.content = "only " + nuevo; // que el modo oscuro del navegador no repinte la web
    try { localStorage.setItem("cv-tema", nuevo); } catch {}
    marcarModo();
  });
  oscuroSistema.addEventListener("change", marcarModo);
  marcarModo();

  // ── Cookies: Google Analytics solo si se acepta ──
  const GA_ID = "G-G5F7N4THGC";
  const CONSENT_KEY = "cv-cookies";
  const leerConsent = () => { try { return localStorage.getItem(CONSENT_KEY); } catch { return null; } };
  const guardarConsent = (v) => { try { localStorage.setItem(CONSENT_KEY, v); } catch {} };
  function cargarAnalytics() {
    if (window.__gaCargado) return;
    window.__gaCargado = true;
    window["ga-disable-" + GA_ID] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID);
    const s = document.createElement("script");
    s.async = true; s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.append(s);
  }
  function borrarCookiesGA() {
    const dominios = [location.hostname, "." + location.hostname.replace(/^www\./, "")];
    document.cookie.split(";").map((c) => c.split("=")[0].trim()).filter((n) => /^_ga/.test(n)).forEach((n) => {
      dominios.forEach((d) => { document.cookie = n + "=; Max-Age=0; path=/; domain=" + d; });
      document.cookie = n + "=; Max-Age=0; path=/";
    });
  }
  const aviso = el("div", { class: "cookie-bar", role: "dialog", "aria-live": "polite", "aria-label": "Aviso de cookies", "data-i18n-aria": "cookieLabel" });
  aviso.hidden = true;
  aviso.innerHTML = '<div class="wrap cookie-in"><p><span data-i18n="cookieText">Uso cookies de análisis (Google Analytics) para saber cuánta gente visita la web y qué páginas lee. Solo se instalan si las aceptas.</span> <a href="/privacidad.html" data-i18n="cookieMore">Más información</a></p><div class="cookie-btns"><button type="button" class="btn small ghost" data-cookie="no" data-i18n="cookieReject">Rechazar</button><button type="button" class="btn small" data-cookie="si" data-i18n="cookieAccept">Aceptar</button></div></div>';
  document.body.append(aviso);
  aviso.querySelectorAll("[data-i18n]").forEach((n) => (ES[n.dataset.i18n] ??= n.textContent.trim()));
  ES.cookieLabel ??= "Aviso de cookies";
  aviso.querySelectorAll("[data-i18n]").forEach((n) => (n.textContent = t(n.dataset.i18n)));
  aviso.setAttribute("aria-label", t("cookieLabel"));
  aviso.addEventListener("click", (e) => {
    const b = e.target.closest("[data-cookie]"); if (!b) return;
    if (b.dataset.cookie === "si") { guardarConsent("si"); cargarAnalytics(); }
    else { guardarConsent("no"); window["ga-disable-" + GA_ID] = true; borrarCookiesGA(); }
    aviso.hidden = true;
  });
  document.querySelectorAll("[data-cookie-settings]").forEach((b) => b.addEventListener("click", () => { aviso.hidden = false; aviso.querySelector('[data-cookie="si"]').focus(); }));
  const consent = leerConsent();
  if (consent === "si") cargarAnalytics();
  else if (consent !== "no") aviso.hidden = false;

  const sw = $("lang");
  if (sw) {
    const btn = sw.querySelector(".lang-btn");
    const abrir = (s) => { sw.classList.toggle("open", s); btn.setAttribute("aria-expanded", s ? "true" : "false"); };
    btn.addEventListener("click", (e) => { e.stopPropagation(); abrir(!sw.classList.contains("open")); });
    sw.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => { aplicarIdioma(b.dataset.lang, true); abrir(false); btn.focus(); }));
    document.addEventListener("click", (e) => { if (!sw.contains(e.target)) abrir(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && sw.classList.contains("open")) { abrir(false); btn.focus(); } });
  }

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
