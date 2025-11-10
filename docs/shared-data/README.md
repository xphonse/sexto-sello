# Biblioteca de Datos Compartida (libs/data)

## Propósito

La biblioteca `libs/data` es el corazón del monorepo - contiene todo el contenido religioso (143 cantos y 14 oraciones) compartido entre el sitio web y la app móvil.

## Ventajas de Centralizar Datos

✅ **Una sola fuente de verdad**: Actualizar contenido una vez, disponible en ambas plataformas  
✅ **Tipado compartido**: Interfaces TypeScript reutilizadas  
✅ **Consistencia garantizada**: Mismo contenido en web y móvil  
✅ **Build independiente**: Se compila antes que las apps

## Estructura

```
libs/data/
├── index.ts           # Exporta todo
├── choirs.ts          # 143 cantos (2,312 líneas)
├── prayers.ts         # 14 oraciones (344 líneas)
├── tsconfig.json      # Config TypeScript
├── package.json       # Metadata del paquete
└── dist/              # Compilado (generado por tsc)
    ├── index.js
    ├── index.d.ts
    ├── choirs.js
    ├── choirs.d.ts
    ├── prayers.js
    └── prayers.d.ts
```

## Build Process

```bash
# Compilar TypeScript a JavaScript
nx build data

# Equivalente a:
cd libs/data
tsc
```

**Output**:
- CommonJS modules (`.js`)
- Type declarations (`.d.ts`)
- Source maps (`.js.map`, `.d.ts.map`)

## Consumo en Apps

### Next.js Website

```typescript
import { CHOIRS, PRAYERS } from 'data'
import type { Choir, Prayer } from 'data'

export default function Page() {
  return (
    <div>
      {CHOIRS.map(choir => (
        <p key={choir.id}>{choir.title}</p>
      ))}
    </div>
  )
}
```

### React Native App

```typescript
import { CHOIRS, PRAYERS } from 'data'
import type { Choir, Prayer } from 'data'

export const CantosScreen = () => {
  return (
    <ScrollView>
      {CHOIRS.map(choir => (
        <Text key={choir.id}>{choir.title}</Text>
      ))}
    </ScrollView>
  )
}
```

## Dataset

- **143 cantos** del libro "Coros del Templo del Medio Día"
- **14 oraciones** fundamentales del Sexto Sello
- Contenido en español con caracteres especiales (ñ, á, é, etc.)

## Documentación Adicional

- [Data Structures](./data-structures.md) - Interfaces detalladas
- [Content Guide](./content-guide.md) - Cómo agregar/editar contenido
- [Build Process](./build-process.md) - Compilación TypeScript

---

**Ubicación**: `libs/data/`  
**Comando build**: `nx build data`  
**Package name**: `data`
