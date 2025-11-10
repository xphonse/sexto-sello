# Troubleshooting - Solución de Problemas Comunes

Esta guía te ayudará a resolver los problemas más frecuentes al trabajar con Sexto Sello.

## Tabla de Contenidos

- [Problemas de Instalación](#problemas-de-instalación)
- [Errores de Build](#errores-de-build)
- [Problemas con Nx](#problemas-con-nx)
- [Sitio Web (Next.js)](#sitio-web-nextjs)
- [App Móvil (React Native/Expo)](#app-móvil-react-nativeexpo)
- [Problemas con iOS](#problemas-con-ios)
- [Problemas con Android](#problemas-con-android)
- [Problemas de Dependencias](#problemas-de-dependencias)

---

## Problemas de Instalación

### Error: "node: command not found" o versión incorrecta de Node

**Síntoma:**
```bash
$ node -v
command not found: node
# O
v20.x.x  # Versión incorrecta
```

**Solución:**

```bash
# Instalar Node v18.20.4
# Opción 1: Usando nvm (recomendado)
nvm install 18.20.4
nvm use 18.20.4

# Opción 2: Descargar desde nodejs.org
# Descarga Node v18.20.4 desde https://nodejs.org/

# Verificar
node -v  # Debe mostrar v18.20.4
```

### Error: "nx: command not found"

**Síntoma:**
```bash
$ nx build data
zsh: command not found: nx
```

**Solución:**

```bash
# Instalar Nx globalmente
npm add --global nx@latest

# O usar npx para ejecutar sin instalación global
npx nx build data
```

### Error: "Cannot find module" después de clonar

**Síntoma:**
```bash
Error: Cannot find module 'data'
```

**Causa**: No se ejecutó `npm install` o `nx build data`

**Solución:**
```bash
# Paso 1: Instalar dependencias
npm install

# Paso 2: CRÍTICO - Compilar la biblioteca de datos
nx build data

# Paso 3: Intentar de nuevo
nx dev nestjs
```

---

## Errores de Build

### Error: "Cannot find module 'data'" o "Module not found: Can't resolve 'data'"

**Síntoma:**
```
Error: Cannot find module 'data'
  at Function.Module._resolveFilename
```

**Causa**: La biblioteca `libs/data` no está compilada.

**Solución:**
```bash
# Compilar la biblioteca de datos
nx build data

# Verificar que se creó la carpeta dist/
ls libs/data/dist/
# Deberías ver: choirs.js, prayers.js, index.js y sus .d.ts
```

**Prevención**: Siempre ejecuta `nx build data` después de:
- Clonar el repositorio
- Modificar archivos en `libs/data/`
- Cambiar de branch

### Error de TypeScript en libs/data

**Síntoma:**
```bash
$ nx build data
libs/data/choirs.ts:123:5 - error TS2322: Type 'number' is not assignable to type 'string'.
```

**Solución:**
1. Revisa el error específico en el archivo indicado
2. Verifica que los tipos coincidan con las interfaces:
   ```typescript
   // ✅ CORRECTO
   {
     id: '143',     // string
     page: '124',   // string
     title: 'TÍTULO',
     paragraphs: ['texto'],
   }

   // ❌ INCORRECTO
   {
     id: 143,       // number (debe ser string)
     page: 124,     // number (debe ser string)
   }
   ```

### Error: Build de Next.js falla

**Síntoma:**
```bash
$ nx build nestjs
Error: Failed to compile
```

**Soluciones comunes:**

1. **Verificar que data está compilado:**
   ```bash
   nx build data
   nx build nestjs
   ```

2. **Limpiar caché de Next.js:**
   ```bash
   rm -rf packages/nestjs/.next
   nx build nestjs
   ```

3. **Reinstalar dependencias:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   nx build data
   nx build nestjs
   ```

---

## Problemas con Nx

### Error: "Could not find Nx modules"

**Síntoma:**
```
NX   Could not find Nx modules at "/path/to/sexto-sello".
Have you run npm/yarn install?
```

**Solución:**
```bash
# Reinstalar dependencias
rm -rf node_modules
npm install

# Verificar que Nx está instalado
npm list nx
```

### Nx ejecuta la versión incorrecta

**Síntoma:**
```bash
$ nx --version
npm warn exec The following package was not found and will be installed: nx@22.0.2
```

**Causa**: Nx global no está instalado o está desactualizado.

**Solución:**
```bash
# Actualizar Nx global
npm add --global nx@latest

# Verificar versión
nx --version
# Debe mostrar 19.5.3 o superior
```

---

## Sitio Web (Next.js)

### Página muestra contenido vacío o incorrecto

**Síntoma**: Al navegar a `/canto/3-levantate-israel`, la página está en blanco o muestra "not found".

**Causas posibles**:
1. Data no está compilado
2. Slug incorrecto
3. Build estático desactualizado

**Solución:**
```bash
# 1. Recompilar data
nx build data

# 2. Limpiar y rebuild
rm -rf packages/nestjs/.next
nx build nestjs

# 3. En desarrollo, reiniciar servidor
# Ctrl+C para detener
nx dev nestjs
```

### Imágenes no se cargan

**Síntoma**: La imagen del badge de Google Play no aparece.

**Solución:**
1. Verifica que la imagen existe en `packages/nestjs/public/images/`
2. Verifica la ruta en el código:
   ```tsx
   <Image src="/images/google-play-badge.png" />
   ```
3. Para build de producción, verifica `imgLoader.js`

### Estilos de Tailwind no se aplican

**Síntoma**: Los componentes no tienen estilos o se ven rotos.

**Solución:**
```bash
# Reinstalar dependencias de Tailwind
cd packages/nestjs
npm install tailwindcss postcss autoprefixer

# Verificar que globals.css tiene las directivas
cat app/globals.css
# Debe contener:
# @tailwind base;
# @tailwind components;
# @tailwind utilities;

# Restart dev server
nx dev nestjs
```

---

## App Móvil (React Native/Expo)

### Error: Expo requiere login

**Síntoma:**
```
CommandError: Input is required, but 'npx expo' is in non-interactive mode.
Log in to EAS with email or username
```

**Causa**: Expo está intentando acceder a servicios que requieren autenticación.

**Soluciones:**

**Opción 1: Login en Expo**
```bash
npx expo login
# Ingresa tu email y contraseña de Expo
# O crea cuenta en https://expo.dev
```

**Opción 2: Usar solo servidor de desarrollo**
```bash
# En lugar de nx ios/android, usa:
nx start react-native

# Escanea el QR con Expo Go en tu teléfono
# No requiere login para desarrollo básico
```

**Opción 3: Modo offline (si tienes cuenta)**
```bash
# Exportar token
export EXPO_TOKEN=tu-token-aqui

# Luego ejecutar
nx ios react-native
```

### Error: "Unable to run simctl"

**Síntoma:**
```
Unable to run simctl:
Error: xcrun simctl help exited with non-zero code: 72
```

Ver sección [Problemas con iOS](#problemas-con-ios).

### Error: Metro Bundler no inicia

**Síntoma:**
```
Error: Metro Bundler failed to start
```

**Solución:**
```bash
# 1. Limpiar caché de Metro
rm -rf packages/react-native/.expo
rm -rf packages/react-native/node_modules/.cache

# 2. Reiniciar
nx start react-native
```

### AsyncStorage: Error de lectura/escritura

**Síntoma**: La app no recuerda tema o tamaño de fuente.

**Solución:**
```bash
# En Expo Go, reinicia la app completamente
# En desarrollo, limpia AsyncStorage:

# Agrega esto temporalmente en App.js:
import AsyncStorage from '@react-native-async-storage/async-storage';
AsyncStorage.clear();

# Luego ejecuta la app, y después elimina esa línea
```

### Dependencias desactualizadas

**Síntoma:**
```
The following packages should be updated for best compatibility:
  expo@51.0.22 - expected version: ~51.0.39
  expo-updates@0.25.21 - expected version: ~0.25.28
  react-native@0.74.3 - expected version: 0.74.5
```

**Solución:**
```bash
cd packages/react-native

# Actualizar paquetes específicos
npm install expo@~51.0.39 expo-updates@~0.25.28 react-native@0.74.5

# O actualizar todo según Expo doctor
npx expo-doctor
```

**Advertencia**: Actualizar puede introducir breaking changes. Prueba en branch separado primero.

---

## Problemas con iOS

### Xcode no está instalado o no se encuentra

**Síntoma:**
```
xcode-select: error: tool 'xcodebuild' requires Xcode
```

**Causa**: Solo tienes Command Line Tools instalado, no Xcode completo.

**Solución:**

1. **Instalar Xcode completo** desde App Store (~ 15 GB)

2. **Configurar Xcode:**
   ```bash
   # Abrir Xcode al menos una vez y aceptar licencia

   # Cambiar developer directory
   sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer

   # Verificar
   xcode-select -p
   # Debe mostrar: /Applications/Xcode.app/Contents/Developer
   ```

3. **Verificar simulador:**
   ```bash
   xcrun simctl list devices
   # Debe listar simuladores disponibles
   ```

### Simulador no se abre

**Síntoma**: El comando se ejecuta pero no aparece el simulador.

**Solución:**

```bash
# 1. Abrir manualmente el simulador
open -a Simulator

# 2. Verificar que hay simuladores instalados
xcrun simctl list devices

# 3. Si no hay simuladores, instalarlos desde Xcode:
# Xcode > Settings > Platforms > iOS > Download

# 4. Intentar de nuevo
nx ios react-native
```

### Error: "No devices found"

**Solución:**
```bash
# Listar dispositivos disponibles
xcrun simctl list devices | grep Booted

# Si ninguno está Booted, arrancar uno manualmente:
xcrun simctl boot "iPhone 15 Pro"

# Luego ejecutar
nx ios react-native
```

### Build de iOS falla con errores de CocoaPods

**Síntoma:**
```
[!] CocoaPods could not find compatible versions for pod
```

**Solución:**
```bash
cd packages/react-native/ios

# Reinstalar pods
rm -rf Pods Podfile.lock
pod install

# Si aún falla, actualizar CocoaPods:
sudo gem install cocoapods
pod install

cd ../../..
nx ios react-native
```

---

## Problemas con Android

### Android Studio o SDK no está instalado

**Síntoma:**
```
Error: Android SDK not found
```

**Solución:**

1. **Instalar Android Studio** desde https://developer.android.com/studio

2. **Configurar variables de entorno:**
   ```bash
   # En ~/.zshrc o ~/.bashrc
   export ANDROID_HOME=$HOME/Library/Android/sdk
   export PATH=$PATH:$ANDROID_HOME/emulator
   export PATH=$PATH:$ANDROID_HOME/platform-tools

   # Recargar
   source ~/.zshrc
   ```

3. **Verificar:**
   ```bash
   adb --version
   ```

### Emulador no inicia

**Solución:**

```bash
# Listar emuladores disponibles
emulator -list-avds

# Si no hay ninguno, crear uno desde Android Studio:
# Tools > Device Manager > Create Device

# Iniciar manualmente
emulator -avd Pixel_5_API_33

# En otra terminal:
nx android react-native
```

---

## Problemas de Dependencias

### npm install falla con errores de peer dependencies

**Síntoma:**
```
npm ERR! Could not resolve dependency
npm ERR! peer react@"^18.0.0" from package-name
```

**Solución:**

```bash
# Usar --legacy-peer-deps
npm install --legacy-peer-deps

# O forzar
npm install --force
```

**Advertencia**: Solo usa esto si entiendes las implicaciones.

### Error: EACCES permissions

**Síntoma:**
```
npm ERR! Error: EACCES: permission denied
```

**Solución:**

```bash
# NO uses sudo con npm install

# En su lugar, cambia ownership:
sudo chown -R $(whoami) ~/.npm

# O usa nvm para evitar estos problemas
```

### Dependencias outdated

**Síntoma**: Advertencias sobre paquetes desactualizados.

**Solución:**

```bash
# Ver qué está desactualizado
npm outdated

# Actualizar dependencias (con cuidado)
npm update

# Para major versions:
npm install package-name@latest

# Probar que todo funciona
nx build data
nx lint nestjs
nx lint react-native
```

---

## Problemas de Contenido

### Saltos de línea no se muestran correctamente

**Síntoma**: Texto de cantos aparece en una sola línea.

**Causa**: Usar `\n` en lugar de `/n`.

**Solución:**

```typescript
// ❌ INCORRECTO
paragraphs: [
  'Primera línea\nSegunda línea'
]

// ✅ CORRECTO
paragraphs: [
  'Primera línea /nSegunda línea'
]

// Recompilar
nx build data
```

### Error al agregar contenido nuevo

**Síntoma**: Build falla después de agregar canto/oración.

**Checklist:**

1. ✅ ¿El `id` es único y string?
2. ✅ ¿El `page` es string (no número)?
3. ✅ ¿El `title` está en mayúsculas (convención)?
4. ✅ ¿`paragraphs` tiene la estructura correcta?
   - Choirs: `string[]`
   - Prayers: `string[][]`
5. ✅ ¿Hay coma después del objeto?
6. ✅ ¿No hay caracteres especiales problemáticos?

**Ejemplo correcto:**

```typescript
// Canto
{
  id: '143',
  page: '124',
  title: 'NUEVO CANTO',
  paragraphs: [
    'Verso 1 /nCon salto de línea',
    'Verso 2',
  ],
},  // ← No olvides la coma
```

---

## Comandos Útiles para Debugging

### Limpiar todo y empezar de cero

```bash
# ⚠️ ADVERTENCIA: Esto borrará node_modules y builds

# Limpiar node_modules
rm -rf node_modules package-lock.json
rm -rf packages/*/node_modules
rm -rf libs/*/node_modules

# Limpiar builds
rm -rf libs/data/dist
rm -rf packages/nestjs/.next
rm -rf packages/react-native/.expo

# Reinstalar
npm install
nx build data

# Verificar
nx dev nestjs
nx start react-native
```

### Verificar estado del proyecto

```bash
# Versiones
node -v
npm -v
nx --version

# Verificar que data está compilado
ls -la libs/data/dist/

# Verificar Nx workspace
nx show project nestjs
nx show project react-native
nx show project data

# Listar todos los targets disponibles
nx show projects
```

### Logs detallados

```bash
# Nx con verbose
nx build data --verbose

# Expo con debug
EXPO_DEBUG=1 nx start react-native

# Next.js con stack traces completos
NODE_OPTIONS='--trace-warnings' nx dev nestjs
```

---

## ¿Aún tienes problemas?

Si ninguna de estas soluciones funciona:

1. **Busca en GitHub Issues**: https://github.com/tu-org/sexto-sello/issues
2. **Crea un nuevo issue** con:
   - Descripción del problema
   - Pasos para reproducirlo
   - Logs completos del error
   - Tu entorno (OS, Node version, etc.)
3. **Contacta**: christian.ramirez.gutierrez.92@gmail.com

### Template para reportar un issue

```markdown
**Descripción**
Breve descripción del problema

**Pasos para reproducir**
1. Ejecutar...
2. Ver...
3. Error aparece...

**Comportamiento esperado**
Qué debería pasar

**Logs/Screenshots**
```
[pegar logs aquí]
```

**Entorno**
- OS: macOS 14.x / Windows 11 / Ubuntu 22.04
- Node: v18.20.4
- Nx: 19.5.3
- Package: nestjs / react-native / data
```

---

**Última actualización**: Noviembre 2025
