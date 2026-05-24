# Dripinchos Digital Menu

Menú digital moderno para **Dripinchos**, un negocio de comidas rápidas. La aplicación muestra todo el menú de forma organizada, llamativa y responsive, con pedidos directos por WhatsApp. Sin login, sin base de datos, sin panel admin: solo un menú que carga rápido y vende.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — animaciones suaves
- [Lucide React](https://lucide.dev/) — iconos
- Despliegue en [Railway](https://railway.app/)

## Estructura

```
src/
  app/
    layout.tsx        # Layout raíz + metadata + fuentes
    page.tsx          # Página principal
    globals.css       # Estilos base + utilidades Tailwind
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
    menu.data.ts      # Datos del menú y del negocio (editable)
  lib/
    format.ts         # Helper de precios en COP
    whatsapp.ts       # Helper de enlaces WhatsApp
  types/
    menu.ts           # Tipos del menú
```

## Editar el menú

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

Categorías disponibles: `hamburguesas`, `perros`, `salchipapas`, `doritos`, `arepas`, `burrilocos`, `papas-locas`, `pinchos`, `platos-especiales`, `adiciones`, `bebidas`.

Badges opcionales: `Popular`, `Picante`, `Recomendado`, `Grande`.

Para cambiar el número de WhatsApp o el aviso de desechables, edita la constante `BUSINESS` en el mismo archivo.

## Instalación

```bash
npm install
```

## Scripts

```bash
npm run dev      # desarrollo en http://localhost:3000
npm run build    # build de producción
npm run start    # arranca el build (lee $PORT si está definido)
npm run lint     # linter
```

## Deploy en Railway

1. Sube el repo a GitHub.
2. En Railway, **New Project → Deploy from GitHub repo** y selecciona este repositorio.
3. Railway detecta Next.js automáticamente. Si no, configura los siguientes comandos en el servicio:
   - **Build Command:** `npm run build`
   - **Start Command:** `npm run start`
4. Railway inyecta la variable `PORT`. El script `start` ya la respeta (`next start -p ${PORT:-3000}`).
5. Asegúrate de que la versión de Node sea **18+** (Railway usa 20 por defecto, perfecto).
6. Despliega. Railway expone una URL pública del tipo `https://tu-proyecto.up.railway.app`.

No se requiere base de datos ni variables de entorno adicionales.

## Notas

- El proyecto está optimizado para móvil — pruébalo en un celular real.
- Todos los botones de pedido abren WhatsApp con un mensaje prellenado.
- Para personalizar la paleta visual, edita [`tailwind.config.ts`](tailwind.config.ts).
