# Componentes del Sitio Web

## Componentes Disponibles

El sitio web mantiene un conjunto mínimo de componentes reutilizables. Todos los componentes son "tontos" (presentacionales, sin estado).

## Button

**Ubicación**: `packages/nestjs/components/Button.tsx`

### Descripción

Botón de navegación estilizado con borde redondeado y ancho customizable.

### Props

```typescript
interface ButtonProps {
  text: string  // Texto del botón
  url: string   // URL de destino
  w?: string    // Ancho en unidades de Tailwind (default: "32")
}
```

### Código Completo

```typescript
import React from 'react'

interface ButtonProps {
  text: string
  url: string
  w?: string
}

export const Button: React.FC<ButtonProps> = ({ text, url, w = "32" }) => {
  return (
    <a href={url}>
      <div
        className={`w-${w} h-12 rounded-full border border-black flex justify-center items-center m-4 hover:bg-gray-100`}
      >
        <p className="truncate px-4">{text}</p>
      </div>
    </a>
  )
}
```

### Uso

```tsx
import { Button } from '@/components/Button'

// Botón con ancho por defecto (w-32)
<Button text="Oraciones" url="/oracion" />

// Botón con ancho custom (w-48)
<Button text="Texto Más Largo" url="/canto" w="48" />

// Botón de regreso
<Button text="Regresar" url="/" />
```

### Estilos

- **Borde**: `border border-black` - Borde negro de 1px
- **Forma**: `rounded-full` - Bordes completamente redondeados
- **Tamaño**: `h-12` - Altura fija, ancho variable
- **Layout**: `flex justify-center items-center` - Contenido centrado
- **Spacing**: `m-4` - Margen de 1rem alrededor
- **Hover**: `hover:bg-gray-100` - Fondo gris claro al pasar mouse
- **Texto**: `truncate px-4` - Trunca si es muy largo, padding horizontal

### Ejemplo Visual

```
┌─────────────────────┐
│                     │
│     Oraciones       │  ← Texto centrado
│                     │
└─────────────────────┘
   Borde redondeado
```

### Notas

- El componente usa `<a>` en lugar de Next.js `<Link>` por simplicidad
- La prop `w` se interpola en la clase: `w-${w}` → `w-32`, `w-48`, etc.
- **Importante**: Solo valores de Tailwind válidos funcionarán (8, 12, 16, 24, 32, 48, etc.)

---

## Paragraph

**Ubicación**: `packages/nestjs/components/Paragraph.tsx`

### Descripción

Wrapper simple para párrafos de texto con ancho fijo y margen inferior.

### Props

```typescript
interface ParagraphProps {
  children: React.ReactNode  // Contenido del párrafo
}
```

### Código Completo

```typescript
import React from 'react'

interface ParagraphProps {
  children: React.ReactNode
}

export const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return (
    <p className="mb-4 w-96 text-center">
      {children}
    </p>
  )
}
```

### Uso

```tsx
import { Paragraph } from '@/components/Paragraph'

<Paragraph>
  Texto del párrafo aquí
</Paragraph>

<Paragraph>
  {prayer.title}
</Paragraph>
```

### Estilos

- **Ancho**: `w-96` - Ancho fijo de 24rem (384px)
- **Alineación**: `text-center` - Texto centrado
- **Spacing**: `mb-4` - Margen inferior de 1rem

### Notas

- Componente extremadamente simple, casi un alias de `<p>`
- Asegura consistencia de ancho en el sitio
- Usado principalmente en páginas de contenido

---

## Componentes Inline (No Extraídos)

Algunos componentes simples se definen inline en las páginas en lugar de archivos separados:

### Link de Navegación (Flechas)

Usado en páginas de detalle:

```tsx
{prevChoir && (
  <a
    href={`/canto/${generateSlug(prevChoir)}`}
    className="text-blue-600 hover:text-blue-800"
  >
    ← Anterior
  </a>
)}

{nextChoir && (
  <a
    href={`/canto/${generateSlug(nextChoir)}`}
    className="text-blue-600 hover:text-blue-800"
  >
    Siguiente →
  </a>
)}
```

### Google Play Badge

En homepage:

```tsx
<Image
  src="/images/google-play-badge.png"
  loader={myImageLoader}
  alt="Google Play Badge"
  width={200}
  height={60}
/>
```

---

## Patrones de Composición

### Layout de Página Típico

```tsx
<div className="flex justify-center items-center min-h-screen flex-col">
  <div className="flex flex-col items-center">
    {/* Contenido */}
  </div>
</div>
```

**Estructura**:
- Contenedor exterior: Centra todo vertical y horizontalmente
- Contenedor interior: Apila elementos verticalmente

### Lista de Ítems

```tsx
<div className="flex flex-wrap justify-center">
  {CHOIRS.map((choir) => (
    <Button
      key={choir.id}
      text={`${choir.page} - ${choir.title}`}
      url={`/canto/${generateSlug(choir)}`}
    />
  ))}
</div>
```

**Características**:
- `flex-wrap`: Permite múltiples filas
- `justify-center`: Centra los botones
- Usa `key` para optimización de React

### Detalle con Navegación

```tsx
<div className="w-full max-w-2xl px-4">
  {/* Header */}
  <h1 className="text-2xl font-bold text-center mb-4">
    {choir.page} - {choir.title}
  </h1>

  {/* Contenido */}
  <div className="space-y-4">
    {choir.paragraphs.map((paragraph, index) => (
      <div key={index}>
        {paragraph.split('/n').map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i < lines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    ))}
  </div>

  {/* Footer Navigation */}
  <div className="flex justify-between mt-8">
    {prevChoir && <a>← Anterior</a>}
    <a>Lista</a>
    {nextChoir && <a>Siguiente →</a>}
  </div>
</div>
```

---

## Mejores Prácticas

### 1. Componentes Puros

```tsx
// ✅ BIEN: Componente puro
export const Button: React.FC<ButtonProps> = ({ text, url }) => {
  return <a href={url}>{text}</a>
}

// ❌ MAL: Componente con side effects
export const Button: React.FC<ButtonProps> = ({ text, url }) => {
  console.log('Rendering button')  // Side effect
  return <a href={url}>{text}</a>
}
```

### 2. Props Tipadas

```tsx
// ✅ BIEN: Props con interface
interface ButtonProps {
  text: string
  url: string
  w?: string
}

// ❌ MAL: Props sin tipar
const Button = ({ text, url, w }: any) => {
  return <a href={url}>{text}</a>
}
```

### 3. Valores por Defecto

```tsx
// ✅ BIEN: Default en parámetro
export const Button: React.FC<ButtonProps> = ({ text, url, w = "32" }) => {
  // ...
}

// ⚠️ Alternativa: Default en destructuring
export const Button: React.FC<ButtonProps> = (props) => {
  const { text, url, w = "32" } = props
  // ...
}
```

### 4. Composición sobre Herencia

```tsx
// ✅ BIEN: Componentes compuestos
<Button text="Click" url="/page" />

// ❌ MAL: Herencia (no usado en React)
class MyButton extends Button { }
```

---

## Utilidades de Renderizado

### Renderizar con Line Breaks

Para cantos (usan `/n`):

```tsx
const renderWithLineBreaks = (text: string) => {
  return text.split('/n').map((line, i, arr) => (
    <React.Fragment key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </React.Fragment>
  ))
}

// Uso
<p>{renderWithLineBreaks(paragraph)}</p>
```

### Renderizar Arrays Anidados

Para oraciones (usan `string[][]`):

```tsx
{prayer.paragraphs.map((paragraph, pIndex) => (
  <div key={pIndex} className="mb-4">
    {paragraph.map((line, lIndex) => (
      <p key={lIndex}>{line}</p>
    ))}
  </div>
))}
```

---

## Componentes Futuros (Sugerencias)

Si el proyecto crece, considera extraer:

### NavBar
```tsx
<NavBar>
  <NavLink href="/">Home</NavLink>
  <NavLink href="/oracion">Oraciones</NavLink>
  <NavLink href="/canto">Cantos</NavLink>
</NavBar>
```

### Card
```tsx
<Card>
  <CardTitle>{title}</CardTitle>
  <CardContent>{content}</CardContent>
</Card>
```

### PrevNextNav
```tsx
<PrevNextNav
  prev={prevItem}
  next={nextItem}
  onPrevClick={...}
  onNextClick={...}
/>
```

---

## Testing de Componentes (Futuro)

Cuando se implementen tests:

```tsx
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button text="Test" url="/test" />)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  it('links to correct URL', () => {
    render(<Button text="Test" url="/test" />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/test')
  })
})
```

---

**Filosofía**: Mantener componentes pequeños, reutilizables y sin estado. El sitio es estático, así que no se necesitan componentes complejos con gestión de estado.
