# Doripinchos Digital Menu

Menú digital moderno para **Doripinchos**, un negocio de comidas rápidas. La aplicación muestra todo el menú en una experiencia web rápida, responsive y enfocada a móvil, con pedidos directos por WhatsApp. Sin login, sin base de datos, sin panel administrativo: solo un menú que carga rápido, se ve profesional y vende.

## Objetivo

Reemplazar el volante tradicional saturado por un menú digital ordenado, limpio y atractivo, manteniendo una identidad visual urbana y comercial, y permitiendo al cliente pedir cualquier producto al instante por WhatsApp.

## Stack

| Capa | Tecnología | Versión |
|---|---|---|
| Framework | [Next.js](https://nextjs.org/) (App Router + Turbopack) | **16.2.6** |
| Runtime | [React](https://react.dev/) | **19.2.6** |
| Lenguaje | [TypeScript](https://www.typescriptlang.org/) | **5.9.3** |
| Estilos | [Tailwind CSS](https://tailwindcss.com/) | **3.4.19** |
| Animaciones | [Framer Motion](https://www.framer.com/motion/) | **12.40.0** |
| Iconos | [Lucide React](https://lucide.dev/) | **1.16.0** |
| Linter | [ESLint](https://eslint.org/) (flat config) + `eslint-config-next` | **9.39.4** / **16.2.6** |
| PostCSS | postcss + autoprefixer | **8.5.15** / **10.5.0** |
| Despliegue | [Railway](https://railway.app/) | — |

## Funcionalidades

- Hero con CTAs **Pedir por WhatsApp** y **Ver menú**.
- 11 categorías filtrables vía chips (con scroll horizontal en móvil).
- **Buscador** que filtra productos en tiempo real por nombre y descripción.
- **Cards** de producto con badges (`Popular`, `Picante`, `Recomendado`, `Grande`), precio en COP y botón individual de **Pedir por WhatsApp** con mensaje prellenado.
- **Botón flotante** de WhatsApp con animación.
- Sección de **domicilios** con número y aviso de "$500 por desechable".
- **Footer** con copyright dinámico.
- Estado vacío elegante cuando no hay resultados.
- Animaciones suaves con Framer Motion.
- Diseño dark (carbón + rojo intenso + naranja/ámbar) totalmente responsive.

## Estructura

```
src/
  app/
    layout.tsx         # Root layout + metadata + Open Graph + fuentes
    page.tsx           # Página principal
    globals.css        # Estilos base + utilidades Tailwind
  components/
    Hero.tsx
    MenuSection.tsx
    ProductCard.tsx
    CategoryTabs.tsx
    SearchBar.tsx
    DeliveryInfo.tsx
    WhatsappButton.tsx
    Footer.tsx
  data/
    menu.data.ts       # Productos, categorías y datos del negocio
  lib/
    format.ts          # Helper de precios en COP
    whatsapp.ts        # Helpers de enlaces WhatsApp
  types/
    menu.ts            # Tipos del menú
eslint.config.mjs       # Flat config (ESLint 9 + eslint-config-next 16)
next.config.mjs
tailwind.config.ts
postcss.config.mjs
tsconfig.json
package.json
```

## Requisitos previos

- **Node.js 20.9 o superior** (recomendado Node 22 o 24 LTS, alineado con Railway).
- **npm** (es el gestor oficial del proyecto; no uses pnpm ni yarn).

El `package.json` declara:

```json
"engines": { "node": ">=20.9.0" }
```

## Instalación

```bash
npm install
```

## Comandos disponibles

```bash
npm run dev      # entorno de desarrollo en http://localhost:3000
npm run build    # build de producción (Turbopack)
npm run start    # arranca el build (respeta $PORT)
npm run lint     # ejecuta ESLint directamente (Next 16 ya no incluye `next lint`)
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm run start
```

## Deploy en Railway

1. Sube el repositorio a GitHub.
2. En Railway: **New Project → Deploy from GitHub repo** y selecciona este repositorio.
3. Railway detecta Next.js automáticamente. Si no, configura:
   - **Build Command:** `npm run build`
   - **Start Command:** `npm run start`
4. Railway inyecta la variable `PORT`. El script `start` ya la respeta (`next start -p ${PORT:-3000}`).
5. Versión de Node: gracias a `engines.node`, Railway usa Node 20+ automáticamente.
6. Despliega. Railway expone una URL pública del tipo `https://tu-proyecto.up.railway.app`.

No requiere base de datos, variables de entorno ni Dockerfile.

## Editar productos del menú

Toda la información del menú vive en [`src/data/menu.data.ts`](src/data/menu.data.ts).

Para agregar un producto, añade un objeto al arreglo `PRODUCTS`:

```ts
{
  id: "hb-nueva",
  name: "Mi Nueva Hamburguesa",
  description: "Ingredientes especiales.",
  price: 19000,
  category: "hamburguesas",
  badges: ["Popular"],
}
```

Categorías disponibles:
`hamburguesas`, `perros`, `salchipapas`, `doritos`, `arepas`, `burrilocos`, `papas-locas`, `pinchos`, `platos-especiales`, `adiciones`, `bebidas`.

Badges opcionales: `Popular`, `Picante`, `Recomendado`, `Grande`.

Para cambiar el número de WhatsApp, el nombre del negocio o el aviso de desechables, edita la constante `BUSINESS` en el mismo archivo.

## Cómo funciona el botón de WhatsApp

Los helpers viven en [`src/lib/whatsapp.ts`](src/lib/whatsapp.ts):

- `generalOrderLink()` → `https://wa.me/<numero>?text=Hola, quiero hacer un pedido.`
- `productOrderLink(nombre)` → `https://wa.me/<numero>?text=Hola, quiero pedir: <nombre>`

Estos enlaces se usan en:
- Botón "Pedir por WhatsApp" del Hero.
- Botón flotante (`WhatsappButton`).
- Botón "Pedir" de cada `ProductCard`.
- Sección de domicilios y footer.

El número está centralizado en `BUSINESS.whatsapp` (formato internacional sin `+`, ej. `573132726775`).

## Seguridad y `npm audit`

`npm audit` reporta **2 vulnerabilidades moderate** que provienen de una versión de `postcss` empaquetada **internamente** por Next.js 16.2.6. El `postcss` que usamos en nuestro pipeline (`^8.5.10`) ya está actualizado. La única "fix" que propone `npm audit` es hacer downgrade a `next@9.3.3`, lo cual es un breaking change absurdo y **no se aplica**. La vulnerabilidad HIGH original que bloqueó Railway (en `next@14.2.15`) ya está resuelta al estar en `next@16.2.6`.

## Estado actual del proyecto

- ✅ `npm run lint` — sin errores ni warnings.
- ✅ `npm run build` — compila con Next.js 16.2.6 + Turbopack y prerenderiza estáticamente.
- ✅ `npm audit` — sin vulnerabilidades de severidad HIGH ni CRITICAL.
- ✅ Listo para deploy en Railway con `npm install && npm run build && npm run start`.

## Autor

Desarrollado para Doripinchos como menú digital de portafolio.
