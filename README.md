# Sexto Sello

Monorepo Nx con website (Next.js) y app móvil (React Native/Expo) para oraciones y cantos del Sexto Sello.

📚 **[Documentación Completa →](./docs/README.md)**

## Inicio Rápido

### Prerrequisitos

- **Node.js**: v18.20.4 (verificar con `node -v`)
- **Nx**: Instalar globalmente con `npm add --global nx@latest`
- **Xcode**: Para desarrollo iOS (solo macOS)
- **Android Studio**: Para desarrollo Android

### Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. ⚠️ CRÍTICO: Compilar librería compartida de datos
nx build data
```

> **Importante**: Siempre ejecutar `nx build data` antes de iniciar las aplicaciones, de lo contrario ocurrirán errores de importación.

## Comandos de Desarrollo

### Website (Next.js)

```bash
nx dev nestjs
# Abre en http://localhost:3000
```

### App Móvil (React Native/Expo)

```bash
# Iniciar servidor de desarrollo
nx start react-native

# Opción 1: Escanear QR con Expo Go (iOS/Android)
# Opción 2: iOS Simulator (solo macOS)
nx ios react-native

# Opción 3: Android Emulator
nx android react-native
```

## Estructura del Proyecto

```
sexto-sello/
├── libs/data/              # 143 cantos + 14 oraciones (fuente única)
├── packages/
│   ├── nestjs/             # Website Next.js (SSG estático)
│   └── react-native/       # App móvil Expo
└── docs/                   # Documentación completa
```

## Resultados Desplegados

- **Website**: https://sextosello.com/
- **App Android**: https://play.google.com/store/apps/details?id=com.sextosello.cantos_y_coros

## Documentación

La documentación completa está disponible en la carpeta [`docs/`](./docs/README.md):

- **[Guía General](./docs/README.md)** - Vista general del proyecto
- **[Website](./docs/website/README.md)** - Documentación del sitio Next.js
- **[App Móvil](./docs/mobile/README.md)** - Documentación de React Native/Expo
- **[Datos Compartidos](./docs/shared-data/README.md)** - Librería de datos común
- **[Contribuir](./docs/CONTRIBUTING.md)** - Guía de contribución
- **[Solución de Problemas](./docs/TROUBLESHOOTING.md)** - Errores comunes y soluciones
- **[Diagramas](./docs/diagrams/architecture-overview.md)** - Arquitectura visual

## Soporte

Para problemas comunes, consulta [TROUBLESHOOTING.md](./docs/TROUBLESHOOTING.md).

Para contribuir, lee [CONTRIBUTING.md](./docs/CONTRIBUTING.md).