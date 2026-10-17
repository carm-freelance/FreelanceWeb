// Copia en el HTML lo que la web pinta desde la hoja de Google, y renueva datos.js.
// Así el contenido se ve aunque no se ejecute JavaScript (vistas previas de enlaces, algunos buscadores)
// y la copia de seguridad está siempre al día. Lo ejecuta cada día la tarea de GitHub
// (.github/workflows/actualizar-contenido.yml); no hace falta tocarlo para cambiar el contenido.
//
// Uso: node scripts/actualizar-contenido.mjs
// Para pruebas: HOJA_CSV_DIR=carpeta (con 0.csv … 4.csv, uno por pestaña) y CHROMIUM_PATH=ruta.

import { chromium } from "playwright";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// Qué trozos de cada página salen de la hoja (llevan <!--hoja:id--> … <!--/hoja:id--> en el HTML).
const PAGINAS = {
  "index.html": ["ahora-caja", "proyectos-portada", "servicios-portada", "lista-bitacora", "mail", "enlaces"],
  "proyectos.html": ["lista-propios", "lista-conceptos"],
  "servicios.html": ["aviso-fiverr", "sin-servicios", "servicios-lista", "mail"]
};

const TIPOS = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".png": "image/png", ".jpg": "image/jpeg", ".woff2": "font/woff2", ".svg": "image/svg+xml" };

function servidor() {
  return new Promise((ok) => {
    const s = http.createServer((req, res) => {
      const ruta = decodeURIComponent(new URL(req.url, "http://x").pathname);
      const archivo = path.join(RAIZ, ruta === "/" ? "index.html" : ruta);
      if (!archivo.startsWith(RAIZ) || !fs.existsSync(archivo) || fs.statSync(archivo).isDirectory()) { res.writeHead(404); return res.end(); }
      res.writeHead(200, { "content-type": TIPOS[path.extname(archivo)] || "application/octet-stream" });
      fs.createReadStream(archivo).pipe(res);
    });
    s.listen(0, "127.0.0.1", () => ok(s));
  });
}

function reemplazar(html, id, nuevo) {
  const re = new RegExp(`<!--hoja:${id}-->[\\s\\S]*?<!--/hoja:${id}-->`);
  if (!re.test(html)) throw new Error(`Falta el marcador <!--hoja:${id}--> en el HTML`);
  return html.replace(re, () => `<!--hoja:${id}-->${nuevo}<!--/hoja:${id}-->`);
}

function datosJs(d) {
  const bloque = (nombre, valor) => `const ${nombre} = ${JSON.stringify(valor, null, 2)};\n`;
  return `// ═════════════════════════════════════════════════════════════
//  COPIA DE SEGURIDAD DEL CONTENIDO
//  El contenido de verdad está en la hoja de Google
//  «Contenido de crisvillarreal.com». Lo que cambies allí sale en la web.
//  Este archivo solo se usa si la hoja no responde, y se copia solo
//  de la hoja cada día: no hace falta tocarlo.
// ═════════════════════════════════════════════════════════════

${bloque("AHORA", d.AHORA)}
${bloque("SERVICIOS", d.SERVICIOS)}
${bloque("PROYECTOS", d.PROYECTOS)}
${bloque("BITACORA", d.BITACORA)}
${bloque("CONTACTO", d.CONTACTO)}`;
}

const srv = await servidor();
const base = `http://127.0.0.1:${srv.address().port}`;
const navegador = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
const contexto = await navegador.newContext({ locale: "es-ES" });
await contexto.route(/googletagmanager|_vercel/, (r) => r.abort());
if (process.env.HOJA_CSV_DIR) {
  await contexto.route(/docs\.google\.com\/spreadsheets/, (r) => {
    const gid = new URL(r.request().url()).searchParams.get("gid");
    r.fulfill({ status: 200, contentType: "text/csv", body: fs.readFileSync(path.join(process.env.HOJA_CSV_DIR, `${gid}.csv`)) });
  });
}

let datos = null;
try {
  for (const [archivo, ids] of Object.entries(PAGINAS)) {
    const pagina = await contexto.newPage();
    await pagina.goto(`${base}/${archivo}`);
    await pagina.waitForSelector("html[data-pintado]", { timeout: 20000 });
    const fuente = await pagina.evaluate(() => document.documentElement.dataset.fuente);
    if (fuente !== "hoja") throw new Error(`${archivo}: la hoja no ha respondido, no se cambia nada`);
    datos ??= await pagina.evaluate(() => window.contenidoHoja);
    let html = fs.readFileSync(path.join(RAIZ, archivo), "utf8");
    for (const id of ids) {
      const trozo = await pagina.evaluate((i) => document.getElementById(i)?.outerHTML, id);
      if (!trozo) throw new Error(`${archivo}: no encuentro #${id}`);
      html = reemplazar(html, id, trozo);
    }
    fs.writeFileSync(path.join(RAIZ, archivo), html);
    console.log(`${archivo}: ${ids.length} trozos copiados`);
    await pagina.close();
  }
  fs.writeFileSync(path.join(RAIZ, "datos.js"), datosJs(datos));
  console.log("datos.js: copia de seguridad renovada");
} finally {
  await navegador.close();
  srv.close();
}
