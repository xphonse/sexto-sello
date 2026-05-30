# Documentación de Sexto Sello

Bienvenido a la documentación completa del proyecto **Sexto Sello**, un monorepo que contiene un sitio web y una aplicación móvil para compartir oraciones y cantos religiosos.

## Descripción del Proyecto

Sexto Sello es una plataforma multiplataforma que proporciona acceso a oraciones y cantos del libro "Coros del Templo del Medio Día". El proyecto incluye:

- **Sitio Web**: Aplicación Next.js estática desplegada en [sextosello.com](https://sextosello.com/)
- **App Móvil**: Aplicación React Native/Expo disponible en [Google Play Store](https://play.google.com/store/apps/details?id=com.sextosello.cantos_y_coros)
- **Biblioteca de Datos Compartida**: 143 cantos y 14 oraciones compartidos entre ambas plataformas

## Inicio Rápido

### Prerrequisitos
- Node.js v18.20.4
- Nx CLI global: `npm add --global nx@latest`

### Instalación

```bash
# 1. Verificar versión de Node
node -v  # Debe ser v18.20.4

# 2. Instalar Nx globalmente
npm add --global nx@latest

# 3. Instalar dependencias
npm install

# 4. CRÍTICO: Compilar la biblioteca de datos compartida
nx build data
```

### Ejecutar las Aplicaciones

**Sitio Web (Next.js)**:
```bash
nx dev nestjs
# Abre http://localhost:3000
```

**App Móvil (React Native/Expo)**:
```bash
nx start react-native
# Escanea el código QR con Expo Go en tu teléfono
```

## Estructura del Monorepo

```
sexto-sello/
├── libs/
│   └── data/                    # Biblioteca compartida de datos
│       ├── choirs.ts           # 143 cantos
│       ├── prayers.ts          # 14 oraciones
│       └── dist/               # Compilado TypeScript
├── packages/
│   ├── nestjs/                 # Sitio web Next.js (mal nombrado)
│   │   ├── app/               # App Router de Next.js
│   │   ├── components/        # Componentes reutilizables
│   │   └── helpers/           # Utilidades (generador de slugs)
│   └── react-native/           # App móvil Expo
│       ├── screens/           # 6 pantallas principales
│       ├── components/        # Componentes de UI
│       ├── navigation/        # React Navigation setup
│       └── store/             # Redux state management
└── docs/                       # Esta documentación
```

## Tabla de Contenidos

### 📘 Documentación por Aplicación

#### Sitio Web (Next.js)
- [**Introducción al Sitio Web**](./website/README.md) - Descripción general y guía de inicio
- [**Arquitectura**](./website/architecture.md) - Estructura del proyecto y decisiones de diseño
- [**Componentes**](./website/components.md) - Documentación detallada de componentes
- [**Sistema de Rutas**](./website/routing.md) - App Router, rutas dinámicas y generación estática
- [**Despliegue**](./website/deployment.md) - Proceso de build y publicación

#### Aplicación Móvil (React Native/Expo)
- [**Introducción a la App Móvil**](./mobile/README.md) - Descripción general y setup
- [**Arquitectura**](./mobile/architecture.md) - Estructura y navegación
- [**Pantallas**](./mobile/screens.md) - Documentación de las 6 pantallas
- [**Componentes**](./mobile/components.md) - Componentes reutilizables
- [**Manejo de Estado**](./mobile/state-management.md) - Redux Toolkit + AsyncStorage
- [**Configuración de Expo**](./mobile/expo-setup.md) - app.json, eas.json, y configuración
- [**Despliegue**](./mobile/deployment.md) - Publicación en Play Store y OTA updates

#### Biblioteca de Datos Compartida
- [**Introducción a libs/data**](./shared-data/README.md) - Propósito y estructura
- [**Estructuras de Datos**](./shared-data/data-structures.md) - Interfaces, tipos y ejemplos
- [**Guía de Contenido**](./shared-data/content-guide.md) - Cómo agregar/editar oraciones y cantos
- [**Proceso de Build**](./shared-data/build-process.md) - Compilación TypeScript y consumo

### 📊 Diagramas y Visualizaciones
- [**Vista General de Arquitectura**](./diagrams/architecture-overview.md) - Diagrama del monorepo completo
- [**Flujo de Navegación**](./diagrams/navigation-flow.md) - Mapas de navegación de ambas apps
- [**Flujo de Datos**](./diagrams/data-flow.md) - Cómo fluyen los datos desde libs/data a las apps

### 🛠️ Guías y Recursos
- [**Guía de Contribución**](./CONTRIBUTING.md) - Cómo contribuir al proyecto
- [**Troubleshooting**](./TROUBLESHOOTING.md) - Problemas comunes y soluciones

## Comandos Principales

### Biblioteca de Datos
```bash
nx build data           # Compilar TypeScript (REQUERIDO antes de ejecutar apps)
```

### Sitio Web
```bash
nx dev nestjs          # Servidor de desarrollo
nx build nestjs        # Build de producción (exportación estática)
nx start nestjs        # Servidor de producción
nx lint nestjs         # Linting
```

### App Móvil
```bash
nx start react-native       # Servidor de desarrollo Expo
nx android react-native     # Build Android (requiere Android Studio)
nx ios react-native         # Build iOS (requiere Xcode, solo macOS)
nx web react-native         # Versión web
nx lint react-native        # Linting
```

## Tecnologías Utilizadas

### Sitio Web
- **Framework**: Next.js 14 con App Router
- **Styling**: Tailwind CSS 3.4
- **Generación**: Static Site Generation (SSG)
- **Fonts**: Google Fonts (Inter, Roboto)

### App Móvil
- **Framework**: React Native 0.74 con Expo 51
- **Navegación**: React Navigation 6
- **Estado**: Redux Toolkit
- **Persistencia**: AsyncStorage
- **Build**: Expo Application Services (EAS)

### Compartido
- **Monorepo**: Nx 19.5
- **Lenguaje**: TypeScript 5
- **Linting**: ESLint + Prettier
- **Workspaces**: npm workspaces

## Datos del Proyecto

- **143 Cantos** organizados por página del libro
- **14 Oraciones** fundamentales del Sexto Sello
- **Formato especial**: Uso de `/n` para saltos de línea en cantos
- **Estructura de datos**: TypeScript con tipado estricto
- **Fuente única**: Una sola fuente de verdad en `libs/data`

## Enlaces Importantes

- 🌐 **Sitio Web**: https://sextosello.com/
- 📱 **Google Play**: https://play.google.com/store/apps/details?id=com.sextosello.cantos_y_coros
- 📧 **Contacto**: christian.ramirez.gutierrez.92@gmail.com

## Notas Importantes

⚠️ **Naming Quirk**: El paquete `packages/nestjs` es en realidad una aplicación **Next.js**, no NestJS. Es un nombre históricamente incorrecto.

⚠️ **Build Requerido**: Siempre ejecuta `nx build data` después de clonar o modificar contenido en `libs/data`. Sin esto, obtendrás errores de importación.

⚠️ **Node Version**: Este proyecto requiere Node.js v18.20.4 específicamente (ver `.nvmrc`).

## Contribuir

¿Quieres agregar contenido o mejorar el código? Lee la [Guía de Contribución](./CONTRIBUTING.md) para comenzar.

## Licencia

MIT License

---

**Última actualización**: Noviembre 2025
**Versión de la App**: 3.0.8
**Mantenido por**: Equipo Sexto Sello
