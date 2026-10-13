# Web de Cristina Villarreal

Web estática (HTML, CSS y JavaScript, sin compilar), en español e inglés. Se sube tal cual a GitHub y Vercel la publica sola.

Páginas: portada (`index.html`), `servicios.html`, `proyectos.html`, `privacidad.html` y `404.html`.

## Cómo cambiar el contenido

Todo está en **`datos.js`**. Arriba del archivo hay una chuleta. Lo más habitual:

| Quiero… | Cambio |
|---|---|
| Ocultar un proyecto, servicio o entrada sin borrarlo | `mostrar: false` |
| Volver a enseñarlo | `mostrar: true` |
| Cambiar el estado de un proyecto | `estado: "En curso"`, `"Publicado"`, `"Terminado"`, `"En pausa"` o `"Abandonado"` |
| Marcar un servicio como no disponible | `estado: "No disponible"` (se queda visible, en gris y sin botón) |
| Volver a estar activa en Fiverr | en `CONTACTO`, `activa: true` (vuelven los botones de Fiverr) |
| Cambiar el orden | mueve el bloque arriba o abajo |

Cada texto va en los dos idiomas: `{ es: "...", en: "..." }`. Si no pones el `en`, en inglés sale el español. Los estados se traducen solos.

### Añadir un proyecto

Copia un bloque de `PROYECTOS` y cámbialo. Para la captura, guarda una imagen en `assets/proyectos/` (mejor 960 × 600) y pon su ruta en `imagen`. Si no tiene imagen, quita esa línea.

### Añadir un servicio

Copia un bloque de `SERVICIOS`. `precio` y `fiverr` son opcionales. Si Fiverr está activa y el servicio tiene enlace, el botón lleva a Fiverr; si no, a tu correo.

### Bitácora

Añade arriba del todo: `{ mostrar: true, fecha: "2026-10-20", texto: { es: "...", en: "..." } },` (`enlace` opcional).

## Textos fijos

Los textos de las páginas (presentación, "Cómo trabajo", privacidad…) están en español en cada `.html` y en inglés en el diccionario `EN` al principio de `web.js`. Cada uno tiene una clave (`data-i18n="intro1"`) que es la misma en los dos sitios.

## Archivos

- `estilos.css`: diseño (claro y oscuro según el sistema).
- `web.js`: idioma y pintado de `datos.js`.
- `assets/`: logo, icono, banderas y capturas de proyectos.
- `fonts/`: Source Serif 4 (licencia SIL Open Font License).
- `og.png`: imagen que sale al compartir el enlace.
