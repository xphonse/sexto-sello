# Documentación de la App Móvil (React Native/Expo)

## Descripción General

La aplicación móvil de Sexto Sello es una app **React Native** construida con **Expo** que proporciona acceso a oraciones y cantos religiosos en dispositivos iOS y Android. Está publicada en [Google Play Store](https://play.google.com/store/apps/details?id=com.sextosello.cantos_y_coros).

## Características Principales

- 📱 **Multiplataforma**: iOS y Android desde una misma base de código
- 🎨 **Modo Claro/Oscuro**: Toggle de tema con persistencia
- 🔤 **Tamaño de Fuente Ajustable**: 12px - 36px
- 💾 **Persistencia Local**: AsyncStorage para preferencias
- 🧭 **Navegación Intuitiva**: React Navigation con 6 pantallas
- 🔄 **State Management**: Redux Toolkit
- 📦 **OTA Updates**: Actualizaciones sin pasar por la tienda
- 🚀 **Build con EAS**: Expo Application Services

## Tecnologías

- **React Native**: 0.74.3
- **Expo**: 51.0.22
- **React Navigation**: 6.x (Native Stack)
- **Redux Toolkit**: 1.8.2
- **AsyncStorage**: 1.23.1
- **TypeScript**: 5.3.3
- **Build**: Expo Application Services (EAS)

## Estructura del Proyecto

```
packages/react-native/
├── App.js                        # Entry point con Redux Provider
├── app.json                      # Configuración de Expo
├── eas.json                      # Configuración de EAS builds
├── babel.config.js               # Babel setup
├── tsconfig.json                 # TypeScript config
├── navigation/
│   └── Navigation.tsx           # React Navigation setup
├── screens/                      # 6 pantallas principales
│   ├── Home.tsx                 # Pantalla principal
│   ├── Oraciones.tsx            # Lista de oraciones
│   ├── Oracion.tsx              # Detalle de oración
│   ├── Cantos.tsx               # Lista de cantos
│   ├── Canto.tsx                # Detalle de canto
│   └── Informacion.tsx          # Información/About
├── components/                   # Componentes reutilizables
│   ├── MainFrame.js             # Wrapper de pantallas
│   ├── FooterArrows.js          # Navegación + settings
│   └── TitleButton.js           # Botón del home
├── store/                        # Redux
│   ├── store.ts                 # Store configuration
│   └── slices/
│       ├── ui.ts                # UI slice (theme, fontSize)
│       └── thunks.ts            # Async actions
├── hooks/
│   └── useThemeColors.ts        # Hook de tema
├── helpers/
│   └── speech.ts                # Text-to-speech (futuro)
├── data/
│   └── constants.ts             # Constantes de la app
└── assets/                       # Íconos e imágenes
    └── iconWhite.png
```

## Inicio Rápido

### Prerrequisitos

```bash
# Desde la raíz del monorepo
npm install
nx build data  # CRÍTICO
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
nx start react-native

# Escanear QR con Expo Go app en tu teléfono
```

### Builds de Plataforma

```bash
# iOS (requiere Xcode en macOS)
nx ios react-native

# Android (requiere Android Studio)
nx android react-native

# Web
nx web react-native
```

### Linting

```bash
nx lint react-native
```

## Pantallas

### 1. Home (Inicio)
- Pantalla principal con título del proyecto
- 3 botones: Oraciones, Canticos, Información
- Inicializa valores de AsyncStorage si no existen

### 2. Oraciones (Lista)
- Muestra 14 oraciones disponibles
- Botones con formato: "{page} - {title}"
- ScrollView para lista larga

### 3. Oracion (Detalle)
- Muestra oración completa con página y título
- Renderiza `paragraphs` como `string[][]`
- FooterArrows para navegación prev/next

### 4. Cantos (Lista)
- Muestra 143 cantos disponibles
- Botones con página y título
- ScrollView con lista larga

### 5. Canto (Detalle)
- Muestra canto completo
- Procesa `/n` para line breaks
- FooterArrows para navegación

### 6. Informacion
- About page con explicación del proyecto
- Email de contacto
- Botón para compartir la app

## State Management

### Redux Store

```typescript
// store/store.ts
export const store = configureStore({
  reducer: { ui: uiSlice.reducer },
})

// State shape
{
  ui: {
    fontSize: 12,        // 12-36
    themeMode: 'light'   // 'light' | 'dark'
  }
}
```

### UI Slice

```typescript
// store/slices/ui.ts
initialState: {
  fontSize: 12,
  themeMode: 'light'
}

// Reducers
changeFontSize(size)
setFontSizeByValue(size)
toggleThemeMode()
setThemeMode(mode)
```

### Thunks (Async Actions)

```typescript
// store/slices/thunks.ts
incrementFontSize()  // Lee AsyncStorage, +1, guarda
decrementFontSize()  // Lee AsyncStorage, -1, guarda
toggleThemeMode()    // Lee AsyncStorage, toggle, guarda
```

## AsyncStorage

### Keys

- `fontSize`: string (número 12-36)
- `themeMode`: string ('light' | 'dark')

### Flujo

```
User toca botón A+ 
  → dispatch(incrementFontSize())
  → Thunk lee AsyncStorage
  → Incrementa valor
  → Guarda en AsyncStorage
  → Dispatch action a reducer
  → UI actualiza
```

## Tema (Dark/Light Mode)

### Hook useThemeColors

```typescript
const { themeColors, themeMode } = useThemeColors()

// themeColors contiene:
{
  color: '#000000' | 'white',
  backgroundColor: 'white' | '#333'
}
```

### Uso en Componentes

```tsx
const { themeColors } = useThemeColors()

<View style={{ backgroundColor: themeColors.backgroundColor }}>
  <Text style={{ color: themeColors.color }}>
    Texto
  </Text>
</View>
```

## Navegación

### Stack Navigator

```typescript
<Stack.Navigator>
  <Stack.Screen name="Inicio" component={Home} />
  <Stack.Screen name="Oraciones" component={Oraciones} />
  <Stack.Screen name="Oracion" component={Oracion} />
  <Stack.Screen name="Cantos" component={Cantos} />
  <Stack.Screen name="Canto" component={Canto} />
  <Stack.Screen name="Informacion" component={Informacion} />
</Stack.Navigator>
```

### Navegación Programática

```tsx
// En componente
navigation.navigate('Oracion', { id: '5' })

// Recibir params
const { id } = route.params
```

## Expo Configuration

### app.json

```json
{
  "expo": {
    "name": "Sexto Sello",
    "slug": "sexto-sello",
    "version": "3.0.8",
    "orientation": "portrait",
    "icon": "./assets/iconWhite.png",
    "android": {
      "package": "com.sextosello.cantos_y_coros",
      "versionCode": 300008
    },
    "updates": {
      "url": "https://u.expo.dev/59ad4a72-b5ea-409a-97d1-b7b80087d440"
    }
  }
}
```

### eas.json

```json
{
  "build": {
    "development": {},
    "preview": {},
    "production": {}
  }
}
```

## Comandos Útiles

```bash
# Desarrollo
nx start react-native          # Expo dev server
nx ios react-native            # iOS simulator
nx android react-native        # Android emulator

# Linting
nx lint react-native

# Builds de producción (requiere EAS)
eas build --platform android --profile production
eas build --platform ios --profile production

# Submit a stores
eas submit --platform android
eas submit --platform ios
```

## Consumo de Datos

```typescript
import { CHOIRS, PRAYERS } from 'data'
import type { Choir, Prayer } from 'data'

// Acceso directo
const choir = CHOIRS.find(c => c.id === id)
```

**Importante**: `libs/data` debe estar compilado antes.

## Flujo de Usuario

```
1. Usuario abre app
   ↓
2. Ve Home con 3 opciones
   ↓
3. Selecciona Oraciones o Canticos
   ↓
4. Ve lista de ítems
   ↓
5. Selecciona un ítem
   ↓
6. Ve contenido completo
   ↓
7. Usa flechas prev/next para navegar
   ↓
8. Puede ajustar tamaño de fuente
   ↓
9. Puede cambiar a modo oscuro
```

## Recursos Adicionales

- [Arquitectura](./architecture.md) - Decisiones de diseño
- [Pantallas](./screens.md) - Documentación de cada pantalla
- [Componentes](./components.md) - Componentes reutilizables
- [State Management](./state-management.md) - Redux detallado
- [Expo Setup](./expo-setup.md) - Configuración de Expo/EAS
- [Deployment](./deployment.md) - Publicación en Play Store

## Referencias Externas

- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [Expo Docs](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/docs/getting-started)
- [Redux Toolkit](https://redux-toolkit.js.org/)

---

**Ubicación**: `packages/react-native/`
**Versión actual**: 3.0.8
**Package ID**: com.sextosello.cantos_y_coros
