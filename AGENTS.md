# AGENTS.md — Guía para agentes de IA

## 1. Qué es este proyecto

Sitio web **informativo** de **Cyber Market**, un ciber-locutorio y tienda de barrio situado en Avda. García Barbón, 102, Vigo (Pontevedra).

El objetivo es dar a conocer los servicios y productos de la tienda física y facilitar el contacto o la visita. **No es una tienda online.**

### Alcance y límites

- Solo información: servicios, productos, horario, dirección, teléfono, email y cómo llegar.
- **No** implementar carrito, e-commerce, pasarela de pago, checkout, cuentas de usuario ni reservas.
- **No** implementar formularios de envío de dinero, simuladores, calculadoras de comisiones ni conversores de divisas.
- **No** inventar ni publicar precios, comisiones, tipos de cambio, stock, destinos concretos ni plazos de entrega.
- Los datos prácticos que no estén confirmados se remiten a la tienda o al teléfono.
- No usar logotipos ni marcas gráficas de Ria, Transfast ni de las compañías de paquetería. Sus nombres pueden mencionarse solo como texto descriptivo.

## 2. Stack

- **Astro 7.4.2** con salida **estática** (`output: 'static'`).
- **TypeScript** estricto (`astro/tsconfigs/strict`).
- **pnpm** como gestor de paquetes. Node `>=22.23.4`.
- **CSS scoped** en componentes `.astro` + tokens y utilidades en `src/styles/global.css`.
- **Sin Tailwind, sin frameworks de UI y sin JavaScript de cliente.** No hay islas ni directivas `client:*`.

## 3. Comandos

```sh
pnpm install      # instalar dependencias
pnpm dev          # servidor de desarrollo en localhost:4321
pnpm build        # compilar a ./dist
pnpm preview      # previsualizar la build
```

Este entorno permite arrancar el servidor de desarrollo en segundo plano:

```sh
pnpm astro dev --background
pnpm astro dev status
pnpm astro dev logs
pnpm astro dev stop
```

**Antes de cada commit, comprobar que `pnpm build` termina sin errores.**

## 4. Estructura de carpetas

```text
/
├─ public/                     # archivos estáticos servidos tal cual
│  ├─ favicon.svg
│  ├─ favicon-32.png
│  ├─ og-cyber-market.png      # imagen Open Graph 1200×630
│  └─ robots.txt
├─ src/
│  ├─ assets/
│  │  ├─ illustrations/        # ilustraciones SVG propias (placeholders)
│  │  └─ og/                   # fuente SVG de la imagen Open Graph
│  ├─ components/              # componentes reutilizables .astro
│  │  ├─ BrandMark.astro
│  │  ├─ Header.astro
│  │  ├─ Footer.astro
│  │  ├─ Icon.astro
│  │  ├─ SectionHeading.astro
│  │  ├─ PageHero.astro
│  │  ├─ ServiceCard.astro
│  │  ├─ CategoryCard.astro
│  │  ├─ ScheduleBlock.astro
│  │  ├─ ContactCta.astro
│  │  ├─ InfoNotice.astro
│  │  ├─ MapEmbed.astro
│  │  └─ LegalContent.astro
│  ├─ data/                    # contenido y datos del negocio (fuente de verdad)
│  │  ├─ business.ts
│  │  ├─ navigation.ts
│  │  ├─ services.ts
│  │  ├─ categories.ts
│  │  ├─ moneyTransfer.ts
│  │  ├─ seo.ts
│  │  └─ legal.ts
│  ├─ layouts/
│  │  └─ Layout.astro          # HTML base, SEO, header, footer
│  ├─ pages/                   # rutas basadas en archivos
│  │  ├─ index.astro
│  │  ├─ productos-latinos.astro
│  │  ├─ envio-de-dinero.astro
│  │  ├─ servicios.astro
│  │  ├─ contacto.astro
│  │  ├─ aviso-legal.astro
│  │  └─ privacidad.astro
│  ├─ styles/global.css        # tokens, reset, utilidades y estilos globales
│  └─ types/icons.ts           # nombres válidos de iconos
├─ astro.config.mjs
├─ package.json
└─ README.md
```

## 5. Guías de Astro aplicadas al proyecto

### Componentes `.astro` frente a islas

- Usar componentes `.astro` para todo lo que sea HTML y CSS.
- **No añadir hidratación ni `client:*` salvo necesidad real y justificada.** La web actual funciona sin JavaScript de cliente.
- Para interacciones simples, preferir HTML nativo: `<details>/<summary>` para el menú móvil, enlaces `tel:`, `mailto:`, anclas y el mapa embebido.
- Si algún día se añade una isla, documentar por qué, qué framework usa y qué coste de JS implica.

### Layouts y rutas

- `src/layouts/Layout.astro` envuelve todas las páginas: `<head>`, skip link, `Header`, `<main id="contenido">` y `Footer`.
- Las rutas se crean con archivos en `src/pages`. El proyecto usa `trailingSlash: 'always'`; los enlaces internos deben terminar en `/` (por ejemplo `/servicios/`).
- Cada página pasa `title` y `description` al layout. Los textos están centralizados en `src/data/seo.ts`.
- Para las páginas internas, usar `PageHero` y `SectionHeading` para mantener la jerarquía visual y semántica.

### Contenido en `src/data`

- **No hardcodear datos del negocio en los componentes.** Dirección, teléfono, email, horario, servicios, categorías, compañías de paquetería y textos legales viven en `src/data`.
- Actualizar `src/data/business.ts` es el primer paso si cambia un dato. Revisar después `seo.ts`, `legal.ts` y el JSON-LD de `Layout.astro`.
- Escribir el contenido de la interfaz en **español** y con tildes correctas.
- No añadir precios, comisiones, tipos de cambio, stock ni plazos inventados.

### Imágenes y `astro:assets`

- Importar imágenes locales desde `src/assets` y renderizarlas con `Image` de `astro:assets` (nunca con rutas externas).
- Las ilustraciones actuales son SVG propios y funcionan como placeholders. Astro las sirve como SVG; no las transforma.
- Si se sustituyen por fotos JPG/WebP, usar `Image` con `widths`/`sizes` para generar versiones optimizadas y mantener `width`/`height` para evitar saltos de layout.
- Escribir siempre un `alt` descriptivo en español. Si una imagen es decorativa, `alt=""`.
- Archivos que deben servirse sin transformación (favicon, imagen Open Graph, robots) van en `public/`.
- La imagen Open Graph se genera a partir de `src/assets/og/og-cyber-market.svg` y se guarda como `public/og-cyber-market.png` (1200×630). Si se cambia el diseño, regenerar el PNG.

### Estilos

- Tokens de color, tipografía, radios, sombras y transiciones en `src/styles/global.css`.
- Estilos específicos de componente en su bloque `<style>` scoped.
- Nombres de clase tipo BEM: `bloque__elemento--modificador`.
- Reutilizar utilidades globales (`.container`, `.section`, `.button`, `.card-grid`, `.tag-list`, `.notice`, `.step-list`, etc.) antes de duplicar CSS.
- Diseño **mobile-first**, con breakpoints en `min-width`.
- Respetar `prefers-reduced-motion`.
- Mantener contraste suficiente y foco visible (`:focus-visible`).

### SEO y metadatos

- `Layout.astro` genera `title`, `meta description`, canonical, Open Graph, Twitter Card y JSON-LD `LocalBusiness`.
- Cada página debe tener título y descripción únicos en `src/data/seo.ts`.
- **Pendiente de configuración:** definir `site` en `astro.config.mjs` con el dominio real. Sin él, canonical y URLs absolutas de Open Graph apuntan al entorno local.
- Si se añade un sitemap, instalar `@astrojs/sitemap`, configurarlo en `astro.config.mjs` y descomentar la línea de `public/robots.txt`.
- El JSON-LD debe reflejar exactamente los datos de `business.ts` (dirección, teléfono, email y horario).

### Accesibilidad

- HTML semántico: `header`, `nav`, `main`, `section`, `footer`, `address`, `article`.
- Un solo `h1` por página y jerarquía de encabezados coherente.
- Skip link al contenido y `aria-current="page"` en la navegación activa.
- `aria-label` en navegaciones y `title` en el iframe del mapa.
- Enlaces externos con `rel="noopener noreferrer"` y aviso de nueva pestaña para lectores de pantalla.
- Formularios: no existen; si se añaden en el futuro, etiquetas, mensajes de error y foco accesibles.

## 6. Convenciones de código y nombres

- Componentes y layouts: `PascalCase.astro` (`ServiceCard.astro`).
- Páginas: `kebab-case.astro` (`productos-latinos.astro`).
- Datos y utilidades: `camelCase.ts` (`moneyTransfer.ts`), tipos en `PascalCase`.
- Variables y funciones en inglés; textos visibles en español.
- Usar `import type` para tipos y `satisfies` cuando ayude a validar datos.
- Evitar `any` y estilos inline. Los acentos y colores por tarjeta se resuelven con clases (`--terracotta`, `--teal`, etc.).
- No añadir dependencias sin necesidad. Consultar antes de incorporar una librería de UI, animaciones o iconos.

## 7. Datos del negocio que no deben alterarse ni inventarse

Fuente de verdad: `src/data/business.ts`, `src/data/services.ts`, `src/data/categories.ts` y `src/data/moneyTransfer.ts`.

- **Nombre:** Cyber Market
- **Dirección:** Avda. García Barbón, 102, 36201 Vigo (Pontevedra)
- **Teléfono:** 986 135 225
- **Email:** cyber.market.vigo@gmail.com
- **Horario:** lunes a domingo y festivos, de 10:00 a 01:00
- **Servicios:** ciber, locutorio, recargas móviles, envío de dinero con Ria y Transfast, fotocopias, encuadernaciones, fax, reparación de móviles y ordenadores, liberación de móviles, venta de componentes informáticos y punto de recogida y envío de paquetería (Celeritas, Amazon, Nickel, GLS, InPost, UPS, Vinted Go, Kanguro, Ontime).
- **Productos:** comida latina, pan, bollería, café para llevar, bebidas, gominolas, revistas y artículos para el fumador.
- **Web informativa:** no se realizan ventas online.

Reglas:

- No cambiar horarios, dirección, teléfono ni email sin confirmación.
- No publicar precios, comisiones, tipos de cambio, stock ni disponibilidad concreta.
- No afirmar que se realizan envíos de dinero online.
- No usar logotipos de terceros.
- Si un dato no está confirmado, remitir a la tienda o al teléfono.

## 8. Flujo de trabajo y commits

- Usar **Conventional Commits** en español, por ejemplo:
  - `feat: añade la página de contacto`
  - `fix: corrige el contraste del botón secundario`
  - `docs: actualiza AGENTS.md`
  - `chore: elimina restos del starter`
- Hacer commits pequeños por feature, no uno gigante al final.
- Antes de cada commit: `pnpm build` y revisar `git status`.
- **No hacer push ni cambiar de rama** salvo petición expresa.
- El repositorio ya está inicializado. No volver a inicializarlo.
- No revertir cambios de otras personas sin revisarlos antes.

## 9. Checklist antes de dar una tarea por terminada

- [ ] `pnpm build` compila sin errores.
- [ ] No hay enlaces internos rotos ni rutas sin `/` final.
- [ ] Revisado a 390 px, 768 px y 1280 px; sin scroll horizontal.
- [ ] Navegación con teclado y foco visible; skip link funcional.
- [ ] Títulos y descripciones SEO únicos.
- [ ] Datos del negocio sin cambios ni invenciones.
- [ ] Sin carrito, formularios, pagos, simuladores ni precios.
- [ ] Imágenes locales con `alt` en español.
- [ ] Si se ha añadido contenido, actualizar `src/data` y no el componente directamente.

## 10. Placeholders y pendientes antes de publicar

- Dominio definitivo en `astro.config.mjs` (`site`), para canonical y Open Graph absolutas.
- Datos fiscales del titular y revisión legal de `src/data/legal.ts`.
- Número de WhatsApp real en `business.ts` (ahora `null`; el botón no se muestra).
- Enlace/embed definitivo del mapa si se quiere un pin exacto.
- Sustituir las ilustraciones SVG por fotografías reales de la tienda y los productos.
- Sustituir la imagen Open Graph por una definitiva si cambia la marca.
- Confirmar la disponibilidad real de cada compañía de paquetería y servicio.
- Añadir redes sociales si el negocio las facilita.
- Configurar sitemap cuando exista dominio.
