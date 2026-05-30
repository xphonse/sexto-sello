# Arquitectura del Sitio Web

## Visión General

El sitio web de Sexto Sello está construido con **Next.js 14** usando el **App Router** (no Pages Router). La decisión clave de arquitectura es usar **Static Site Generation (SSG)** para generar un sitio completamente estático que no requiere servidor Node.js en producción.

## Decisiones de Diseño

### ¿Por qué Next.js?

1. **Static Site Generation**: Permite pre-generar todas las páginas en tiempo de build
2. **File-based routing**: Estructura de rutas intuitiva basada en archivos
3. **Optimizaciones automáticas**: Code splitting, prefetching, optimización de imágenes
4. **SEO**: Pre-renderizado para mejor indexación en buscadores
5. **Developer Experience**: Hot reload, TypeScript support, error handling

### ¿Por qué Static Export?

```javascript
// next.config.mjs
export default {
  output: 'export',  // ← Genera sitio estático
}
```

**Ventajas**:
- **Hosting simple**: Puede desplegarse en cualquier servidor de archivos estáticos
- **Performance**: Tiempo de respuesta ultra-rápido (solo archivos estáticos)
- **Costo**: Hosting gratuito o muy barato (Vercel, Netlify, GitHub Pages)
- **Seguridad**: Sin backend, sin superficie de ataque
- **Escalabilidad**: CDN puede servir millones de requests

**Desventajas aceptadas**:
- No hay Server-Side Rendering dinámico
- No hay API routes
- Contenido solo se actualiza con nuevo build

### ¿Por qué Tailwind CSS?

1. **Utility-first**: Desarrollo rápido sin escribir CSS custom
2. **Bundle size**: Solo los estilos usados se incluyen en producción
3. **Consistencia**: Sistema de diseño integrado
4. **Responsive**: Utilities para mobile, tablet, desktop
5. **No CSS global**: Evita conflictos de estilos

## Patrón de Arquitectura

### App Router Structure

Next.js 14 App Router usa una estructura basada en carpetas:

```
app/
├── layout.tsx          # Layout compartido (envuelve todas las páginas)
├── page.tsx            # Página raíz (/)
├── globals.css         # Estilos globales
├── canto/
│   ├── page.tsx       # /canto (lista)
│   └── [slug]/
│       └── page.tsx   # /canto/[slug] (detalle dinámico)
└── oracion/
    ├── page.tsx       # /oracion (lista)
    └── [slug]/
        └── page.tsx   # /oracion/[slug] (detalle dinámico)
```

**Cada carpeta con `page.tsx` = una ruta accesible**

### Component Architecture

```
┌─────────────────────────────────────┐
│          RootLayout                 │
│  (Inter font, metadata, body)       │
│                                     │
│  ┌─────────────────────────────┐  │
│  │         Page                │  │
│  │                             │  │
│  │  ┌──────────┐ ┌──────────┐ │  │
│  │  │  Button  │ │  Button  │ │  │
│  │  └──────────┘ └──────────┘ │  │
│  │                             │  │
│  │  ┌──────────────────────┐  │  │
│  │  │     Paragraph        │  │  │
│  │  └──────────────────────┘  │  │
│  └─────────────────────────────┘  │
└─────────────────────────────────────┘
```

**Características**:
- **Layout persistente**: No se re-renderiza al navegar
- **Componentes pequeños**: Máxima reutilización
- **Sin estado**: Componentes puros (no hooks de estado)
- **Server Components**: Por defecto en App Router

## Flujo de Datos

### 1. Build Time

```
┌──────────────┐
│  libs/data   │  (TypeScript source)
│  choirs.ts   │
│  prayers.ts  │
└──────┬───────┘
       │ nx build data
       ↓
┌──────────────┐
│ libs/data/   │  (Compiled JavaScript)
│   dist/      │
│   *.js       │
│   *.d.ts     │
└──────┬───────┘
       │ import { CHOIRS, PRAYERS } from 'data'
       ↓
┌──────────────────┐
│  packages/nestjs │
│  app/**/*.tsx    │
└──────┬───────────┘
       │ nx build nestjs
       ↓
┌──────────────────┐
│ Static HTML/CSS/ │  (Build output)
│ JS files in out/ │
└──────────────────┘
```

### 2. Runtime (Usuario)

```
Usuario solicita /canto/3-levantate-israel
       ↓
CDN/Server sirve HTML estático pre-generado
       ↓
Navegador renderiza página (ya tiene todo el contenido)
       ↓
Usuario hace clic en "Siguiente →"
       ↓
Navegación client-side a /canto/4-jesus
       ↓
Next.js hace prefetch del siguiente HTML
       ↓
Transición instantánea (no recarga de página)
```

**No hay llamadas a API**: Todo el contenido está embebido en el HTML estático.

## Static Site Generation (SSG)

### generateStaticParams

Para rutas dinámicas, Next.js necesita saber qué páginas generar en build time:

```typescript
// app/canto/[slug]/page.tsx
export function generateStaticParams() {
  return CHOIRS.map((choir) => ({
    slug: generateSlug(choir),  // "3-levantate-israel"
  }))
}
```

**Proceso**:
1. Build time: Next.js llama `generateStaticParams()`
2. Retorna array de 143 objetos: `[{ slug: "3-..." }, { slug: "4-..." }, ...]`
3. Para cada slug, Next.js renderiza la página y guarda el HTML
4. Resultado: 143 archivos HTML estáticos en `out/canto/[slug]/`

**Ventaja**: Usuario obtiene HTML completo en primera carga, no espera JavaScript.

## Sistema de Slugs

### ¿Por qué Slugs?

URLs amigables y SEO:
- ❌ `/canto?id=3` (query params, no SEO-friendly)
- ✅ `/canto/3-levantate-israel` (slug, SEO-friendly)

### Generación

```typescript
// helpers/slug.ts
export const generateSlug = <T extends { page: string; title: string }>(
  item: T
): string => {
  const normalizedTitle = item.title
    .normalize('NFD')                    // Decompose accents
    .replace(/[\u0300-\u036f]/g, '')    // Remove diacritics
    .replace(/[^a-zA-Z ]/g, '')         // Keep only letters + spaces
    .trim()
    .replace(/\s+/g, ' ')               // Collapse multiple spaces
    .replace(/\s/g, '-')                // Space → hyphen
    .toLowerCase()                       // Lowercase

  return `${item.page}-${normalizedTitle}`
}
```

**Ejemplos**:
- `"LEVÁNTATE, ISRAEL"` → `"levantate-israel"`
- `"¡AL REY DE LOS CIELOS!"` → `"al-rey-de-los-cielos"`

### Lookup

Para encontrar el contenido del slug:

```typescript
const params = { slug: "3-levantate-israel" }

// Buscar en todos los cantos
const choir = CHOIRS.find(c => generateSlug(c) === params.slug)

if (!choir) {
  notFound()  // Next.js 404 page
}
```

## Estructura de Componentes

### Componentes Tontos (Dumb Components)

Todos los componentes son "tontos" (sin estado, solo presentación):

```typescript
// components/Button.tsx
interface ButtonProps {
  text: string
  url: string
  w?: string
}

export const Button: React.FC<ButtonProps> = ({ text, url, w = "32" }) => {
  return (
    <a href={url}>
      <div className={`w-${w} h-12 ...`}>
        <p>{text}</p>
      </div>
    </a>
  )
}
```

**Características**:
- Props tipadas con TypeScript
- Sin useState, useEffect, etc.
- Puramente presentacionales
- Fáciles de testear

### Pages como Smart Components

Las páginas (`page.tsx`) son "smart" (contienen lógica):

```typescript
export default function CantoDetailPage({ params }: { params: { slug: string } }) {
  // Lógica de búsqueda
  const choir = CHOIRS.find(c => generateSlug(c) === params.slug)

  // Lógica de navegación
  const currentIndex = CHOIRS.findIndex(c => c.id === choir.id)
  const prevChoir = currentIndex > 0 ? CHOIRS[currentIndex - 1] : null
  const nextChoir = currentIndex < CHOIRS.length - 1 ? CHOIRS[currentIndex + 1] : null

  // Renderizado
  return <div>...</div>
}
```

## Manejo de Estilos

### Global Styles

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  /* Estilos globales mínimos */
}
```

### Component Styles

Todos inline con Tailwind:

```tsx
<div className="flex justify-center items-center min-h-screen">
  <div className="w-96 text-center">
    <h1 className="text-2xl font-bold">Título</h1>
  </div>
</div>
```

**No hay archivos `.module.css`** ni `styled-components`.

## Optimizaciones

### 1. Font Optimization

```typescript
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',  // Evita FOIT (flash of invisible text)
})
```

Next.js descarga y self-hostea las fonts automáticamente.

### 2. Image Optimization

Aunque el sitio es estático, Next.js optimiza imágenes:

```tsx
<Image
  src="/images/google-play-badge.png"
  alt="Google Play"
  width={200}
  height={60}
  priority  // Carga eager si está above-the-fold
/>
```

### 3. Code Splitting

Next.js automáticamente hace code splitting por ruta:
- `/` → Carga solo JavaScript necesario para home
- `/canto` → Carga JavaScript de la lista de cantos
- Navegación subsecuente prefetchea rutas

### 4. Production Build

```bash
nx build nestjs
```

**Output**:
- Minificación de JS/CSS
- Tree shaking (elimina código no usado)
- Compresión gzip/brotli
- Source maps para debugging

## Limitaciones de Static Export

### No Soportado:

1. **Image Optimization API**: Necesita `loader: 'custom'`
2. **Rewrites/Redirects**: Manejado por hosting
3. **Server-Side Rendering**: Todo es estático
4. **API Routes**: No hay backend
5. **Incremental Static Regeneration**: Requiere rebuild completo

### Workarounds:

- **Imágenes**: Custom loader (`imgLoader.js`)
- **Redirects**: Configurar en Vercel/Netlify
- **Datos dinámicos**: Rebuild y redeploy

## Seguridad

### Seguridad por Diseño

Como es un sitio estático:
- ✅ No hay vulnerabilidades de backend
- ✅ No hay inyección SQL (no hay base de datos)
- ✅ No hay XSS server-side
- ✅ No hay CSRF (no hay formularios con estado)

### Riesgos Minimizados:

- **XSS client-side**: React escapa contenido por defecto
- **Dependency vulnerabilities**: `npm audit` regularmente
- **CDN attacks**: Usar HTTPS + Subresource Integrity

## Performance

### Métricas Objetivo

- **First Contentful Paint (FCP)**: < 1s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3s
- **Cumulative Layout Shift (CLS)**: < 0.1

### Estrategias:

1. **Static content**: Sin tiempo de servidor
2. **CDN**: Contenido cerca del usuario
3. **Compression**: Gzip/Brotli habilitado
4. **Minimal JavaScript**: Solo lo necesario por ruta
5. **Font optimization**: Self-hosted, preloaded

## Escalabilidad

### Horizontal

El sitio escala horizontalmente sin límite:
- CDN puede replicar contenido globalmente
- Cada nodo CDN sirve archivos estáticos
- No hay bottleneck de base de datos o servidor

### Vertical

No aplica (sin servidor backend).

### Actualizaciones de Contenido

Para agregar nuevo canto/oración:

```bash
# 1. Editar libs/data/choirs.ts
# 2. Recompilar data
nx build data

# 3. Rebuild sitio
nx build nestjs

# 4. Redeploy
# (proceso varía según hosting)
```

**Tiempo de actualización**: ~2-5 minutos (build + deploy)

## Diagrama de Arquitectura Final

```
┌─────────────────────────────────────────────────┐
│                                                 │
│            Usuario (Navegador)                  │
│                                                 │
└────────────────┬────────────────────────────────┘
                 │ HTTPS Request
                 ↓
┌─────────────────────────────────────────────────┐
│                    CDN                          │
│         (Vercel/Netlify/CloudFlare)             │
│  ┌─────────────────────────────────────────┐   │
│  │         Static HTML/CSS/JS              │   │
│  │  ┌──────────┐  ┌──────────┐            │   │
│  │  │  /       │  │  /canto  │            │   │
│  │  └──────────┘  └──────────┘            │   │
│  │  ┌──────────────────────────┐          │   │
│  │  │  /canto/[143 slugs]/     │          │   │
│  │  │  /oracion/[14 slugs]/    │          │   │
│  │  └──────────────────────────┘          │   │
│  └─────────────────────────────────────────┘   │
└─────────────────────────────────────────────────┘
                 ↑
                 │ Build/Deploy
                 │
┌────────────────┴────────────────────────────────┐
│          Developer Machine                      │
│                                                 │
│  ┌───────────────────────────────────────┐     │
│  │  libs/data/                           │     │
│  │    choirs.ts, prayers.ts              │     │
│  └───────────┬───────────────────────────┘     │
│              │ nx build data                    │
│              ↓                                  │
│  ┌───────────────────────────────────────┐     │
│  │  packages/nestjs/                     │     │
│  │    app/, components/, helpers/        │     │
│  └───────────┬───────────────────────────┘     │
│              │ nx build nestjs                  │
│              ↓                                  │
│  ┌───────────────────────────────────────┐     │
│  │  out/ (Static files)                  │     │
│  └───────────────────────────────────────┘     │
└─────────────────────────────────────────────────┘
```

## Próximos Pasos

- [Componentes](./components.md) - Documentación detallada de componentes
- [Routing](./routing.md) - Sistema de rutas y navegación
- [Deployment](./deployment.md) - Proceso de despliegue a producción

---

**Filosofía**: Mantener la arquitectura simple, estática y escalable. El contenido religioso no cambia frecuentemente, por lo que SSG es ideal.
