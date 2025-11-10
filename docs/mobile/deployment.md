# Despliegue de la App Móvil

## Google Play Store

### 1. Preparar Build

```bash
cd packages/react-native

# Asegurarse que data está compilado
nx build data

# Incrementar version en app.json
# version: "3.0.8" → "3.0.9"
# versionCode: 300008 → 300009
```

### 2. Build con EAS

```bash
eas build --platform android --profile production

# EAS construye en la nube
# Tiempo: ~10-15 minutos
# Output: .aab (Android App Bundle)
```

### 3. Submit a Play Store

```bash
eas submit --platform android

# O manual:
# 1. Descargar .aab de EAS
# 2. Play Console → Release → Production
# 3. Upload .aab
# 4. Complete release notes
# 5. Review and release
```

### 4. Review Process

- **Tiempo**: 1-3 días
- **Revisión automática** de seguridad
- **Revisión manual** de contenido

## Apple App Store

### 1. Requisitos

- Apple Developer Account ($99/year)
- Certificados y Provisioning Profiles

### 2. Build

```bash
eas build --platform ios --profile production
```

### 3. Submit

```bash
eas submit --platform ios
```

### 4. Review

- **Tiempo**: 1-7 días
- Más estricto que Google

## OTA Updates (Sin Review)

### Cuándo Usar

- ✅ Fixes de bugs JavaScript
- ✅ Cambios de UI
- ✅ Actualización de contenido (CHOIRS/PRAYERS)
- ❌ Cambios en código nativo
- ❌ Cambios en dependencias nativas
- ❌ Cambios en permisos

### Publicar Update

```bash
eas update --branch production --message "Agregar 3 cantos nuevos"
```

### Rollout

- Usuarios reciben update al abrir app
- Si hay error, pueden revertir
- Sin pasar por tienda

## Versioning

### Semantic Versioning

```
MAJOR.MINOR.PATCH
  3  . 0   . 8

MAJOR: Breaking changes
MINOR: New features
PATCH: Bug fixes
```

### Android versionCode

```
MAJOR * 100000 + MINOR * 1000 + PATCH * 10
3 * 100000 + 0 * 1000 + 8 * 10 = 300080
```

## Checklist Pre-Release

- [ ] `nx build data` ejecutado
- [ ] Version incrementada en app.json
- [ ] Tested en dispositivo físico
- [ ] Tested tema claro y oscuro
- [ ] Tested tamaños de fuente (12-36)
- [ ] Navegación funciona correctamente
- [ ] Sin warnings/errors en consola
- [ ] Release notes escritas

## Post-Release

### Monitoreo

- **Crashes**: Sentry, Crashlytics
- **Analytics**: Expo Analytics, Firebase
- **Reviews**: Play Console, App Store Connect

### Hotfix

Si hay bug crítico:

```bash
# 1. Fix en código
# 2. Si es solo JS/assets:
eas update --branch production --message "Hotfix: ..."

# 3. Si requiere código nativo:
# Increment version patch
eas build --platform android --profile production
eas submit --platform android
```

Ver [Expo Setup](./expo-setup.md) | [Troubleshooting](../TROUBLESHOOTING.md)
