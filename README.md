# Sexto Sello

Monorepo Nx con el sitio web (Next.js) y la app móvil (React Native/Expo) de oraciones y cantos del Sexto Sello. Ambos frontends comparten los datos de `libs/data`.

- Sitio web: https://sextosello.com/
- App Android: https://play.google.com/store/apps/details?id=com.sextosello.cantos_y_coros

## Requisitos

- **Node.js** v18.20.4 (verificar con `node -v`; el repo incluye `.nvmrc`)
- **Nx** global: `npm add --global nx@latest`
- **Xcode** para desarrollo iOS (solo macOS)
- **Android Studio** para desarrollo Android

## Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. ⚠️ CRÍTICO: compilar la librería de datos compartida
nx build data
```

> **Importante:** ejecuta `nx build data` antes de iniciar cualquier app y cada vez que edites `libs/data/choirs.ts` o `libs/data/prayers.ts`. Si lo omites, verás errores de importación al ejecutar.

## Desarrollo local

### Sitio web (Next.js)

```bash
nx dev nestjs
# Abre http://localhost:3000
```

### App móvil (React Native/Expo)

```bash
# Iniciar el servidor de desarrollo
nx start react-native

# Escanea el QR con Expo Go (iOS/Android), o lanza un simulador:
nx ios react-native        # iOS (solo macOS)
nx android react-native    # Android
```

## Estructura del proyecto

```
sexto-sello/
├── libs/data/          # 143 cantos + 14 oraciones (fuente única de datos)
└── packages/
    ├── nestjs/         # Sitio web Next.js (export estático)
    └── react-native/   # App móvil Expo
```

> `packages/nestjs` es un proyecto **Next.js**, no el framework NestJS — el nombre es un error histórico del repo.
