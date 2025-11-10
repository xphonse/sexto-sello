# Configuración de Expo y EAS

## app.json

```json
{
  "expo": {
    "name": "Sexto Sello",
    "slug": "sexto-sello",
    "version": "3.0.8",
    "orientation": "portrait",
    "icon": "./assets/iconWhite.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.sextosello.cantos_y_coros",
      "versionCode": 300008,
      "permissions": []
    },
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.sextosello.cantos-y-coros"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "updates": {
      "url": "https://u.expo.dev/59ad4a72-b5ea-409a-97d1-b7b80087d440"
    },
    "runtimeVersion": {
      "policy": "sdkVersion"
    },
    "extra": {
      "eas": {
        "projectId": "59ad4a72-b5ea-409a-97d1-b7b80087d440"
      }
    }
  }
}
```

### Campos Clave

- **version**: "3.0.8" - Versión semántica
- **versionCode**: 300008 - Código interno Android
- **package**: ID único en Play Store
- **projectId**: EAS project ID
- **updates.url**: URL para OTA updates

## eas.json

```json
{
  "cli": {
    "version": ">= 5.2.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      }
    },
    "production": {
      "autoIncrement": true
    }
  },
  "submit": {
    "production": {
      "android": {
        "serviceAccountKeyPath": "./service-account.json",
        "track": "internal"
      }
    }
  }
}
```

### Profiles

- **development**: Para desarrollo con dev client
- **preview**: Para testing interno (APK)
- **production**: Para Play Store/App Store

## EAS CLI

### Instalación

```bash
npm install -g eas-cli
eas login
```

### Configurar Proyecto

```bash
cd packages/react-native
eas init
# Conecta con projectId existente o crea nuevo
```

## Builds

### Android Production

```bash
eas build --platform android --profile production
```

### iOS Production

```bash
eas build --platform ios --profile production
```

### Preview/Testing

```bash
eas build --platform android --profile preview
```

## OTA Updates

### Publicar Update

```bash
eas update --branch production --message "Fix de bug X"
```

### Ventajas

- No requiere review de tienda
- Deploy instantáneo
- Solo JavaScript/assets (no código nativo)

### Limitaciones

- Solo funciona si no cambió código nativo
- Requiere versión compatible de la app instalada

Ver [Deployment](./deployment.md)
