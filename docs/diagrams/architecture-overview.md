# Vista General de la Arquitectura

## Diagrama del Monorepo

```
┌─────────────────────────────────────────────────────────────────┐
│                     SEXTO SELLO MONOREPO                        │
│                     (Nx Workspace + npm)                        │
└─────────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│              │     │              │     │              │
│  libs/data   │     │packages/     │     │  packages/   │
│              │     │  nestjs      │     │react-native  │
│  (Shared)    │     │  (Website)   │     │   (Mobile)   │
│              │     │              │     │              │
└──────┬───────┘     └──────┬───────┘     └──────┬───────┘
       │                    │                    │
       │                    │                    │
┌──────▼────────────────────▼────────────────────▼───────┐
│                                                         │
│              143 CANTOS + 14 ORACIONES                  │
│           (Una sola fuente de verdad)                   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## Build Pipeline

```
Developer
    │
    │ git push
    ▼
┌─────────────────────┐
│   Git Repository    │
│   (GitHub/GitLab)   │
└──────────┬──────────┘
           │
           │ CI/CD Trigger
           ▼
┌─────────────────────┐
│   Build Server      │
│  (GitHub Actions)   │
└──────────┬──────────┘
           │
           ├─── npm install
           │
           ├─── nx build data ────────────┐
           │                              │
           ├─── nx build nestjs ─────┐    │
           │                         │    │
           └─── eas build (mobile) ──┼────┼───┐
                                     │    │   │
                                     ▼    ▼   ▼
                           ┌──────────────────────┐
                           │   Build Artifacts    │
                           ├──────────────────────┤
                           │ • Static HTML/JS     │
                           │ • Android APK/AAB    │
                           │ • iOS IPA            │
                           └──────────┬───────────┘
                                      │
                   ┌──────────────────┼──────────────────┐
                   │                  │                  │
                   ▼                  ▼                  ▼
           ┌─────────────┐    ┌─────────────┐   ┌─────────────┐
           │   Vercel/   │    │Google Play  │   │  App Store  │
           │   Netlify   │    │    Store    │   │   Connect   │
           └─────────────┘    └─────────────┘   └─────────────┘
```

## Flujo de Datos en Runtime

### Website (Next.js)

```
Usuario solicita sextosello.com/canto/3-levantate-israel
                    │
                    ▼
        ┌───────────────────────┐
        │    CDN (Vercel)       │
        │  Sirve HTML estático  │
        └───────────┬───────────┘
                    │
                    ▼
        ┌───────────────────────┐
        │  Navegador Usuario    │
        │  Renderiza contenido  │
        │  (Ya embebido en HTML)│
        └───────────────────────┘

```

### Mobile App (React Native)

```
Usuario abre app en Android/iOS
            │
            ▼
┌───────────────────────────┐
│      App instalada        │
│  (Código + Data embebido) │
└───────────┬───────────────┘
            │
            ├─── Lee AsyncStorage (preferencias)
            │
            ├─── Renderiza con Redux state
            │
            └─── Muestra contenido
                 (143 cantos + 14 oraciones)
```

## Dependencias entre Paquetes

```
packages/nestjs
      │
      │ import { CHOIRS, PRAYERS } from 'data'
      │
      ▼
libs/data/dist/
      ▲
      │ nx build data (compila TypeScript)
      │
libs/data/*.ts

packages/react-native
      │
      │ import { CHOIRS, PRAYERS } from 'data'
      │
      ▼
libs/data/dist/
```

**Regla de Oro**: Siempre ejecutar `nx build data` antes de las apps.

## Tech Stack por Capa

```
┌────────────────────────────────────────────────────┐
│                PRESENTACIÓN                        │
├────────────────────────────────────────────────────┤
│  Website: Next.js 14 + Tailwind CSS                │
│  Mobile:  React Native + Expo                      │
└────────────────────────────────────────────────────┘
                      │
                      ▼
┌────────────────────────────────────────────────────┐
│              STATE MANAGEMENT                      │
├────────────────────────────────────────────────────┤
│  Website: Ninguno (estateless)                     │
│  Mobile:  Redux Toolkit + AsyncStorage             │
└────────────────────────────────────────────────────┘
                      │
                      ▼
┌────────────────────────────────────────────────────┐
│                   DATOS                            │
├────────────────────────────────────────────────────┤
│  libs/data: TypeScript → CommonJS                  │
│  • 143 Cantos (Choir[])                            │
│  • 14 Oraciones (Prayer[])                         │
└────────────────────────────────────────────────────┘
                      │
                      ▼
┌────────────────────────────────────────────────────┐
│              BUILD TOOLS                           │
├────────────────────────────────────────────────────┤
│  • Nx (Monorepo management)                        │
│  • TypeScript Compiler                             │
│  • Next.js Build (SSG)                             │
│  • EAS (Expo Application Services)                 │
└────────────────────────────────────────────────────┘
```

## Arquitectura de Despliegue

```
                    USUARIOS
                       │
        ┌──────────────┼──────────────┐
        │              │              │
        ▼              ▼              ▼
    Desktop        Android         iOS
      Web          Phone          Phone
        │              │              │
        │              └──────┬───────┘
        │                     │
        ▼                     ▼
┌────────────────┐    ┌────────────────┐
│   CDN Global   │    │  App Stores    │
│  (Vercel Edge) │    │  Google/Apple  │
└────────────────┘    └────────────────┘
        │                     │
        │                     ▼
        │            ┌────────────────┐
        │            │  OTA Updates   │
        │            │  (Expo EAS)    │
        │            └────────────────┘
        │
        ▼
┌────────────────────────────────┐
│  Static Files                  │
│  • HTML (160 páginas)          │
│  • CSS (Tailwind)              │
│  • JS (Next.js bundles)        │
│  • Images                      │
└────────────────────────────────┘
```

## Ciclo de Vida del Contenido

```
1. Agregar/Editar contenido
   │
   ├─ Editar libs/data/choirs.ts o prayers.ts
   │
   ▼
2. Build data library
   │
   ├─ nx build data
   │
   ▼
3. Build apps
   │
   ├─ nx build nestjs (website)
   ├─ eas build (mobile)
   │
   ▼
4. Deploy
   │
   ├─ vercel --prod (website)
   ├─ eas submit (mobile)
   │
   ▼
5. Usuarios ven contenido actualizado
   │
   ├─ Website: Inmediato (después de deploy)
   └─ Mobile: Después de update de tienda O OTA update
```

## Ventajas de esta Arquitectura

✅ **Separation of Concerns**: Datos, lógica, presentación separados
✅ **Code Reuse**: Mismo contenido en web y móvil
✅ **Type Safety**: TypeScript end-to-end
✅ **Scalability**: Fácil agregar más plataformas
✅ **Performance**: Website estático ultra-rápido
✅ **Offline-First**: Mobile funciona sin internet

## Limitaciones

❌ **Contenido estático**: No hay DB, todo en código
❌ **Rebuild requerido**: Cambios de contenido requieren rebuild
❌ **No user-generated content**: Solo contenido curado
❌ **Review process**: Mobile updates pasan por tiendas (o OTA)

---

Ver también:
- [Data Flow](./data-flow.md)
- [Navigation Flow](./navigation-flow.md)
- [Website Architecture](../website/architecture.md)
- [Mobile Architecture](../mobile/architecture.md)
