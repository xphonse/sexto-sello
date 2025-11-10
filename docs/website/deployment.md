# Despliegue del Sitio Web

## Proceso de Build

```bash
# 1. Compilar datos compartidos
nx build data

# 2. Build del sitio Next.js
nx build nestjs

# Output en: packages/nestjs/out/
```

## Configuración para Export Estático

**next.config.mjs**:
```javascript
const nextConfig = {
  output: 'export',  // Static export
  images: {
    loader: 'custom',
    loaderFile: './imgLoader.js',
  },
}
```

## Opciones de Hosting

### 1. Vercel (Recomendado)

**Setup**:
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd packages/nestjs
vercel --prod
```

**Ventajas**:
- Zero-config para Next.js
- CDN global automático
- HTTPS automático
- Preview deploys para PRs

### 2. Netlify

**Setup**:
```bash
# Build settings en netlify.toml
[build]
  command = "nx build data && nx build nestjs"
  publish = "packages/nestjs/out"
```

**Deploy**:
- Conectar repositorio de GitHub
- Netlify auto-deploya en push a main

### 3. GitHub Pages

**Setup**:
```bash
# En package.json
"scripts": {
  "deploy": "nx build data && nx build nestjs && gh-pages -d packages/nestjs/out"
}

# Configurar base path en next.config.mjs
basePath: '/repo-name'
```

### 4. Servidor Estático Custom

```bash
# Cualquier servidor HTTP
# Nginx, Apache, etc.

# Copiar archivos de out/
scp -r packages/nestjs/out/* user@server:/var/www/html/
```

## Dominio Custom

Para **sextosello.com**:

### DNS Configuration

```
Type    Name    Value
A       @       76.76.21.21   # Vercel IP
CNAME   www     cname.vercel-dns.com
```

### Vercel Domain Setup

1. Dashboard → Project → Settings → Domains
2. Add Domain: `sextosello.com`
3. Add Domain: `www.sextosello.com`
4. Vercel provee SSL automático

## CI/CD Pipeline

### GitHub Actions Example

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18.20.4'
      
      - run: npm install
      - run: npx nx build data
      - run: npx nx build nestjs
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## Optimizaciones de Producción

### Compresión

```nginx
# Nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript;
gzip_min_length 1000;
```

### Cache Headers

```nginx
# Static assets
location /_next/static/ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# HTML
location / {
    expires 1h;
    add_header Cache-Control "public, must-revalidate";
}
```

## Monitoreo

- **Uptime**: UptimeRobot, Pingdom
- **Analytics**: Google Analytics, Plausible
- **Performance**: Vercel Analytics, Lighthouse CI

## Actualización de Contenido

Para agregar/modificar contenido:

```bash
# 1. Editar libs/data/choirs.ts o prayers.ts
# 2. Build y deploy
nx build data
nx build nestjs
vercel --prod
```

**Tiempo total**: ~2-5 minutos

---

Ver también: [Architecture](./architecture.md) | [Troubleshooting](../TROUBLESHOOTING.md)
