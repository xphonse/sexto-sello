# Flujo de Datos

## Fuente de Datos Única

```
┌─────────────────────────────────────────────┐
│         libs/data/ (TypeScript)             │
│                                             │
│  ┌───────────────┐    ┌──────────────────┐ │
│  │  choirs.ts    │    │   prayers.ts     │ │
│  │               │    │                  │ │
│  │  export const │    │  export const    │ │
│  │  CHOIRS: [    │    │  PRAYERS: [      │ │
│  │    { id: '0'  │    │    { id: '0'     │ │
│  │      ... }    │    │      ... }       │ │
│  │    ...        │    │    ...           │ │
│  │  ] (143)      │    │  ] (14)          │ │
│  └───────────────┘    └──────────────────┘ │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │         index.ts                      │ │
│  │  export * from './choirs'             │ │
│  │  export * from './prayers'            │ │
│  └───────────────────────────────────────┘ │
└─────────────────┬───────────────────────────┘
                  │
                  │ nx build data
                  │ (tsc compila)
                  ▼
┌─────────────────────────────────────────────┐
│      libs/data/dist/ (JavaScript)           │
│                                             │
│  ┌────────────┬────────────┬──────────────┐│
│  │ choirs.js  │ prayers.js │   index.js   ││
│  │ choirs.d.ts│prayers.d.ts│  index.d.ts  ││
│  └────────────┴────────────┴──────────────┘│
│                                             │
│        CommonJS + Type Declarations         │
└─────────────────┬───────────────────────────┘
                  │
     ┌────────────┴────────────┐
     │                         │
     ▼                         ▼
```

## Consumo en Website

```
┌─────────────────────────────────────────────┐
│    packages/nestjs/app/page.tsx             │
│                                             │
│  import { CHOIRS, PRAYERS } from 'data'     │
│  import type { Choir, Prayer } from 'data'  │
│                                             │
│  export default function Page() {           │
│    return (                                 │
│      <div>                                  │
│        {CHOIRS.map(choir => ...)}           │
│      </div>                                 │
│    )                                        │
│  }                                          │
└─────────────────┬───────────────────────────┘
                  │
                  │ nx build nestjs
                  │ (Next.js SSG)
                  ▼
┌─────────────────────────────────────────────┐
│    packages/nestjs/out/ (Static HTML)       │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │  index.html                           │ │
│  │  canto/3-levantate-israel/index.html  │ │
│  │  canto/4-jesus/index.html             │ │
│  │  ...                                  │ │
│  │  (160 archivos HTML con datos        │ │
│  │   embebidos)                          │ │
│  └───────────────────────────────────────┘ │
└─────────────────┬───────────────────────────┘
                  │
                  │ Deploy
                  ▼
┌─────────────────────────────────────────────┐
│           CDN (Vercel/Netlify)              │
│    HTML estático servido globalmente        │
└─────────────────────────────────────────────┘
```

## Consumo en Mobile

```
┌─────────────────────────────────────────────┐
│  packages/react-native/screens/Cantos.tsx   │
│                                             │
│  import { CHOIRS } from 'data'              │
│  import type { Choir } from 'data'          │
│                                             │
│  export const CantosScreen = () => {        │
│    return (                                 │
│      <ScrollView>                           │
│        {CHOIRS.map(choir => (               │
│          <Boton                             │
│            title={choir.title}              │
│            id={choir.id}                    │
│            ...                              │
│          />                                 │
│        ))}                                  │
│      </ScrollView>                          │
│    )                                        │
│  }                                          │
└─────────────────┬───────────────────────────┘
                  │
                  │ eas build
                  │ (Bundles data into app)
                  ▼
┌─────────────────────────────────────────────┐
│      Android APK / iOS IPA                  │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │  App Bundle incluye:                  │ │
│  │  • Código React Native                │ │
│  │  • libs/data compilado                │ │
│  │  • Assets                             │ │
│  │  • Native modules                     │ │
│  │                                       │ │
│  │  Datos embebidos en el binario       │ │
│  │  (No requiere network para contenido)│ │
│  └───────────────────────────────────────┘ │
└─────────────────┬───────────────────────────┘
                  │
                  │ Install
                  ▼
┌─────────────────────────────────────────────┐
│        Usuario con app instalada            │
│  143 cantos + 14 oraciones disponibles      │
│            offline-first                    │
└─────────────────────────────────────────────┘
```

## Formato de Datos: Cantos

```
TypeScript Source (choirs.ts):
┌──────────────────────────────────────┐
│ {                                    │
│   id: '3',                           │
│   page: '3',                         │
│   title: 'LEVANTATE, ISRAEL',       │
│   paragraphs: [                      │
│     'JEHOVA /nEL ETERNO',           │
│     'CORO',                          │
│     '¡LEVANTATE /nISRAEL!'          │
│   ]                                  │
│ }                                    │
└──────────────────────────────────────┘
            │
            │ Compilación
            ▼
JavaScript Output (choirs.js):
┌──────────────────────────────────────┐
│ exports.CHOIRS = [                   │
│   {                                  │
│     id: '3',                         │
│     page: '3',                       │
│     title: 'LEVANTATE, ISRAEL',     │
│     paragraphs: [                    │
│       'JEHOVA /nEL ETERNO',         │
│       'CORO',                        │
│       '¡LEVANTATE /nISRAEL!'        │
│     ]                                │
│   }                                  │
│ ]                                    │
└──────────────────────────────────────┘
            │
      ┌─────┴─────┐
      │           │
      ▼           ▼
Website Render:  Mobile Render:
┌─────────────┐ ┌─────────────┐
│JEHOVA       │ │JEHOVA       │
│EL ETERNO    │ │EL ETERNO    │
│             │ │             │
│CORO         │ │CORO         │
│             │ │             │
│¡LEVANTATE   │ │¡LEVANTATE   │
│ISRAEL!      │ │ISRAEL!      │
└─────────────┘ └─────────────┘
   (HTML)          (Text)
   <br /> tags    Multiple <Text>
```

## Formato de Datos: Oraciones

```
TypeScript Source (prayers.ts):
┌──────────────────────────────────────┐
│ {                                    │
│   id: '1',                           │
│   page: '2',                         │
│   title: 'ACTO DE CONTRICIÓN',      │
│   paragraphs: [                      │
│     ['Amo a Dios Padre'],           │
│     ['Creo en Dios Padre',          │
│      'Creo en Dios Hijo'],          │
│     ['Espero de Dios']              │
│   ]                                  │
│ }                                    │
└──────────────────────────────────────┘
            │
            │ Compilación
            ▼
JavaScript Output (prayers.js):
┌──────────────────────────────────────┐
│ exports.PRAYERS = [                  │
│   {                                  │
│     id: '1',                         │
│     page: '2',                       │
│     title: 'ACTO DE CONTRICIÓN',    │
│     paragraphs: [                    │
│       ['Amo a Dios Padre'],         │
│       ['Creo en Dios Padre',        │
│        'Creo en Dios Hijo'],        │
│       ['Espero de Dios']            │
│     ]                                │
│   }                                  │
│ ]                                    │
└──────────────────────────────────────┘
            │
      ┌─────┴─────┐
      │           │
      ▼           ▼
Website Render:  Mobile Render:
┌─────────────┐ ┌─────────────┐
│Amo a Dios   │ │Amo a Dios   │
│Padre        │ │Padre        │
│             │ │             │
│Creo en Dios │ │Creo en Dios │
│Padre        │ │Padre        │
│Creo en Dios │ │Creo en Dios │
│Hijo         │ │Hijo         │
│             │ │             │
│Espero de    │ │Espero de    │
│Dios         │ │Dios         │
└─────────────┘ └─────────────┘
   <p> tags       <Text> comps
```

## Actualización de Contenido

```
Developer edita choirs.ts o prayers.ts
                │
                ▼
        nx build data
                │
                ▼
        dist/ actualizado
                │
       ┌────────┴────────┐
       │                 │
       ▼                 ▼
nx build nestjs    eas build
       │                 │
       ▼                 ▼
  Static HTML       APK/IPA
       │                 │
       ▼                 ▼
   Deploy CDN      Submit Store
       │                 │
       ▼                 ▼
  Usuarios ven     Update en
   inmediato       1-3 días
                   (o OTA)
```

## Ventajas del Flujo

✅ **Single Source of Truth**: Datos en un solo lugar  
✅ **Type Safety**: TypeScript garantiza estructura  
✅ **Build Time Validation**: Errores detectados antes de deploy  
✅ **No Runtime Dependencies**: Datos embebidos, no requiere API  
✅ **Offline-First**: Contenido disponible sin internet  
✅ **Performance**: Sin latencia de network  
✅ **Consistency**: Mismo contenido en todas las plataformas

## Limitaciones

❌ **Static Content Only**: No user-generated content  
❌ **Rebuild Required**: Cambios requieren rebuild completo  
❌ **Bundle Size**: Todo el contenido en el binario (pero es pequeño)  
❌ **Update Friction**: Mobile requiere store review (o OTA)

---

Ver también:
- [Data Structures](../shared-data/data-structures.md)
- [Build Process](../shared-data/build-process.md)
- [Architecture Overview](./architecture-overview.md)
