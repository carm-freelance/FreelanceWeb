# Web de Cristina Villarreal

Web estática (HTML, CSS y JavaScript, sin compilar), en español e inglés, con tres páginas: portada, Servicios y Proyectos. Se sube tal cual a GitHub y Vercel la publica sola.

## Cómo actualizarla

Todo el contenido que cambia está en **`datos.js`**. No hace falta tocar nada más.

Cada texto va en los dos idiomas: `{ es: "...", en: "..." }`. Si no pones el `en`, en inglés sale el texto en español.

### Añadir un proyecto

Copia uno de los bloques de `PROYECTOS` y cámbialo:

```js
{
  nombre: "Nombre del proyecto",
  tipo: "Proyecto propio",        // o "Concepto de web"
  estado: "En marcha",            // "En marcha", "Publicado" o "Terminado"
  fecha: "2026",
  resumen: {
    es: "Una o dos frases sobre qué es y para quién.",
    en: "One or two sentences about what it is and who it's for."
  },
  enlace: "https://..."
},
```

- `tipo` y `estado` se traducen solos.
- El proyecto con `destacado: true` sale grande arriba. Pon solo uno.
- El orden de la lista es el orden en que aparecen.

### Cambiar los servicios

Están en `SERVICIOS`. Salen enteros en la página Servicios y resumidos en la portada. Quita, añade o edita bloques según lo que ofrezcas en cada momento:

```js
{
  nombre: { es: "Nombre del servicio", en: "Service name" },
  resumen: { es: "Qué es y para quién.", en: "What it is and who it's for." },
  incluye: [
    { es: "Una cosa que incluye", en: "Something it includes" }
  ],
  precio: { es: "Desde 50 €", en: "From €50" },   // opcional
  enlace: "https://es.fiverr.com/s/..."            // opcional
},
```

Si el enlace es de Fiverr, el botón dice "Encargar en Fiverr". Si no hay enlace, el botón lleva al correo.

### Proyectos propios y conceptos de web

En la página Proyectos se separan solos según su `tipo`. Si una de las dos listas se queda vacía, su sección desaparece.

### Añadir una entrada a la bitácora

Añade una entrada arriba del todo en `BITACORA` (van de la más nueva a la más antigua):

```js
{ fecha: "2026-10-20", texto: { es: "Lo que has hecho.", en: "What you did." }, enlace: "https://..." },
```

- La fecha va como `AAAA-MM-DD` (o `AAAA-MM` si no quieres poner día). La web la escribe sola: "20 oct 2026" / "20 Oct 2026".
- `enlace` es opcional.

### Cambiar "Ahora mismo"

Edita las frases de `AHORA`. Mejor de 1 a 3.

### Textos fijos (secciones, botones, "Sobre mí")

El español está en cada archivo `.html` y el inglés en el diccionario `EN` del principio de `web.js`. Cada texto tiene una clave (`data-i18n="about1"`) que es la misma en los dos sitios.

## Archivos

- `index.html`, `servicios.html` y `proyectos.html`: las tres páginas.
- `estilos.css`: diseño (claro y oscuro según el sistema).
- `web.js`: idioma y pintado del contenido de `datos.js`.
- `privacidad.html` y `404.html`: páginas aparte.
- `assets/`: logo, icono de la pestaña y banderas.
- `fonts/`: fuentes (Familjen Grotesk, Instrument Sans y DM Mono, licencia OFL).
- `og.png`: imagen que sale al compartir el enlace.
