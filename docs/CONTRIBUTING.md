# Guía de Contribución

¡Gracias por tu interés en contribuir a Sexto Sello! Esta guía te ayudará a configurar tu entorno de desarrollo y entender nuestro proceso de contribución.

## Tabla de Contenidos

- [Configuración Inicial](#configuración-inicial)
- [Workflow de Desarrollo](#workflow-de-desarrollo)
- [Estándares de Código](#estándares-de-código)
- [Cómo Agregar Contenido](#cómo-agregar-contenido)
- [Testing](#testing)
- [Pull Requests](#pull-requests)
- [Estructura de Commits](#estructura-de-commits)

## Configuración Inicial

### 1. Fork y Clone

```bash
# Fork el repositorio en GitHub
# Luego clona tu fork:
git clone https://github.com/TU-USUARIO/sexto-sello.git
cd sexto-sello
```

### 2. Instalar Dependencias

```bash
# Asegúrate de usar Node v18.20.4
node -v  # Debe mostrar v18.20.4

# Si usas nvm:
nvm use

# Instalar Nx globalmente
npm add --global nx@latest

# Instalar dependencias del proyecto
npm install

# CRÍTICO: Compilar la biblioteca de datos
nx build data
```

### 3. Verificar que Todo Funciona

**Sitio Web:**
```bash
nx dev nestjs
# Abre http://localhost:3000 - deberías ver la página principal
```

**App Móvil:**
```bash
nx start react-native
# Escanea el QR con Expo Go
```

## Workflow de Desarrollo

### Estructura de Branches

- `main` - Rama principal (producción)
- `feature/nombre-feature` - Nuevas características
- `fix/descripcion-bug` - Corrección de bugs
- `content/descripcion` - Agregar/editar contenido (oraciones/cantos)

### Crear una Nueva Feature

```bash
# Crear branch desde main
git checkout main
git pull origin main
git checkout -b feature/nombre-descriptivo

# Hacer cambios
# ...

# Commit (ver sección de commits)
git add .
git commit -m "feat: descripción del cambio"

# Push
git push origin feature/nombre-descriptivo
```

## Estándares de Código

### ESLint y Prettier

Este proyecto usa ESLint y Prettier para mantener consistencia en el código.

**Ejecutar linting:**
```bash
# Sitio web
nx lint nestjs

# App móvil
nx lint react-native
```

**Auto-fix:**
```bash
# El linting corregirá automáticamente problemas básicos
# Pero algunos requieren corrección manual
```

### Convenciones de Código

#### TypeScript

```typescript
// ✅ BIEN: Usar interfaces para objetos
interface Choir {
  id: string;
  page: string;
  title: string;
  paragraphs: string[];
}

// ✅ BIEN: Tipar explícitamente
const getChoirById = (id: string): Choir | undefined => {
  return CHOIRS.find(choir => choir.id === id);
};

// ❌ MAL: Usar any
const getChoir = (id: any): any => {
  return CHOIRS.find(choir => choir.id === id);
};
```

#### React/React Native

```tsx
// ✅ BIEN: Componentes funcionales con TypeScript
interface ButtonProps {
  text: string;
  url: string;
  w?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, url, w = "32" }) => {
  return <a href={url}>{text}</a>;
};

// ✅ BIEN: Usar hooks correctamente
const [count, setCount] = useState<number>(0);

// ❌ MAL: Componentes de clase (evitar)
class Button extends React.Component { }
```

#### Naming Conventions

- **Archivos**:
  - Componentes: `PascalCase.tsx` (ej: `Button.tsx`)
  - Utilities: `camelCase.ts` (ej: `slug.ts`)
  - Screens: `PascalCase.tsx` (ej: `Home.tsx`)

- **Variables/Funciones**: `camelCase`
  ```typescript
  const fontSize = 12;
  const getUserName = () => {};
  ```

- **Constantes**: `UPPER_SNAKE_CASE`
  ```typescript
  export const CHOIRS: Choirs = [];
  export const DEFAULT_FONT_SIZE = 12;
  ```

- **Componentes**: `PascalCase`
  ```typescript
  export const FooterArrows = () => {};
  ```

### Estructura de Archivos

```
# ✅ BIEN: Organización clara
screens/
  Home.tsx
  Cantos.tsx
components/
  Button.tsx
  FooterArrows.tsx

# ❌ MAL: Archivos mezclados
components/
  home-screen.tsx
  Button.tsx
  cantos.jsx
```

## Cómo Agregar Contenido

### Agregar un Nuevo Canto

1. Edita `libs/data/choirs.ts`:

```typescript
export const CHOIRS: Choirs = [
  // ... cantos existentes
  {
    id: '143',  // Siguiente ID disponible
    page: '123', // Número de página del libro
    title: 'TÍTULO DEL CANTO',
    paragraphs: [
      'Primera estrofa /nCon saltos de línea usando /n',
      'Segunda estrofa /nMás contenido',
      'CORO',  // Los coros se escriben en mayúsculas
      'Letra del coro /nCon sus líneas',
    ],
  },
];
```

2. **Importante**: Usar `/n` para saltos de línea (no `\n`)
3. Compilar: `nx build data`
4. Verificar en ambas apps

### Agregar una Nueva Oración

1. Edita `libs/data/prayers.ts`:

```typescript
export const PRAYERS: Prayers = [
  // ... oraciones existentes
  {
    id: '14',  // Siguiente ID disponible
    page: '50', // Número de página
    title: 'TÍTULO DE LA ORACIÓN',
    paragraphs: [
      ['Primera línea del primer párrafo'],
      [
        'Primera línea del segundo párrafo',
        'Segunda línea del segundo párrafo',
        'Tercera línea del segundo párrafo',
      ],
      ['Tercer párrafo simple'],
    ],
  },
];
```

2. **Estructura de paragraphs**: `string[][]` (array bidimensional)
   - Primer nivel: Párrafos
   - Segundo nivel: Líneas dentro del párrafo

3. Compilar: `nx build data`
4. Verificar en ambas apps

### Editar Contenido Existente

1. Busca el canto/oración por su `id` o `title`
2. Modifica el contenido preservando la estructura
3. **Importante**: No cambies `id` ni `page` sin consultar
4. Compilar: `nx build data`
5. Verifica que los cambios se reflejen correctamente

## Testing

### Testing Manual

Actualmente el proyecto no tiene tests automatizados. Testing manual es requerido:

**Para cambios en libs/data:**
```bash
# 1. Compilar
nx build data

# 2. Probar en sitio web
nx dev nestjs
# Navega a la oración/canto modificado

# 3. Probar en app móvil
nx start react-native
# Verifica en Expo Go
```

**Para cambios en UI:**
- Verifica en diferentes tamaños de pantalla
- Prueba navegación (flechas prev/next)
- Verifica tema claro/oscuro (solo app móvil)
- Prueba cambio de tamaño de fuente (solo app móvil)

### Checklist de Testing

- [ ] El build de data compila sin errores
- [ ] No hay errores de TypeScript
- [ ] ESLint pasa sin warnings
- [ ] La navegación funciona correctamente
- [ ] El contenido se muestra formateado correctamente
- [ ] Los saltos de línea (`/n`) se renderizan bien
- [ ] (App móvil) Funciona en tema claro y oscuro
- [ ] (App móvil) Funciona con diferentes tamaños de fuente

## Pull Requests

### Antes de Crear un PR

1. **Asegúrate de que tu branch está actualizado:**
   ```bash
   git checkout main
   git pull origin main
   git checkout tu-branch
   git rebase main
   ```

2. **Verifica que todo funciona:**
   ```bash
   nx build data
   nx lint nestjs
   nx lint react-native
   ```

3. **Commits limpios** (ver sección siguiente)

### Template de PR

```markdown
## Descripción

Breve descripción de los cambios realizados.

## Tipo de Cambio

- [ ] Nuevo contenido (canto/oración)
- [ ] Corrección de contenido existente
- [ ] Nueva funcionalidad
- [ ] Corrección de bug
- [ ] Mejora de documentación
- [ ] Refactoring (sin cambios funcionales)

## Cambios Realizados

- Cambio 1
- Cambio 2
- Cambio 3

## Screenshots (si aplica)

[Agregar capturas de pantalla]

## Checklist

- [ ] He probado mis cambios localmente
- [ ] El código pasa linting
- [ ] He actualizado la documentación si es necesario
- [ ] Los commits siguen la convención del proyecto
- [ ] He compilado `libs/data` después de cambios de contenido

## Información Adicional

Cualquier contexto adicional sobre el PR.
```

### Proceso de Revisión

1. **Automated Checks**: GitHub Actions verificará linting (si está configurado)
2. **Code Review**: Un mantenedor revisará tu código
3. **Cambios Solicitados**: Si hay feedback, haz los cambios necesarios
4. **Merge**: Una vez aprobado, tu PR será mergeado

## Estructura de Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/es/) para mensajes de commit claros:

### Formato

```
<tipo>(<scope>): <descripción>

[cuerpo opcional]

[footer opcional]
```

### Tipos de Commit

- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Formato, punto y coma faltantes, etc (no afecta código)
- `refactor`: Refactoring de código
- `content`: Agregar/editar contenido (oraciones/cantos)
- `chore`: Tareas de mantenimiento, dependencias, etc

### Ejemplos

```bash
# Agregar nuevo canto
git commit -m "content(choirs): agregar canto 'Alabemos al Señor' página 124"

# Corregir typo en oración
git commit -m "content(prayers): corregir ortografía en Padre Nuestro"

# Nueva funcionalidad
git commit -m "feat(mobile): agregar botón de compartir en pantalla de cantos"

# Corrección de bug
git commit -m "fix(website): corregir navegación prev/next en último canto"

# Documentación
git commit -m "docs: actualizar guía de instalación con requisitos de Xcode"

# Refactoring
git commit -m "refactor(mobile): extraer lógica de tema a custom hook"

# Chores
git commit -m "chore: actualizar dependencias de expo a 51.0.39"
```

### Scope Opcionales

- `choirs` - Relacionado con cantos
- `prayers` - Relacionado con oraciones
- `website` - Sitio Next.js
- `mobile` - App React Native
- `data` - Biblioteca compartida
- `docs` - Documentación

### Commits Multi-línea

```bash
git commit -m "feat(mobile): implementar modo oscuro

- Agregar toggle de tema en footer
- Crear hook useThemeColors
- Persistir preferencia en AsyncStorage
- Actualizar todos los componentes

Closes #42"
```

## Preguntas Frecuentes

### ¿Puedo agregar dependencias nuevas?

Sí, pero:
1. Justifica por qué es necesaria
2. Verifica que sea mantenida activamente
3. Considera el tamaño del bundle
4. Discútelo en un issue primero

### ¿Cómo pruebo cambios en iOS sin Mac?

Usa la versión web de Expo:
```bash
nx web react-native
```

O pide a otro colaborador que pruebe en iOS.

### ¿Qué hago si encuentro contenido con errores?

1. Verifica contra el libro físico si es posible
2. Si no tienes el libro, crea un issue describiendo el error
3. Si estás seguro, crea un PR con la corrección

### ¿Puedo cambiar el estilo/diseño?

Sí, pero:
1. Crea un issue primero para discutir el cambio
2. Mantén la consistencia con el diseño actual
3. Provee screenshots del antes y después
4. Asegúrate de que funcione en ambas apps (si aplica)

## Código de Conducta

- Sé respetuoso con otros contribuidores
- Acepta feedback constructivo
- Mantén discusiones profesionales
- Ayuda a otros cuando puedas

## Contacto

Si tienes preguntas que no están cubiertas aquí:

- **Email**: christian.ramirez.gutierrez.92@gmail.com
- **Issues**: Crea un issue en GitHub
- **Discusiones**: Usa GitHub Discussions

## Recursos Útiles

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de React Native](https://reactnative.dev/docs/getting-started)
- [Documentación de Expo](https://docs.expo.dev/)
- [Documentación de Nx](https://nx.dev/)
- [Conventional Commits](https://www.conventionalcommits.org/es/)

---

¡Gracias por contribuir a Sexto Sello! Cada aporte, grande o pequeño, es valioso para la comunidad.
