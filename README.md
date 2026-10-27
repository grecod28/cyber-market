# Cyber Market — web informativa

Sitio web informativo de **Cyber Market**, ciber-locutorio y tienda de barrio en Vigo. Da a conocer los servicios, los productos latinoamericanos, el horario y la ubicación de la tienda física.

> **No es una tienda online.** No hay carrito, pagos, formularios de envío de dinero, simuladores, precios ni comisiones.

## Stack

- [Astro 7](https://docs.astro.build) con salida estática.
- TypeScript estricto.
- CSS scoped + tokens globales. Sin Tailwind y sin JavaScript de cliente.
- pnpm.

## Puesta en marcha

```sh
pnpm install
pnpm dev
```

La web estará disponible en `http://localhost:4321`.

### Scripts

| Comando        | Acción                                      |
| :------------- | :------------------------------------------ |
| `pnpm install` | Instala dependencias                        |
| `pnpm dev`     | Servidor de desarrollo                      |
| `pnpm build`   | Genera la web estática en `./dist/`         |
| `pnpm preview` | Previsualiza la build localmente            |
| `pnpm astro`   | Ejecuta la CLI de Astro                     |

Servidor en segundo plano (entorno de agentes):

```sh
pnpm astro dev --background
pnpm astro dev status
pnpm astro dev logs
pnpm astro dev stop
```

## Estructura

```text
src/
├─ assets/          Ilustraciones locales e imagen Open Graph
├─ components/      Componentes reutilizables .astro
├─ data/            Datos del negocio, servicios, categorías, SEO y legales
├─ layouts/         Layout compartido
├─ pages/           Rutas del sitio
├─ styles/          Tokens y estilos globales
└─ types/           Tipos compartidos
public/             Favicon, Open Graph y robots.txt
```

### Dónde editar el contenido

| Contenido                            | Archivo                          |
| :----------------------------------- | :------------------------------- |
| Dirección, teléfono, email, horario  | `src/data/business.ts`           |
| Servicios y compañías de paquetería  | `src/data/services.ts`           |
| Categorías de productos latinos      | `src/data/categories.ts`         |
| Envío de dinero (Ria y Transfast)    | `src/data/moneyTransfer.ts`      |
| Títulos y descripciones SEO          | `src/data/seo.ts`                |
| Aviso legal y privacidad             | `src/data/legal.ts`              |
| Navegación                           | `src/data/navigation.ts`         |
| Estilos y paleta                     | `src/styles/global.css`          |

Las páginas están en `src/pages` y se generan por rutas de archivo. Los enlaces internos usan `/` final.

## Antes de publicar

1. Define `site` en `astro.config.mjs` con el dominio real.
2. Revisa y completa `src/data/legal.ts` con los datos fiscales y la revisión legal.
3. Añade el número de WhatsApp en `src/data/business.ts` si existe.
4. Sustituye las ilustraciones SVG por fotografías reales y actualiza los `alt`.
5. Revisa el enlace/embed del mapa en `business.ts`.
6. Regenera `public/og-cyber-market.png` si cambia la imagen Open Graph.
7. Confirma la disponibilidad de cada compañía de paquetería.

## Despliegue

`pnpm build` genera una web completamente estática en `dist/`, lista para cualquier hosting estático (Netlify, Vercel, Cloudflare Pages, GitHub Pages, servidor propio…).

No requiere variables de entorno ni backend.

## Documentación para agentes

Consulta [`AGENTS.md`](./AGENTS.md) para las convenciones de código, el alcance del proyecto, los datos que no deben alterarse y el flujo de commits.
