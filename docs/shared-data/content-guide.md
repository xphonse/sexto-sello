# Guía de Contenido

## Agregar un Nuevo Canto

### 1. Editar choirs.ts

```typescript
// libs/data/choirs.ts
export const CHOIRS: Choirs = [
  // ... cantos existentes
  {
    id: '143',  // Siguiente ID disponible (string)
    page: '200',  // Página del libro (string)
    title: 'NOMBRE DEL CANTO EN MAYÚSCULAS',
    paragraphs: [
      'Primera estrofa /nCon saltos de línea /nUsando /n',
      'Segunda estrofa',
      'CORO',  // Los coros se marcan así
      'Letra del coro /nCon sus líneas',
      'Tercera estrofa /nY así sucesivamente',
    ],
  },
]
```

### 2. Convenciones

- **id**: String numérico secuencial ("143", "144", etc.)
- **page**: String del número de página del libro
- **title**: TODO EN MAYÚSCULAS
- **paragraphs**: Usa `/n` para saltos de línea (NO `\n`)
- **Coros**: Se indican con palabra "CORO" en un párrafo separado

### 3. Recompilar

```bash
nx build data
```

### 4. Verificar

```bash
# Website
nx dev nestjs
# Navega a /canto y busca el nuevo canto

# Mobile
nx start react-native
# Navega a Cantos
```

## Agregar una Nueva Oración

### 1. Editar prayers.ts

```typescript
// libs/data/prayers.ts
export const PRAYERS: Prayers = [
  // ... oraciones existentes
  {
    id: '14',  // Siguiente ID
    page: '50',  // Página del libro
    title: 'NOMBRE DE LA ORACIÓN',
    paragraphs: [
      [
        'Primera línea del primer párrafo',
        'Segunda línea del primer párrafo',
      ],
      [
        'Párrafo 2, línea única',
      ],
      [
        'Párrafo 3, línea 1',
        'Párrafo 3, línea 2',
        'Párrafo 3, línea 3',
      ],
    ],
  },
]
```

### 2. Estructura de paragraphs

```typescript
// Cada elemento del array exterior es un párrafo
// Cada elemento del array interior es una línea
paragraphs: [
  ['Línea 1 párrafo 1', 'Línea 2 párrafo 1'],  // Párrafo 1
  ['Línea única párrafo 2'],                     // Párrafo 2
  ['Línea 1 párrafo 3', 'Línea 2 párrafo 3'],  // Párrafo 3
]
```

### 3. Recompilar y verificar

```bash
nx build data
nx dev nestjs  # o nx start react-native
```

## Editar Contenido Existente

### Encontrar el Ítem

```bash
# Buscar por título
grep -n "LEVANTATE" libs/data/choirs.ts

# Buscar por ID
grep -n "'id': '5'" libs/data/choirs.ts
```

### Modificar

1. Abre el archivo (`choirs.ts` o `prayers.ts`)
2. Encuentra el objeto por `id` o `title`
3. Modifica el contenido
4. **No cambies `id` o `page` sin consultar**
5. Guarda

### Recompilar

```bash
nx build data
```

## Errores Comunes

### ❌ Usar `\n` en lugar de `/n`

```typescript
// INCORRECTO
paragraphs: ['Línea 1\nLínea 2']

// CORRECTO
paragraphs: ['Línea 1 /nLínea 2']
```

### ❌ ID como número

```typescript
// INCORRECTO
id: 143

// CORRECTO
id: '143'
```

### ❌ Estructura incorrecta en prayers

```typescript
// INCORRECTO
paragraphs: ['Línea 1', 'Línea 2']

// CORRECTO
paragraphs: [['Línea 1'], ['Línea 2']]
```

### ❌ Olvidar recompilar

```bash
# Siempre después de editar:
nx build data
```

## Validación

### TypeScript te ayuda

Si cometes errores de estructura, TypeScript lo detectará:

```
Error TS2322: Type 'number' is not assignable to type 'string'.
  id: 143  ← Aquí está el error
```

### Checklist

- [ ] ID es string único
- [ ] Page es string
- [ ] Title en MAYÚSCULAS
- [ ] Cantos: `paragraphs` es `string[]` con `/n`
- [ ] Oraciones: `paragraphs` es `string[][]`
- [ ] No hay comas faltantes
- [ ] Recompilado con `nx build data`
- [ ] Verificado en ambas apps

## Formato de Contenido

### Caracteres Especiales

✅ Se pueden usar:
- Acentos: á, é, í, ó, ú
- Ñ mayúscula y minúscula
- Signos de apertura: ¡, ¿
- Puntuación: , . ; : ! ?

### Mayúsculas

- **Títulos**: TODO EN MAYÚSCULAS
- **Contenido**: Respeta el formato original del libro
- **Coros**: Palabra "CORO" en mayúsculas

Ver [Data Structures](./data-structures.md) | [Build Process](./build-process.md)
