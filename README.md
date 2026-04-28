# Rural ConnectMe

Sitio web institucional de **Rural ConnectMe** — [www.rconnectme.com](https://www.rconnectme.com).

Rural ConnectMe es una iniciativa que explora cómo la expansión de banda ancha en zonas rurales de Estados Unidos puede integrarse con el desarrollo de fuerza laboral local y la participación digital de la comunidad, para que la inversión en conectividad se traduzca en crecimiento económico real.

El sitio presenta la misión y visión de la iniciativa, el desafío de conectividad rural, el enfoque de tres pilares (infraestructura, fuerza laboral, participación digital), el ecosistema de actores que coordina, el impacto esperado y la experiencia previa del equipo.

## Stack

Sitio estático sin proceso de build:

- `index.html` — contenido completo de la página.
- `styles.css` — sistema de diseño basado en CSS custom properties (paleta navy/verde/naranja, tipografías Lexend + Source Sans 3, escala de espaciado 8dp, contraste objetivo WCAG AAA).
- `main.js` — IIFE con sombra de navbar al hacer scroll, menú móvil, animaciones fade-in con `IntersectionObserver` (respeta `prefers-reduced-motion`) y smooth scroll para anclas.
- `favicon.svg`, `CNAME` — favicon y dominio personalizado para GitHub Pages.

Las fuentes se cargan desde Google Fonts y el video del hero desde Azure Blob Storage. No hay dependencias npm ni paso de compilación.

## Desarrollo local

Abrir `index.html` directamente en el navegador, o servir la carpeta con cualquier servidor estático:

```bash
python -m http.server 8000
# luego abrir http://localhost:8000
```

## Despliegue

GitHub Pages sirve la raíz del repositorio. Hacer push a `main` publica los cambios. El archivo `CNAME` mantiene el dominio `www.rconnectme.com`.

## Estructura de secciones

La navegación y el smooth scroll dependen de los `id` de las secciones en `index.html`:

`#mission-vision`, `#challenge`, `#coordination-gap`, `#approach`, `#ecosystem`, `#ecosystem-coordinate`, `#impact`, `#experience`, `#contact`.

Renombrar un `id` requiere actualizar los enlaces del navbar y cualquier ancla interna.

## Accesibilidad

El diseño apunta a contraste WCAG AAA (7:1+), focus rings de 4px, navegación por teclado y compatibilidad con lectores de pantalla. Al modificar la interactividad, conservar el skip link, el `aria-expanded` del botón de menú y el fallback de `prefers-reduced-motion` en `main.js`.
