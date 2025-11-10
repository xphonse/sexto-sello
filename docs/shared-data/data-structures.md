# Estructuras de Datos

## Choir (Canto)

**Archivo**: `libs/data/choirs.ts`

### Interface

```typescript
type Paragraph = string

interface Choir {
  id: string         // "0", "1", "2", ..., "142"
  page: string       // Número de página en el libro
  title: string      // Título en mayúsculas
  paragraphs: Paragraph[]  // Array de strings
}

export type Choirs = Choir[]
```

### Ejemplo Real

```typescript
{
  id: '0',
  page: '3',
  title: 'LEVANTATE, ISRAEL',
  paragraphs: [
    'JEHOVA, EL ETERNO ES TU DIOS /nY EN SU NOMBRE CRISTO ESTA! /nCRISTO ESTA REINANDO YA',
    'CORO',
    '¡ LEVANTATE, ISRAEL !/n¿QUIEN LO SABRA ?/n¿SI EL FINAL DE LOS TIEMPOS /nCERCANO ESTA YA?'
  ],
}
```

### Convención `/n`

**Importante**: Los cantos usan `/n` (no `\n`) para indicar saltos de línea:

```typescript
'Primera línea /nSegunda línea /nTercera línea'
```

**Renderizado**:
- **Website**: `paragraph.split('/n').map(line => <>{line}<br /></>)`
- **Mobile**: `paragraph.split('/n').map(line => <Text>{line}</Text>)`

## Prayer (Oración)

**Archivo**: `libs/data/prayers.ts`

### Interface

```typescript
interface Prayer {
  id: string         // "0", "1", "2", ..., "13"
  page: string       // Número de página
  title: string      // Título en mayúsculas
  paragraphs: string[][]  // Array bidimensional
}

export type Prayers = Prayer[]
```

### Ejemplo Real

```typescript
{
  id: '0',
  page: '1',
  title: 'ORACIONES DADAS AL SEXTO SELLO',
  paragraphs: [
    [
      'La Preciosísima Sangre de Nuestro Señor Jesucristo...',
    ],
    [
      'Dios Padre confesión',
      'Dios Hijo comunión',
      'Dios Espíritu Santo extremaunción',
    ],
    [
      'Misterio Altísimo de la Santísima y Beatísima Trinidad...',
    ],
  ],
}
```

### Estructura de paragraphs

```typescript
paragraphs: [
  ['Línea única del párrafo 1'],
  ['Línea 1 del párrafo 2', 'Línea 2 del párrafo 2'],
  ['Párrafo 3 línea única'],
]
```

**Primer nivel**: Párrafos  
**Segundo nivel**: Líneas dentro del párrafo

### Renderizado

```tsx
{prayer.paragraphs.map((paragraph, pIdx) => (
  <div key={pIdx}>
    {paragraph.map((line, lIdx) => (
      <p key={lIdx}>{line}</p>
    ))}
  </div>
))}
```

## Diferencias Clave

| Aspecto | Choirs | Prayers |
|---------|--------|---------|
| **paragraphs** | `string[]` | `string[][]` |
| **Line breaks** | Usa `/n` | Usa arrays anidados |
| **Cantidad** | 143 ítems | 14 ítems |
| **Estructura** | Simple | Compleja |

## Exports

**Archivo**: `libs/data/index.ts`

```typescript
export * from './choirs'
export * from './prayers'

// Disponible para importar:
// - CHOIRS: Choirs
// - PRAYERS: Prayers
// - Choir (type)
// - Prayer (type)
// - Choirs (type)
// - Prayers (type)
```

Ver [Content Guide](./content-guide.md) | [Build Process](./build-process.md)
