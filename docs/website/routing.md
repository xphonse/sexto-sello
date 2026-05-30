# Sistema de Rutas del Sitio Web

## Rutas Disponibles

| Ruta | Archivo | Descripción | Tipo |
|------|---------|-------------|------|
| `/` | `app/page.tsx` | Página principal | Estática |
| `/oracion` | `app/oracion/page.tsx` | Lista de 14 oraciones | Estática |
| `/oracion/[slug]` | `app/oracion/[slug]/page.tsx` | Detalle de oración | Dinámica (14 páginas) |
| `/canto` | `app/canto/page.tsx` | Lista de 143 cantos | Estática |
| `/canto/[slug]` | `app/canto/[slug]/page.tsx` | Detalle de canto | Dinámica (143 páginas) |

**Total de páginas generadas**: 1 + 2 + 14 + 143 = **160 páginas estáticas**

## Generación de Rutas Dinámicas

### generateStaticParams

```typescript
// app/canto/[slug]/page.tsx
export function generateStaticParams() {
  return CHOIRS.map((choir) => ({
    slug: generateSlug(choir),
  }))
}

// Genera:
// [
//   { slug: "3-levantate-israel" },
//   { slug: "4-jesus" },
//   { slug: "5-al-rey-de-los-cielos" },
//   ... // 143 total
// ]
```

### Acceso a Params

```typescript
export default function Page({ params }: { params: { slug: string } }) {
  const choir = CHOIRS.find(c => generateSlug(c) === params.slug)
  
  if (!choir) {
    notFound()  // 404 page
  }
  
  return <div>{choir.title}</div>
}
```

## Generación de Slugs

Ver `helpers/slug.ts`:

```typescript
export const generateSlug = <T extends { page: string; title: string }>(
  item: T
): string => {
  const normalizedTitle = item.title
    .normalize('NFD')                    // Decompose diacritics
    .replace(/[\u0300-\u036f]/g, '')    // Remove accents
    .replace(/[^a-zA-Z ]/g, '')         // Letters + spaces only
    .trim()
    .replace(/\s+/g, ' ')               // Collapse spaces
    .replace(/\s/g, '-')                // Spaces to hyphens
    .toLowerCase()

  return `${item.page}-${normalizedTitle}`
}
```

**Ejemplos**:
- Input: `{ page: "3", title: "LEVÁNTATE, ISRAEL" }`
- Output: `"3-levantate-israel"`

## Navegación

### Links Internos

```tsx
// Navegación simple
<a href="/oracion">Ver oraciones</a>

// Navegación con slug
<a href={`/canto/${generateSlug(choir)}`}>
  {choir.title}
</a>
```

### Navegación Prev/Next

```typescript
const currentIndex = CHOIRS.findIndex(c => c.id === id)
const prevChoir = currentIndex > 0 ? CHOIRS[currentIndex - 1] : null
const nextChoir = currentIndex < CHOIRS.length - 1 ? CHOIRS[currentIndex + 1] : null

// Render
{prevChoir && (
  <a href={`/canto/${generateSlug(prevChoir)}`}>← Anterior</a>
)}
{nextChoir && (
  <a href={`/canto/${generateSlug(nextChoir)}`}>Siguiente →</a>
)}
```

##

 Build Output

Después de `nx build nestjs`, la estructura de salida es:

```
out/
├── index.html                    # /
├── oracion/
│   ├── index.html               # /oracion
│   ├── 1-oraciones-dadas-al-sexto-sello/
│   │   └── index.html           # /oracion/[slug]
│   ├── 2-acto-de-contricion/
│   │   └── index.html
│   └── ...                      # 14 total
├── canto/
│   ├── index.html               # /canto
│   ├── 3-levantate-israel/
│   │   └── index.html           # /canto/[slug]
│   ├── 4-jesus/
│   │   └── index.html
│   └── ...                      # 143 total
└── _next/
    └── static/                   # JS, CSS, etc.
```

## Metadata por Ruta

```typescript
// app/layout.tsx (global)
export const metadata: Metadata = {
  title: 'Sexto Sello',
  description: 'Oraciones y Cantos dados al Sexto Sello',
}

// app/oracion/[slug]/page.tsx (específico)
export async function generateMetadata({ params }): Promise<Metadata> {
  const prayer = PRAYERS.find(p => generateSlug(p) === params.slug)
  
  return {
    title: `${prayer.title} - Sexto Sello`,
    description: `Oración: ${prayer.title}`,
  }
}
```

---

Ver también: [Architecture](./architecture.md) | [Deployment](./deployment.md)
