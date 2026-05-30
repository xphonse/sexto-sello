# Documentación del Sitio Web (Next.js)

## Descripción General

El sitio web de Sexto Sello es una aplicación **Next.js 14** con App Router que proporciona acceso a oraciones y cantos religiosos a través de un sitio web estático. Está desplegado en [sextosello.com](https://sextosello.com/).

⚠️ **Nota importante**: A pesar de que la carpeta se llama `packages/nestjs`, este es un proyecto **Next.js**, no NestJS. El nombre es histórico y se mantiene por compatibilidad.

## Características Principales

- ✨ **Static Site Generation (SSG)**: Todas las páginas se generan en tiempo de build
- 🎨 **Tailwind CSS**: Estilización moderna y responsiva
- 🚀 **Next.js 14 App Router**: Routing basado en archivos con React Server Components
- 📱 **Responsive Design**: Funciona en móviles, tablets y desktop
- 🔍 **SEO-friendly**: Pre-renderizado estático para mejor indexación
- 🌐 **No Backend**: Sitio completamente estático

## Tecnologías

- **Framework**: Next.js 14.2.5
- **React**: 18
- **Styling**: Tailwind CSS 3.4.1
- **Fonts**: Google Fonts (Inter, Roboto)
- **TypeScript**: 5.x
- **Build Tool**: Nx 19.5.3

## Estructura del Proyecto

```
packages/nestjs/
├── app/                          # App Router de Next.js
│   ├── layout.tsx               # Layout raíz
│   ├── page.tsx                 # Página principal (/)
│   ├── globals.css              # Estilos globales + Tailwind
│   ├── canto/
│   │   ├── page.tsx            # Lista de cantos (/canto)
│   │   └── [slug]/
│   │       └── page.tsx        # Detalle de canto (/canto/[slug])
│   └── oracion/
│       ├── page.tsx            # Lista de oraciones (/oracion)
│       └── [slug]/
│           └── page.tsx        # Detalle de oración (/oracion/[slug])
├── components/                  # Componentes reutilizables
│   ├── Button.tsx              # Botón de navegación
│   └── Paragraph.tsx           # Wrapper de párrafo
├── helpers/                     # Funciones utilitarias
│   └── slug.ts                 # Generador de slugs
├── public/                      # Assets estáticos
│   └── images/
│       └── google-play-badge.png
├── next.config.mjs             # Configuración de Next.js
├── tailwind.config.ts          # Configuración de Tailwind
├── tsconfig.json               # Configuración de TypeScript
├── package.json                # Dependencias y scripts
├── imgLoader.js                # Loader custom para imágenes
└── postcss.config.mjs          # Configuración de PostCSS
```

## Inicio Rápido

### Prerrequisitos

```bash
# Desde la raíz del monorepo:
npm install
nx build data  # CRÍTICO: compilar datos compartidos primero
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
nx dev nestjs

# Abrir http://localhost:3000
```

El servidor se recargará automáticamente al hacer cambios en el código.

### Build de Producción

```bash
# Generar sitio estático
nx build nestjs

# El output estará en packages/nestjs/out/
```

### Linting

```bash
# Ejecutar ESLint
nx lint nestjs

# Auto-fix problemas
nx lint nestjs --fix
```

## Rutas y Navegación

### Estructura de Rutas

```
/                         → Página principal
/oracion                  → Lista de 14 oraciones
/oracion/[slug]           → Detalle de oración individual
/canto                    → Lista de 143 cantos
/canto/[slug]             → Detalle de canto individual
```

### Generación de Slugs

Los slugs se generan automáticamente usando `helpers/slug.ts`:

**Formato**: `{page}-{title-normalizado}`

**Ejemplo**:
- Título: "LEVÁNTATE, ISRAEL"
- Página: "3"
- Slug: `"3-levantate-israel"`

**Proceso**:
1. Elimina acentos y diacríticos
2. Remueve caracteres especiales
3. Convierte espacios a guiones
4. Convierte a minúsculas

### Static Site Generation

Todas las rutas dinámicas se pre-generan usando `generateStaticParams()`:

```typescript
// En /canto/[slug]/page.tsx
export function generateStaticParams() {
  return CHOIRS.map((choir) => ({
    slug: generateSlug(choir),
  }))
}
```

Esto genera 143 páginas estáticas para cantos y 14 para oraciones en tiempo de build.

## Consumo de Datos

El sitio consume datos de la biblioteca compartida `libs/data`:

```typescript
import { CHOIRS, PRAYERS } from 'data'
import type { Choir, Prayer } from 'data'
```

**Importante**: `libs/data` debe estar compilado (`nx build data`) antes de ejecutar el sitio.

## Estilización

### Tailwind CSS

El proyecto usa Tailwind CSS para estilos. Los estilos se configuran en:

- `tailwind.config.ts`: Configuración de Tailwind
- `app/globals.css`: Estilos globales y directivas de Tailwind

**Clases comunes usadas**:
- `flex`, `justify-center`, `items-center`: Flexbox
- `rounded-full`: Bordes redondeados
- `text-center`, `text-xl`: Tipografía
- `w-96`, `h-12`: Tamaños fijos
- `border`, `border-black`: Bordes

### Fonts

Dos Google Fonts se importan:
- **Inter**: Font principal del sitio (layout.tsx)
- **Roboto**: Font de la página principal (page.tsx)

```typescript
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
```

## Metadata y SEO

Metadata configurada en `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Sexto Sello',
  description: 'Oraciones y Cantos dados al Sexto Sello',
}
```

Cada página puede sobrescribir esto con su propio metadata.

## Imágenes

### Custom Image Loader

El sitio usa un loader custom (`imgLoader.js`) para manejar imágenes en la exportación estática:

```javascript
export default function myImageLoader({ src }) {
  return `/images/${src}`
}
```

Esto permite que las imágenes funcionen correctamente después del build estático.

### Uso de Imágenes

```tsx
import Image from 'next/image'

<Image
  src="/images/google-play-badge.png"
  alt="Google Play"
  width={200}
  height={60}
/>
```

Las imágenes deben estar en `public/images/`.

## Comandos Disponibles

```bash
# Desarrollo
nx dev nestjs                 # Puerto 3000

# Producción
nx build nestjs              # Build estático
nx start nestjs              # Servidor de producción

# Linting
nx lint nestjs               # ESLint
nx lint nestjs --fix         # Auto-fix

# Clean
rm -rf packages/nestjs/.next # Limpiar caché
```

## Configuración

### next.config.mjs

```javascript
const nextConfig = {
  output: 'export',  // Exportación estática
  images: {
    loader: 'custom',
    loaderFile: './imgLoader.js',
  },
}
```

**`output: 'export'`** genera un sitio completamente estático sin necesidad de servidor Node.js.

### TypeScript

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "jsx": "preserve",
    "moduleResolution": "bundler",
    "paths": {
      "@/*": ["./*"]
    },
    // ...
  }
}
```

### ESLint

```json
{
  "extends": ["next/core-web-vitals", "prettier"]
}
```

Extiende las reglas recomendadas de Next.js y Prettier.

## Renderizado de Contenido

### Cantos (Choirs)

Los cantos usan **saltos de línea con `/n`**:

```typescript
// En libs/data/choirs.ts
paragraphs: [
  'Primera línea /nSegunda línea /nTercera línea',
  'Siguiente párrafo',
]

// En el componente
{paragraph.split('/n').map((line, i) => (
  <React.Fragment key={i}>
    {line}
    {i < lines.length - 1 && <br />}
  </React.Fragment>
))}
```

### Oraciones (Prayers)

Las oraciones usan **arrays anidados**:

```typescript
// En libs/data/prayers.ts
paragraphs: [
  ['Primera línea del párrafo 1'],
  ['Línea 1 del párrafo 2', 'Línea 2 del párrafo 2'],
  ['Párrafo 3'],
]

// En el componente
{paragraph.map((line, i) => (
  <p key={i}>{line}</p>
))}
```

## Patrones Comunes

### Navegación con Botones

```tsx
import { Button } from '@/components/Button'

<Button text="Oraciones" url="/oracion" />
<Button text="Regresar" url="/" />
```

### Navegación Prev/Next

```tsx
const currentIndex = CHOIRS.findIndex(c => c.id === id)
const prevChoir = currentIndex > 0 ? CHOIRS[currentIndex - 1] : null
const nextChoir = currentIndex < CHOIRS.length - 1 ? CHOIRS[currentIndex + 1] : null

{prevChoir && (
  <a href={`/canto/${generateSlug(prevChoir)}`}>← Anterior</a>
)}
{nextChoir && (
  <a href={`/canto/${generateSlug(nextChoir)}`}>Siguiente →</a>
)}
```

## Flujo de Usuario

```
1. Usuario visita sextosello.com
   ↓
2. Ve página principal con dos opciones:
   - Oraciones
   - Cantos
   ↓
3. Selecciona una opción
   ↓
4. Ve lista de 14 oraciones o 143 cantos
   ↓
5. Selecciona un ítem específico
   ↓
6. Ve el contenido completo con navegación prev/next
   ↓
7. Puede regresar a la lista o ir al home
```

## Deploy

Ver [Deployment Guide](./deployment.md) para instrucciones detalladas de despliegue.

## Recursos Adicionales

- [Arquitectura](./architecture.md) - Decisiones de diseño y estructura
- [Componentes](./components.md) - Documentación de componentes
- [Routing](./routing.md) - Sistema de rutas detallado
- [Deployment](./deployment.md) - Proceso de despliegue

## Referencias Externas

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

---

**Ubicación del código**: `packages/nestjs/`
**Puerto de desarrollo**: 3000
**Build output**: `packages/nestjs/out/`
