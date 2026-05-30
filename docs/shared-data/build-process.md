# Proceso de Build

## Compilación TypeScript

### Comando

```bash
nx build data
```

Equivalente a:
```bash
cd libs/data
tsc
```

### Configuración

**Archivo**: `libs/data/tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

### Flags Importantes

- **`module: "commonjs"`**: Genera require/exports
- **`declaration: true`**: Genera archivos `.d.ts`
- **`declarationMap: true`**: Source maps para tipos
- **`sourceMap: true`**: Source maps para debugging
- **`outDir: "./dist"`**: Salida en carpeta dist/

## Output del Build

### Estructura de dist/

```
libs/data/dist/
├── index.js           # CommonJS module
├── index.d.ts         # Type declarations
├── index.d.ts.map     # Source map de tipos
├── index.js.map       # Source map de código
├── choirs.js
├── choirs.d.ts
├── choirs.d.ts.map
├── choirs.js.map
├── prayers.js
├── prayers.d.ts
├── prayers.d.ts.map
└── prayers.js.map
```

### Ejemplo de Output

**Input** (`choirs.ts`):
```typescript
export interface Choir {
  id: string;
  title: string;
}

export const CHOIRS: Choir[] = [
  { id: '0', title: 'CANTO 1' }
]
```

**Output** (`choirs.js`):
```javascript
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHOIRS = void 0;

exports.CHOIRS = [
  { id: '0', title: 'CANTO 1' }
];
```

**Output** (`choirs.d.ts`):
```typescript
export interface Choir {
  id: string;
  title: string;
}

export declare const CHOIRS: Choir[];
```

## Package Configuration

**Archivo**: `libs/data/package.json`

```json
{
  "name": "data",
  "version": "1.0.0",
  "main": "dist/index.js",
  "types": "dist/*/**.d.ts",
  "scripts": {
    "build": "tsc"
  },
  "devDependencies": {
    "typescript": "^5.5.4"
  }
}
```

### Campos Clave

- **`main`**: Entry point para requires
- **`types`**: Type definitions para TypeScript
- **`build` script**: Ejecuta TypeScript compiler

## Dependencias en Apps

### Workspace Protocol

En `package.json` de apps:

```json
{
  "dependencies": {
    "data": "*"  // ← Workspace protocol
  }
}
```

Esto linkea al paquete local en `libs/data`.

### Resolución de Módulos

```
App imports 'data'
  ↓
npm workspaces resuelve a libs/data
  ↓
Lee libs/data/package.json
  ↓
main: "dist/index.js"
  ↓
Carga dist/index.js (CommonJS)
```

## Cuándo Recompilar

### Siempre después de:

1. Clonar el repositorio
2. Cambiar de branch
3. Editar `choirs.ts` o `prayers.ts`
4. Modificar interfaces/types
5. Pull de cambios remotos que afecten libs/data

### Cómo Saber si Necesitas Recompilar

```bash
# Ver si dist/ existe y está actualizado
ls -la libs/data/dist/

# Si dist/ no existe o es más viejo que .ts:
nx build data
```

## Errores de Build

### Error: Cannot find module 'data'

**Causa**: No se ha ejecutado `nx build data`

**Solución**:
```bash
nx build data
```

### Error: Type errors en choirs.ts

**Causa**: Estructura de datos no coincide con interfaces

**Solución**: Corrige los errores de tipo indicados

```
libs/data/choirs.ts:123:5 - error TS2322
Type 'number' is not assignable to type 'string'.
  123   id: 5,  ← Cambiar a id: '5'
```

### Warning: Unused variable

**Solución**: Elimina código no usado o ignora si es intencional

## Integración con Nx

Nx cachea builds para mejorar performance:

```bash
# Build con cache
nx build data

# Forzar rebuild sin cache
nx build data --skip-nx-cache

# Ver cache info
nx show project data --web
```

## Clean Build

Para limpiar y rebuild desde cero:

```bash
# Eliminar dist/
rm -rf libs/data/dist

# Rebuild
nx build data
```

Ver [README](./README.md) | [Data Structures](./data-structures.md)
